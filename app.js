/**
 * DestrinchaTech — Main Application Logic
 * Mapeamento personalizado de Tempo de Aprendizado -> Tempo de Fala:
 * 10m -> 5min | 15m -> 8min | 30m -> 15min | 1h -> 20min | 2h -> 22min | 3h -> 28min | 4h -> 32min | 5h -> 36min
 */

const TIME_OPTIONS = [
  { id: "10m", learnMinutes: 10, learnLabel: "10 min", speakMinutes: 5, speakLabel: "5 min" },
  { id: "15m", learnMinutes: 15, learnLabel: "15 min", speakMinutes: 8, speakLabel: "8 min" },
  { id: "30m", learnMinutes: 30, learnLabel: "30 min", speakMinutes: 15, speakLabel: "15 min" },
  { id: "1h", learnMinutes: 60, learnLabel: "1h", speakMinutes: 20, speakLabel: "20 min" },
  { id: "2h", learnMinutes: 120, learnLabel: "2h", speakMinutes: 22, speakLabel: "22 min" },
  { id: "3h", learnMinutes: 180, learnLabel: "3h", speakMinutes: 28, speakLabel: "28 min" },
  { id: "4h", learnMinutes: 240, learnLabel: "4h", speakMinutes: 32, speakLabel: "32 min" },
  { id: "5h", learnMinutes: 300, learnLabel: "5h", speakMinutes: 36, speakLabel: "36 min" }
];

const RING_CIRCUMFERENCE = 2 * Math.PI * 54; // r = 54 => ~339.292
const STORAGE_KEY = "techstudy_sprint_history_v1";

// Application State
const state = {
  selectedCategory: "todas",
  currentTopic: null,
  selectedTimeOption: TIME_OPTIONS[2], // Default: 30 min -> 15 min speak
  soundEnabled: true,

  learnTimer: {
    totalSeconds: 30 * 60,
    remainingSeconds: 30 * 60,
    isRunning: false,
    intervalId: null
  },

  speakTimer: {
    totalSeconds: 15 * 60,
    remainingSeconds: 15 * 60,
    isRunning: false,
    intervalId: null
  }
};

// DOM Elements
const els = {
  categoryPills: document.getElementById("categoryPills"),
  generateTopicBtn: document.getElementById("generateTopicBtn"),
  generateBtnText: document.getElementById("generateBtnText"),
  regenerateBtn: document.getElementById("regenerateBtn"),
  studyWorkspace: document.getElementById("studyWorkspace"),

  topicCategoryBadge: document.getElementById("topicCategoryBadge"),
  topicLevelBadge: document.getElementById("topicLevelBadge"),
  topicTitle: document.getElementById("topicTitle"),
  topicDescription: document.getElementById("topicDescription"),
  topicKeyPoints: document.getElementById("topicKeyPoints"),

  durationGrid: document.getElementById("durationGrid"),
  summaryLearnTime: document.getElementById("summaryLearnTime"),
  summarySpeakTime: document.getElementById("summarySpeakTime"),

  // Learn Timer Elements
  learnTimerCard: document.getElementById("learnTimerCard"),
  learnStatusTag: document.getElementById("learnStatusTag"),
  learnRingProgress: document.getElementById("learnRingProgress"),
  learnTimerDisplay: document.getElementById("learnTimerDisplay"),
  learnTotalLabel: document.getElementById("learnTotalLabel"),
  learnStartPauseBtn: document.getElementById("learnStartPauseBtn"),
  learnResetBtn: document.getElementById("learnResetBtn"),
  skipToSpeakBtn: document.getElementById("skipToSpeakBtn"),

  // Speak Timer Elements
  speakTimerCard: document.getElementById("speakTimerCard"),
  speakStatusTag: document.getElementById("speakStatusTag"),
  speakRingProgress: document.getElementById("speakRingProgress"),
  speakTimerDisplay: document.getElementById("speakTimerDisplay"),
  speakTotalLabel: document.getElementById("speakTotalLabel"),
  speakStartPauseBtn: document.getElementById("speakStartPauseBtn"),
  speakResetBtn: document.getElementById("speakResetBtn"),
  finishSessionBtn: document.getElementById("finishSessionBtn"),

  // Header & History Elements
  soundToggleBtn: document.getElementById("soundToggleBtn"),
  soundIcon: document.getElementById("soundIcon"),
  soundLabel: document.getElementById("soundLabel"),
  historyScrollBtn: document.getElementById("historyScrollBtn"),
  historyCountBadge: document.getElementById("historyCountBadge"),
  historySection: document.getElementById("historySection"),
  historyEmptyState: document.getElementById("historyEmptyState"),
  historyList: document.getElementById("historyList"),
  clearHistoryBtn: document.getElementById("clearHistoryBtn"),

  // Modal & Toast
  alertModal: document.getElementById("alertModal"),
  modalIcon: document.getElementById("modalIcon"),
  modalTitle: document.getElementById("modalTitle"),
  modalMessage: document.getElementById("modalMessage"),
  modalPrimaryBtn: document.getElementById("modalPrimaryBtn"),
  modalCloseBtn: document.getElementById("modalCloseBtn"),
  toast: document.getElementById("toast")
};

