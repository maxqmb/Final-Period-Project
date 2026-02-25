<!-- src/components/NavBar.vue -->
<!-- UPDATED: ThemeToggle integrated on the right side -->
<template>
  <header
    class="nav-wrapper"
    :class="{ 'nav-wrapper--scrolled': scrolled, 'nav-wrapper--hidden': navHidden }"
    role="banner"
  >
    <!-- Logo left -->
    <router-link class="nav-logo" to="/" aria-label="Home">
      <img src="/assets/logo.png" alt="MQ Logo" class="nav-logo-img" />
    </router-link>

    <!-- Pill centered via absolute positioning -->
    <nav class="nav-pill" role="navigation" aria-label="Main navigation">
      <span class="pill-shine" aria-hidden="true"></span>
      <ul class="nav-pill-links" role="list">
        <li v-for="(link, i) in links" :key="link.to" :style="{ '--i': i }">
          <router-link
            :to="link.to"
            class="pill-link"
            :class="{ 'pill-link--active': isActive(link.to) }"
            :aria-current="isActive(link.to) ? 'page' : undefined"
          >
            <span class="pill-link-bg" aria-hidden="true"></span>
            <span class="pill-link-text">{{ link.label }}</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- RIGHT SIDE: Theme toggle + Mobile hamburger -->
    <div class="nav-right">
      <!-- Theme Toggle -->
      <ThemeToggle />

      <!-- Mobile hamburger -->
      <button
        class="hamburger"
        :class="{ 'hamburger--open': mobileOpen }"
        @click="toggleMenu"
        :aria-expanded="mobileOpen.toString()"
        aria-label="Toggle menu"
        aria-controls="mobile-menu"
      >
        <span class="hbox">
          <span class="hbar b1"></span>
          <span class="hbar b2"></span>
          <span class="hbar b3"></span>
          <span class="hc htl"></span>
          <span class="hc htr"></span>
          <span class="hc hbl"></span>
          <span class="hc hbr"></span>
        </span>
      </button>
    </div>

    <!-- Mobile fullscreen menu -->
    <Transition name="menu">
      <div
        v-if="mobileOpen"
        id="mobile-menu"
        class="mobile-menu"
        role="dialog"
        aria-modal="true"
      >
        <div class="m-grid" aria-hidden="true"></div>
        <div class="m-orb"  aria-hidden="true"></div>

        <div class="m-header">
          <span class="m-label">NAVIGATION</span>
          <div class="m-header-right">
            <!-- Theme toggle also in mobile menu -->
            <ThemeToggle class="mobile-theme-toggle" />
            <button class="m-close" @click="toggleMenu" aria-label="Close">
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
                <path d="M1 1L17 17M17 1L1 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <ul class="m-links" role="list">
          <li
            v-for="(link, i) in links"
            :key="link.to"
            class="m-item"
            :style="{ '--mi': i }"
          >
            <router-link
              :to="link.to"
              class="m-link"
              :class="{ 'm-link--active': isActive(link.to) }"
              @click="toggleMenu"
            >
              <span class="m-num">{{ String(i + 1).padStart(2, '0') }}</span>
              <span class="m-text">{{ link.label }}</span>
              <span class="m-arrow" aria-hidden="true">
                <svg width="17" height="17" viewBox="0 0 12 12" fill="none">
                  <path d="M1 6H11M6 1L11 6L6 11" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </router-link>
          </li>
        </ul>

        <div class="m-footer">
          <span class="m-ftag">MQ © 2025</span>
          <span class="m-fdot"></span>
          <span class="m-ftag">Frontend Developer</span>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { inject, ref, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import ThemeToggle from './Themetoggle.vue'

const mobileOpen = inject('mobileOpen')
const route      = useRoute()

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/about',    label: 'About'    },
  { to: '/projects', label: 'Projects' },
  { to: '/resume',   label: 'Resume'   },
  { to: '/contact',  label: 'Contact'  },
]

function isActive(to) {
  return to === '/' ? route.path === '/' : route.path.startsWith(to)
}

function toggleMenu() {
  mobileOpen.value = !mobileOpen.value
  document.body.style.overflow = mobileOpen.value ? 'hidden' : ''
}

const scrolled  = ref(false)
const navHidden = ref(false)
let ticking = false

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      scrolled.value = window.scrollY > 24
      ticking = false
    })
    ticking = true
  }
}

