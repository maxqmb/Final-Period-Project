
<!-- src/views/ContactPage.vue -->

<template>
  <main id="contact" aria-label="Contact">

    <!-- HERO SECTION -->
    <section
      class="contact-hero"
      :class="{ 'is-light': !isDark }"
    >
      <canvas
        ref="contactCanvas"
        class="contact-canvas"
        aria-hidden="true"
      ></canvas>

      <div class="contact-hero-inner">
        <h1 class="contact-big-title">
          Let's Build
          <span class="word-accent">Something.</span>
        </h1>

        <p class="contact-subtitle">
          Got a project in mind? I'd love to hear it —
          let's turn your idea into something remarkable.
        </p>

        <div class="contact-hero-cta">
          <a
            href="mailto:maxxquiambao@gmail.com"
            class="btn-hero-primary"
          >
            <span>Start a Conversation</span>

            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>

          <a
            href="#contact-form"
            class="btn-hero-ghost"
            @click.prevent="scrollToForm"
          >
            Or send a message
          </a>
        </div>
      </div>
    </section>

    <!-- CONTACT BODY -->
    <div class="contact-body" id="contact-form">

      <!-- LEFT: CONTACT FORM -->
      <div class="contact-left">
        <p class="contact-section-label">
          Get in touch
        </p>

        <h2 class="contact-form-title">
          Send Me a<br>Message.
        </h2>

        <form
          action="https://formspree.io/f/mlgwaevd"
          method="POST"
          @submit="onSubmit"
          novalidate
          aria-label="Contact form"
        >
          <input
            type="hidden"
            name="_replyto"
            :value="form.email"
          />

          <input
            type="hidden"
            name="_next"
            value="/"
          />

          <div class="form-row">
            <div class="form-group">
              <label
                class="form-label"
                for="contact-name"
              >
                Full Name
              </label>

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
              <label
                class="form-label"
                for="contact-email"
              >
                Email Address
              </label>

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
            <label
              class="form-label"
              for="contact-phone"
            >
              Phone
              <span class="optional-label">
                — optional
              </span>
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
            <label
              class="form-label"
              for="contact-message"
            >
              Your Message
            </label>

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

          <button
            type="submit"
            class="form-submit"
            :disabled="isSubmitting"
            aria-label="Send message"
          >
            <span>
              {{ isSubmitting ? 'Sending…' : 'Send Message' }}
            </span>

            <svg
              v-if="!isSubmitting"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 7H13M13 7L8 2M13 7L8 12"
                stroke="currentColor"
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <transition name="success-fade">
            <div
              v-if="formSent"
              class="success-msg"
              role="status"
              aria-live="polite"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5"/>
              </svg>

              Message sent! I'll reply within 24 hours.
            </div>
          </transition>

          <transition name="success-fade">
            <div
              v-if="formError"
              class="error-msg"
              role="alert"
              aria-live="polite"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 8v4M12 16h.01"/>
              </svg>

              Something went wrong. Please try again
              or email me directly.
            </div>
          </transition>
        </form>
      </div>

      <!-- RIGHT: CONTACT INFORMATION -->
      <div class="contact-right">
        <div class="contact-info-section">

          <p class="contact-info-eyebrow">
            Contact info
          </p>

          <h2 class="contact-info-title">
            Let's Connect<br>
            <em class="title-ghost">directly.</em>
          </h2>

          <div class="contact-info">

            <!-- LOCATION -->
            <div class="info-item">
              <div class="info-icon" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>

              <div>
                <div class="info-text-label">
                  Based in
                </div>

                <span class="info-text-val">
                  Tarlac, Philippines
                </span>
              </div>
            </div>

            <!-- EMAIL -->
            <div class="info-item">
              <div class="info-icon" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>

              <div>
                <div class="info-text-label">
                  Email
                </div>

                <a
                  href="mailto:maxxquiambao@gmail.com"
                  class="info-text-val"
                >
                  maxxquiambao@gmail.com
                </a>
              </div>
            </div>

            <!-- PHONE -->
            <div class="info-item">
              <div class="info-icon" aria-hidden="true">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4a2 2 0 0 1 2-2.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>

              <div>
                <div class="info-text-label">
                  Phone
                </div>

                <a
                  href="tel:+639171872221"
                  class="info-text-val"
                >
                  0917-187-2221
                </a>
              </div>
            </div>
          </div>

          <!-- SOCIAL LINKS -->
          <div class="social-links">
            <p class="social-label">
              Find me online
            </p>

            <div class="social-row">

              <!-- GITHUB -->
              <a
                href="https://github.com/maxqmb"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn"
                aria-label="GitHub"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.929.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              <!-- LINKEDIN -->
              <a
                href="https://www.linkedin.com/in/max-quiambao-a8952a341/"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn"
                aria-label="LinkedIn"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              <!-- TWITTER / X -->
              <a
                href="https://x.com/hmmaxx"
                target="_blank"
                rel="noopener noreferrer"
                class="social-btn"
                aria-label="Twitter/X"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
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
import {
  ref,
  reactive,
  onMounted,
  onUnmounted
} from 'vue'

const formSent = ref(false)
const formError = ref(false)
const isSubmitting = ref(false)
const isDark = ref(true)

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