// Web Audio API Synthesizer for pleasant completion chimes (no external audio files needed)
function playAlertChime(type = "learn") {
  if (!state.soundEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioCtx();
    const notes = type === "learn" ? [523.25, 659.25, 783.99, 1046.5] : [587.33, 739.99, 880, 1174.66];

    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.14);

      gain.gain.setValueAtTime(0.001, ctx.currentTime + idx * 0.14);
      gain.gain.exponentialRampToValueAtTime(0.22, ctx.currentTime + idx * 0.14 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.14 + 0.45);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(ctx.currentTime + idx * 0.14);
      osc.stop(ctx.currentTime + idx * 0.14 + 0.48);
    });
  } catch (e) {
    // Ignore audio context restrictions if browser blocks autoplay
  }
}

// Format seconds into HH:MM:SS or MM:SS
function formatSeconds(totalSeconds) {
  const hrs = Math.floor(totalSeconds / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const pad = (n) => String(n).padStart(2, "0");
  if (hrs > 0) {
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  }
  return `${pad(mins)}:${pad(secs)}`;
}

// Render Category Pills
function renderCategories() {
  const categories = [
    { key: "todas", label: "Todas as áreas", icon: "🎲" },
    ...Object.entries(TECH_TOPICS).map(([key, val]) => ({
      key,
      label: val.label,
      icon: val.icon
    }))
  ];

  els.categoryPills.innerHTML = "";
  categories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `category-pill ${state.selectedCategory === cat.key ? "active" : ""}`;
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", state.selectedCategory === cat.key ? "true" : "false");
    btn.innerHTML = `<span>${cat.icon}</span> <span>${cat.label}</span>`;

    btn.addEventListener("click", () => {
      state.selectedCategory = cat.key;
      renderCategories();
    });

    els.categoryPills.appendChild(btn);
  });
}

// Render Duration Grid (10m, 15m, 30m, 1h, 2h, 3h, 4h, 5h)
function renderDurationOptions() {
  els.durationGrid.innerHTML = "";

  TIME_OPTIONS.forEach((opt) => {
    const isActive = state.selectedTimeOption.id === opt.id;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `duration-option ${isActive ? "active" : ""}`;
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", isActive ? "true" : "false");
    btn.innerHTML = `
      <span class="duration-learn-label">${opt.learnLabel}</span>
      <span class="duration-speak-preview">🗣️ ${opt.speakLabel} fala</span>
    `;

    btn.addEventListener("click", () => {
      selectTimeOption(opt);
    });

    els.durationGrid.appendChild(btn);
  });
}