function onKey(e) {
  if (e.key === 'Escape' && mobileOpen.value) toggleMenu()
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* ══════════════════════════════════════════════
   WRAPPER
══════════════════════════════════════════════ */
.nav-wrapper {
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 9999;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 40px;
  transition:
    background  0.35s ease,
    box-shadow  0.35s ease;
}

.nav-wrapper--scrolled {
  /* intentionally empty — background on pill only */
}

/* ══════════════════════════════════════════════
   LOGO
══════════════════════════════════════════════ */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
  position: relative;
  z-index: 2;
  animation: logoSlide 0.7s cubic-bezier(.22,.68,0,1.2) both;
}

@keyframes logoSlide {
  from { opacity: 0; transform: translateX(-10px); }
  to   { opacity: 1; transform: translateX(0); }
}

.nav-logo-img {
  height: 28px;
  width: auto;
  display: block;
  animation: neonBreathe 3s ease-in-out infinite;
}

@keyframes neonBreathe {
  0%, 100% {
    filter:
      drop-shadow(0 0 1.5px rgba(210, 20, 50, 0.95))
      drop-shadow(0 0 5px   rgba(160, 5, 35,  0.65))
      drop-shadow(0 0 12px  rgba(127, 1, 31,  0.30));
  }
  50% {
    filter:
      drop-shadow(0 0 2.5px rgba(230, 30, 60, 1))
      drop-shadow(0 0 9px   rgba(180, 10, 45, 0.85))
      drop-shadow(0 0 22px  rgba(127, 1, 31,  0.50))
      drop-shadow(0 0 38px  rgba(127, 1, 31,  0.18));
  }
}

.nav-logo:hover .nav-logo-img {
  animation-play-state: paused;
  filter:
    drop-shadow(0 0 3px   rgba(235, 35, 65, 1))
    drop-shadow(0 0 12px  rgba(190, 10, 45, 0.92))
    drop-shadow(0 0 28px  rgba(127, 1, 31,  0.62))
    drop-shadow(0 0 48px  rgba(127, 1, 31,  0.22));
}

/* ══════════════════════════════════════════════
   PILL — dead-center via absolute + translate
══════════════════════════════════════════════ */
.nav-pill {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: inline-flex;
  align-items: center;
  width: max-content;
  background: var(--pill-bg, rgba(14, 9, 6, 0.60));
  backdrop-filter: blur(22px) saturate(170%);
  -webkit-backdrop-filter: blur(22px) saturate(170%);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 999px;
  padding: 3px 3px;
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.07),
    inset 0 -1px 0 rgba(0,0,0,0.28),
    0 4px 8px rgba(0,0,0,0.3),
    0 14px 44px rgba(0,0,0,0.48);
  opacity: 0;
  animation: pillFade 0.55s ease 0.1s forwards;
  transition: background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease;
}

@keyframes pillFade {
  to { opacity: 1; }
}

.nav-wrapper--scrolled .nav-pill {
  background: var(--pill-bg-scrolled, rgba(10, 6, 4, 0.82));
  border-color: rgba(255, 255, 255, 0.12);
  box-shadow:
    inset 0 1px 0 rgba(255,255,255,0.08),
    inset 0 -1px 0 rgba(0,0,0,0.32),
    0 4px 16px rgba(0,0,0,0.45),
    0 16px 48px rgba(0,0,0,0.55);
}

.pill-shine {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 52px;
  height: 1px;
  border-radius: 999px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  pointer-events: none;
}

.nav-pill-links {
  display: flex;
  align-items: center;
  gap: 0;
  list-style: none;
  margin: 0;
  padding: 0;
}

.pill-link {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px 14px;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  animation: linkFade 0.45s ease both;
  animation-delay: calc(0.18s + var(--i, 0) * 0.055s);
}