async function onSubmit(e) {
  e.preventDefault()

  if (
    !form.name.trim() ||
    !form.email.trim() ||
    !form.message.trim()
  ) {
    formError.value = true
    return
  }

  isSubmitting.value = true
  formError.value = false
  formSent.value = false

  try {
    const data = new FormData()

    data.append('name', form.name)
    data.append('email', form.email)
    data.append('phone', form.phone || '')
    data.append('message', form.message)

    const res = await fetch(
      'https://formspree.io/f/mlgwaevd',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json'
        },
        body: data
      }
    )

    if (res.ok) {
      formSent.value = true

      form.name = ''
      form.email = ''
      form.phone = ''
      form.message = ''

      setTimeout(() => {
        formSent.value = false
      }, 6000)
    } else {
      formError.value = true

      setTimeout(() => {
        formError.value = false
      }, 6000)
    }
  } catch {
    formError.value = true

    setTimeout(() => {
      formError.value = false
    }, 6000)
  } finally {
    isSubmitting.value = false
  }
}

function scrollToForm() {
  document
    .getElementById('contact-form')
    ?.scrollIntoView({
      behavior: 'smooth'
    })
}

/* ═══════════════════════════════════════════════════════════════
   CANVAS ENGINE

   Light mode → Realistic sun upper-right, brighter space sky
   Dark mode  → Sun arcs downward off-screen (like a real sunset)

   No rays, no Saturn, no moon
═══════════════════════════════════════════════════════════════ */

const contactCanvas = ref(null)

let animId = null
let globalT = 0

function getTheme() {
  return document.documentElement.getAttribute('data-theme') !== 'light'
}

/* ─────────────────────────────────────────────────────────────
   REALISTIC SUN

   Uses layered radial gradients only — no geometric rays.

   Mimics real solar photography:
   • Outer corona / zodiacal glow
   • Inner corona / chromosphere ring
   • Photosphere with limb darkening
   • Granulation texture
   • Faculae bright patches
   • Active-region shimmer animation
─────────────────────────────────────────────────────────────── */

function drawRealisticSun(ctx, cx, cy, R, alpha, t) {
  if (alpha < 0.005 || R < 1) return

  /* 0. Zodiacal / heliospheric glow */

  const zod = ctx.createRadialGradient(
    cx, cy, 0,
    cx, cy, R * 22
  )

  zod.addColorStop(0, `rgba(255,240,180,${0.055 * alpha})`)
  zod.addColorStop(0.06, `rgba(255,210,100,${0.042 * alpha})`)
  zod.addColorStop(0.18, `rgba(240,150,40,${0.022 * alpha})`)
  zod.addColorStop(0.40, `rgba(200,80,10,${0.010 * alpha})`)
  zod.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = zod
  ctx.fillRect(
    cx - R * 22,
    cy - R * 22,
    R * 44,
    R * 44
  )

  /* 1. Outer corona */

  const outerCorona = ctx.createRadialGradient(
    cx, cy, R * 1.2,
    cx, cy, R * 7
  )

  outerCorona.addColorStop(
    0,
    `rgba(255,230,160,${0.14 * alpha})`
  )
  outerCorona.addColorStop(
    0.25,
    `rgba(255,200,80,${0.07 * alpha})`
  )
  outerCorona.addColorStop(
    0.55,
    `rgba(220,120,20,${0.030 * alpha})`
  )
  outerCorona.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = outerCorona
  ctx.beginPath()
  ctx.arc(cx, cy, R * 7, 0, Math.PI * 2)
  ctx.fill()

  /* 2. Inner corona / chromosphere */

  const breathAmt = 1 + Math.sin(t * 0.014) * 0.012
  const innerR = R * breathAmt
  const chromoSize = innerR * 1.065

  const chromo = ctx.createRadialGradient(
    cx, cy, innerR * 0.98,
    cx, cy, chromoSize
  )

  chromo.addColorStop(
    0,
    `rgba(255,245,200,${0.22 * alpha})`
  )
  chromo.addColorStop(
    0.5,
    `rgba(255,200,80,${0.10 * alpha})`
  )
  chromo.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = chromo
  ctx.beginPath()
  ctx.arc(cx, cy, chromoSize, 0, Math.PI * 2)
  ctx.fill()

  /* 3. Photosphere disc with limb darkening */

  const photo = ctx.createRadialGradient(
    cx - innerR * 0.05,
    cy - innerR * 0.05,
    0,
    cx,
    cy,
    innerR
  )

  photo.addColorStop(0, `rgba(255,252,230,${alpha})`)
  photo.addColorStop(0.20, `rgba(255,245,200,${alpha})`)
  photo.addColorStop(0.50, `rgba(255,228,140,${alpha})`)
  photo.addColorStop(0.72, `rgba(255,200,80,${alpha})`)
  photo.addColorStop(0.88, `rgba(240,155,35,${alpha})`)
  photo.addColorStop(0.96, `rgba(210,100,12,${alpha * 0.92})`)
  photo.addColorStop(1, `rgba(170,55,5,${alpha * 0.70})`)

  ctx.fillStyle = photo
  ctx.beginPath()
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2)
  ctx.fill()

  /* 4. Granulation texture */

  ctx.save()
  ctx.beginPath()
  ctx.arc(cx, cy, innerR * 0.97, 0, Math.PI * 2)
  ctx.clip()

  const grainSeed = [
    { ox: 0.28, oy: -0.18, sz: 0.38, ph: 0.0 },
    { ox: -0.22, oy: 0.30, sz: 0.30, ph: 1.1 },
    { ox: 0.10, oy: 0.35, sz: 0.28, ph: 2.2 },
    { ox: -0.35, oy: -0.25, sz: 0.35, ph: 0.7 },
    { ox: 0.38, oy: 0.18, sz: 0.32, ph: 3.4 },
    { ox: -0.08, oy: -0.38, sz: 0.25, ph: 1.8 },
    { ox: 0.22, oy: -0.32, sz: 0.29, ph: 2.9 },
    { ox: -0.30, oy: 0.12, sz: 0.26, ph: 0.3 }
  ]

  grainSeed.forEach(g => {
    const drift = Math.sin(t * 0.006 + g.ph) * 0.04

    const gx = cx + (g.ox + drift) * innerR
    const gy = cy + (g.oy + drift * 0.7) * innerR
    const gr2 = innerR * g.sz

    const bright =
      0.038 + Math.sin(t * 0.009 + g.ph) * 0.012

    const grPatch = ctx.createRadialGradient(
      gx, gy, 0,
      gx, gy, gr2
    )

    grPatch.addColorStop(
      0,
      `rgba(255,252,220,${bright * alpha})`
    )
    grPatch.addColorStop(
      0.5,
      `rgba(255,235,160,${bright * 0.5 * alpha})`
    )
    grPatch.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.fillStyle = grPatch
    ctx.beginPath()
    ctx.arc(gx, gy, gr2, 0, Math.PI * 2)
    ctx.fill()
  })

  /* 5. Faculae */

  const faculae = [
    { angle: 0.4, dist: 0.82 },
    { angle: 1.8, dist: 0.88 },
    { angle: 3.2, dist: 0.84 },
    { angle: 4.7, dist: 0.86 },
    { angle: 5.8, dist: 0.83 }
  ]

  faculae.forEach(f => {
    const fAngle = f.angle + t * 0.003

    const fx =
      cx + Math.cos(fAngle) * f.dist * innerR
    const fy =
      cy + Math.sin(fAngle) * f.dist * innerR

    const fa =
      (0.032 + Math.sin(t * 0.011 + f.angle) * 0.010) *
      alpha

    const fPatch = ctx.createRadialGradient(
      fx, fy, 0,
      fx, fy, innerR * 0.18
    )

    fPatch.addColorStop(
      0,
      `rgba(255,255,245,${fa})`
    )
    fPatch.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.fillStyle = fPatch
    ctx.fillRect(
      cx - innerR,
      cy - innerR,
      innerR * 2,
      innerR * 2
    )
  })

  ctx.restore()

  /* 6. Specular atmospheric highlight */

  const spec = ctx.createRadialGradient(
    cx - innerR * 0.18,
    cy - innerR * 0.20,
    0,
    cx - innerR * 0.18,
    cy - innerR * 0.20,
    innerR * 0.52
  )

  spec.addColorStop(
    0,
    `rgba(255,255,255,${0.14 * alpha})`
  )
  spec.addColorStop(
    0.5,
    `rgba(255,252,230,${0.06 * alpha})`
  )
  spec.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = spec
  ctx.beginPath()
  ctx.arc(
    cx,
    cy,
    innerR * breathAmt,
    0,
    Math.PI * 2
  )
  ctx.fill()
}