// Update selected time option and sync both timers
function selectTimeOption(option) {
  state.selectedTimeOption = option;
  renderDurationOptions();

  // Update summary banner
  els.summaryLearnTime.textContent = option.learnLabel;
  els.summarySpeakTime.textContent = `${option.speakLabel} (sugerido)`;

  // Stop and reset both timers to the new duration
  stopLearnTimer();
  stopSpeakTimer();

  state.learnTimer.totalSeconds = option.learnMinutes * 60;
  state.learnTimer.remainingSeconds = option.learnMinutes * 60;

  state.speakTimer.totalSeconds = option.speakMinutes * 60;
  state.speakTimer.remainingSeconds = option.speakMinutes * 60;

  els.learnTotalLabel.textContent = `Meta: ${option.learnLabel} de estudo`;
  els.speakTotalLabel.textContent = `Sugestão: até ${option.speakLabel} de fala`;

  updateLearnTimerUI();
  updateSpeakTimerUI();
}

// Pick a random topic from the selected category (avoiding immediate repeat)
function generateTopic() {
  let pool = [];

  if (state.selectedCategory === "todas") {
    Object.entries(TECH_TOPICS).forEach(([catKey, catData]) => {
      catData.topics.forEach((t) => {
        pool.push({ ...t, categoryKey: catKey, categoryLabel: catData.label, categoryIcon: catData.icon });
      });
    });
  } else {
    const catData = TECH_TOPICS[state.selectedCategory];
    pool = catData.topics.map((t) => ({
      ...t,
      categoryKey: state.selectedCategory,
      categoryLabel: catData.label,
      categoryIcon: catData.icon
    }));
  }

  if (pool.length > 1 && state.currentTopic) {
    pool = pool.filter((item) => item.title !== state.currentTopic.title);
  }

  const chosen = pool[Math.floor(Math.random() * pool.length)];
  state.currentTopic = chosen;

  // Populate UI
  els.topicCategoryBadge.textContent = `${chosen.categoryIcon} ${chosen.categoryLabel}`;
  els.topicLevelBadge.textContent = `Nível: ${chosen.level}`;
  els.topicTitle.textContent = chosen.title;
  els.topicDescription.textContent = chosen.description;

  els.topicKeyPoints.innerHTML = "";
  chosen.keyPoints.forEach((pt) => {
    const li = document.createElement("li");
    li.textContent = pt;
    els.topicKeyPoints.appendChild(li);
  });

  // Reveal workspace if hidden
  const wasHidden = els.studyWorkspace.classList.contains("hidden");
  els.studyWorkspace.classList.remove("hidden");
  els.generateBtnText.textContent = "Sortear novo assunto";

  // Reset timers for the newly generated topic
  selectTimeOption(state.selectedTimeOption);

  // Set visual focus on Learn Timer Card
  els.learnTimerCard.classList.add("active-focus");
  els.speakTimerCard.classList.remove("active-focus");

  if (wasHidden) {
    els.studyWorkspace.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    showToast(`Novo assunto gerado em ${chosen.categoryLabel}!`);
  }
}

/* ==========================================
   LEARN TIMER LOGIC
   ========================================== */
function updateLearnTimerUI() {
  els.learnTimerDisplay.textContent = formatSeconds(state.learnTimer.remainingSeconds);

  const ratio = state.learnTimer.remainingSeconds / state.learnTimer.totalSeconds;
  const offset = RING_CIRCUMFERENCE * (1 - ratio);
  els.learnRingProgress.style.strokeDashoffset = offset;

  if (state.learnTimer.isRunning) {
    els.learnStartPauseBtn.innerHTML = `<span>⏸</span> Pausar estudo`;
    els.learnStatusTag.textContent = "Estudando...";
    els.learnStatusTag.classList.add("running");
  } else if (state.learnTimer.remainingSeconds === 0) {
    els.learnStartPauseBtn.innerHTML = `<span>✔</span> Concluído`;
    els.learnStatusTag.textContent = "Finalizado";
    els.learnStatusTag.classList.remove("running");
  } else if (state.learnTimer.remainingSeconds < state.learnTimer.totalSeconds) {
    els.learnStartPauseBtn.innerHTML = `<span>▶</span> Retomar estudo`;
    els.learnStatusTag.textContent = "Pausado";
    els.learnStatusTag.classList.remove("running");
  } else {
    els.learnStartPauseBtn.innerHTML = `<span>▶</span> Iniciar estudo`;
    els.learnStatusTag.textContent = "Pronto";
    els.learnStatusTag.classList.remove("running");
  }

  updateDocumentTitle();
}

