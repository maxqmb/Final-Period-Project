<!-- src/views/ContactPage.vue -->
<template>
  <main id="contact" aria-label="Contact">

    <!-- ── HERO: Full-screen cinematic opener ── -->
    <section class="contact-hero">
      <canvas ref="contactCanvas" class="contact-canvas" aria-hidden="true"></canvas>

      <div class="contact-hero-inner">
        <!-- Availability badge -->
        <div class="contact-badge">
          <span class="badge-dot"></span>
          Available for work
        </div>

        <!-- Giant animated title -->
        <h1 class="contact-big-title">
          Let's Build
          <span class="word-accent">Something.</span>
        </h1>

        <p class="contact-subtitle">
          Got a project in mind? I'd love to hear it — let's turn your idea into something remarkable.
        </p>

        <!-- CTAs -->
        <div class="contact-hero-cta">
          <a href="mailto:maxxquiambao@gmail.com" class="btn-hero-primary">
            <span>Start a Conversation</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
          <a href="#contact-form" class="btn-hero-ghost" @click.prevent="scrollToForm">
            Or send a message
          </a>
        </div>
      </div>

      <!-- Scroll cue -->
      <div class="contact-scroll-cue" aria-hidden="true">
        <div class="scroll-mouse"></div>
        <span class="scroll-cue-text">Scroll</span>
      </div>
    </section>

    <!-- ── BODY: Form + Info ── -->
    <div class="contact-body" id="contact-form">

      <!-- LEFT: Form -->
      <div class="contact-left">
        <p class="contact-section-label">Get in touch</p>
        <h2 class="contact-form-title">Send Me a<br>Message.</h2>

        <!-- Formspree form: POST to your endpoint, no JS fetch needed -->
        <form
          action="https://formspree.io/f/xeokdwgr"
          method="POST"
          @submit="onSubmit"
          novalidate
          aria-label="Contact form"
        >
          <!-- Formspree uses "_replyto" to capture the sender email -->
          <input type="hidden" name="_replyto" :value="form.email" />
          <!-- Redirect back to your page after submission (optional) -->
          <input type="hidden" name="_next" value="/" />

          <div class="form-row">
            <div class="form-group">
              <label class="form-label" for="contact-name">Full Name</label>
              <input
                id="contact-name"
                class="form-input"
                type="text"
                name="name"
                v-model="form.name"
                placeholder="Your name"
                required
                aria-required="true"
              />
            </div>
            <div class="form-group">
              <label class="form-label" for="contact-email">Email Address</label>
              <input
                id="contact-email"
                class="form-input"
                type="email"
                name="email"
                v-model="form.email"
                placeholder="your@email.com"
                required
                aria-required="true"
              />
            </div>
          </div>

          <div class="form-group">
            <label class="form-label" for="contact-phone">
              Phone <span class="optional-label">— optional</span>
            </label>
            <input
              id="contact-phone"
              class="form-input"
              type="tel"
              name="phone"
              v-model="form.phone"
              placeholder="+63 900 000 0000"
            />
          </div>

          <div class="form-group">
            <label class="form-label" for="contact-message">Your Message</label>
            <textarea
              id="contact-message"
              class="form-input"
              name="message"
              v-model="form.message"
              placeholder="Tell me about your project, timeline, and what you're looking for..."
              required
              aria-required="true"
            ></textarea>
          </div>

          <button type="submit" class="form-submit" :disabled="isSubmitting" aria-label="Send message">
            <span>{{ isSubmitting ? 'Sending…' : 'Send Message' }}</span>
            <svg v-if="!isSubmitting" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7H13M13 7L8 2M13 7L8 12" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>

          <transition name="success-fade">
            <div v-if="formSent" class="success-msg" role="status" aria-live="polite">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
              Message sent! I'll reply within 24 hours.
            </div>
          </transition>

          <transition name="success-fade">
            <div v-if="formError" class="error-msg" role="alert" aria-live="polite">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/>
              </svg>
              Something went wrong. Please try again or email me directly.
            </div>
          </transition>
        </form>
      </div>

      <!-- RIGHT: Dark info panel -->
      <div class="contact-right">
        <div class="contact-info-section">
          <p class="contact-info-eyebrow">Contact info</p>
          <h2 class="contact-info-title">
            Let's Connect<br>
            <em class="title-ghost">directly.</em>
          </h2>

          <div class="contact-info">
            <div class="info-item">
              <div class="info-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div class="info-text-label">Based in</div>
                <span class="info-text-val">Tarlac, Philippines</span>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <div class="info-text-label">Email</div>
                <a href="mailto:maxxquiambao@gmail.com" class="info-text-val">maxxquiambao@gmail.com</a>
              </div>
            </div>

            <div class="info-item">
              <div class="info-icon" aria-hidden="true">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <div>
                <div class="info-text-label">Phone</div>
                <a href="tel:+639171872221" class="info-text-val">0917-187-2221</a>
              </div>
            </div>
          </div>

          <!-- Availability card -->
          <div class="availability-card">
            <div class="avail-status">
              <span class="avail-dot"></span>
              Currently Available
            </div>
            <p class="avail-text">
              Open to internships, freelance projects, and full-time roles in frontend development &amp; UI/UX design.
            </p>
          </div>

          <!-- Socials -->
          <div class="social-links">
            <p class="social-label">Find me online</p>
            <div class="social-row">
              <a href="https://github.com/maxqmb" target="_blank" rel="noopener" class="social-btn" aria-label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/max-quiambao-a8952a341/" target="_blank" rel="noopener" class="social-btn" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://x.com/hmmaxx" target="_blank" rel="noopener" class="social-btn" aria-label="Twitter/X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted } from 'vue'