/* ─────────────────────────────────────────────────────────────
   DRAW SCENE
─────────────────────────────────────────────────────────────── */

function drawScene(
  ctx,
  W,
  H,
  stars,
  nebulaPts,
  pts,
  mx,
  my,
  st
) {
  const t = globalT
  const light = 1 - st.darkBlend

  /* BACKGROUND */

  ctx.fillStyle = '#010001'
  ctx.fillRect(0, 0, W, H)

  if (light > 0.005) {

    /* Light mode ambient illumination */

    const ambient = ctx.createRadialGradient(
      W * 0.5,
      H * 0.5,
      0,
      W * 0.5,
      H * 0.5,
      W * 0.85
    )

    ambient.addColorStop(
      0,
      `rgba(22,10,42,${0.70 * light})`
    )
    ambient.addColorStop(
      0.5,
      `rgba(10,4,22,${0.50 * light})`
    )
    ambient.addColorStop(
      1,
      `rgba(4,2,10,${0.30 * light})`
    )

    ctx.fillStyle = ambient
    ctx.fillRect(0, 0, W, H)

    /* Solar illumination */

    const solar = ctx.createRadialGradient(
      W * 0.82,
      H * 0.13,
      0,
      W * 0.82,
      H * 0.13,
      W * 1.3
    )

    solar.addColorStop(
      0,
      `rgba(255,230,130,${0.24 * light})`
    )
    solar.addColorStop(
      0.08,
      `rgba(255,200,80,${0.18 * light})`
    )
    solar.addColorStop(
      0.22,
      `rgba(235,130,25,${0.10 * light})`
    )
    solar.addColorStop(
      0.45,
      `rgba(170,50,8,${0.042 * light})`
    )
    solar.addColorStop(
      0.70,
      `rgba(80,15,30,${0.015 * light})`
    )
    solar.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.fillStyle = solar
    ctx.fillRect(0, 0, W, H)

    /* Rayleigh scatter */

    const rayleigh = ctx.createLinearGradient(
      0, 0, W, H
    )

    rayleigh.addColorStop(
      0,
      `rgba(30,18,70,${0.28 * light})`
    )
    rayleigh.addColorStop(
      0.3,
      `rgba(18,10,50,${0.18 * light})`
    )
    rayleigh.addColorStop(
      0.65,
      `rgba(8,4,24,${0.08 * light})`
    )
    rayleigh.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.fillStyle = rayleigh
    ctx.fillRect(0, 0, W, H)

    /* Horizon scatter */

    const horizon = ctx.createRadialGradient(
      W * 0.08,
      H * 0.88,
      0,
      W * 0.08,
      H * 0.88,
      W * 0.75
    )

    horizon.addColorStop(
      0,
      `rgba(120,30,10,${0.06 * light})`
    )
    horizon.addColorStop(
      0.4,
      `rgba(60,10,5,${0.025 * light})`
    )
    horizon.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.fillStyle = horizon
    ctx.fillRect(0, 0, W, H)

  } else {

    /* Dark crimson space */

    const dark = ctx.createRadialGradient(
      W * 0.5,
      H * 0.42,
      0,
      W * 0.5,
      H * 0.42,
      W * 0.85
    )

    dark.addColorStop(0, '#1a0008')
    dark.addColorStop(0.4, '#0d0005')
    dark.addColorStop(1, '#020002')

    ctx.fillStyle = dark
    ctx.fillRect(0, 0, W, H)
  }

  /* NEBULA */

  const nebulaO = 0.75 + light * 0.65

  nebulaPts.forEach(n => {
    n.phase += 0.00035

    const nx =
      (n.x + Math.sin(n.phase) * 0.018) * W
    const ny =
      (n.y + Math.cos(n.phase * 0.75) * 0.013) * H
    const nr = n.r * Math.min(W, H)

    const ng = ctx.createRadialGradient(
      nx, ny, 0,
      nx, ny, nr
    )

    ng.addColorStop(
      0,
      `rgba(${n.r0},${n.g0},${n.b0},${n.a * nebulaO})`
    )
    ng.addColorStop(
      0.5,
      `rgba(${n.r1},${n.g1},${n.b1},${n.a * nebulaO * 0.38})`
    )
    ng.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.fillStyle = ng
    ctx.beginPath()
    ctx.arc(nx, ny, nr, 0, Math.PI * 2)
    ctx.fill()
  })

  /* SUN POSITION AND SUNSET */

  const restX = W * 0.82
  const restY = H * 0.13

  const setX = W * 0.92
  const setY = H * 1.18

  const arcEase =
    st.arcT * st.arcT * (3 - 2 * st.arcT)

  const sunCX =
    restX + (setX - restX) * arcEase
  const sunCY =
    restY + (setY - restY) * arcEase

  const sunBase = Math.min(W, H) * 0.075

  const sunR =
    sunBase *
    (1 - arcEase * 0.25) *
    st.sunScale

  drawRealisticSun(
    ctx,
    sunCX,
    sunCY,
    sunR,
    st.sunAlpha,
    t
  )

  /* Sunset atmospheric wash */

  if (arcEase > 0.15 && st.sunAlpha > 0.05) {
    const wash = arcEase * st.sunAlpha

    const setWash = ctx.createRadialGradient(
      sunCX,
      sunCY,
      0,
      sunCX,
      sunCY,
      W * 1.1
    )

    setWash.addColorStop(
      0,
      `rgba(255,120,20,${0.22 * wash})`
    )
    setWash.addColorStop(
      0.18,
      `rgba(200,50,5,${0.12 * wash})`
    )
    setWash.addColorStop(
      0.40,
      `rgba(120,15,2,${0.055 * wash})`
    )
    setWash.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.fillStyle = setWash
    ctx.fillRect(0, 0, W, H)

    if (arcEase > 0.55) {
      const bandA =
        ((arcEase - 0.55) / 0.45) *
        st.sunAlpha

      const horizon = ctx.createLinearGradient(
        0,
        sunCY - sunR * 3,
        0,
        sunCY + sunR * 6
      )

      horizon.addColorStop(0, 'rgba(0,0,0,0)')
      horizon.addColorStop(
        0.3,
        `rgba(255,100,10,${0.18 * bandA})`
      )
      horizon.addColorStop(
        0.5,
        `rgba(200,40,5,${0.12 * bandA})`
      )
      horizon.addColorStop(
        0.7,
        `rgba(120,15,2,${0.06 * bandA})`
      )
      horizon.addColorStop(1, 'rgba(0,0,0,0)')

      ctx.fillStyle = horizon
      ctx.fillRect(0, 0, W, H)
    }
  }

  /* STARS */

  const starBright =
    0.22 + st.darkBlend * 0.78

  stars.forEach(s => {
    s.pulse += s.speed

    const twinkle =
      0.55 + 0.45 * Math.sin(s.pulse)

    const a =
      s.opacity * twinkle * starBright

    if (a < 0.01) return

    if (s.size > 1.2) {
      ctx.strokeStyle =
        `rgba(${s.r},${s.g},${s.b},${a * 0.35})`

      ctx.lineWidth = 0.4

      const sl = s.size * 2.4

      ctx.beginPath()
      ctx.moveTo(s.x * W - sl, s.y * H)
      ctx.lineTo(s.x * W + sl, s.y * H)
      ctx.moveTo(s.x * W, s.y * H - sl)
      ctx.lineTo(s.x * W, s.y * H + sl)
      ctx.stroke()
    }

    ctx.fillStyle =
      `rgba(${s.r},${s.g},${s.b},${a})`

    ctx.beginPath()
    ctx.arc(
      s.x * W,
      s.y * H,
      s.size,
      0,
      Math.PI * 2
    )
    ctx.fill()
  })

  /* CONSTELLATION LINES */

  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx =
        (pts[i].x - pts[j].x) * W
      const dy =
        (pts[i].y - pts[j].y) * H

      const dist = Math.sqrt(
        dx * dx + dy * dy
      )

      if (dist < 140) {
        const lineA =
          (1 - dist / 140) *
          (st.darkBlend > 0.5 ? 0.07 : 0.08)

        ctx.strokeStyle =
          `rgba(201,168,76,${lineA})`

        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(
          pts[i].x * W,
          pts[i].y * H
        )
        ctx.lineTo(
          pts[j].x * W,
          pts[j].y * H
        )
        ctx.stroke()
      }
    }
  }

  /* GOLD PARTICLES */

  pts.forEach(p => {
    p.pulse += p.speed

    p.x +=
      p.vx + (mx - 0.5) * 0.00002
    p.y +=
      p.vy + (my - 0.5) * 0.00002

    if (p.x < 0) p.x = 1
    if (p.x > 1) p.x = 0
    if (p.y < 0) p.y = 1
    if (p.y > 1) p.y = 0

    const a =
      p.opacity *
      (0.65 + 0.35 * Math.sin(p.pulse)) *
      (st.darkBlend > 0.5 ? 1 : 1.1)

    ctx.fillStyle =
      `rgba(201,168,76,${a})`

    ctx.beginPath()
    ctx.arc(
      p.x * W,
      p.y * H,
      p.size,
      0,
      Math.PI * 2
    )
    ctx.fill()
  })

  /* MOUSE GLOW */

  const mG = ctx.createRadialGradient(
    mx * W,
    my * H,
    0,
    mx * W,
    my * H,
    W * 0.40
  )

  mG.addColorStop(
    0,
    `rgba(127,1,31,${st.darkBlend > 0.5 ? 0.10 : 0.04})`
  )
  mG.addColorStop(0.5, 'rgba(0,0,0,0)')
  mG.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.fillStyle = mG
  ctx.fillRect(0, 0, W, H)

  /* VIGNETTE */

  const vig = ctx.createRadialGradient(
    W * 0.5,
    H * 0.5,
    H * 0.08,
    W * 0.5,
    H * 0.5,
    W * 0.88
  )

  vig.addColorStop(0, 'rgba(0,0,0,0)')
  vig.addColorStop(
    1,
    `rgba(0,0,0,${st.darkBlend > 0.5 ? 0.62 : 0.28})`
  )

  ctx.fillStyle = vig
  ctx.fillRect(0, 0, W, H)
}

