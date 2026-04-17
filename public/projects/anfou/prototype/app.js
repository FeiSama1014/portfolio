// ========== APP LOGIC ==========

// --- Navigation ---
let currentPage = 'page-splash';
const pageHistory = ['page-splash'];

function navigateTo(pageId) {
  if (pageId === currentPage) return;

  const oldPage = document.getElementById(currentPage);
  const newPage = document.getElementById(pageId);
  if (!oldPage || !newPage) return;

  // Animate
  oldPage.classList.remove('active', 'slide-in');
  oldPage.classList.add('slide-out');

  newPage.classList.remove('slide-out');
  newPage.classList.add('active', 'slide-in');

  setTimeout(() => {
    oldPage.classList.remove('slide-out');
    oldPage.classList.remove('active');
  }, 350);

  currentPage = pageId;
  pageHistory.push(pageId);

  // Update bottom nav active states
  updateNavState(pageId);

  // Update date on home page
  if (pageId === 'page-home') updateHomeDate();

  // Generate calendar on history page
  if (pageId === 'page-history') generateCalendar();
}

function updateNavState(pageId) {
  // Pages that have bottom nav
  const navPages = ['page-home', 'page-alarm', 'page-contacts', 'page-history'];
  if (!navPages.includes(pageId)) return;

  document.querySelectorAll('.bottom-nav').forEach(nav => {
    nav.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
      const target = item.getAttribute('onclick');
      if (target && target.includes(pageId)) {
        item.classList.add('active');
      }
    });
  });
}

// --- Login Tabs ---
function switchLoginTab(tab) {
  const loginForm = document.getElementById('login-form');
  const registerForm = document.getElementById('register-form');
  const tabs = document.querySelectorAll('.login-tabs .tab-btn');

  if (tab === 'login') {
    loginForm.classList.remove('hidden');
    registerForm.classList.add('hidden');
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
  } else {
    loginForm.classList.add('hidden');
    registerForm.classList.remove('hidden');
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
  }
}

// --- Home Page ---
function updateHomeDate() {
  const dateEl = document.getElementById('home-date');
  const now = new Date();
  const options = currentLang === 'zh'
    ? { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' }
    : { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  dateEl.textContent = now.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US', options);
}

// --- Check-in ---
let checkedIn = false;

function doCheckin() {
  const ring = document.getElementById('checkin-ring');
  const btn = document.getElementById('checkin-btn');
  const status = document.getElementById('checkin-status');
  const moodSection = document.getElementById('mood-section');
  if (!ring || !btn || !status) return;

  // Press animation
  btn.style.transform = 'scale(0.85)';
  setTimeout(() => {
    btn.style.transform = '';

    if (!checkedIn) {
      // --- Check in ---
      checkedIn = true;
      ring.classList.add('checked');
      btn.querySelector('.checkin-icon').textContent = 'check_circle';
      const textEl = btn.querySelector('.checkin-text');
      textEl.textContent = I18N[currentLang].home_checked;
      textEl.setAttribute('data-i18n', 'home_checked');
      status.textContent = I18N[currentLang].home_checked_hint;
      status.setAttribute('data-i18n', 'home_checked_hint');
      moodSection.classList.remove('hidden');
      showToast(I18N[currentLang].toast_checkin_success);
    } else {
      // --- Undo check-in ---
      checkedIn = false;
      ring.classList.remove('checked');
      btn.querySelector('.checkin-icon').textContent = 'touch_app';
      const textEl = btn.querySelector('.checkin-text');
      textEl.textContent = I18N[currentLang].home_checkin;
      textEl.setAttribute('data-i18n', 'home_checkin');
      status.textContent = I18N[currentLang].home_checkin_hint;
      status.setAttribute('data-i18n', 'home_checkin_hint');
      moodSection.classList.add('hidden');
      document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
      showToast(currentLang === 'zh' ? '已取消报平安' : 'Check-in cancelled');
    }

    // Pulse feedback
    ring.style.transform = 'scale(1.06)';
    setTimeout(() => { ring.style.transform = ''; }, 200);
  }, 150);
}

// --- Mood ---
function selectMood(el, mood) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  el.classList.add('selected');
  showToast(I18N[currentLang].toast_mood_selected + ' ' + mood);
}

// --- Alarm ---
function toggleAlarm(checkbox) {
  // Visual feedback only
}

function simulateAlarm() {
  const overlay = document.getElementById('alarm-overlay');
  overlay.classList.remove('hidden');
}

function dismissAlarm() {
  const overlay = document.getElementById('alarm-overlay');
  overlay.classList.add('hidden');

  // Also trigger check-in
  if (!checkedIn) doCheckin();

  showToast(I18N[currentLang].toast_checkin_success);
}

// --- Contacts Tabs ---
function switchContactsTab(tab) {
  const caring = document.getElementById('contacts-caring');
  const cared = document.getElementById('contacts-cared');
  const tabs = document.querySelectorAll('.contacts-tabs .tab-btn');

  if (tab === 'caring') {
    caring.classList.remove('hidden');
    cared.classList.add('hidden');
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
  } else {
    caring.classList.add('hidden');
    cared.classList.remove('hidden');
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
  }
}

// --- Calendar ---
let calendarDate = new Date();

function generateCalendar() {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const today = new Date();

  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay() - 1; // Monday = 0
  if (startDay < 0) startDay = 6;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Simulated check-in data (past 15 days checked)
  const checkedDays = new Set();
  for (let i = 0; i < 15; i++) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    if (d.getMonth() === month && d.getFullYear() === year) {
      checkedDays.add(d.getDate());
    }
  }

  // Empty cells for offset
  for (let i = 0; i < startDay; i++) {
    const empty = document.createElement('div');
    empty.className = 'cal-day empty';
    grid.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const el = document.createElement('div');
    el.className = 'cal-day';
    el.textContent = day;

    const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();
    const isFuture = new Date(year, month, day) > today;

    if (isToday) {
      el.classList.add('today');
      if (checkedIn) el.classList.add('checked');
    } else if (isFuture) {
      el.classList.add('future');
    } else if (checkedDays.has(day)) {
      el.classList.add('checked');
    } else {
      el.classList.add('missed');
    }

    grid.appendChild(el);
  }

  updateCalendarMonthLabel();
}