/* ── Form state ── */
const formSent     = ref(false)
const formError    = ref(false)
const isSubmitting = ref(false)

const form = reactive({ name: '', email: '', phone: '', message: '' })

async function onSubmit(e) {
  e.preventDefault()
  if (!form.name || !form.email || !form.message) return

  isSubmitting.value = true
  formError.value    = false
  formSent.value     = false

  try {
    const data = new FormData()
    data.append('name',    form.name)
    data.append('email',   form.email)
    data.append('phone',   form.phone || '')
    data.append('message', form.message)

    const res = await fetch('https://formspree.io/f/mlgwaevd', {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data,
    })

    const json = await res.json()
    console.log('Formspree response:', res.status, json)

    if (res.ok) {
      formSent.value = true
      form.name = ''; form.email = ''; form.phone = ''; form.message = ''
      setTimeout(() => { formSent.value = false }, 6000)
    } else {
      console.error('Formspree error details:', json.errors)
      formError.value = true
      setTimeout(() => { formError.value = false }, 6000)
    }
  } catch (err) {
    console.error('Network/fetch error:', err)
    formError.value = true
    setTimeout(() => { formError.value = false }, 6000)
  } finally {
    isSubmitting.value = false
  }
}

function scrollToForm() {
  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
}

/* ── Canvas constellation animation ── */
const contactCanvas = ref(null)
let animId = null