/* ─────────────────────────────────────────────────────────────
   INIT CANVAS
─────────────────────────────────────────────────────────────── */

function initCanvas() {
  const canvas = contactCanvas.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  function resize() {
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }

  resize()

  window.addEventListener('resize', resize)

  /* ── Stars ── */

  const stars = Array.from({ length: 220 }, () => {
    const rand = Math.random()

    let r, g, b

    if (rand < 0.48) {
      r = 245
      g = 235
      b = 208
    } else if (rand < 0.75) {
      r = 255
      g = 255
      b = 255
    } else if (rand < 0.90) {
      r = 201
      g = 168
      b = 76
    } else {
      r = 188
      g = 210
      b = 255
    }

    return {
      x: Math.random(),
      y: Math.random(),

      size: 0.3 + Math.random() * 1.6,
      opacity: 0.08 + Math.random() * 0.55,

      pulse: Math.random() * Math.PI * 2,
      speed: 0.007 + Math.random() * 0.016,

      r,
      g,
      b
    }
  })

  /* ── Nebula Clouds ── */

  const nebulaPts = [
    {
      x: 0.12,
      y: 0.25,
      r: 0.36,
      a: 0.052,
      r0: 127,
      g0: 1,
      b0: 31,
      r1: 90,
      g1: 0,
      b1: 20,
      phase: 0
    },
    {
      x: 0.78,
      y: 0.18,
      r: 0.26,
      a: 0.038,
      r0: 201,
      g0: 168,
      b0: 76,
      r1: 160,
      g1: 120,
      b1: 40,
      phase: 1.2
    },
    {
      x: 0.55,
      y: 0.62,
      r: 0.30,
      a: 0.032,
      r0: 100,
      g0: 0,
      b0: 25,
      r1: 60,
      g1: 0,
      b1: 15,
      phase: 2.4
    },
    {
      x: 0.20,
      y: 0.72,
      r: 0.20,
      a: 0.028,
      r0: 160,
      g0: 80,
      b0: 20,
      r1: 100,
      g1: 40,
      b1: 5,
      phase: 0.8
    },
    {
      x: 0.88,
      y: 0.55,
      r: 0.22,
      a: 0.040,
      r0: 127,
      g0: 1,
      b0: 31,
      r1: 80,
      g1: 0,
      b1: 18,
      phase: 3.1
    }
  ]

  /* ── Gold Particles ── */

  const pts = Array.from({ length: 70 }, () => ({
    x: Math.random(),
    y: Math.random(),

    size: 0.6 + Math.random() * 1.4,

    vx: (Math.random() - 0.5) * 0.00013,
    vy: (Math.random() - 0.5) * 0.00013,

    opacity: 0.06 + Math.random() * 0.17,

    pulse: Math.random() * Math.PI * 2,
    speed: 0.011 + Math.random() * 0.015
  }))

  /* ── Mouse Tracking ── */

  let mx = 0.5
  let my = 0.5

  window.addEventListener('mousemove', e => {
    mx = e.clientX / window.innerWidth
    my = e.clientY / window.innerHeight
  })

  /* ─────────────────────────────────────────────────────────
     ANIMATION STATE

     arcT:
       0 = Sun resting at upper-right
       1 = Sun fully set below screen

     sunAlpha:
       Controls sun visibility

     sunScale:
       Controls sun size

     darkBlend:
       0 = Light mode
       1 = Dark mode
  ─────────────────────────────────────────────────────────── */

  const initDark = getTheme()

  const st = {
    darkBlend: initDark ? 1 : 0,
    sunAlpha: initDark ? 0 : 1,
    sunScale: initDark ? 0.01 : 1,
    arcT: initDark ? 1 : 0
  }

  const LERP = 0.028

  /* ── Main Animation Loop ── */

  function draw() {
    const W = canvas.width
    const H = canvas.height

    globalT++

    const dark = getTheme()

    isDark.value = dark

    const targetBlend = dark ? 1 : 0
    const diff = targetBlend - st.darkBlend

    st.darkBlend += diff * LERP

    if (dark) {

      /* Sun arcs downward toward horizon */

      st.arcT +=
        (1 - st.arcT) * (LERP * 0.75)

      /* Fade sun after passing 55% of arc */

      const aTarget =
        st.arcT > 0.55 ? 0 : 1

      st.sunAlpha +=
        (aTarget - st.sunAlpha) *
        (LERP * 0.65)

      /* Maintain sun scale during sunset */

      st.sunScale +=
        (1 - st.sunScale) *
        (LERP * 1.2)

    } else {

      /* Sun returns to upper-right */

      st.arcT +=
        (0 - st.arcT) *
        (LERP * 0.70)

      /* Fade sun back in */

      st.sunAlpha +=
        (1 - st.sunAlpha) *
        (LERP * 0.80)

      /* Restore original sun scale */

      st.sunScale +=
        (1 - st.sunScale) *
        (LERP * 0.90)
    }

    /* Clear previous frame */

    ctx.clearRect(0, 0, W, H)

    /* Render complete scene */

    drawScene(
      ctx,
      W,
      H,
      stars,
      nebulaPts,
      pts,
      mx,
      my,
      st
    )

    /* Continue animation */

    animId = requestAnimationFrame(draw)
  }

  draw()
}