function toggleLearnTimer() {
  if (state.learnTimer.remainingSeconds === 0) {
    resetLearnTimer();
    return;
  }

  if (state.learnTimer.isRunning) {
    stopLearnTimer();
  } else {
    // Pause speak timer if it happens to be running
    if (state.speakTimer.isRunning) stopSpeakTimer();

    els.learnTimerCard.classList.add("active-focus");
    els.speakTimerCard.classList.remove("active-focus");

    state.learnTimer.isRunning = true;
    state.learnTimer.intervalId = setInterval(() => {
      if (state.learnTimer.remainingSeconds > 0) {
        state.learnTimer.remainingSeconds -= 1;
        updateLearnTimerUI();
      } else {
        onLearnTimerFinished();
      }
    }, 1000);
  }
  updateLearnTimerUI();
}

function stopLearnTimer() {
  state.learnTimer.isRunning = false;
  if (state.learnTimer.intervalId) {
    clearInterval(state.learnTimer.intervalId);
    state.learnTimer.intervalId = null;
  }
  updateLearnTimerUI();
}

function resetLearnTimer() {
  stopLearnTimer();
  state.learnTimer.remainingSeconds = state.learnTimer.totalSeconds;
  updateLearnTimerUI();
}

function onLearnTimerFinished() {
  stopLearnTimer();
  playAlertChime("learn");

  els.learnTimerCard.classList.remove("active-focus");
  els.speakTimerCard.classList.add("active-focus");

  openModal({
    icon: "🎯",
    title: "Tempo de estudo finalizado!",
    message: `Você concluiu os ${state.selectedTimeOption.learnLabel} de estudo sobre "${state.currentTopic.title}". Agora é hora de consolidar explicando o assunto com suas próprias palavras (sugestão: até ${state.selectedTimeOption.speakLabel}). Lembre-se: você não precisa usar o tempo todo!`,
    primaryText: "🗣️ Iniciar timer de fala agora",
    onPrimary: () => {
      closeModal();
      els.speakTimerCard.scrollIntoView({ behavior: "smooth", block: "center" });
      toggleSpeakTimer();
    }
  });
}

/* ==========================================
   SPEAK TIMER LOGIC
   ========================================== */
function updateSpeakTimerUI() {
  els.speakTimerDisplay.textContent = formatSeconds(state.speakTimer.remainingSeconds);

  const ratio = state.speakTimer.remainingSeconds / state.speakTimer.totalSeconds;
  const offset = RING_CIRCUMFERENCE * (1 - ratio);
  els.speakRingProgress.style.strokeDashoffset = offset;

  if (state.speakTimer.isRunning) {
    els.speakStartPauseBtn.innerHTML = `<span>⏸</span> Pausar fala`;
    els.speakStatusTag.textContent = "Explicando...";
    els.speakStatusTag.classList.add("running");
  } else if (state.speakTimer.remainingSeconds === 0) {
    els.speakStartPauseBtn.innerHTML = `<span>✔</span> Tempo esgotado`;
    els.speakStatusTag.textContent = "Finalizado";
    els.speakStatusTag.classList.remove("running");
  } else if (state.speakTimer.remainingSeconds < state.speakTimer.totalSeconds) {
    els.speakStartPauseBtn.innerHTML = `<span>▶</span> Retomar fala`;
    els.speakStatusTag.textContent = "Pausado";
    els.speakStatusTag.classList.remove("running");
  } else {
    els.speakStartPauseBtn.innerHTML = `<span>▶</span> Iniciar fala`;
    els.speakStatusTag.textContent = "Aguardando";
    els.speakStatusTag.classList.remove("running");
  }

  updateDocumentTitle();
}

