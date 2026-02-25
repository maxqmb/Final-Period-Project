<!-- src/components/ThemeToggle.vue -->
<template>
  <button
    class="theme-toggle"
    :class="{ 'is-dark': isDark }"
    @click="toggle"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    role="switch"
    :aria-pressed="isDark"
  >
    <div class="tt-track">

      <!-- Day scene -->
      <div class="tt-day" aria-hidden="true">
        <div class="tt-sun">
          <div class="sun-core"></div>
          <div class="sun-glow"></div>
          <div class="sun-rays">
            <span v-for="n in 8" :key="n" class="ray" :style="{ '--ri': n - 1 }"></span>
          </div>
        </div>
        <div class="tt-dunes">
          <svg viewBox="0 0 90 24" preserveAspectRatio="none">
            <path d="M0 24 Q12 8 24 16 Q36 22 50 12 Q62 4 74 14 Q82 20 90 16 L90 24Z" fill="rgba(180,90,20,0.6)"/>
            <path d="M0 24 Q18 16 36 20 Q54 24 72 18 Q82 15 90 18 L90 24Z" fill="rgba(150,65,10,0.75)"/>
          </svg>
        </div>
      </div>

      <!-- Night scene -->
      <div class="tt-night" aria-hidden="true">
        <div class="tt-stars">
          <span
            v-for="(s, i) in stars" :key="i"
            class="star"
            :style="{ left: s.x + '%', top: s.y + '%', width: s.size + 'px', height: s.size + 'px', animationDelay: s.delay + 's' }"
          ></span>
        </div>
        <div class="tt-moon">
          <div class="moon-body"></div>
          <div class="moon-glow"></div>
        </div>
        <div class="tt-mountains">
          <svg viewBox="0 0 90 24" preserveAspectRatio="none">
            <path d="M0 24 L16 10 L32 20 L44 6 L58 18 L70 10 L82 18 L90 8 L90 24Z" fill="rgba(20,12,50,0.85)"/>
            <path d="M0 24 L22 16 L44 22 L66 14 L90 20 L90 24Z" fill="rgba(12,8,35,0.9)"/>
          </svg>
        </div>
      </div>

      <!-- Thumb -->
      <div class="tt-thumb" aria-hidden="true">
        <!-- Sun icon (shown in light mode) -->
        <svg class="thumb-icon icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round">
          <circle cx="12" cy="12" r="4.5"/>
          <line x1="12" y1="2" x2="12" y2="4.5"/>
          <line x1="12" y1="19.5" x2="12" y2="22"/>
          <line x1="4.22" y1="4.22" x2="5.92" y2="5.92"/>
          <line x1="18.08" y1="18.08" x2="19.78" y2="19.78"/>
          <line x1="2" y1="12" x2="4.5" y2="12"/>
          <line x1="19.5" y1="12" x2="22" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.92" y2="18.08"/>
          <line x1="18.08" y1="5.92" x2="19.78" y2="4.22"/>
        </svg>
        <!-- Moon icon (shown in dark mode) -->
        <svg class="thumb-icon icon-moon" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
      </div>

      <!-- Shine overlay -->
      <div class="tt-shine" aria-hidden="true"></div>
    </div>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

const stars = Array.from({ length: 10 }, () => ({
  x:     Math.random() * 52 + 4,
  y:     Math.random() * 52 + 4,
  size:  0.7 + Math.random() * 1.2,
  delay: (Math.random() * 3).toFixed(2),
}))

function toggle() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
}

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  localStorage.setItem('mq-theme', dark ? 'dark' : 'light')
}

onMounted(() => {
  const saved = localStorage.getItem('mq-theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const useDark = saved === 'dark' || (!saved && prefersDark)
  isDark.value = useDark
  applyTheme(useDark)
})
</script>

<style scoped>
/* ══════════════════════════════════════════════
   TOGGLE — compact size
══════════════════════════════════════════════ */
.theme-toggle {
  --w: 56px;
  --h: 26px;
  --thumb: 20px;
  --pad: 3px;
  --spring: cubic-bezier(0.34, 1.56, 0.64, 1);

  position: relative;
  display: inline-flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  flex-shrink: 0;
  z-index: 2;
}

/* ── Track ── */
.tt-track {
  position: relative;
  width: var(--w);
  height: var(--h);
  border-radius: 999px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.1),
    0 2px 6px rgba(0,0,0,0.35),
    inset 0 1px 0 rgba(255,255,255,0.14);
  transition: box-shadow 0.3s ease;
}

.theme-toggle:hover .tt-track {
  box-shadow:
    0 0 0 1.5px rgba(201,168,76,0.5),
    0 3px 12px rgba(0,0,0,0.4),
    inset 0 1px 0 rgba(255,255,255,0.18),
    0 0 18px rgba(201,168,76,0.14);
}