/* ─────────────────────────────────────────────────────────────
   VUE LIFECYCLE
─────────────────────────────────────────────────────────────── */

let themeObserver = null

onMounted(() => {
  initCanvas()

  themeObserver = new MutationObserver(() => {
    isDark.value = getTheme()
  })

  themeObserver.observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ['data-theme']
    }
  )
})

onUnmounted(() => {
  if (animId !== null) {
    cancelAnimationFrame(animId)
    animId = null
  }

  if (themeObserver) {
    themeObserver.disconnect()
    themeObserver = null
  }
})

</script>

<style scoped>

/* ========================================
   HERO SECTION
======================================== */

.contact-hero {
  min-height: 100vh;
  background: #0a0208;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 80px 40px;
  transition: background 1s ease;
}

.contact-hero.is-light {
  background: #12040e;
}

/* Dark mode crimson ambient ring */

.contact-hero:not(.is-light)::before {
  content: '';
  position: absolute;
  width: 720px;
  height: 720px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(127, 1, 31, 0.24) 0%,
    rgba(90, 0, 20, 0.07) 45%,
    transparent 70%
  );
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: heroGlowDark 7s ease-in-out infinite;
  pointer-events: none;
}

.contact-hero:not(.is-light)::after {
  content: '';
  position: absolute;
  width: 940px;
  height: 940px;
  border-radius: 50%;
  border: 1px solid rgba(201, 168, 76, 0.05);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: orbitSpinDark 42s linear infinite;
  pointer-events: none;
}