@keyframes linkFade {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.pill-link-bg {
  position: absolute;
  inset: 0;
  border-radius: 999px;
  background: transparent;
  border: 1px solid transparent;
  transition:
    background    0.2s ease,
    border-color  0.2s ease,
    box-shadow    0.2s ease;
}

.pill-link--active .pill-link-bg {
  background: rgba(127, 1, 31, 0.82);
  border-color: rgba(155, 8, 38, 0.55);
  box-shadow:
    0 2px 10px rgba(127,1,31,0.38),
    inset 0 1px 0 rgba(255,255,255,0.09);
}

.pill-link:not(.pill-link--active):hover .pill-link-bg {
  background: rgba(255,255,255,0.06);
  border-color: rgba(255,255,255,0.10);
}

.pill-link-text {
  position: relative;
  z-index: 1;
  font-family: var(--font-sans, system-ui, sans-serif);
  font-size: 12.5px;
  font-weight: 400;
  letter-spacing: 0.015em;
  color: rgba(200, 185, 158, 0.72);
  transition: color 0.2s ease;
  user-select: none;
}

.pill-link--active .pill-link-text {
  color: rgba(245, 235, 208, 1);
  font-weight: 500;
}

.pill-link:not(.pill-link--active):hover .pill-link-text {
  color: rgba(240, 230, 205, 0.92);
}

/* ══════════════════════════════════════════════
   NAV RIGHT — theme toggle + hamburger
══════════════════════════════════════════════ */
.nav-right {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-left: auto;
  position: relative;
  z-index: 2;
  animation: rightFade 0.7s ease 0.3s both;
}

@keyframes rightFade {
  from { opacity: 0; transform: translateX(10px); }
  to   { opacity: 1; transform: translateX(0); }
}

/* ══════════════════════════════════════════════
   HAMBURGER (mobile only)
══════════════════════════════════════════════ */
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 9999;
}

.hbox {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 36px; height: 36px;
  gap: 5px;
  border: 1px solid rgba(127,1,31,0.28);
  border-radius: 5px;
  transition: border-color 0.28s, background 0.28s;
}

.hamburger:hover .hbox,
.hamburger--open .hbox {
  border-color: rgba(127,1,31,0.65);
  background: rgba(127,1,31,0.08);
}

.hbar {
  display: block;
  height: 1.5px;
  background: rgba(200,185,155,0.8);
  border-radius: 2px;
  transition: transform 0.38s cubic-bezier(.22,.68,0,1.2), opacity 0.28s, background 0.28s, width 0.28s;
}
.b1 { width: 19px; }
.b2 { width: 13px; align-self: flex-start; margin-left: 9px; }
.b3 { width: 16px; }