/* ── Day ── */
.tt-day {
  position: absolute;
  inset: 0;
  background: linear-gradient(150deg, #f8d85a 0%, #f5a021 40%, #e8702a 75%, #c45010 100%);
  border-radius: 999px;
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.is-dark .tt-day {
  opacity: 0;
  transform: translateX(-6px);
}

/* Sun */
.tt-sun {
  position: absolute;
  top: 3px;
  right: 30px;
  width: 14px;
  height: 14px;
  transition: transform 0.5s var(--spring), opacity 0.35s ease;
}

.is-dark .tt-sun {
  transform: translateX(-4px) scale(0.5);
  opacity: 0;
}

.sun-core {
  position: absolute;
  inset: 3px;
  border-radius: 50%;
  background: radial-gradient(circle, #fff9e0 15%, #ffe044 55%, #ffa800 100%);
  box-shadow: 0 0 5px 2px rgba(255,190,20,0.8);
  animation: spin 9s linear infinite;
}

.sun-glow {
  position: absolute;
  inset: -3px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,210,50,0.45) 0%, transparent 70%);
  animation: sunPulse 2.2s ease-in-out infinite;
}

@keyframes spin      { to { transform: rotate(360deg); } }
@keyframes sunPulse  { 0%,100% { opacity:.7; transform:scale(1);    } 50% { opacity:1; transform:scale(1.18); } }

.sun-rays {
  position: absolute; inset: 0;
  animation: spin 9s linear infinite reverse;
}

.ray {
  position: absolute;
  top: 50%; left: 50%;
  width: 1.5px; height: 4px;
  background: linear-gradient(to top, rgba(255,190,20,0.85), transparent);
  border-radius: 1px;
  transform-origin: 50% 0;
  transform: translate(-50%, -100%) rotate(calc(var(--ri) * 45deg)) translateY(-5px);
}

/* Dunes */
.tt-dunes {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 50%;
}

.tt-dunes svg { width: 100%; height: 100%; }

/* ── Night ── */
.tt-night {
  position: absolute;
  inset: 0;
  background: linear-gradient(150deg, #08082a 0%, #0e0e42 30%, #160e48 65%, #0a0a30 100%);
  border-radius: 999px;
  opacity: 0;
  transform: translateX(6px);
  transition: opacity 0.45s ease, transform 0.45s ease;
}

.is-dark .tt-night {
  opacity: 1;
  transform: translateX(0);
}

/* Stars */
.tt-stars {
  position: absolute; inset: 0;
  border-radius: 999px; overflow: hidden;
}

.star {
  position: absolute;
  border-radius: 50%;
  background: #fff;
  opacity: 0;
  animation: twinkle 2.5s ease-in-out infinite;
}

.is-dark .star { opacity: 1; }
@keyframes twinkle { 0%,100% { opacity:.55; transform:scale(1); } 50% { opacity:1; transform:scale(1.5); } }

/* Moon */
.tt-moon {
  position: absolute;
  top: 4px;
  left: 30px;
  width: 12px;
  height: 12px;
  opacity: 0;
  transform: translateX(5px) scale(0.6) rotate(-20deg);
  transition: transform 0.5s var(--spring), opacity 0.35s ease;
}

.is-dark .tt-moon {
  opacity: 1;
  transform: translateX(0) scale(1) rotate(0deg);
}

.moon-body {
  position: absolute; inset: 0;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #f5f0d8, #e8d88a 50%, #c8b050 100%);
  box-shadow: 0 0 5px 1px rgba(210,180,70,0.55);
}

.moon-glow {
  position: absolute;
  inset: -4px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(210,180,70,0.3) 0%, transparent 70%);
  animation: moonPulse 3s ease-in-out infinite;
}

@keyframes moonPulse { 0%,100% { opacity:.6; transform:scale(1); } 50% { opacity:1; transform:scale(1.2); } }

/* Mountains */
.tt-mountains {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 50%;
}

.tt-mountains svg { width: 100%; height: 100%; }

/* ── Thumb ── */
.tt-thumb {
  position: absolute;
  top: var(--pad);
  left: var(--pad);
  width: var(--thumb);
  height: var(--thumb);
  border-radius: 50%;
  z-index: 10;
  background: radial-gradient(circle at 35% 30%, #ffffff 0%, #f0e8d0 55%, #e0d0a8 100%);
  box-shadow:
    0 2px 6px rgba(0,0,0,0.38),
    inset 0 1px 0 rgba(255,255,255,0.9),
    inset 0 -1px 0 rgba(0,0,0,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: transform 0.5s var(--spring);
  will-change: transform;
}

.is-dark .tt-thumb {
  transform: translateX(calc(var(--w) - var(--thumb) - var(--pad) * 2));
}

/* Thumb icons */
.thumb-icon {
  position: absolute;
  width: 11px;
  height: 11px;
  transition: opacity 0.25s ease, transform 0.35s var(--spring);
}

.icon-sun {
  color: #c07000;
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

.is-dark .icon-sun {
  opacity: 0;
  transform: scale(0.4) rotate(90deg);
}

.icon-moon {
  color: #3a2880;
  opacity: 0;
  transform: scale(0.4) rotate(-90deg);
}

.is-dark .icon-moon {
  opacity: 1;
  transform: scale(1) rotate(0deg);
}

/* Thumb shine */
.tt-thumb::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(135deg, rgba(255,255,255,0.65) 0%, transparent 55%);
  pointer-events: none;
}

/* ── Track shine overlay ── */
.tt-shine {
  position: absolute; inset: 0;
  border-radius: 999px;
  background: linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 48%, rgba(0,0,0,0.05) 100%);
  pointer-events: none;
  z-index: 5;
}

/* Click feel */
.theme-toggle:active .tt-track { transform: scale(0.96); }
.tt-track { transition: transform 0.12s ease, box-shadow 0.3s ease; }
</style>