/* Light mode warm solar ring */

.contact-hero.is-light::before {
  content: '';
  position: absolute;
  width: 620px;
  height: 620px;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(255, 190, 60, 0.07) 0%,
    rgba(200, 80, 10, 0.03) 55%,
    transparent 75%
  );
  top: -10%;
  right: -10%;
  animation: heroGlowLight 6s ease-in-out infinite;
  pointer-events: none;
}

.contact-hero.is-light::after {
  content: '';
  position: absolute;
  width: 860px;
  height: 860px;
  border-radius: 50%;
  border: 1px solid rgba(255, 215, 80, 0.045);
  top: -16%;
  right: -16%;
  animation: orbitSpinLight 48s linear infinite;
  pointer-events: none;
}

/* Hero background animations */

@keyframes heroGlowDark {
  0%, 100% {
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1);
  }
  50% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1.1);
  }
}

@keyframes heroGlowLight {
  0%, 100% { opacity: 0.8; }
  50% { opacity: 1; }
}

@keyframes orbitSpinDark {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

@keyframes orbitSpinLight {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Canvas */

.contact-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

/* Hero content */

.contact-hero-inner {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 860px;
  width: 100%;
}

/* ========================================
   HERO TYPOGRAPHY
======================================== */

.contact-big-title {
  font-family: var(--font-upright);
  font-size: clamp(62px, 9.5vw, 132px);
  font-weight: 300;
  line-height: 0.94;
  letter-spacing: -0.01em;
  margin-bottom: 28px;
  opacity: 0;
  animation: revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards;
  color: var(--cream);
}

.word-accent {
  display: block;
  font-style: italic;
  animation: wordColorCycle 5s ease-in-out infinite;
}

@keyframes wordColorCycle {
  0% {
    color: #e2c47a;
    -webkit-text-stroke: 0px;
  }
  25% {
    color: #c9a84c;
    -webkit-text-stroke: 0px;
  }
  50% {
    color: #7f011f;
    -webkit-text-stroke: 0px;
  }
  65% {
    color: transparent;
    -webkit-text-stroke: 1px rgba(245,235,208,0.4);
  }
  80% {
    color: rgba(245,235,208,0.85);
    -webkit-text-stroke: 0px;
  }
  100% {
    color: #e2c47a;
    -webkit-text-stroke: 0px;
  }
}

.is-light .word-accent {
  animation: wordColorCycleLight 5s ease-in-out infinite;
}

@keyframes wordColorCycleLight {
  0% {
    color: #e2c47a;
    text-shadow:
      0 0 30px rgba(226,196,122,0.9),
      0 0 60px rgba(201,168,76,0.5);
    -webkit-text-stroke: 0px;
  }
  25% {
    color: #c9a84c;
    text-shadow:
      0 0 30px rgba(201,168,76,0.9),
      0 0 60px rgba(201,168,76,0.4);
    -webkit-text-stroke: 0px;
  }
  50% {
    color: #e2402a;
    text-shadow:
      0 0 30px rgba(226,64,42,0.9),
      0 0 60px rgba(127,1,31,0.5);
    -webkit-text-stroke: 0px;
  }
  65% {
    color: transparent;
    text-shadow: none;
    -webkit-text-stroke: 1.5px rgba(201,168,76,0.95);
  }
  80% {
    color: #e2c47a;
    text-shadow:
      0 0 30px rgba(226,196,122,0.8),
      0 0 60px rgba(201,168,76,0.4);
    -webkit-text-stroke: 0px;
  }
  100% {
    color: #e2c47a;
    text-shadow:
      0 0 30px rgba(226,196,122,0.9),
      0 0 60px rgba(201,168,76,0.5);
    -webkit-text-stroke: 0px;
  }
}

/* Subtitle */

.contact-subtitle {
  font-family: var(--font-display);
  font-size: clamp(16px, 1.8vw, 20px);
  font-weight: 300;
  font-style: italic;
  margin-bottom: 56px;
  max-width: 540px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.65s forwards;
  color: rgba(245,235,208,0.38);
  transition: color 0.6s ease;
}

.is-light .contact-subtitle {
  color: rgba(245,235,208,0.60);
}

/* ========================================
   HERO CTA - UNIFIED PILL BUTTONS
======================================== */

.contact-hero-cta {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 14px;
  opacity: 0;
  animation: fadeUp 0.7s ease 0.9s forwards;
}

/* Shared button dimensions */

.btn-hero-primary,
.btn-hero-ghost {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  width: 250px;
  min-height: 54px;
  padding: 16px 24px;

  border-radius: 9999px;

  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
  text-decoration: none;

  position: relative;
  overflow: hidden;
  cursor: pointer;
}

/* Primary hero button */

.btn-hero-primary {
  background: var(--cream);
  color: var(--crimson);
  border: 1px solid var(--cream);
  transition: color 0.38s ease;
}

.btn-hero-primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: #1a1410;
  border-radius: inherit;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.42s cubic-bezier(0.76,0,0.24,1);
}

.btn-hero-primary:hover {
  color: var(--cream);
}

.btn-hero-primary:hover::before {
  transform: scaleX(1);
  transform-origin: left;
}

.btn-hero-primary span,
.btn-hero-primary svg {
  position: relative;
  z-index: 1;
}

.btn-hero-primary svg {
  flex-shrink: 0;
  transition: transform 0.28s ease;
}

.btn-hero-primary:hover svg {
  transform: rotate(-45deg);
}

/* Secondary hero button */

.btn-hero-ghost {
  background: transparent;
  border: 1px solid rgba(245,235,208,0.18);
  color: rgba(245,235,208,0.48);
  transition:
    border-color 0.3s ease,
    color 0.3s ease,
    background 0.3s ease;
}

.btn-hero-ghost:hover {
  border-color: rgba(245,235,208,0.45);
  color: var(--cream);
  background: rgba(245,235,208,0.04);
}

/* ========================================
   CONTACT BODY GRID
======================================== */

.contact-body {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  background: var(--warm-white);
}

/* ========================================
   LEFT - CONTACT FORM
======================================== */

.contact-left {
  padding: 80px 72px;
  background: var(--warm-white);
  position: relative;
  min-width: 0;
}

.contact-left::before {
  content: '';
  position: absolute;
  left: 0;
  top: 80px;
  bottom: 80px;
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
  width: 24px;
  height: 1px;
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

/* Form layout */

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group {
  margin-bottom: 32px;
  position: relative;
  min-width: 0;
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

.form-group:focus-within .form-label {
  color: var(--crimson);
}

/* Inputs */

.form-input {
  box-sizing: border-box;
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
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--crimson);
  transition: width 0.42s cubic-bezier(0.76,0,0.24,1);
}

.form-group:focus-within::after {
  width: 100%;
}

.form-group:focus-within .form-input {
  border-color: transparent;
}

.form-input::placeholder {
  color: rgba(138,122,110,0.38);
}

textarea.form-input {
  resize: none;
  min-height: 100px;
  line-height: 1.7;
}

/* ========================================
   FORM SUBMIT - PILL BUTTON
======================================== */

.form-submit {
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 14px;

  min-height: 54px;
  padding: 16px 40px;
  border-radius: 9999px;

  background: var(--crimson);
  color: var(--cream);

  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-align: center;

  border: none;
  cursor: pointer;
  margin-top: 8px;

  position: relative;
  overflow: hidden;

  transition:
    box-shadow 0.3s ease,
    opacity 0.2s ease;
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
  border-radius: inherit;
  transform: translateY(100%);
  transition: transform 0.42s cubic-bezier(0.76,0,0.24,1);
}

.form-submit:not(:disabled):hover {
  box-shadow: 0 8px 36px rgba(127,1,31,0.38);
}

.form-submit:not(:disabled):hover::before {
  transform: translateY(0);
}

.form-submit span,
.form-submit svg {
  position: relative;
  z-index: 1;
}

.form-submit svg {
  flex-shrink: 0;
  transition: transform 0.28s ease;
}

.form-submit:not(:disabled):hover svg {
  transform: translateX(4px);
}

/* ========================================
   FORM FEEDBACK
======================================== */

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

.success-fade-enter-active {
  transition: all 0.4s ease;
}

.success-fade-leave-active {
  transition: all 0.3s ease;
}

.success-fade-enter-from,
.success-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

/* ========================================
   RIGHT - CONTACT INFORMATION
======================================== */

.contact-right {
  padding: 80px 64px;
  background: #0e0b09;
  position: relative;
  overflow: hidden;
  min-width: 0;
}

.contact-right::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: radial-gradient(
    circle,
    rgba(245,235,208,0.04) 1px,
    transparent 1px
  );
  background-size: 26px 26px;
  pointer-events: none;
}

.contact-right::after {
  content: 'MQ';
  position: absolute;
  bottom: -40px;
  right: -16px;
  font-family: var(--font-upright);
  font-size: 220px;
  font-weight: 300;
  color: rgba(245,235,208,0.025);
  line-height: 1;
  pointer-events: none;
  user-select: none;
}

.contact-info-section {
  position: relative;
  z-index: 1;
}

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
  width: 24px;
  height: 1px;
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

/* Contact details */

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 26px;
  padding-bottom: 26px;
  border-bottom: 1px solid rgba(245,235,208,0.05);
  transition: all 0.25s ease;
}