.hamburger:hover .b1,
.hamburger:hover .b2,
.hamburger:hover .b3 { background: var(--cream, #f5ebd0); }
.hamburger:hover .b2  { width: 19px; margin-left: 0; }

.hamburger--open .b1 { transform: translateY(6.5px) rotate(45deg);  background: var(--crimson, #7f011f); }
.hamburger--open .b2 { opacity: 0; transform: scaleX(0); }
.hamburger--open .b3 { transform: translateY(-6.5px) rotate(-45deg); background: var(--crimson, #7f011f); }

.hc {
  position: absolute;
  width: 5px; height: 5px;
  border-color: rgba(127,1,31,0.35);
  border-style: solid;
  transition: width 0.28s, height 0.28s, border-color 0.28s;
}
.htl { top:2px;    left:2px;  border-width:1px 0 0 1px; }
.htr { top:2px;    right:2px; border-width:1px 1px 0 0; }
.hbl { bottom:2px; left:2px;  border-width:0 0 1px 1px; }
.hbr { bottom:2px; right:2px; border-width:0 1px 1px 0; }
.hamburger:hover .hc,
.hamburger--open .hc { width:7px; height:7px; border-color:rgba(127,1,31,0.72); }

/* ══════════════════════════════════════════════
   MOBILE MENU
══════════════════════════════════════════════ */
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 9050;
  background: var(--charcoal, #18120e);
  display: flex;
  flex-direction: column;
  padding: 0 28px 40px;
  overflow: hidden;
}

.m-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(127,1,31,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(127,1,31,0.04) 1px, transparent 1px);
  background-size: 38px 38px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
  -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent);
}

.m-orb {
  position: absolute;
  bottom: -100px; right: -80px;
  width: 360px; height: 360px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(127,1,31,0.26) 0%, transparent 70%);
  pointer-events: none;
  animation: mOrb 6s ease-in-out infinite;
}
@keyframes mOrb {
  0%,100% { transform:scale(1);   opacity:.7; }
  50%      { transform:scale(1.1); opacity:1;  }
}

.m-header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid rgba(127,1,31,0.15);
  flex-shrink: 0;
}

.m-label {
  font-family: var(--font-sans, monospace);
  font-size: 8px;
  letter-spacing: 0.35em;
  color: rgba(127,1,31,0.45);
}

.m-header-right {
  display: flex;
  align-items: center;
  gap: 14px;
}

.mobile-theme-toggle {
  /* Slightly smaller in mobile menu */
  --tt-w: 60px;
  --tt-h: 28px;
  --tt-thumb-size: 22px;
}

.m-close {
  background: none;
  border: 1px solid rgba(127,1,31,0.3);
  color: var(--stone-light, #c8b99a);
  cursor: pointer;
  width: 33px; height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: border-color 0.28s, color 0.28s, background 0.28s;
}
.m-close:hover {
  border-color: var(--crimson, #7f011f);
  color: var(--cream, #f5ebd0);
  background: rgba(127,1,31,0.1);
}

.m-links {
  list-style: none;
  margin: 0; padding: 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.m-item {
  border-bottom: 1px solid rgba(127,1,31,0.07);
  animation: mSlide 0.5s cubic-bezier(.22,.68,0,1.2) both;
  animation-delay: calc(0.06s + var(--mi) * 0.07s);
}
@keyframes mSlide {
  from { opacity:0; transform:translateX(-26px); }
  to   { opacity:1; transform:translateX(0); }
}

.m-link {
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 20px 0;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: padding-left 0.3s cubic-bezier(.22,.68,0,1.2);
}
.m-link::before {
  content: '';
  position: absolute;
  left:0; top:0; bottom:0;
  width: 0;
  background: linear-gradient(90deg, rgba(127,1,31,0.1), transparent);
  transition: width 0.4s cubic-bezier(.22,.68,0,1.2);
}
.m-link:hover::before,
.m-link--active::before { width: 100%; }
.m-link:hover { padding-left: 10px; }

.m-num {
  font-family: var(--font-sans, monospace);
  font-size: 9px;
  letter-spacing: 0.15em;
  color: var(--crimson, #7f011f);
  opacity: 0.55;
  flex-shrink: 0;
  min-width: 25px;
  transition: opacity 0.28s;
}
.m-link:hover .m-num,
.m-link--active .m-num { opacity: 1; }

.m-text {
  font-family: var(--font-upright, 'Georgia', serif);
  font-size: clamp(29px, 7vw, 46px);
  font-weight: 300;
  color: rgba(200,185,158,0.75);
  line-height: 1;
  transition: color 0.28s;
  flex: 1;
}
.m-link:hover .m-text,
.m-link--active .m-text { color: var(--cream, #f5ebd0); }
.m-link--active .m-text  { font-style: italic; }

.m-arrow {
  color: var(--crimson, #7f011f);
  opacity: 0;
  transform: translateX(-8px);
  transition: opacity 0.28s, transform 0.28s;
  flex-shrink: 0;
}
.m-link:hover .m-arrow { opacity: 1; transform: translateX(0); }

.m-footer {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 14px;
  padding-top: 26px;
  border-top: 1px solid rgba(127,1,31,0.1);
  animation: mSlide 0.5s cubic-bezier(.22,.68,0,1.2) 0.44s both;
}
.m-ftag {
  font-family: var(--font-sans, monospace);
  font-size: 8px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(200,185,155,0.28);
}
.m-fdot {
  width:3px; height:3px;
  border-radius:50%;
  background:rgba(127,1,31,0.4);
}

/* ══════════════════════════════════════════════
   MENU TRANSITION
══════════════════════════════════════════════ */
.menu-enter-active { transition: clip-path 0.52s cubic-bezier(.77,0,.18,1), opacity 0.32s; }
.menu-leave-active { transition: clip-path 0.42s cubic-bezier(.77,0,.18,1), opacity 0.28s; }
.menu-enter-from   { clip-path: inset(0 0 100% 0); opacity: 0; }
.menu-enter-to     { clip-path: inset(0 0 0% 0);   opacity: 1; }
.menu-leave-from   { clip-path: inset(0 0 0% 0);   opacity: 1; }
.menu-leave-to     { clip-path: inset(0 0 100% 0); opacity: 0; }

/* ══════════════════════════════════════════════
   RESPONSIVE
══════════════════════════════════════════════ */
@media (max-width: 768px) {
  .nav-wrapper { padding: 0 20px; }
  .nav-pill    { display: none; }
  .hamburger   { display: flex; }
}

@media (min-width: 769px) {
  .hamburger    { display: none !important; }
  .mobile-menu  { display: none !important; }
}
</style>