function updateCalendarMonthLabel() {
  const label = document.getElementById('calendar-month');
  if (!label) return;
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  if (currentLang === 'zh') {
    label.textContent = `${year}年${month + 1}月`;
  } else {
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'];
    label.textContent = `${months[month]} ${year}`;
  }
}

function changeMonth(delta) {
  calendarDate.setMonth(calendarDate.getMonth() + delta);
  generateCalendar();
}

// --- Language ---
function showLanguageModal() {
  document.getElementById('language-modal').classList.remove('hidden');
}

function hideLanguageModal() {
  document.getElementById('language-modal').classList.add('hidden');
}

function setLanguage(lang) {
  applyLanguage(lang);

  // Update active state in modal
  document.querySelectorAll('.language-option').forEach(opt => {
    opt.classList.remove('active');
  });
  event.currentTarget.classList.add('active');

  hideLanguageModal();
}

// --- Add Contact ---
function switchAddContactTab(tab) {
  const manual = document.getElementById('add-manual');
  const phonebook = document.getElementById('add-phonebook');
  const page = document.getElementById('page-add-contact');
  const tabs = page.querySelectorAll('.contacts-tabs .tab-btn');

  if (tab === 'manual') {
    manual.classList.remove('hidden');
    phonebook.classList.add('hidden');
    tabs[0].classList.add('active');
    tabs[1].classList.remove('active');
  } else {
    manual.classList.add('hidden');
    phonebook.classList.remove('hidden');
    tabs[0].classList.remove('active');
    tabs[1].classList.add('active');
  }
}

function toggleCountryDropdown() {
  document.getElementById('country-dropdown').classList.toggle('hidden');
}

function selectCountry(flag, code, name) {
  document.getElementById('selected-country-flag').textContent = flag;
  document.getElementById('selected-country-code').textContent = code;
  document.getElementById('country-dropdown').classList.add('hidden');
}

function sendConnectRequest() {
  showToast(currentLang === 'zh' ? '连接请求已通过SMS发送！' : 'Connection request sent via SMS!');
}

function inviteContact(btn) {
  btn.classList.add('invited');
  btn.disabled = true;
  btn.textContent = I18N[currentLang].add_btn_invited;
  showToast(currentLang === 'zh' ? '邀请已发送' : 'Invite sent');
}

// --- Notification Toggle ---
function toggleNotify(checkbox) {
  const on = checkbox.checked;
  showToast(on
    ? (currentLang === 'zh' ? '已开启状态更新通知' : 'Status notifications enabled')
    : (currentLang === 'zh' ? '已关闭状态更新通知' : 'Status notifications disabled'));
}

// --- Large Font ---
let largeFontOn = false;

function toggleLargeFont() {
  largeFontOn = !largeFontOn;
  applyLargeFont();
  showToast(largeFontOn
    ? (currentLang === 'zh' ? '已开启大号字体' : 'Large font enabled')
    : (currentLang === 'zh' ? '已关闭大号字体' : 'Large font disabled'));
}

function applyLargeFont() {
  document.querySelector('.phone-screen').classList.toggle('large-font', largeFontOn);
  const a11yBtn = document.getElementById('a11y-btn-home');
  if (a11yBtn) a11yBtn.classList.toggle('active', largeFontOn);
  const settingsToggle = document.getElementById('settings-largefont-toggle');
  if (settingsToggle) settingsToggle.checked = largeFontOn;
}

// --- Theme / Dark Mode ---
let themeMode = 'system'; // 'system' | 'light' | 'dark'

function showThemeModal() {
  document.getElementById('theme-modal').classList.remove('hidden');
}
function hideThemeModal() {
  document.getElementById('theme-modal').classList.add('hidden');
}

function setTheme(mode) {
  themeMode = mode;

  // Update modal active state
  document.querySelectorAll('#theme-modal .language-option').forEach(o => o.classList.remove('active'));
  document.getElementById('theme-opt-' + mode).classList.add('active');

  // Update settings label
  const labelKey = 'theme_' + mode;
  document.getElementById('current-theme-label').textContent = I18N[currentLang][labelKey];
  document.getElementById('current-theme-label').setAttribute('data-i18n', labelKey);

  applyTheme();
  hideThemeModal();
}

function applyTheme() {
  const screen = document.querySelector('.phone-screen');
  let dark = false;
  if (themeMode === 'dark') {
    dark = true;
  } else if (themeMode === 'system') {
    dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  screen.classList.toggle('dark-mode', dark);
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  if (themeMode === 'system') applyTheme();
});

// --- Toast ---
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  const text = document.getElementById('toast-text');
  text.textContent = message;
  toast.classList.remove('hidden');

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 2500);
}

// --- Init ---
document.addEventListener('DOMContentLoaded', () => {
  updateHomeDate();
  applyLanguage('en');
  applyTheme();
});