function toggleSpeakTimer() {
  if (state.speakTimer.remainingSeconds === 0) {
    resetSpeakTimer();
    return;
  }

  if (state.speakTimer.isRunning) {
    stopSpeakTimer();
  } else {
    if (state.learnTimer.isRunning) stopLearnTimer();

    els.speakTimerCard.classList.add("active-focus");
    els.learnTimerCard.classList.remove("active-focus");

    state.speakTimer.isRunning = true;
    state.speakTimer.intervalId = setInterval(() => {
      if (state.speakTimer.remainingSeconds > 0) {
        state.speakTimer.remainingSeconds -= 1;
        updateSpeakTimerUI();
      } else {
        onSpeakTimerFinished();
      }
    }, 1000);
  }
  updateSpeakTimerUI();
}

function stopSpeakTimer() {
  state.speakTimer.isRunning = false;
  if (state.speakTimer.intervalId) {
    clearInterval(state.speakTimer.intervalId);
    state.speakTimer.intervalId = null;
  }
  updateSpeakTimerUI();
}

function resetSpeakTimer() {
  stopSpeakTimer();
  state.speakTimer.remainingSeconds = state.speakTimer.totalSeconds;
  updateSpeakTimerUI();
}

function onSpeakTimerFinished() {
  stopSpeakTimer();
  playAlertChime("speak");

  openModal({
    icon: "🏆",
    title: "Sessão completa!",
    message: `Parabéns! O tempo sugerido de fala (${state.selectedTimeOption.speakLabel}) chegou ao fim. Deseja registrar "${state.currentTopic.title}" no seu histórico de estudos concluídos?`,
    primaryText: "✅ Salvar no histórico",
    onPrimary: () => {
      closeModal();
      completeAndSaveSession();
    }
  });
}

// Update Browser Tab Title with live countdown when running
function updateDocumentTitle() {
  if (state.learnTimer.isRunning) {
    document.title = `📖 ${formatSeconds(state.learnTimer.remainingSeconds)} — Estudando | DestrinchaTech`;
  } else if (state.speakTimer.isRunning) {
    document.title = `🗣️ ${formatSeconds(state.speakTimer.remainingSeconds)} — Explicando | DestrinchaTech`;
  } else {
    document.title = "DestrinchaTech — Aprenda e explique tecnologia";
  }
}

/* ==========================================
   SESSION COMPLETION & LOCALSTORAGE HISTORY
   ========================================== */
function getHistory() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveHistory(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    // Ignore storage quota errors
  }
}

function completeAndSaveSession() {
  if (!state.currentTopic) return;

  stopLearnTimer();
  stopSpeakTimer();

  const spokenSeconds = state.speakTimer.totalSeconds - state.speakTimer.remainingSeconds;
  const spokenMinsFormatted =
    spokenSeconds > 0
      ? `${Math.max(1, Math.round(spokenSeconds / 60))} min utilizados (de ${state.selectedTimeOption.speakLabel})`
      : `Concluído livremente (sugestão: ${state.selectedTimeOption.speakLabel})`;

  const entry = {
    id: Date.now(),
    title: state.currentTopic.title,
    categoryLabel: state.currentTopic.categoryLabel,
    categoryIcon: state.currentTopic.categoryIcon,
    learnLabel: state.selectedTimeOption.learnLabel,
    speakSummary: spokenMinsFormatted,
    completedAt: new Date().toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    })
  };

  const history = getHistory();
  history.unshift(entry);
  saveHistory(history);
  renderHistory();

  resetLearnTimer();
  resetSpeakTimer();

  showToast("🎉 Sessão salva no seu histórico de estudos!");
}

