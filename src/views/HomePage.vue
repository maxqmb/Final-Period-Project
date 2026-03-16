<!-- src/views/HomePage.vue -->
<template>
  <main id="home" aria-label="Home">

    <!-- ── HERO ── -->
    <section class="home-hero">
      <div class="home-left" style="position:relative;overflow:hidden;">
        <canvas ref="heroCanvas" id="hero-canvas" aria-hidden="true"></canvas>
        <div class="home-left-content">

          <h1 class="home-name">
            Maxene Qu<span class="i-special">ı<span class="i-star" aria-hidden="true"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L13.76 7.06L20.49 4.51L16.94 11.24L24 13L16.94 14.76L20.49 20.49L13.76 16.94L12 24L10.24 16.94L3.51 20.49L7.06 14.76L0 13L7.06 11.24L3.51 4.51L10.24 7.06Z" fill="currentColor"/></svg></span></span>ambao
          </h1>

          <p class="home-title">Crafting digital experiences with precision &amp; heart.</p>

          <div class="home-eyebrow-wrap">
            <span class="eyebrow-dot" aria-hidden="true"></span>
            <p class="home-eyebrow">Frontend Developer &amp; UI/UX Designer</p>
          </div>

          <div class="home-cta-row">
            <router-link to="/projects" class="btn-primary">
              <span class="btn-primary-bg" aria-hidden="true"></span>
              <span class="btn-primary-label">View Portfolio</span>
              <svg class="btn-primary-arrow" width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </router-link>
            <router-link to="/about" class="btn-ghost">
              <span class="btn-ghost-label">About Me</span>
            </router-link>
          </div>

        </div>
      </div>
    </section>

    <!-- ── FEATURED PROJECTS ── -->
    <section class="projects-section" :class="{ light: isLight }" aria-label="Featured Projects">

      <div class="projects-header">
        <div class="projects-eyebrow">
          <span class="projects-eyebrow-line" aria-hidden="true"></span>
          Featured Work
          <span class="projects-eyebrow-line" aria-hidden="true"></span>
        </div>
        <h2 class="projects-heading">Selected <em>Projects</em></h2>
        <p class="projects-subhead">A glimpse into what I've built — and how I think.</p>
      </div>

      <div class="projects-grid">

        <!-- SplitSmart -->
        <div class="project-card" :class="{ 'in-view': card1Visible }" ref="card1"
          @mousemove="onCardTilt($event, 'card1')"
          @mouseleave="onCardReset('card1')"
        >
          <div class="project-card-inner" ref="card1Inner">
            <!-- Shimmer sweep border -->
            <div class="card-shimmer" aria-hidden="true"></div>

            <div class="project-visual">
              <!-- Diagonal reveal wash -->
              <div class="visual-wash" aria-hidden="true"></div>
              <div class="project-img-container">
                <img
                  src="/assets/projects/splitsmart1.png"
                  alt="SplitSmart project screenshot"
                  class="project-screenshot"
                  onerror="this.style.display='none';this.nextElementSibling.style.removeProperty('display')"
                />
                <div class="project-img-placeholder">
                  <span class="placeholder-icon">⬜</span>
                  <span class="placeholder-text">splitsmart1.png</span>
                </div>
                <div class="project-img-overlay">
                  <div class="overlay-tags">
                    <span class="overlay-tag">Node.js</span>
                    <span class="overlay-tag">Express.js</span>
                  </div>
                  <span class="overlay-label">SplitSmart</span>
                </div>
              </div>
            </div>

            <div class="project-info">
              <div class="card-accent-lines" aria-hidden="true">
                <span class="accent-line accent-line--gold"></span>
                <span class="accent-line accent-line--crimson"></span>
              </div>
              <div class="project-number" aria-hidden="true">01</div>
              <div class="project-meta">
                <span class="project-meta-type">Web App</span>
                <span class="project-meta-dot" aria-hidden="true"></span>
                <span class="project-meta-year">2024</span>
              </div>
              <h3 class="project-title">SplitSmart</h3>
              <p class="project-desc">A web application designed to help friends and families split bills easily and accurately, simplifying shared expenses for groups.</p>
              <div class="project-actions">
                <router-link to="/projects#project-2" class="project-btn">
                  <span>View Project</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <!-- Non Ta Mangan -->
        <div class="project-card project-card--alt" :class="{ 'in-view': card2Visible }" ref="card2"
          @mousemove="onCardTilt($event, 'card2')"
          @mouseleave="onCardReset('card2')"
        >
          <div class="project-card-inner" ref="card2Inner">
            <div class="card-shimmer" aria-hidden="true"></div>

            <div class="project-info">
              <div class="card-accent-lines" aria-hidden="true">
                <span class="accent-line accent-line--crimson"></span>
                <span class="accent-line accent-line--gold"></span>
              </div>
              <div class="project-number" aria-hidden="true">02</div>
              <div class="project-meta">
                <span class="project-meta-type">Food Platform</span>
                <span class="project-meta-dot" aria-hidden="true"></span>
                <span class="project-meta-year">2024</span>
              </div>
              <h3 class="project-title">Non Ta Mangan</h3>
              <p class="project-desc">A food discovery platform that lets users search food types, read reviews, and use a spin-the-wheel feature for indecisive diners.</p>
              <div class="project-actions">
                <router-link to="/projects#project-3" class="project-btn">
                  <span>View Project</span>
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
                </router-link>
              </div>
            </div>

            <div class="project-visual">
              <div class="visual-wash" aria-hidden="true"></div>
              <div class="project-img-container">
                <img
                  src="/assets/projects/nontamangan1.png"
                  alt="Non Ta Mangan project screenshot"
                  class="project-screenshot"
                  onerror="this.style.display='none';this.nextElementSibling.style.removeProperty('display')"
                />
                <div class="project-img-placeholder">
                  <span class="placeholder-icon">⬜</span>
                  <span class="placeholder-text">nontamangan1.png</span>
                </div>
                <div class="project-img-overlay">
                  <div class="overlay-tags">
                    <span class="overlay-tag">PHP</span>
                    <span class="overlay-tag">MySQL</span>
                    <span class="overlay-tag">JavaScript</span>
                  </div>
                  <span class="overlay-label">Non Ta Mangan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="projects-cta">
        <router-link to="/projects" class="projects-cta-btn">
          <span>View All Projects</span>
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </router-link>
      </div>

    </section>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const heroCanvas = ref(null)