.info-item:last-child {
  border-bottom: none;
}

.info-item:hover {
  transform: translateX(4px);
}

.info-icon {
  width: 42px;
  height: 42px;
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
  overflow-wrap: anywhere;
  transition: color 0.25s ease;
}

.info-text-val:hover {
  color: var(--cream);
}

/* ========================================
   SOCIAL LINKS
======================================== */

.social-links {
  margin-top: 40px;
}

.social-label {
  font-family: var(--font-sans);
  font-size: 8px;
  font-weight: 300;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: rgba(245,235,208,0.22);
  margin-bottom: 18px;
}

.social-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.social-btn {
  width: 46px;
  height: 46px;
  border: 1px solid rgba(245,235,208,0.09);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: rgba(245,235,208,0.32);
  text-decoration: none;

  position: relative;
  overflow: hidden;

  transition:
    border-color 0.3s ease,
    color 0.3s ease;
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

.social-btn:hover {
  border-color: var(--crimson);
  color: #fff;
}

.social-btn:hover::before {
  transform: scale(1);
}

.social-btn svg {
  position: relative;
  z-index: 1;
}

/* ========================================
   ENTRANCE ANIMATIONS
======================================== */

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes revealUp {
  from {
    opacity: 0;
    transform: translateY(40px) skewY(1.5deg);
  }
  to {
    opacity: 1;
    transform: translateY(0) skewY(0deg);
  }
}

/* ========================================
   RESPONSIVE - TABLET
======================================== */

@media (max-width: 1024px) {
  .contact-left {
    padding: 64px 48px;
  }

  .contact-right {
    padding: 64px 48px;
  }
}

/* ========================================
   RESPONSIVE - MOBILE
======================================== */

@media (max-width: 768px) {
  .contact-hero {
    padding: 80px 24px 72px;
    min-height: 90svh;
  }

  .contact-big-title {
    font-size: clamp(44px, 12vw, 72px);
  }

  .contact-subtitle {
    font-size: 16px;
  }

  .contact-hero-cta {
    flex-direction: column;
    align-items: center;
    gap: 12px;
  }

  .btn-hero-primary,
  .btn-hero-ghost {
    width: min(100%, 320px);
    min-width: 0;
    min-height: 54px;
    justify-content: center;
  }

  .contact-body {
    grid-template-columns: 1fr;
  }

  .contact-left {
    padding: 52px 24px;
  }

  .contact-right {
    padding: 52px 24px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}

/* ========================================
   RESPONSIVE - SMALL PHONES
======================================== */

@media (max-width: 420px) {
  .contact-big-title {
    font-size: clamp(38px, 11vw, 56px);
  }

  .contact-left,
  .contact-right {
    padding: 40px 20px;
  }

  .contact-left::before {
    display: none;
  }

  .contact-hero-cta {
    width: 100%;
  }

  .btn-hero-primary,
  .btn-hero-ghost {
    width: 100%;
    max-width: 320px;
    padding: 16px 18px;
    font-size: 8px;
  }

  .form-submit {
    width: 100%;
  }
}

/* ========================================
   ACCESSIBILITY
======================================== */

.btn-hero-primary:focus-visible,
.btn-hero-ghost:focus-visible,
.form-submit:focus-visible,
.social-btn:focus-visible {
  outline: 2px solid var(--gold-light);
  outline-offset: 4px;
}

@media (prefers-reduced-motion: reduce) {
  .contact-hero::before,
  .contact-hero::after,
  .word-accent {
    animation: none;
  }

  .contact-big-title,
  .contact-subtitle,
  .contact-hero-cta {
    animation: none;
    opacity: 1;
    transform: none;
  }

  .btn-hero-primary,
  .btn-hero-ghost,
  .form-submit,
  .social-btn {
    transition-duration: 0.01ms;
  }
}

</style>