function renderHistory() {
  const history = getHistory();
  els.historyCountBadge.textContent = history.length;

  if (history.length === 0) {
    els.historyEmptyState.classList.remove("hidden");
    els.historyList.classList.add("hidden");
    els.clearHistoryBtn.classList.add("hidden");
    return;
  }

  els.historyEmptyState.classList.add("hidden");
  els.historyList.classList.remove("hidden");
  els.clearHistoryBtn.classList.remove("hidden");

  els.historyList.innerHTML = "";
  history.forEach((item) => {
    const row = document.createElement("div");
    row.className = "history-item";
    row.innerHTML = `
      <div class="history-item-info">
        <span class="history-item-title">${item.categoryIcon} ${item.title}</span>
        <div class="history-item-meta">
          <span>🏷️ ${item.categoryLabel}</span>
          <span>📖 Estudo: ${item.learnLabel}</span>
          <span>🗣️ Fala: ${item.speakSummary}</span>
        </div>
      </div>
      <div class="badge badge-level">${item.completedAt}</div>
    `;
    els.historyList.appendChild(row);
  });
}

/* ==========================================
   MODAL & TOAST HELPERS
   ========================================== */
let currentModalPrimaryHandler = null;

function openModal({ icon, title, message, primaryText, onPrimary }) {
  els.modalIcon.textContent = icon;
  els.modalTitle.textContent = title;
  els.modalMessage.textContent = message;
  els.modalPrimaryBtn.textContent = primaryText;
  currentModalPrimaryHandler = onPrimary;
  els.alertModal.classList.remove("hidden");
}

function closeModal() {
  els.alertModal.classList.add("hidden");
  currentModalPrimaryHandler = null;
}

let toastTimeout = null;
function showToast(text) {
  els.toast.textContent = text;
  els.toast.classList.remove("hidden");
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    els.toast.classList.add("hidden");
  }, 3400);
}

/* ==========================================
   INITIALIZATION & EVENT LISTENERS
   ========================================== */
function init() {
  renderCategories();
  renderDurationOptions();
  renderHistory();

  // Initialize SVG ring stroke-dasharray
  els.learnRingProgress.style.strokeDasharray = RING_CIRCUMFERENCE;
  els.speakRingProgress.style.strokeDasharray = RING_CIRCUMFERENCE;

  // Event Listeners
  els.generateTopicBtn.addEventListener("click", generateTopic);
  els.regenerateBtn.addEventListener("click", generateTopic);

  els.learnStartPauseBtn.addEventListener("click", toggleLearnTimer);
  els.learnResetBtn.addEventListener("click", resetLearnTimer);

  els.skipToSpeakBtn.addEventListener("click", () => {
    stopLearnTimer();
    els.learnTimerCard.classList.remove("active-focus");
    els.speakTimerCard.classList.add("active-focus");
    els.speakTimerCard.scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("Você pode iniciar o timer de fala quando estiver pronto!");
  });

  els.speakStartPauseBtn.addEventListener("click", toggleSpeakTimer);
  els.speakResetBtn.addEventListener("click", resetSpeakTimer);
  els.finishSessionBtn.addEventListener("click", completeAndSaveSession);

  // Sound toggle
  els.soundToggleBtn.addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    els.soundIcon.textContent = state.soundEnabled ? "🔔" : "🔕";
    els.soundLabel.textContent = state.soundEnabled ? "Som ativo" : "Sem som";
    showToast(state.soundEnabled ? "🔔 Alerta sonoro ativado" : "🔕 Alerta sonoro silenciado");
  });

  // Scroll to history
  els.historyScrollBtn.addEventListener("click", () => {
    els.historySection.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // Clear history
  els.clearHistoryBtn.addEventListener("click", () => {
    saveHistory([]);
    renderHistory();
    showToast("Histórico de estudos limpo.");
  });

  // Modal buttons
  els.modalPrimaryBtn.addEventListener("click", () => {
    if (typeof currentModalPrimaryHandler === "function") {
      currentModalPrimaryHandler();
    } else {
      closeModal();
    }
  });
  els.modalCloseBtn.addEventListener("click", closeModal);
}

document.addEventListener("DOMContentLoaded", init);
