<!-- src/views/AboutPage.vue -->
<template>
  <main id="about" aria-label="About Me">

    <!-- Dark Hero -->
    <section class="about-hero animate-page">

      <div class="about-hero-text">
        <p class="page-eyebrow">About Me</p>
        <p class="about-tagline">
          A designer who <em class="tagline-italic tagline-crimson">codes.</em><br>
          A developer who thinks in <em class="tagline-italic tagline-gold">pixels.</em>
        </p>
        <div class="hero-scroll-hint">
          <div class="hero-scroll-line"></div>
          <span class="hero-scroll-text">Scroll to explore</span>
          <div class="hero-scroll-line"></div>
        </div>
      </div>

      <div class="about-photo-wrapper" role="img" aria-label="Photo of Maxene Quiambao">
        <div class="photo-glow" aria-hidden="true"></div>
        <div class="about-photo-box">
          <img src="/assets/maxene.jpg" alt="Maxene Quiambao" class="photo-img" onerror="this.style.display='none'" />
          <div class="photo-overlay-gradient"></div>
          <div class="photo-corner photo-corner--tl"></div>
          <div class="photo-corner photo-corner--br"></div>
        </div>
        <div class="photo-code-snippet">
          <span class="code-keyword">const</span>
          <span class="code-var"> dev</span>
          <span class="code-punct"> = </span>
          <span class="code-string">"Maxene"</span>
        </div>
      </div>

    </section>

    <!-- Story Section -->
    <div class="about-story">

      <!-- LEFT -->
      <div class="about-story-left">
        <div class="about-bio">
          <p>A Bachelor of Science in Information Technology student specializing in Web Development at Holy Angel University, with a strong focus on UI/UX and frontend development.</p>
          <p>Passionate about creating visually engaging, user-centered designs with creativity, precision, and attention to detail. I believe great digital products live at the intersection of beautiful design and clean code.</p>
          <p>Based in the Philippines, I'm currently open to internship opportunities, freelance work, and collaborations that challenge and grow me.</p>
        </div>

        <div class="skills-card-label">Core Skills</div>
        <div class="skills-card-grid">
          <div
            class="skill-card"
            v-for="(q, i) in qualities"
            :key="q.title"
            :style="{ transitionDelay: `${i * 0.07}s` }"
          >
            <div class="skill-card-num" aria-hidden="true">0{{ i + 1 }}</div>
            <div class="skill-card-header">
              <div class="skill-card-icon" aria-hidden="true" v-html="q.svg"></div>
              <div class="skill-card-title">{{ q.title }}</div>
            </div>
            <div class="skill-card-desc">{{ q.desc }}</div>
            <div class="skill-card-shimmer" aria-hidden="true"></div>
          </div>
        </div>
      </div>

      <!-- RIGHT -->
      <div class="about-story-right">

        <!-- ══════════ TECHNOLOGIES — Infinite Marquee ══════════ -->
        <div class="section-header">
          <h2 class="section-title">Technologies</h2>
          <div class="section-line" aria-hidden="true"></div>
        </div>
        <p class="tech-sub">Tools &amp; technologies I work with</p>

        <div class="marquee-wrapper">
          <!-- Row 1 → scrolls LEFT -->
          <div class="marquee-row">
            <div class="marquee-track marquee-left">
              <template v-for="n in 2" :key="n">
                <div class="marquee-item" v-for="tech in row1" :key="`r1-${n}-${tech.name}`">
                  <span class="marquee-icon" aria-hidden="true" v-html="tech.img"></span>
                  <span class="marquee-name">{{ tech.name }}</span>
                </div>
              </template>
            </div>
          </div>

          <!-- Row 2 → scrolls RIGHT -->
          <div class="marquee-row">
            <div class="marquee-track marquee-right">
              <template v-for="n in 2" :key="n">
                <div class="marquee-item" v-for="tech in row2" :key="`r2-${n}-${tech.name}`">
                  <span class="marquee-icon" aria-hidden="true" v-html="tech.img"></span>
                  <span class="marquee-name">{{ tech.name }}</span>
                </div>
              </template>
            </div>
          </div>

          <!-- Row 3 → scrolls LEFT slower -->
          <div class="marquee-row">
            <div class="marquee-track marquee-left marquee-slow">
              <template v-for="n in 2" :key="n">
                <div class="marquee-item" v-for="tech in row3" :key="`r3-${n}-${tech.name}`">
                  <span class="marquee-icon" aria-hidden="true" v-html="tech.img"></span>
                  <span class="marquee-name">{{ tech.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </div>

        <!-- ══════════ CERTIFICATIONS ══════════ -->
        <div class="certs-section">
          <div class="section-header" style="margin-bottom: 6px;">
            <h2 class="section-title">Certifications</h2>
            <div class="section-line" aria-hidden="true"></div>
          </div>
          <p class="tech-sub">Credentials &amp; verified learning</p>

          <div class="cert-slider" role="region" aria-label="Certifications">
            <div class="cert-track" :style="{ transform: `translateX(-${activeIndex * 100}%)` }" aria-live="polite">
              <div class="cert-slide" v-for="(cert, i) in certs" :key="cert.id" :aria-hidden="i !== activeIndex">
                <div class="cert-img-wrap">
                  <img :src="cert.image" :alt="cert.title" class="cert-img"
                    onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
                  <div class="cert-img-placeholder">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2">
                      <rect x="3" y="3" width="18" height="14" rx="2"/>
                      <path d="M3 8h18M8 21h8M12 17v4" stroke-linecap="round"/>
                    </svg>
                    <span>{{ cert.image }}</span>
                  </div>
                  <div class="cert-img-shine" aria-hidden="true"></div>
                </div>
                <div class="cert-info">
                  <div class="cert-meta">
                    <span class="cert-issuer">{{ cert.issuer }}</span>
                    <span class="cert-year">{{ cert.year }}</span>
                  </div>
                  <h3 class="cert-title">{{ cert.title }}</h3>
                  <a :href="cert.link" target="_blank" rel="noopener noreferrer" class="cert-link">
                    <span>View Certificate</span>
                    <svg width="11" height="11" viewBox="0 0 16 16" fill="none">
                      <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div class="cert-controls">
              <button class="cert-nav" @click="prev" :disabled="activeIndex === 0" aria-label="Previous">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M10 4L6 8L10 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="cert-dots" role="tablist">
                <button
                  v-for="(cert, i) in certs"
                  :key="cert.id"
                  class="cert-dot"
                  :class="{ 'cert-dot--active': i === activeIndex }"
                  @click="goTo(i)"
                  role="tab"
                  :aria-selected="i === activeIndex"
                ></button>
              </div>
              <button class="cert-nav" @click="next" :disabled="activeIndex === certs.length - 1" aria-label="Next">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4L10 8L6 12" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <div class="cert-counter" aria-hidden="true">
                <span class="cert-counter-current">{{ String(activeIndex + 1).padStart(2, '0') }}</span>
                <span class="cert-counter-sep">/</span>
                <span class="cert-counter-total">{{ String(certs.length).padStart(2, '0') }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'

/* ── Certs ── */
const certs = ref([
  { id: 1,  title: 'Google Analytics Certification',                                    issuer: 'Google',       year: '2025', image: '/assets/certs/cert-1.png',  link: 'https://skillshop.credential.net/073d932e-ca9d-4bbd-b4c3-479a9e52b962#acc.UZipqmD9' },
  { id: 2,  title: 'SEO Certified',                                                     issuer: 'HubSpot',      year: '2026', image: '/assets/certs/cert-2.png',  link: 'https://app-na2.hubspot.com/academy/achievements/db7dlkh3/en/1/maxene-quiambao/seo' },
  { id: 3,  title: 'SEO II Certified',                                                  issuer: 'HubSpot',      year: '2026', image: '/assets/certs/cert-3.png',  link: 'https://app-na2.hubspot.com/academy/achievements/ctxnfk08/en/1/maxene-quiambao/seo-ii' },
  { id: 4,  title: 'JavaScript Essentials 1',                                           issuer: 'Credly',       year: '2025', image: '/assets/certs/cert-4.png',  link: 'https://www.credly.com/badges/7654c52c-ca71-4871-abfa-f0ad443d2ad0/public_url' },
  { id: 5,  title: 'Introduction to PHP',                                               issuer: 'SimpliLearn',  year: '2025', image: '/assets/certs/cert-5.png',  link: 'https://simpli-web.app.link/e/4JvPyXcuv1b' },
  { id: 6,  title: 'Website UI/UX Designing using ChatGPT: Become a UI UX Designer',   issuer: 'SimpliLearn',  year: '2025', image: '/assets/certs/cert-6.png',  link: 'https://simpli-web.app.link/e/r5kkXOruv1b' },
  { id: 7,  title: 'Design Thinking for Beginners',                                     issuer: 'SimpliLearn',  year: '2025', image: '/assets/certs/cert-7.png',  link: 'https://simpli-web.app.link/e/FAIxn4wUX0b' },
  { id: 8,  title: 'Introduction to Graphic Design: Basics of UI/UX',                  issuer: 'SimpliLearn',  year: '2023', image: '/assets/certs/cert-8.png',  link: 'https://simpli-web.app.link/e/haeuArjUX0b' },
  { id: 9,  title: 'Legacy JavaScript Algorithms and Data Structures V7',               issuer: 'freeCodeCamp', year: '2025', image: '/assets/certs/cert-9.png',  link: 'https://www.freecodecamp.org/certification/maxqmb/back-end-development-and-apis' },
  { id: 10, title: 'Legacy Responsive Web Design V8',                                   issuer: 'freeCodeCamp', year: '2024', image: '/assets/certs/cert-10.png', link: 'https://www.freecodecamp.org/certification/maxqmb/responsive-web-design' },
])
const activeIndex = ref(0)
function next() { if (activeIndex.value < certs.value.length - 1) activeIndex.value++ }
function prev() { if (activeIndex.value > 0) activeIndex.value-- }
function goTo(i) { activeIndex.value = i }

/* ── Core skills ── */
const qualities = [
  { title: 'UI/UX Design',             desc: 'Designing intuitive, user-focused interfaces with strong visual balance and clarity.',        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M3 7h18M8 21h8M12 17v4" stroke-linecap="round"/><circle cx="8.5" cy="11.5" r="1.2" fill="currentColor" stroke="none" opacity="0.6"/><path d="M12 10h4M12 13h3" stroke-linecap="round"/></svg>` },
  { title: 'Frontend Development',     desc: 'Building responsive, clean, and functional interfaces from design to code.',                 svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 13l2 2-2 2M13 17h3" stroke-linecap="round" stroke-linejoin="round"/><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18" stroke-linecap="round"/></svg>` },
  { title: 'Figma & Prototyping',      desc: 'Creating wireframes and prototypes to refine ideas and ensure design consistency.',          svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="2" width="8" height="6" rx="2"/><rect x="3" y="9" width="8" height="6" rx="2"/><rect x="13" y="9" width="8" height="6" rx="2"/><rect x="8" y="16" width="8" height="6" rx="2"/><path d="M12 8v1M7 15h1M17 15h-1M12 22v-6" stroke-linecap="round"/></svg>` },
  { title: 'Attention to Detail',      desc: 'Delivering polished, high-quality work with consistency across designs and layouts.',        svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35" stroke-linecap="round"/><path d="M11 8v3l2 2" stroke-linecap="round"/></svg>` },
  { title: 'Problem Solving',          desc: 'Approaching design and development challenges with practical, user-focused solutions.',       svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke-linecap="round" stroke-linejoin="round"/></svg>` },
  { title: 'Collaboration & Teamwork', desc: 'Working effectively with teams by clearly presenting ideas and incorporating feedback.',       svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="7" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke-linecap="round"/><path d="M17 13c2.21 0 4 1.567 4 3.5" stroke-linecap="round"/></svg>` },
]

/* ══════════════════════════════════════
   TECH ROWS — all inline SVGs, no external files needed
══════════════════════════════════════ */

const svgJS       = `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h256v256H0V0z" fill="#F7DF1E"/><path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" fill="#323330"/></svg>`
const svgHTML5    = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90"><polygon points="12.54,81 5.32,0 84.68,0 77.45,80.99 44.95,90" fill="#E44D26"/><polygon points="45,16.56 44.97,16.56 20.09,16.56 20.33,19.22 22.77,46.6 44.97,46.6 45,46.6 57.2,46.6 56.05,59.48 44.97,62.48 44.96,62.48 33.89,59.49 33.19,51.57 27.81,51.57 23.21,51.57 24.6,67.17 44.95,72.82 45,72.8 65.33,67.17 65.48,65.49 67.82,39.33 68.06,36.67 65.38,36.67 45,36.67 44.97,36.67 31.85,36.67 30.95,26.49 44.97,26.49 45,26.49 68.93,26.49 68.96,26.49 69.16,24.26 69.61,19.22 69.85,16.56" fill="#fff"/></svg>`
const svgCSS3     = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M74.633 100.62l32.011 369.257L255.778 512l149.543-41.181 32.046-370.199z" fill="#264de4"/><path d="M256 480.523l120.03-33.277 28.24-316.352H256z" fill="#2965f1"/><path d="M256 268.217H150.31l4.07 45.41H256v-45.41zM256 176.305h-113.868l4.128 45.411H256v-45.41z" fill="#ebebeb"/><path d="M156.409 336.333l6.362 71.301L255.791 433.457V386.153l-50.574-13.656-3.233-36.164zM311.761 313.627l-5.271 58.894-50.647 13.67v47.244l93.094-25.801.683-7.672 10.671-119.551 1.108-12.194 8.198-91.912H255.843v45.411h63.988l-4.132 46.501H255.843v45.41z" fill="#fff"/></svg>`
const svgVue      = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path d="M39.333 5.5L32 18.333 24.667 5.5H0L32 61 64 5.5z" fill="#42b883"/><path d="M39.333 5.5L32 18.333 24.667 5.5H12.833L32 38.833 51.167 5.5z" fill="#35495e"/></svg>`
const svgTailwind = `<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M9,13.7q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q11.1,10.9,9,13.7ZM2,22.1q1.4-5.6,7-5.6c5.6,0,6.3,4.2,9.1,4.9q2.8.7,4.9-2.1-1.4,5.6-7,5.6c-5.6,0-6.3-4.2-9.1-4.9Q4.1,19.3,2,22.1Z" fill="#44a8b3"/></svg>`
const svgPHP      = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><ellipse cx="25" cy="25" rx="25" ry="15" fill="#777bb3"/><text x="25" y="30" text-anchor="middle" font-family="Arial" font-weight="bold" font-size="16" fill="white">php</text></svg>`
const svgGitHub   = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="#24292e"/></svg>`
const svgFigma    = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 300"><path d="M50 300c27.6 0 50-22.4 50-50v-50H50c-27.6 0-50 22.4-50 50s22.4 50 50 50z" fill="#0acf83"/><path d="M0 150c0-27.6 22.4-50 50-50h50v100H50c-27.6 0-50-22.4-50-50z" fill="#a259ff"/><path d="M0 50C0 22.4 22.4 0 50 0h50v100H50C22.4 100 0 77.6 0 50z" fill="#f24e1e"/><path d="M100 0h50c27.6 0 50 22.4 50 50s-22.4 50-50 50h-50V0z" fill="#ff7262"/><path d="M200 150c0 27.6-22.4 50-50 50s-50-22.4-50-50 22.4-50 50-50 50 22.4 50 50z" fill="#1abcfe"/></svg>`
const svgVSCode   = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M1.21 35.39S-1.19 33.66 1.69 31.35l6.71-6s1.92-2.02 3.95-.26l61.92 46.88v22.48s-.03 3.53-4.56 3.14z" fill="#2489ca"/><path d="M17.17 49.88 1.21 64.39s-1.64 1.22 0 3.4l7.41 6.74s1.76 1.89 4.36-.26l16.92-12.83z" fill="#1070b3"/><path d="M45.19 50 73.88 26.5 73.69 2.9S72.44-1.9 68.27 3.5L23.69 57.95z" fill="#0877b9"/><path d="M69.71 97.62c1.7 1.74 3.76 1.17 3.76 1.17L96 86.35c2.92-1.99 2.51-4.46 2.51-4.46V13.7c0-2.95-3.02-3.97-3.02-3.97L75.72 4.43C71.5-2.27 69 .23 69 .23s3.64-2.62 5.42 2.34v88.75c0 .61-.13 1.21-.39 1.75-1.56 3.55-5.32 6.55-4.32 4.55z" fill="#3c99d4"/></svg>`

const svgGraphicDesign = `<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="2.5" fill="#E2C47A"/><circle cx="17.5" cy="10.5" r="2.5" fill="#7f011f"/><circle cx="13.5" cy="14.5" r="2.5" fill="#41B883"/><circle cx="9.5" cy="10.5" r="2.5" fill="#1572B6"/><path d="M4 20h16M4 20l2-4M20 20l-2-4" stroke="#8a7a6e" stroke-width="1.5" stroke-linecap="round"/></svg>`
const svgResponsive    = `<svg viewBox="0 0 24 24" fill="none" stroke="#8a7a6e" stroke-width="1.5"><rect x="2" y="4" width="14" height="10" rx="1.5"/><rect x="16" y="7" width="6" height="7" rx="1"/><path d="M5 18h7M8.5 14v4" stroke-linecap="round"/></svg>`
const svgUIUX          = `<svg viewBox="0 0 24 24" fill="none" stroke="#8a7a6e" stroke-width="1.5"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M3 7h18"/><circle cx="6" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><circle cx="9" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><circle cx="12" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><path d="M7 11h4M7 13h6" stroke-linecap="round"/></svg>`

const svgFlutter = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><polygon fill="#40c4ff" points="26,4 6,24 12,30 38,4"/><polygon fill="#40c4ff" points="38,22 27,33 21,27 26,22"/><rect width="8.485" height="8.485" x="16.757" y="28.757" fill="#03a9f4" transform="rotate(-45.001 21 33)"/><polygon fill="#01579b" points="38,44 26,44 21,39 27,33"/><polygon fill="#084994" points="21,39 30,36 27,33"/></svg>`

const svgAngular = `<svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g clip-path="url(#prefix__clip0_9_19)"><mask id="prefix__a" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="14" y="0" width="484" height="512"><path d="M14 0h484v512H14V0z" fill="#fff"/></mask><g mask="url(#prefix__a)"><mask id="prefix__b" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="14" y="0" width="484" height="512"><path d="M14 0h484v512H14V0z" fill="#fff"/></mask><g mask="url(#prefix__b)"><path d="M496 86l-18 272L312 0l184 86zM380 438l-124 72-126-72 24-62h202l24 62zM256 136l64 160H190l66-160zM32 358L14 86 198 0 32 358z" fill="url(#prefix__paint0_linear_9_19)"/><path d="M496 86l-18 272L312 0l184 86zM380 438l-124 72-126-72 24-62h202l24 62zM256 136l64 160H190l66-160zM32 358L14 86 198 0 32 358z" fill="url(#prefix__paint1_linear_9_19)"/></g></g></g><defs><linearGradient id="prefix__paint0_linear_9_19" x1="120.4" y1="463.8" x2="504" y2="281.4" gradientUnits="userSpaceOnUse"><stop stop-color="#E40035"/><stop offset=".2" stop-color="#F60A48"/><stop offset=".4" stop-color="#F20755"/><stop offset=".5" stop-color="#DC087D"/><stop offset=".7" stop-color="#9717E7"/><stop offset="1" stop-color="#6C00F5"/></linearGradient><linearGradient id="prefix__paint1_linear_9_19" x1="103" y1="61.4" x2="354" y2="348" gradientUnits="userSpaceOnUse"><stop stop-color="#FF31D9"/><stop offset="1" stop-color="#FF5BE1" stop-opacity="0"/></linearGradient><clipPath id="prefix__clip0_9_19"><path fill="#fff" transform="translate(14)" d="M0 0h484v512H0z"/></clipPath></defs></svg>`

const svgDart = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 502.87 502.87"><defs><radialGradient id="dart-rg" cx="251.42" cy="631.97" r="251.4" gradientTransform="translate(0 -380.56)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity="0.1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs><path d="M102.56,400.31l-86-86C6.32,303.82,0,289,0,274.58c0-6.69,3.77-17.16,6.62-23.15L86,86Z" fill="#01579b"/><path d="M397,102.56l-86-86C303.49,9,287.85,0,274.61,0c-11.38,0-22.55,2.29-29.76,6.62L86.07,86Z" fill="#40c4ff"/><polygon points="205.11 502.87 413.55 502.87 413.55 413.55 258.05 363.9 115.79 413.55 205.11 502.87" fill="#40c4ff"/><path d="M86,354c0,26.54,3.33,33.05,16.53,46.32l13.23,13.24H413.55L268,248.14,86,86Z" fill="#29b6f6"/><path d="M350.7,86H86L413.55,413.51h89.32V208.4L397,102.52C382.12,87.62,368.92,86,350.7,86Z" fill="#01579b"/><path d="M105.88,403.6C92.65,390.33,89.36,377.24,89.36,354V89.32L86.07,86V354c0,23.25,0,29.69,19.81,49.61l9.91,9.91h0Z" fill="#fff" opacity="0.2"/><path d="M397,102.56C380.61,86.14,367.19,86,347.41,86H86.07l3.29,3.29H347.41c9.87,0,34.79-1.66,49.61,13.24Z" fill="#fff" opacity="0.2"/><path d="M499.58,205.11,397,102.56l-86-86C303.49,9,287.85,0,274.61,0c-11.38,0-22.55,2.29-29.76,6.62L86.07,86,6.65,251.43C3.81,257.46,0,267.92,0,274.58c0,14.45,6.36,29.2,16.52,39.7L95.83,393a92.42,92.42,0,0,0,6.73,7.32l3.29,3.29,9.9,9.91,86,86,3.29,3.29h208.4V413.51h89.32V208.4Z" fill="url(#dart-rg)"/></svg>`

const row1 = [
  { name: 'HTML',      img: svgHTML5 },
  { name: 'CSS',       img: svgCSS3 },
  { name: 'JavaScript', img: svgJS },
  { name: 'Vue.js',     img: svgVue },
  { name: 'Tailwind',   img: svgTailwind },
  { name: 'PHP',        img: svgPHP },
  { name: 'GitHub',     img: svgGitHub },
  { name: 'Flutter',    img: svgFlutter },
]

const row2 = [
  { name: 'Figma',          img: svgFigma },
  { name: 'VS Code',        img: svgVSCode },
  { name: 'Angular',        img: svgAngular },
  { name: 'Dart',           img: svgDart },
  { name: 'Graphic Design', img: svgGraphicDesign },
  { name: 'Responsive',     img: svgResponsive },
  { name: 'UI/UX',          img: svgUIUX },
  { name: 'HTML5',          img: svgHTML5 },
]

const row3 = [
  { name: 'CSS',       img: svgCSS3 },
  { name: 'JavaScript', img: svgJS },
  { name: 'Vue.js',     img: svgVue },
  { name: 'Tailwind',   img: svgTailwind },
  { name: 'Flutter',    img: svgFlutter },
  { name: 'Angular',    img: svgAngular },
  { name: 'Dart',       img: svgDart },
  { name: 'GitHub',     img: svgGitHub },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(el => { if (el.isIntersecting) el.target.classList.add('in-view') }),
    { threshold: 0.1 }
  )
  document.querySelectorAll('.skill-card').forEach(el => observer.observe(el))
})
</script>

<style scoped>

/* ═══════════════════════════ HERO ═══════════════════════════ */
.about-hero {
  background: var(--charcoal);
  min-height: 58vh;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding: 72px 80px 64px;
  position: relative;
  overflow: hidden;
  gap: 80px;
}
.about-hero::before {
  content: '';
  position: absolute; inset: 0;
  background-image:
    radial-gradient(ellipse 60% 80% at 15% 55%, rgba(127,1,31,0.14) 0%, transparent 65%),
    radial-gradient(ellipse 40% 50% at 88% 15%, rgba(201,168,76,0.07) 0%, transparent 55%);
  pointer-events: none;
}
.about-hero-text {
  position: relative; z-index: 1;
  display: flex; flex-direction: column; gap: 28px;
}
.about-tagline {
  font-family: 'Unbounded', sans-serif;
  font-weight: 700;
  font-size: clamp(26px, 3.8vw, 48px);
  color: var(--cream);
  line-height: 1.3;
  letter-spacing: -0.02em;
}
.tagline-italic  { font-style: italic; font-weight: 700; }
.tagline-crimson { color: #ff2a4f; }
.tagline-gold    { color: var(--gold); }
.hero-scroll-hint { display: flex; align-items: center; gap: 12px; opacity: 0.3; }
.hero-scroll-line { flex: 1; max-width: 40px; height: 1px; background: var(--cream); }
.hero-scroll-text {
  font-family: var(--font-sans); font-size: 8px;
  letter-spacing: 0.25em; text-transform: uppercase; color: var(--cream);
}

/* ═══════════════════════════ PHOTO ═══════════════════════════ */
.about-photo-wrapper { position: relative; flex-shrink: 0; z-index: 1; }
.photo-glow {
  position: absolute; inset: -28px;
  background: radial-gradient(ellipse 75% 65% at 50% 55%, rgba(127,1,31,0.4) 0%, transparent 70%);
  filter: blur(36px); pointer-events: none;
  animation: glowPulse 5s ease-in-out infinite;
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.65; transform: scale(1); }
  50%       { opacity: 1;    transform: scale(1.06); }
}
.about-photo-box {
  width: 260px; height: 340px;
  background: linear-gradient(160deg, #2d0009 0%, #0e0004 100%);
  position: relative; overflow: hidden;
  box-shadow: 0 0 0 1px rgba(127,1,31,0.38), 0 28px 70px rgba(0,0,0,0.6), 0 4px 14px rgba(0,0,0,0.45);
}
.photo-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: top center; }
.photo-overlay-gradient { position: absolute; bottom: 0; left: 0; right: 0; height: 110px; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%); pointer-events: none; }
.photo-corner { position: absolute; width: 18px; height: 18px; pointer-events: none; }
.photo-corner--tl { top: 10px; left: 10px; border-top: 1.5px solid rgba(201,168,76,0.65); border-left: 1.5px solid rgba(201,168,76,0.65); }
.photo-corner--br { bottom: 10px; right: 10px; border-bottom: 1.5px solid rgba(201,168,76,0.65); border-right: 1.5px solid rgba(201,168,76,0.65); }
.photo-code-snippet {
  position: absolute;
  top: 22px; left: -116px;
  background: rgba(10,6,3,0.93);
  border: 1px solid rgba(201,168,76,0.18);
  border-radius: 8px;
  padding: 9px 16px;
  font-family: 'Courier New', monospace;
  font-size: 11.5px; white-space: nowrap;
  backdrop-filter: blur(12px);
  box-shadow: 0 6px 28px rgba(0,0,0,0.5);
  animation: floatCard 6s ease-in-out infinite;
}
@keyframes floatCard {
  0%, 100% { transform: translateY(0); }
  50%       { transform: translateY(-6px); }
}
.code-keyword { color: #c792ea; }
.code-var     { color: #82aaff; }
.code-punct   { color: rgba(245,235,208,0.35); }
.code-string  { color: #c3e88d; }

/* ═══════════════════════════ STORY ═══════════════════════════ */
.about-story {
  display: grid;
  grid-template-columns: minmax(0,1fr) minmax(0,1fr);
}
.about-story-left {
  padding: 72px 64px;
  background: var(--warm-white);
  min-width: 0;
}
.about-story-right {
  padding: 64px 0 72px;
  background: var(--cream);
  display: flex; flex-direction: column;
  min-width: 0;
  overflow: hidden;
}

/* ═══════════════════════════ BIO ═══════════════════════════ */
.about-bio { font-size: 15px; line-height: 1.85; color: var(--stone); margin-bottom: 32px; }
.about-bio p { margin-bottom: 14px; }
.about-bio p:last-child { margin-bottom: 0; }

/* ═══════════════════════════ SKILL CARDS ═══════════════════════════ */
.skills-card-label {
  font-family: var(--font-sans); font-size: 8.5px; font-weight: 300;
  letter-spacing: 0.3em; text-transform: uppercase;
  color: var(--crimson); margin-bottom: 16px;
  display: flex; align-items: center; gap: 12px;
}
.skills-card-label::before { content: ''; width: 24px; height: 1px; background: var(--crimson); }
.skills-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.skill-card {
  position: relative; display: flex; flex-direction: column; gap: 10px;
  background: #fff; border: 1px solid rgba(127,1,31,0.07);
  border-radius: 14px; padding: 18px 16px 16px; overflow: hidden; cursor: default;
  opacity: 0; transform: translateY(14px);
  transition: opacity 0.45s ease, transform 0.45s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 2px 10px rgba(61,43,31,0.06);
}
.skill-card.in-view { opacity: 1; transform: translateY(0); }
.skill-card:hover { border-color: rgba(127,1,31,0.2); box-shadow: 0 8px 28px rgba(127,1,31,0.1); transform: translateY(-3px) !important; }
.skill-card-num { position: absolute; top: 8px; right: 12px; font-family: var(--font-upright); font-size: 38px; font-weight: 300; color: rgba(127,1,31,0.055); line-height: 1; user-select: none; }
.skill-card:hover .skill-card-num { color: rgba(127,1,31,0.1); }
.skill-card-header { display: flex; align-items: center; gap: 10px; }
.skill-card-icon { width: 32px; height: 32px; background: rgba(127,1,31,0.06); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; color: var(--crimson); transition: background 0.25s ease; }
.skill-card:hover .skill-card-icon { background: rgba(127,1,31,0.11); }
.skill-card-icon svg { width: 16px; height: 16px; }
.skill-card-title { font-family: var(--font-sans); font-size: 9px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: var(--bark); line-height: 1.2; }
.skill-card-desc { font-family: var(--font-display); font-size: 12px; line-height: 1.6; color: var(--stone); }
.skill-card-shimmer {
  position: absolute; bottom: 0; left: 0; width: 100%; height: 2px;
  background: linear-gradient(90deg, var(--crimson) 0%, var(--gold) 50%, var(--crimson) 100%);
  background-size: 200% 100%; transform: scaleX(0); transform-origin: left;
  transition: transform 0.32s ease; animation: shimmerMove 2s linear infinite; animation-play-state: paused;
}
@keyframes shimmerMove { 0% { background-position: 0% 0%; } 100% { background-position: 200% 0%; } }
.skill-card:hover .skill-card-shimmer { transform: scaleX(1); animation-play-state: running; }

/* ═══════════════════════════ SECTION HEADER ═══════════════════════════ */
.section-header { display: flex; align-items: center; gap: 16px; margin-bottom: 8px; padding: 0 56px; }
.section-title { font-family: var(--font-upright); font-size: 26px; font-weight: 400; color: var(--bark); white-space: nowrap; }
.section-line { flex: 1; height: 1px; background: rgba(127,1,31,0.15); }
.tech-sub { font-family: var(--font-display); font-size: 13px; font-style: italic; color: var(--stone); margin-bottom: 24px; padding: 0 56px; }

/* ══════════════════════════════════════════════════
   INFINITE MARQUEE — three alternating rows
══════════════════════════════════════════════════ */
.marquee-wrapper {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-bottom: 44px;
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.marquee-row {
  overflow: hidden;
  padding: 6px 0;
}
.marquee-row:hover .marquee-track { animation-play-state: paused; }

.marquee-track {
  display: flex;
  gap: 0;
  width: max-content;
}

.marquee-left  { animation: scrollLeft 28s linear infinite; }
.marquee-right { animation: scrollRight 32s linear infinite; }
.marquee-slow  { animation-duration: 40s; }

@keyframes scrollLeft {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
@keyframes scrollRight {
  0%   { transform: translateX(-50%); }
  100% { transform: translateX(0); }
}

/* Individual tech badge */
.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 9px 20px;
  margin: 0 6px;
  background: rgba(255,255,255,0.75);
  border: 1px solid rgba(127,1,31,0.09);
  border-radius: 100px;
  white-space: nowrap;
  cursor: default;
  transition: background 0.22s ease, border-color 0.22s ease, transform 0.22s ease, box-shadow 0.22s ease;
  box-shadow: 0 1px 4px rgba(61,43,31,0.06);
}
.marquee-item:hover {
  background: #fff;
  border-color: rgba(127,1,31,0.25);
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(127,1,31,0.1);
}

.marquee-icon {
  width: 22px; height: 22px;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

/* size both <img> and inline <svg> inside .marquee-icon */
.marquee-icon img,
.marquee-icon svg {
  width: 22px;
  height: 22px;
  object-fit: contain;
  display: block;
  flex-shrink: 0;
}

.marquee-name {
  font-family: var(--font-sans);
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--stone);
  transition: color 0.22s ease;
}
.marquee-item:hover .marquee-name { color: var(--bark); }

/* ═══════════════════════════ CERTIFICATIONS ═══════════════════════════ */
.certs-section { flex: 1; padding: 0 56px; }
.cert-slider {
  position: relative; border: 1px solid rgba(127,1,31,0.12); border-radius: 14px;
  overflow: hidden; background: var(--warm-white); box-shadow: 0 4px 24px rgba(61,43,31,0.07);
}
.cert-track { display: flex; transition: transform 0.52s cubic-bezier(0.33,1,0.68,1); will-change: transform; }
.cert-slide { min-width: 100%; display: grid; grid-template-columns: 1fr 1fr; align-items: stretch; }

.cert-img-wrap {
  position: relative; background: #f5f0e8; overflow: hidden;
  min-height: 200px; display: flex; align-items: center; justify-content: center; padding: 16px;
}
.cert-img { width: 100%; height: auto; object-fit: contain; object-position: center; display: block; transition: transform 0.5s ease; }
.cert-slider:hover .cert-img { transform: scale(1.02); }
.cert-img-placeholder {
  display: none; position: absolute; inset: 0;
  flex-direction: column; align-items: center; justify-content: center; gap: 8px;
  background: rgba(245,235,208,0.6); color: rgba(127,1,31,0.35);
}
.cert-img-placeholder span { font-family: var(--font-sans); font-size: 7px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(127,1,31,0.3); }
.cert-img-shine { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 55%); pointer-events: none; }

.cert-info { padding: 24px 22px; display: flex; flex-direction: column; justify-content: center; gap: 10px; }
.cert-meta { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
.cert-issuer { font-family: var(--font-sans); font-size: 7.5px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--crimson); }
.cert-year   { font-family: var(--font-sans); font-size: 7.5px; color: rgba(61,43,31,0.4); letter-spacing: 0.08em; }
.cert-title  { font-family: var(--font-upright); font-size: clamp(14px, 1.4vw, 17px); font-weight: 400; color: var(--bark); line-height: 1.35; margin: 0; }
.cert-link {
  display: inline-flex; align-items: center; gap: 7px;
  font-family: var(--font-sans); font-size: 8px; font-weight: 600;
  letter-spacing: 0.16em; text-transform: uppercase; color: var(--crimson);
  text-decoration: none; padding-bottom: 3px; border-bottom: 1px solid rgba(127,1,31,0.22);
  align-self: flex-start;
  transition: gap 0.22s ease, border-color 0.22s ease, color 0.22s ease;
}
.cert-link:hover { gap: 11px; border-bottom-color: var(--crimson); color: #a8001f; }
.cert-link svg { transition: transform 0.22s ease; flex-shrink: 0; }
.cert-link:hover svg { transform: translate(2px, -2px); }

.cert-controls {
  display: flex; align-items: center; justify-content: center; gap: 16px;
  padding: 14px 20px 10px; border-top: 1px solid rgba(127,1,31,0.07);
  background: rgba(245,235,208,0.35); position: relative;
}
.cert-nav {
  display: flex; align-items: center; justify-content: center;
  width: 30px; height: 30px; background: #fff;
  border: 1px solid rgba(127,1,31,0.14); border-radius: 3px;
  cursor: pointer; color: var(--bark);
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.18s;
  flex-shrink: 0;
}
.cert-nav:hover:not(:disabled) { background: var(--crimson); border-color: var(--crimson); color: #fff; transform: scale(1.05); }
.cert-nav:disabled { opacity: 0.28; cursor: default; }
.cert-dots { display: flex; align-items: center; gap: 7px; }
.cert-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: rgba(127,1,31,0.18); border: none; cursor: pointer; padding: 0;
  transition: background 0.25s, width 0.25s;
}
.cert-dot--active { width: 18px; border-radius: 3px; background: var(--crimson); }
.cert-counter { position: absolute; right: 18px; bottom: 15px; display: flex; align-items: baseline; gap: 3px; pointer-events: none; }
.cert-counter-current { font-family: var(--font-upright); font-size: 13px; font-weight: 400; color: var(--crimson); }
.cert-counter-sep     { font-family: var(--font-sans); font-size: 9px; color: rgba(61,43,31,0.28); }
.cert-counter-total   { font-family: var(--font-upright); font-size: 11px; font-weight: 300; color: rgba(61,43,31,0.38); }

/* ═══════════════════════════ 1024px ═══════════════════════════ */
@media (max-width: 1024px) {
  .about-hero { padding: 64px 48px; gap: 48px; }
  .about-story-left { padding: 56px 40px; }
  .about-story-right { padding: 56px 0 60px; }
  .section-header, .tech-sub, .certs-section { padding-left: 40px; padding-right: 40px; }
}

/* ═══════════════════════════ 768px ═══════════════════════════ */
@media (max-width: 768px) {
  .about-hero {
    grid-template-columns: 1fr;
    padding: 56px 24px 72px;
    gap: 48px;
    justify-items: center;
  }
  .about-hero-text {
    width: 100%;
    display: flex; flex-direction: column; align-items: center; gap: 24px;
    text-align: center;
  }
  .about-tagline { font-size: clamp(22px, 6vw, 32px); }
  .hero-scroll-hint { justify-content: center; }

  .about-photo-wrapper {
    position: relative;
    display: flex; flex-direction: column; align-items: center;
    padding-bottom: 52px; width: 100%;
  }
  .photo-glow { left: 50%; transform: translateX(-50%); }
  .about-photo-box { width: 200px; height: 260px; }
  .photo-code-snippet {
    position: absolute; top: auto; bottom: 0; left: 50%;
    transform: translateX(-50%) translateY(0);
    animation: floatCardMobile 6s ease-in-out infinite;
    font-size: 10.5px; padding: 8px 14px;
  }

  .about-story { grid-template-columns: 1fr; }
  .about-story-left  { padding: 48px 24px; }
  .about-story-right { padding: 48px 0 56px; }
  .section-header, .tech-sub, .certs-section { padding-left: 24px; padding-right: 24px; }

  .skills-card-grid { grid-template-columns: 1fr 1fr; gap: 10px; }

  .cert-slide { grid-template-columns: 1fr; }
  .cert-img-wrap { min-height: 220px; border-bottom: 1px solid rgba(127,1,31,0.08); }
}

/* ═══════════════════════════ 480px ═══════════════════════════ */
@media (max-width: 480px) {
  .about-hero { padding: 48px 20px 72px; gap: 40px; }
  .about-photo-box { width: 175px; height: 228px; }
  .about-tagline { font-size: clamp(20px, 7vw, 26px); }
  .skills-card-grid { grid-template-columns: 1fr; }
  .cert-img-wrap { min-height: 190px; }
  .cert-title { font-size: 14px; }
  .cert-info { padding: 18px 16px; }
  .section-title { font-size: 22px; }
  .section-header, .tech-sub, .certs-section { padding-left: 20px; padding-right: 20px; }
  .marquee-item { padding: 8px 14px; }
  .marquee-name { font-size: 8px; }
  .marquee-icon,
  .marquee-icon svg { width: 18px; height: 18px; }
}

@keyframes floatCardMobile {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(-6px); }
}

</style>