const card1 = ref(null)
const card2 = ref(null)
const card1Inner = ref(null)
const card2Inner = ref(null)
const card1Visible = ref(false)
const card2Visible = ref(false)
const isLight = ref(false)
let animId = null
let themeObserver = null

function onCardTilt(e, cardRef) {
  const inner = cardRef === 'card1' ? card1Inner.value : card2Inner.value
  if (!inner) return
  const rect = inner.getBoundingClientRect()
  const x = (e.clientX - rect.left) / rect.width  - 0.5
  const y = (e.clientY - rect.top)  / rect.height - 0.5
  inner.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 4}deg) scale3d(1.015,1.015,1.015)`
}

function onCardReset(cardRef) {
  const inner = cardRef === 'card1' ? card1Inner.value : card2Inner.value
  if (!inner) return
  inner.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)'
}

function isDarkMode() {
  return document.documentElement.getAttribute('data-theme') === 'dark'
}

function checkTheme() {
  isLight.value = document.documentElement.getAttribute('data-theme') !== 'dark'
}

function initCanvas() {
  const canvas = heroCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const orbs = Array.from({ length: 7 }, () => ({
    x: Math.random(), y: Math.random(),
    r: 80 + Math.random() * 180,
    vx: (Math.random() - 0.5) * 0.00015,
    vy: (Math.random() - 0.5) * 0.00015,
    opacity: 0.04 + Math.random() * 0.07,
    phase: Math.random() * Math.PI * 2,
    speed: 0.0004 + Math.random() * 0.0006,
  }))

  const particles = Array.from({ length: 40 }, () => ({
    x: Math.random(), y: Math.random(),
    size: 0.5 + Math.random() * 1.5,
    vx: (Math.random() - 0.5) * 0.00008,
    vy: -0.00005 - Math.random() * 0.0001,
    opacity: 0.1 + Math.random() * 0.25,
    life: Math.random(),
  }))

  let t = 0

  function draw() {
    const W = canvas.width, H = canvas.height
    t++
    const dark = isDarkMode()

    if (dark) {
      ctx.fillStyle = '#3d000e'
    } else {
      ctx.fillStyle = '#5a0018'
    }
    ctx.fillRect(0, 0, W, H)

    const time = t * 0.003

    for (let i = 0; i < 5; i++) {
      const yBase = H * (0.2 + i * 0.18)
      const amp   = H * (0.08 + i * 0.03)
      const freq  = 0.003 + i * 0.0008
      const phase = time * (0.4 + i * 0.15) + i * 1.2
      const alpha = dark
        ? (0.06 + i * 0.012)
        : (0.08 + i * 0.015)

      ctx.beginPath()
      ctx.moveTo(0, H)
      for (let x = 0; x <= W; x += 3) {
        const y = yBase
          + Math.sin(x * freq + phase) * amp
          + Math.sin(x * freq * 2.3 + phase * 0.7) * amp * 0.4
        ctx.lineTo(x, y)
      }
      ctx.lineTo(W, H)
      ctx.closePath()

      const isGold = i % 2 === 0
      const gradient = ctx.createLinearGradient(0, yBase - amp, 0, yBase + amp * 2)

      if (dark) {
        if (isGold) {
          gradient.addColorStop(0, `rgba(201,168,76,${alpha * 1.4})`)
          gradient.addColorStop(1, `rgba(127,1,31,0)`)
        } else {
          gradient.addColorStop(0, `rgba(163,2,42,${alpha * 1.8})`)
          gradient.addColorStop(1, `rgba(60,0,10,0)`)
        }
      } else {
        if (isGold) {
          gradient.addColorStop(0, `rgba(201,168,76,${alpha * 1.6})`)
          gradient.addColorStop(1, `rgba(127,1,31,0)`)
        } else {
          gradient.addColorStop(0, `rgba(200,10,50,${alpha * 2.0})`)
          gradient.addColorStop(1, `rgba(90,0,24,0)`)
        }
      }

      ctx.fillStyle = gradient
      ctx.fill()
    }

    orbs.forEach(o => {
      o.phase += o.speed
      o.x += o.vx + Math.sin(o.phase) * 0.0003
      o.y += o.vy + Math.cos(o.phase * 0.6) * 0.0002
      if (o.x < -0.3) o.x = 1.3
      if (o.x > 1.3)  o.x = -0.3
      if (o.y < -0.3) o.y = 1.3
      if (o.y > 1.3)  o.y = -0.3

      const gx = o.x * W, gy = o.y * H
      const r  = o.r * (Math.min(W, H) / 600)
      const g  = ctx.createRadialGradient(gx, gy, 0, gx, gy, r)

      if (dark) {
        g.addColorStop(0,    `rgba(201,168,76,${o.opacity * 1.2})`)
        g.addColorStop(0.35, `rgba(163,2,42,${o.opacity * 0.6})`)
        g.addColorStop(1,    `rgba(127,1,31,0)`)
      } else {
        g.addColorStop(0,    `rgba(201,168,76,${o.opacity * 1.4})`)
        g.addColorStop(0.35, `rgba(180,5,40,${o.opacity * 0.8})`)
        g.addColorStop(1,    `rgba(90,0,24,0)`)
      }

      ctx.fillStyle = g
      ctx.beginPath()
      ctx.arc(gx, gy, r, 0, Math.PI * 2)
      ctx.fill()
    })

    particles.forEach(p => {
      p.life += 0.0025
      p.x += p.vx
      p.y += p.vy
      if (p.y < -0.04 || p.life > 1) {
        p.x = Math.random(); p.y = 1.04; p.life = 0
        p.vx = (Math.random() - 0.5) * 0.00006
        p.vy = -0.00004 - Math.random() * 0.00009
      }
      const fade = Math.sin(p.life * Math.PI)
      ctx.fillStyle = `rgba(226,196,122,${p.opacity * fade})`
      ctx.beginPath()
      ctx.arc(p.x * W, p.y * H, p.size, 0, Math.PI * 2)
      ctx.fill()
    })

    const vig = ctx.createRadialGradient(W/2, H/2, H * 0.1, W/2, H/2, W * 0.85)
    if (dark) {
      vig.addColorStop(0, 'rgba(0,0,0,0)')
      vig.addColorStop(1, 'rgba(20,0,5,0.72)')
    } else {
      vig.addColorStop(0, 'rgba(0,0,0,0)')
      vig.addColorStop(1, 'rgba(10,0,0,0.65)')
    }
    ctx.fillStyle = vig
    ctx.fillRect(0, 0, W, H)

    animId = requestAnimationFrame(draw)
  }

  draw()
}

function initScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.target === card1.value && entry.isIntersecting) card1Visible.value = true
      if (entry.target === card2.value && entry.isIntersecting) card2Visible.value = true
    })
  }, { threshold: 0.12 })
  if (card1.value) observer.observe(card1.value)
  if (card2.value) observer.observe(card2.value)
}

onMounted(() => {
  checkTheme()
  themeObserver = new MutationObserver(checkTheme)
  themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] })
  initCanvas()
  setTimeout(initScrollObserver, 100)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  if (themeObserver) themeObserver.disconnect()
})
</script>

<style scoped>
#home { position: relative; overflow: hidden; }

#hero-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  z-index: 0; pointer-events: none;
}

.home-hero { min-height: 100vh; display: flex; position: relative; }

.home-left {
  background: var(--crimson);
  position: relative; display: flex; flex-direction: column;
  justify-content: center; padding: 0; overflow: hidden;
  z-index: 1; flex: 1; min-height: 100vh;
}

.home-left-content {
  position: relative; z-index: 2;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center; text-align: center;
  padding: 80px 8%;
  height: 100%; width: 100%;
}

/* hero eyebrow always on dark canvas - no light override needed */

.home-name {
  font-family: var(--font-upright);
  font-size: clamp(52px, 7vw, 96px);
  font-weight: 300; line-height: 1.05;
  color: var(--cream);
  margin-bottom: 22px;
  opacity: 0;
  animation: revealUp 0.9s cubic-bezier(0.16,1,0.3,1) 0.45s forwards;
  white-space: nowrap;
  overflow: visible;
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px) skewY(2deg); }
  to   { opacity: 1; transform: translateY(0) skewY(0deg); }
}

.i-special { position: relative; display: inline-block; overflow: visible; }

.i-star {
  position: absolute;
  top: 0.07em; left: 50%;
  transform: translateX(-50%);
  width: 0.2em; height: 0.2em;
  color: var(--gold);
  display: flex; align-items: center; justify-content: center;
  filter: drop-shadow(0 0 3px rgba(201,168,76,1)) drop-shadow(0 0 8px rgba(201,168,76,0.6));
  pointer-events: none;
  animation: iStarSpin 2.8s linear infinite, iStarBounce 1.6s ease-in-out infinite;
  transform-origin: center;
}
.i-star svg { width: 100%; height: 100%; display: block; }

@keyframes iStarSpin   { from { transform: translateX(-50%) rotate(0deg); } to { transform: translateX(-50%) rotate(360deg); } }
@keyframes iStarBounce { 0%,100% { margin-top:0; } 50% { margin-top:-0.07em; } }

.home-title {
  font-family: var(--font-display);
  font-size: clamp(15px, 1.7vw, 19px);
  font-weight: 300; font-style: italic;
  color: rgba(245,235,208,0.55);
  margin-bottom: 22px;
  letter-spacing: 0.03em;
  opacity: 0; animation: fadeUp 0.8s ease 0.6s forwards;
  max-width: 520px;
}

.home-eyebrow-wrap {
  display: inline-flex; align-items: center; gap: 10px;
  background: rgba(245,235,208,0.07);
  border: 1px solid rgba(245,235,208,0.15);
  border-radius: 100px;
  padding: 8px 18px 8px 12px;
  margin-bottom: 44px;
  opacity: 0; animation: fadeUp 0.7s ease 0.72s forwards;
  backdrop-filter: blur(6px);
}

.eyebrow-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--gold);
  box-shadow: 0 0 8px rgba(201,168,76,0.9);
  animation: dotPulse 2s ease-in-out infinite;
  flex-shrink: 0;
}
@keyframes dotPulse {
  0%,100% { transform:scale(1); box-shadow:0 0 6px rgba(201,168,76,0.8); }
  50%      { transform:scale(1.3); box-shadow:0 0 14px rgba(201,168,76,1); }
}

.home-eyebrow {
  font-family: var(--font-sans);
  font-size: 9px; font-weight: 400;
  letter-spacing: 0.28em; text-transform: uppercase;
  color: rgba(245,235,208,0.85); margin: 0;
}

.home-cta-row {
  display: flex; align-items: center; justify-content: center; gap: 14px;
  opacity: 0; animation: fadeUp 0.8s ease 0.88s forwards;
}

.btn-primary {
  display: inline-flex; align-items: center; gap: 12px;
  background: var(--cream); color: var(--crimson);
  font-family: var(--font-sans); font-size: 9px; font-weight: 700;
  letter-spacing: 0.26em; text-transform: uppercase;
  padding: 16px 32px;
  text-decoration: none;
  border-radius: 3px;
  border: 1.5px solid var(--cream);
  position: relative; overflow: hidden;
  transition: color 0.32s ease, border-color 0.32s ease;
}

.btn-primary-bg {
  position: absolute; inset: 0;
  background: var(--charcoal);
  transform: translateX(-101%);
  transition: transform 0.38s cubic-bezier(0.16,1,0.3,1);
}

.btn-primary-label, .btn-primary-arrow { position: relative; z-index: 1; }
.btn-primary-arrow { transition: transform 0.28s ease; flex-shrink: 0; }
.btn-primary:hover { color: var(--cream); border-color: rgba(245,235,208,0.18); }
.btn-primary:hover .btn-primary-bg { transform: translateX(0); }
.btn-primary:hover .btn-primary-arrow { transform: translateX(3px); }

.btn-ghost {
  display: inline-flex; align-items: center;
  background: transparent;
  border: 1.5px solid rgba(245,235,208,0.22);
  color: rgba(245,235,208,0.58);
  font-family: var(--font-sans); font-size: 9px; font-weight: 400;
  letter-spacing: 0.26em; text-transform: uppercase;
  padding: 16px 32px;
  text-decoration: none;
  border-radius: 3px;
  position: relative; overflow: hidden;
  transition: color 0.28s ease, border-color 0.28s ease;
}

.btn-ghost::before {
  content: '';
  position: absolute; inset: 0;
  background: rgba(245,235,208,0.05);
  opacity: 0;
  transition: opacity 0.28s ease;
}

.btn-ghost-label { position: relative; z-index: 1; }
.btn-ghost:hover { color: var(--cream); border-color: rgba(245,235,208,0.48); }
.btn-ghost:hover::before { opacity: 1; }

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ═══════════════════════════════════════
   FEATURED PROJECTS SECTION
═══════════════════════════════════════ */
.projects-section {
  background: var(--charcoal);
  padding: 96px 80px 112px;
  position: relative; overflow: hidden;
  transition: background 0.3s ease;
}

/* Light mode — actual background color change, no overlay */
.projects-section.light {
  background: var(--warm-white);
}

.projects-section::before {
  content: '';
  position: absolute; inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(ellipse 50% 60% at 10% 20%, rgba(127,1,31,0.10) 0%, transparent 60%),
    radial-gradient(ellipse 40% 50% at 90% 80%, rgba(201,168,76,0.06) 0%, transparent 55%);
}

.projects-section.light::before {
  background-image:
    radial-gradient(ellipse 55% 65% at 8% 15%, rgba(127,1,31,0.05) 0%, transparent 60%),
    radial-gradient(ellipse 45% 55% at 92% 85%, rgba(201,168,76,0.04) 0%, transparent 55%);
}

/* ── Header ── */
.projects-header { text-align: center; margin-bottom: 72px; position: relative; z-index: 1; }

.projects-eyebrow {
  display: inline-flex; align-items: center; gap: 14px;
  font-family: var(--font-sans); font-size: 8.5px; font-weight: 300;
  letter-spacing: 0.35em; text-transform: uppercase;
  color: rgba(201,168,76,0.7); margin-bottom: 20px;
}
.projects-section.light .projects-eyebrow { color: rgba(127,1,31,0.65); }

.projects-eyebrow-line { display: block; width: 32px; height: 1px; background: rgba(201,168,76,0.4); }
.projects-section.light .projects-eyebrow-line { background: rgba(127,1,31,0.25); }

.projects-heading {
  font-family: var(--font-upright);
  font-size: clamp(36px, 4.5vw, 58px); font-weight: 300;
  color: var(--cream); line-height: 1.1; margin-bottom: 14px;
}
.projects-section.light .projects-heading { color: var(--bark); }

.projects-heading em { font-style: italic; color: var(--crimson); filter: brightness(1.4); }
.projects-section.light .projects-heading em { filter: none; }

.projects-subhead {
  font-family: var(--font-display); font-size: 15px; font-style: italic;
  color: rgba(245,235,208,0.4); letter-spacing: 0.02em;
}
.projects-section.light .projects-subhead { color: var(--stone); }

/* ── Grid ── */
.projects-grid {
  display: flex; flex-direction: column; gap: 28px;
  position: relative; z-index: 1;
  max-width: 1100px; margin: 0 auto;
}

/* ── Card ── */
.project-card {
  opacity: 0; transform: translateY(40px);
  transition: opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1);
  perspective: 1000px;
}
.project-card.in-view { opacity: 1; transform: translateY(0); }
.project-card--alt { transition-delay: 0.14s; }

.project-card-inner {
  display: grid; grid-template-columns: 1fr 1fr;
  border: 1px solid rgba(245,235,208,0.07);
  border-radius: 20px; overflow: hidden;
  background: rgba(245,235,208,0.025);
  position: relative;
  transition: border-color 0.3s ease, box-shadow 0.45s ease, transform 0.18s ease;
  transform-style: preserve-3d;
  will-change: transform;
}
.projects-section.light .project-card-inner {
  border: 1px solid rgba(127,1,31,0.09);
  background: rgba(255,255,255,0.7);
  box-shadow: 0 2px 14px rgba(61,43,31,0.06);
}

.project-card:hover .project-card-inner {
  border-color: rgba(201,168,76,0.22);
  box-shadow:
    0 32px 72px rgba(0,0,0,0.5),
    0 0 0 1px rgba(201,168,76,0.12),
    0 0 60px rgba(127,1,31,0.12) inset;
}
.projects-section.light .project-card:hover .project-card-inner {
  border-color: rgba(127,1,31,0.28);
  box-shadow:
    0 20px 56px rgba(61,43,31,0.16),
    0 0 0 1px rgba(127,1,31,0.1),
    0 0 40px rgba(127,1,31,0.04) inset;
}

/* ── Shimmer sweep across border on hover ── */
.card-shimmer {
  position: absolute; inset: 0;
  border-radius: 20px;
  pointer-events: none; z-index: 10;
  background: linear-gradient(
    105deg,
    transparent 30%,
    rgba(201,168,76,0.08) 48%,
    rgba(245,235,208,0.14) 50%,
    rgba(201,168,76,0.08) 52%,
    transparent 70%
  );
  background-size: 250% 100%;
  background-position: 200% 0;
  transition: background-position 0s;
  opacity: 0;
}
.project-card:hover .card-shimmer {
  opacity: 1;
  background-position: -50% 0;
  transition: background-position 0.65s ease, opacity 0.2s ease;
}

/* ── Diagonal wash that retracts on hover, revealing the image ── */
.visual-wash {
  position: absolute; inset: 0; z-index: 2; pointer-events: none;
  background: linear-gradient(135deg, rgba(12,3,3,0.55) 0%, transparent 65%);
  transition: opacity 0.55s cubic-bezier(0.16,1,0.3,1);
}
.project-card:hover .visual-wash { opacity: 0; }

/* ── Accent lines — animated bars on the left edge of info panel ── */
.card-accent-lines {
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  display: flex; flex-direction: column;
  overflow: hidden;
}
.accent-line {
  display: block; width: 100%;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.5s cubic-bezier(0.16,1,0.3,1);
}
.accent-line--gold   { flex: 1; background: var(--gold); opacity: 0.6; transition-delay: 0s; }
.accent-line--crimson { flex: 1; background: var(--crimson); opacity: 0.8; transition-delay: 0.08s; }
.project-card:hover .accent-line { transform: scaleY(1); }

/* ── Meta row (type + year) ── */
.project-meta {
  display: flex; align-items: center; gap: 8px;
  font-family: var(--font-sans); font-size: 7.5px;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(245,235,208,0.35);
  opacity: 0;
  transform: translateY(8px);
  transition: opacity 0.4s ease 0.05s, transform 0.4s ease 0.05s;
}
.projects-section.light .project-meta { color: rgba(61,43,31,0.4); }
.project-card:hover .project-meta { opacity: 1; transform: translateY(0); }

.project-meta-dot {
  width: 3px; height: 3px; border-radius: 50%;
  background: var(--gold); opacity: 0.6; flex-shrink: 0;
}

/* ── Image panel ── */
.project-visual { position: relative; overflow: hidden; min-height: 360px; background: #0a0404; }
.project-img-container { position: absolute; inset: 0; }

.project-screenshot {
  width: 100%; height: 100%;
  object-fit: cover; object-position: top center;
  display: block;
  transition: transform 0.65s cubic-bezier(0.16,1,0.3,1), filter 0.55s ease;
  filter: brightness(0.88) saturate(0.9);
}
.project-card:hover .project-screenshot {
  transform: scale(1.05);
  filter: brightness(1) saturate(1.05);
}

/* Non Ta Mangan */
.project-card--alt .project-screenshot {
  object-fit: contain;
  object-position: center top;
  background: #6b1020;
  transform-origin: center top;
  filter: brightness(0.9) saturate(0.9);
}
.project-card--alt:hover .project-screenshot {
  transform: scale(1.02);
  filter: brightness(1) saturate(1.05);
}

.project-img-placeholder {
  display: none; position: absolute; inset: 0;
  flex-direction: column; align-items: center; justify-content: center; gap: 10px;
  background: rgba(10,5,3,0.7);
}
.placeholder-icon { font-size: 24px; opacity: 0.3; }
.placeholder-text {
  font-family: var(--font-sans); font-size: 8px; letter-spacing: 0.18em;
  text-transform: uppercase; color: rgba(245,235,208,0.2);
}

/* ── Overlay: now shows tags + title ── */
.project-img-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(10,2,2,0.88) 0%, rgba(10,2,2,0.2) 55%, transparent 100%);
  opacity: 0; transition: opacity 0.4s ease;
  display: flex; flex-direction: column;
  align-items: flex-start; justify-content: flex-end;
  padding: 24px;
  gap: 10px;
}
.project-card:hover .project-img-overlay { opacity: 1; }

.overlay-tags {
  display: flex; flex-wrap: wrap; gap: 6px;
  transform: translateY(10px);
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.05s;
}
.project-card:hover .overlay-tags { transform: translateY(0); }

.overlay-tag {
  font-family: var(--font-sans); font-size: 7px;
  font-weight: 400; letter-spacing: 0.14em; text-transform: uppercase;
  color: rgba(245,235,208,0.85);
  background: rgba(127,1,31,0.55);
  border: 1px solid rgba(201,168,76,0.2);
  padding: 3px 9px; border-radius: 2px;
  backdrop-filter: blur(4px);
}

.overlay-label {
  font-family: var(--font-upright); font-size: 22px; font-weight: 300;
  color: var(--cream); letter-spacing: 0.02em;
  transform: translateY(8px);
  transition: transform 0.4s cubic-bezier(0.16,1,0.3,1) 0.1s;
}
.project-card:hover .overlay-label { transform: translateY(0); }

/* ── Info panel ── */
.project-info {
  padding: 52px 48px;
  display: flex; flex-direction: column; justify-content: center; gap: 16px;
  position: relative;
  overflow: hidden;
}

/* Subtle radial glow in corner on hover */
.project-info::after {
  content: '';
  position: absolute; bottom: -60px; right: -60px;
  width: 180px; height: 180px; border-radius: 50%;
  background: radial-gradient(circle, rgba(127,1,31,0.12) 0%, transparent 70%);
  opacity: 0;
  transition: opacity 0.5s ease;
  pointer-events: none;
}
.project-card:hover .project-info::after { opacity: 1; }

.project-number {
  font-family: var(--font-upright); font-size: 88px; font-weight: 300;
  color: rgba(245,235,208,0.035); line-height: 1;
  user-select: none; position: absolute; top: 18px; right: 30px;
  transition: color 0.4s ease, transform 0.4s ease;
}
.project-card:hover .project-number {
  color: rgba(201,168,76,0.07);
  transform: translateX(-6px) scale(1.04);
}
.projects-section.light .project-number { color: rgba(127,1,31,0.05); }
.projects-section.light .project-card:hover .project-number { color: rgba(127,1,31,0.09); }

.project-title {
  font-family: var(--font-upright);
  font-size: clamp(28px, 3vw, 40px); font-weight: 300;
  color: var(--cream); line-height: 1.1; margin: 0;
  transition: letter-spacing 0.4s ease;
}
.project-card:hover .project-title { letter-spacing: 0.01em; }
.projects-section.light .project-title { color: var(--bark); }

.project-desc {
  font-family: var(--font-display); font-size: 14.5px; line-height: 1.78;
  color: rgba(245,235,208,0.5); max-width: 360px;
  transition: color 0.3s ease;
}
.project-card:hover .project-desc { color: rgba(245,235,208,0.7); }
.projects-section.light .project-desc { color: var(--stone); }
.projects-section.light .project-card:hover .project-desc { color: var(--bark); }

.project-actions { margin-top: 8px; }

.project-btn {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: var(--font-sans); font-size: 9px; font-weight: 500;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--cream); text-decoration: none;
  padding-bottom: 4px;
  border-bottom: 1px solid rgba(245,235,208,0.2);
  transition: all 0.28s ease;
  position: relative;
}
/* Underline grows from left on hover */
.project-btn::after {
  content: '';
  position: absolute; bottom: -1px; left: 0;
  width: 0; height: 1px;
  background: var(--gold);
  transition: width 0.32s cubic-bezier(0.16,1,0.3,1);
}
.project-btn:hover::after { width: 100%; }

.projects-section.light .project-btn {
  color: var(--crimson);
  border-bottom-color: rgba(127,1,31,0.2);
}
.projects-section.light .project-btn::after { background: var(--crimson); }

.project-btn:hover { color: var(--gold); border-bottom-color: transparent; gap: 15px; }
.projects-section.light .project-btn:hover { color: var(--bark); border-bottom-color: transparent; }
.project-btn svg { transition: transform 0.28s ease; }
.project-btn:hover svg { transform: translateX(5px); }

/* ── CTA ── */
.projects-cta { text-align: center; margin-top: 64px; position: relative; z-index: 1; }

.projects-cta-btn {
  display: inline-flex; align-items: center; gap: 12px;
  font-family: var(--font-sans); font-size: 9px; font-weight: 400;
  letter-spacing: 0.22em; text-transform: uppercase;
  color: rgba(245,235,208,0.5); text-decoration: none;
  border: 1px solid rgba(245,235,208,0.14); padding: 15px 32px;
  border-radius: 3px;
  transition: all 0.3s ease; backdrop-filter: blur(4px);
}
.projects-section.light .projects-cta-btn {
  color: var(--stone);
  border-color: rgba(127,1,31,0.18);
}

.projects-cta-btn:hover {
  color: var(--cream); border-color: rgba(245,235,208,0.38);
  background: rgba(245,235,208,0.05); gap: 16px;
}
.projects-section.light .projects-cta-btn:hover {
  color: var(--bark); border-color: rgba(127,1,31,0.4);
  background: rgba(127,1,31,0.04);
}

.projects-cta-btn svg { transition: transform 0.25s ease; }
.projects-cta-btn:hover svg { transform: translateX(4px); }

/* ── Responsive ── */
@media (max-width: 1024px) {
  .projects-section { padding: 80px 48px 96px; }
  .project-info { padding: 40px 36px; }
}
@media (max-width: 768px) {
  .home-left { min-height: 100svh; }
  .home-left-content { padding: 80px 16px 60px; }
  .home-name { font-size: clamp(24px, 8.5vw, 54px); white-space: nowrap; }
  .home-title { font-size: 15px; margin-bottom: 18px; }
  .home-cta-row { flex-direction: column; align-items: center; gap: 12px; width: 100%; max-width: 300px; }
  .btn-primary, .btn-ghost { width: 100%; justify-content: center; }
  .projects-section { padding: 64px 24px 80px; }
  .project-card-inner { grid-template-columns: 1fr; }
  .project-card--alt .project-card-inner { display: flex; flex-direction: column-reverse; }
  .project-visual { min-height: 240px; }
  .project-info { padding: 32px 28px; }
  .project-number { font-size: 60px; }
}
@media (max-width: 420px) {
  .home-name { font-size: clamp(22px, 8vw, 42px); white-space: nowrap; }
  .home-eyebrow { font-size: 7.5px; letter-spacing: 0.18em; }
  .home-eyebrow-wrap { padding: 7px 12px 7px 10px; }
}
@media (max-width: 360px) {
  .home-name { font-size: 7.8vw; white-space: nowrap; }
}
</style>