function initCanvas() {
  const canvas = contactCanvas.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')

  function resize() {
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }
  resize()
  window.addEventListener('resize', resize)

  const pts = Array.from({ length: 70 }, () => ({
    x:       Math.random(),
    y:       Math.random(),
    size:    0.6 + Math.random() * 1.4,
    vx:      (Math.random() - 0.5) * 0.00014,
    vy:      (Math.random() - 0.5) * 0.00014,
    opacity: 0.06 + Math.random() * 0.18,
    pulse:   Math.random() * Math.PI * 2,
    speed:   0.012 + Math.random() * 0.016,
  }))

  let mx = 0.5, my = 0.5
  window.addEventListener('mousemove', e => {
    mx = e.clientX / window.innerWidth
    my = e.clientY / window.innerHeight
  })

  function drawConnections(W, H) {
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = (pts[i].x - pts[j].x) * W
        const dy = (pts[i].y - pts[j].y) * H
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 130) {
          ctx.strokeStyle = `rgba(201,168,76,${(1 - dist / 130) * 0.07})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(pts[i].x * W, pts[i].y * H)
          ctx.lineTo(pts[j].x * W, pts[j].y * H)
          ctx.stroke()
        }
      }
    }
  }

  function draw() {
    const W = canvas.width, H = canvas.height
    ctx.clearRect(0, 0, W, H)

    const grad = ctx.createRadialGradient(mx * W, my * H, 0, mx * W, my * H, W * 0.55)
    grad.addColorStop(0,   'rgba(127,1,31,0.12)')
    grad.addColorStop(0.5, 'rgba(90,0,20,0.05)')
    grad.addColorStop(1,   'rgba(0,0,0,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, W, H)

    drawConnections(W, H)

    pts.forEach(p => {
      p.pulse += p.speed
      p.x += p.vx + (mx - 0.5) * 0.000025
      p.y += p.vy + (my - 0.5) * 0.000025
      if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0
      if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0

      const a = p.opacity * (0.65 + 0.35 * Math.sin(p.pulse))
      ctx.fillStyle = `rgba(201,168,76,${a})`
      ctx.beginPath()
      ctx.arc(p.x * W, p.y * H, p.size, 0, Math.PI * 2)
      ctx.fill()
    })

    animId = requestAnimationFrame(draw)
  }

  draw()
}

onMounted(() => { initCanvas() })
onUnmounted(() => { if (animId) cancelAnimationFrame(animId) })
</script>

<style scoped>
/* ── CSS variables (match your global theme) ── */
:root {
  --crimson:      #7f011f;
  --crimson-light: #a3022a;
  --crimson-dark:  #5c0116;
  --cream:        #f5ebd0;
  --cream-dark:   #eddfc0;
  --warm-white:   #faf7f0;
  --charcoal:     #1a1410;
  --bark:         #3d2b1f;
  --stone:        #8a7a6e;
  --stone-light:  #b5a89c;
  --gold:         #c9a84c;
  --gold-light:   #e2c47a;
  --font-display: 'Cormorant Garamond', serif;
  --font-upright: 'Cormorant Upright', serif;
  --font-sans:    'Unbounded', sans-serif;
  --transition:   0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

/* ════════════════════════════════════════
   BASE
════════════════════════════════════════ */
#contact {
  background: #0e0b09;
  font-family: var(--font-display);
}

/* ════════════════════════════════════════
   HERO — full-screen cinematic
════════════════════════════════════════ */
.contact-hero {
  min-height: 100vh;
  background: #0e0b09;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 80px 40px;
}

.contact-hero::before {
  content: '';
  position: absolute;
  width: 700px; height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle,
    rgba(127,1,31,0.32) 0%,
    rgba(90,0,20,0.10) 45%,
    transparent 70%);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: heroGlow 6s ease-in-out infinite;
  pointer-events: none;
}

.contact-hero::after {
  content: '';
  position: absolute;
  width: 880px; height: 880px;
  border-radius: 50%;
  border: 1px solid rgba(201,168,76,0.07);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: orbitSpin 30s linear infinite;
  pointer-events: none;
}

@keyframes heroGlow {
  0%, 100% { transform: translate(-50%,-50%) scale(1);    opacity: 0.8; }
  50%       { transform: translate(-50%,-50%) scale(1.14); opacity: 1;   }
}

@keyframes orbitSpin {
  from { transform: translate(-50%,-50%) rotate(0deg); }
  to   { transform: translate(-50%,-50%) rotate(360deg); }
}

.contact-hero .contact-hero-inner::before {
  content: '';
  position: absolute;
  width: 560px; height: 560px;
  border-radius: 50%;
  border: 1px solid rgba(245,235,208,0.04);
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  animation: orbitSpin 18s linear infinite reverse;
  pointer-events: none;
}

.contact-canvas {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  z-index: 0;
}

.contact-hero-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 860px;
}

/* ── Availability badge ── */
.contact-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(201,168,76,0.07);
  border: 1px solid rgba(201,168,76,0.2);
  border-radius: 100px;
  padding: 9px 22px;
  margin-bottom: 52px;
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.32em;
  text-transform: uppercase;
  color: var(--gold-light);
  opacity: 0;
  animation: fadeUp 0.6s ease 0.2s forwards;
}

.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 9px #4ade80;
  animation: pulseDot 2s ease-in-out infinite;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%       { opacity: 0.45; transform: scale(0.65); }
}

/* ── Giant title ── */
.contact-big-title {
  font-family: var(--font-upright);
  font-size: clamp(62px, 9.5vw, 132px);
  font-weight: 300;
  line-height: 0.94;
  color: var(--cream);
  letter-spacing: -0.01em;
  margin-bottom: 28px;
  opacity: 0;
  animation: revealUp 1s cubic-bezier(0.16,1,0.3,1) 0.4s forwards;
}

.word-accent {
  display: block;
  font-style: italic;
  animation: wordColorCycle 5s ease-in-out infinite;
}

@keyframes wordColorCycle {
  0%   { color: #e2c47a;                        -webkit-text-stroke: 0px; }
  25%  { color: #c9a84c;                        -webkit-text-stroke: 0px; }
  50%  { color: #7f011f;                        -webkit-text-stroke: 0px; }
  65%  { color: transparent;
         -webkit-text-stroke: 1px rgba(245,235,208,0.4); }
  80%  { color: rgba(245,235,208,0.85);         -webkit-text-stroke: 0px; }
  100% { color: #e2c47a;                        -webkit-text-stroke: 0px; }
}

/* ── Subtitle ── */
.contact-subtitle {
  font-family: var(--font-display);
  font-size: clamp(16px, 1.8vw, 20px);
  font-weight: 300;
  font-style: italic;
  color: rgba(245,235,208,0.38);
  margin-bottom: 56px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.65s forwards;
}

/* ── CTA row ── */
.contact-hero-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.9s forwards;
}

.btn-hero-primary {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: var(--cream);
  color: var(--crimson);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 18px 44px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: color 0.38s ease;
}

.btn-hero-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #1a1410;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.42s cubic-bezier(0.76,0,0.24,1);
}

.btn-hero-primary:hover { color: var(--cream); }
.btn-hero-primary:hover::before { transform: scaleX(1); transform-origin: left; }
.btn-hero-primary span,
.btn-hero-primary svg { position: relative; z-index: 1; }
.btn-hero-primary svg { transition: transform 0.28s ease; }
.btn-hero-primary:hover svg { transform: rotate(-45deg); }

.btn-hero-ghost {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  border: 1px solid rgba(245,235,208,0.18);
  color: rgba(245,235,208,0.48);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 300;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  padding: 17px 32px;
  text-decoration: none;
  transition: all 0.3s ease;
  background: transparent;
  cursor: pointer;
}

.btn-hero-ghost:hover {
  border-color: rgba(245,235,208,0.45);
  color: var(--cream);
  background: rgba(245,235,208,0.04);
}

/* ── Scroll mouse ── */
.contact-scroll-cue {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  opacity: 0;
  animation: fadeUp 0.6s ease 1.4s forwards;
  z-index: 2;
}

.scroll-mouse {
  width: 22px; height: 34px;
  border: 1.5px solid rgba(245,235,208,0.18);
  border-radius: 11px;
  position: relative;
}

.scroll-mouse::after {
  content: '';
  position: absolute;
  width: 3px; height: 6px;
  background: rgba(245,235,208,0.35);
  border-radius: 2px;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  animation: scrollBob 1.9s ease-in-out infinite;
}

@keyframes scrollBob {
  0%, 100% { transform: translateX(-50%) translateY(0);    opacity: 1; }
  80%       { transform: translateX(-50%) translateY(10px); opacity: 0; }
}

.scroll-cue-text {
  font-family: var(--font-sans);
  font-size: 7px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(245,235,208,0.18);
}

/* ════════════════════════════════════════
   BODY GRID — form | info
════════════════════════════════════════ */
.contact-body {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  background: var(--warm-white);
}

/* ── LEFT: Form ── */
.contact-left {
  padding: 80px 72px;
  background: var(--warm-white);
  position: relative;
}

.contact-left::before {
  content: '';
  position: absolute;
  left: 0; top: 80px; bottom: 80px;
  width: 2px;
  background: linear-gradient(
    to bottom,
    transparent,
    var(--crimson) 30%,
    var(--gold) 70%,
    transparent
  );
}

.contact-section-label {
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--crimson);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-section-label::before {
  content: '';
  width: 24px; height: 1px;
  background: var(--crimson);
  flex-shrink: 0;
}

.contact-form-title {
  font-family: var(--font-upright);
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 300;
  color: var(--bark);
  margin-bottom: 52px;
  line-height: 1.1;
}

/* ── Form inputs ── */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group {
  margin-bottom: 32px;
  position: relative;
}

.form-label {
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--stone);
  display: block;
  margin-bottom: 10px;
  transition: color 0.25s ease;
}

.optional-label {
  opacity: 0.45;
  font-size: 7px;
  text-transform: none;
  letter-spacing: 0;
}

.form-group:focus-within .form-label { color: var(--crimson); }

.form-input {
  width: 100%;
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(61,43,31,0.14);
  padding: 12px 0;
  font-family: var(--font-display);
  font-size: 17px;
  color: var(--bark);
  outline: none;
  transition: border-color 0.3s ease;
}

.form-group::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0;
  width: 0; height: 1px;
  background: var(--crimson);
  transition: width 0.42s cubic-bezier(0.76,0,0.24,1);
}

.form-group:focus-within::after { width: 100%; }
.form-group:focus-within .form-input { border-color: transparent; }

.form-input::placeholder { color: rgba(138,122,110,0.38); }

textarea.form-input {
  resize: none;
  min-height: 100px;
  line-height: 1.7;
}

/* ── Submit button ── */
.form-submit {
  display: inline-flex;
  align-items: center;
  gap: 14px;
  background: var(--crimson);
  color: var(--cream);
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  padding: 18px 52px;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.3s ease, opacity 0.2s ease;
}

.form-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.form-submit::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #1a1410;
  transform: translateY(100%);
  transition: transform 0.42s cubic-bezier(0.76,0,0.24,1);
}

.form-submit:not(:disabled):hover { box-shadow: 0 8px 36px rgba(127,1,31,0.38); }
.form-submit:not(:disabled):hover::before { transform: translateY(0); }
.form-submit span,
.form-submit svg { position: relative; z-index: 1; }
.form-submit svg { transition: transform 0.28s ease; }
.form-submit:not(:disabled):hover svg { transform: translateX(4px); }

/* ── Success message ── */
.success-msg {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(74,222,128,0.07);
  border: 1px solid rgba(74,222,128,0.3);
  padding: 16px 20px;
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: 15px;
  color: #4ade80;
}

/* ── Error message ── */
.error-msg {
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(127,1,31,0.07);
  border: 1px solid rgba(127,1,31,0.3);
  padding: 16px 20px;
  margin-top: 16px;
  font-family: var(--font-display);
  font-size: 15px;
  color: var(--crimson);
}

.success-fade-enter-active { transition: all 0.4s ease; }
.success-fade-leave-active { transition: all 0.3s ease; }
.success-fade-enter-from,
.success-fade-leave-to   { opacity: 0; transform: translateY(-8px); }

/* ════════════════════════════════════════
   RIGHT: Dark info panel
════════════════════════════════════════ */
.contact-right {
  padding: 80px 64px;
  background: #0e0b09;
  position: relative;
  overflow: hidden;
}

.contact-right::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle, rgba(245,235,208,0.04) 1px, transparent 1px);
  background-size: 26px 26px;
  pointer-events: none;
}

.contact-right::after {
  content: 'MQ';
  position: absolute;
  bottom: -40px; right: -16px;
  font-family: var(--font-upright);
  font-size: 220px;
  font-weight: 300;
  color: rgba(245,235,208,0.025);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.contact-info-section { position: relative; z-index: 1; }

.contact-info-eyebrow {
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold-light);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.contact-info-eyebrow::before {
  content: '';
  width: 24px; height: 1px;
  background: var(--gold-light);
}

.contact-info-title {
  font-family: var(--font-upright);
  font-size: clamp(28px, 3vw, 42px);
  font-weight: 300;
  color: var(--cream);
  margin-bottom: 52px;
  line-height: 1.1;
}

.title-ghost {
  font-style: italic;
  color: rgba(245,235,208,0.28);
}

/* ── Info rows ── */
.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 26px;
  padding-bottom: 26px;
  border-bottom: 1px solid rgba(245,235,208,0.05);
  transition: all 0.25s ease;
}

.info-item:last-child { border-bottom: none; }
.info-item:hover { transform: translateX(4px); }

.info-icon {
  width: 42px; height: 42px;
  border: 1px solid rgba(245,235,208,0.09);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--gold-light);
  transition: all 0.3s ease;
}

.info-item:hover .info-icon {
  background: rgba(127,1,31,0.28);
  border-color: rgba(127,1,31,0.5);
  color: var(--cream);
}

.info-text-label {
  font-family: var(--font-sans);
  font-size: 7.5px;
  font-weight: 300;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(245,235,208,0.28);
  margin-bottom: 5px;
}

.info-text-val {
  font-family: var(--font-display);
  font-size: 15px;
  color: rgba(245,235,208,0.68);
  text-decoration: none;
  transition: color 0.25s ease;
}

.info-text-val:hover { color: var(--cream); }

/* ── Availability card ── */
.availability-card {
  margin-top: 36px;
  padding: 24px 28px;
  border: 1px solid rgba(245,235,208,0.07);
  background: rgba(245,235,208,0.025);
  position: relative;
  overflow: hidden;
}

.availability-card::before {
  content: '';
  position: absolute;
  left: 0; top: 0; bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, var(--gold), var(--crimson));
}

.avail-status {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #4ade80;
  margin-bottom: 10px;
}

.avail-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #4ade80;
  box-shadow: 0 0 10px #4ade80;
  animation: pulseDot 2s ease-in-out infinite;
}

.avail-text {
  font-family: var(--font-display);
  font-size: 15px;
  font-style: italic;
  color: rgba(245,235,208,0.45);
  line-height: 1.6;
}

/* ── Social buttons ── */
.social-links { margin-top: 40px; }

.social-label {
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(245,235,208,0.22);
  margin-bottom: 18px;
}

.social-row { display: flex; gap: 10px; }

.social-btn {
  width: 46px; height: 46px;
  border: 1px solid rgba(245,235,208,0.09);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(245,235,208,0.32);
  text-decoration: none;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s ease, color 0.3s ease;
}

.social-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: var(--crimson);
  border-radius: 50%;
  transform: scale(0);
  transition: transform 0.32s cubic-bezier(0.34,1.56,0.64,1);
}

.social-btn:hover { border-color: var(--crimson); color: #fff; }
.social-btn:hover::before { transform: scale(1); }
.social-btn svg { position: relative; z-index: 1; }

/* ════════════════════════════════════════
   ANIMATIONS
════════════════════════════════════════ */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes revealUp {
  from { opacity: 0; transform: translateY(40px) skewY(1.5deg); }
  to   { opacity: 1; transform: translateY(0)    skewY(0deg); }
}

/* ════════════════════════════════════════
   RESPONSIVE
════════════════════════════════════════ */
@media (max-width: 1024px) {
  .contact-left  { padding: 64px 48px; }
  .contact-right { padding: 64px 48px; }
}

@media (max-width: 768px) {
  .contact-hero {
    padding: 80px 24px 72px;
    min-height: 90svh;
  }

  .contact-hero::before { width: 400px; height: 400px; }
  .contact-hero::after  { width: 560px; height: 560px; }

  .contact-big-title { font-size: clamp(44px, 12vw, 72px); }
  .contact-subtitle  { font-size: 16px; }

  .contact-hero-cta {
    flex-direction: column;
    gap: 12px;
  }

  .btn-hero-primary,
  .btn-hero-ghost {
    width: 100%;
    max-width: 320px;
    justify-content: center;
  }

  .contact-body { grid-template-columns: 1fr; }

  .contact-left  { padding: 52px 24px; }
  .contact-right { padding: 52px 24px; }

  .form-row { grid-template-columns: 1fr; gap: 0; }

  .availability-card { padding: 20px 20px; }
}

@media (max-width: 420px) {
  .contact-big-title { font-size: clamp(38px, 11vw, 56px); }
  .contact-left,
  .contact-right { padding: 40px 20px; }
  .contact-left::before { display: none; }
}
</style>