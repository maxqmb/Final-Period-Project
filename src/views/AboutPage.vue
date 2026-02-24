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
                  <span class="marquee-icon" v-html="tech.svg" aria-hidden="true"></span>
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
                  <span class="marquee-icon" v-html="tech.svg" aria-hidden="true"></span>
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
                  <span class="marquee-icon" v-html="tech.svg" aria-hidden="true"></span>
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
  { id: 1, title: 'SEO Certified',                                         issuer: 'HubSpot',      year: '2026', image: '/assets/certs/cert-5.png', link: 'https://app-na2.hubspot.com/academy/achievements/db7dlkh3/en/1/maxene-quiambao/seo' },
  { id: 2, title: 'Design Thinking for Beginners',                         issuer: 'SimpliLearn',  year: '2025', image: '/assets/certs/cert-4.png', link: 'https://simpli-web.app.link/e/FAIxn4wUX0b' },
  { id: 3, title: 'Introduction to Graphic Design: Basics of UI/UX',       issuer: 'SimpliLearn',  year: '2023', image: '/assets/certs/cert-3.png', link: 'https://simpli-web.app.link/e/haeuArjUX0b' },
  { id: 4, title: 'Legacy JavaScript Algorithms and Data Structures V7',   issuer: 'freeCodeCamp', year: '2025', image: '/assets/certs/cert-2.png', link: 'https://www.freecodecamp.org/certification/maxqmb/back-end-development-and-apis' },
  { id: 5, title: 'Legacy Responsive Web Design V8',                       issuer: 'freeCodeCamp', year: '2024', image: '/assets/certs/cert-1.png', link: 'https://www.freecodecamp.org/certification/maxqmb/responsive-web-design' },
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
   TECH ROWS — split into 3 rows for marquee
   Row 1 (left):  core web + frameworks
   Row 2 (right): design tools + languages
   Row 3 (left):  extras
══════════════════════════════════════ */
const row1 = [
  { name: 'HTML5',      svg: `<svg viewBox="0 0 24 24"><path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#E34F26"/><path d="M12 5H18L17 17L12 18.5V5Z" fill="#EF652A"/><path d="M8 7H12V9H10L10.2 11H12V13H8.5L8 7ZM8.7 14H10.7L10.9 16L12 16.3V18.3L9.2 17.5L8.7 14Z" fill="white"/><path d="M12 7H16L15.5 11H12V9H14L13.9 11H12V13H15.2L14.8 16L12 16.3V18.3L14.8 17.5L15.3 14H12V7Z" fill="white"/></svg>` },
  { name: 'CSS3',       svg: `<svg viewBox="0 0 24 24"><path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#1572B6"/><path d="M12 5H18L17 17L12 18.5V5Z" fill="#33A9DC"/><path d="M8 7H15.5L15.2 9H10L10.2 11H15L14.5 15L12 15.8L9.5 15L9.3 13H11.3L11.4 14L12 14.2L12.6 14L12.8 12H9.8L9 7H8Z" fill="white"/><path d="M12 7V9H14.8L14.6 11H12V12H14.5L14.3 14L12 14.2V15.8L14.5 15L15 12H12.5V11H15.2L15.5 9H12V7Z" fill="white"/></svg>` },
  { name: 'JavaScript', svg: `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="2" fill="#F7DF1E"/><path d="M7 17.5C7.4 18.2 7.9 18.7 8.9 18.7C9.8 18.7 10.4 18.2 10.4 17.5C10.4 16.6 9.8 16.3 8.9 15.9L8.4 15.7C6.9 15.1 6 14.3 6 12.7C6 11.2 7.1 10 8.8 10C10.1 10 11 10.6 11.5 11.5L10.2 12.4C9.9 11.9 9.6 11.6 8.8 11.6C8 11.6 7.5 12.1 7.5 12.7C7.5 13.5 8 13.7 8.9 14.1L9.4 14.3C11.1 15 12 15.8 12 17.4C12 19.2 10.6 20.2 8.8 20.2C7.1 20.2 6 19.3 5.5 18.3L7 17.5ZM13.5 17.3C14 18.2 14.7 18.7 15.8 18.7C16.8 18.7 17.3 18.2 17.3 17.6C17.3 16.8 16.8 16.5 15.8 16.1L15.3 15.9C13.9 15.3 13 14.5 13 12.9C13 11.3 14.2 10.1 15.8 10.1C16.9 10.1 17.8 10.6 18.3 11.5L17 12.4C16.7 11.9 16.4 11.7 15.8 11.7C15.1 11.7 14.7 12.1 14.7 12.9C14.7 13.6 15.1 13.9 16 14.3L16.5 14.5C18.1 15.2 19 15.9 19 17.6C19 19.3 17.7 20.2 15.8 20.2C13.9 20.2 12.7 19.2 12.1 18.1L13.5 17.3Z" fill="#323330"/></svg>` },
  { name: 'Vue.js',     svg: `<svg viewBox="0 0 24 24"><path d="M12 21.5L1 3.5H5.5L12 14.5L18.5 3.5H23L12 21.5Z" fill="#41B883"/><path d="M12 21.5L7.5 8.5H9.5L12 14.5L14.5 8.5H16.5L12 21.5Z" fill="#35495E"/></svg>` },
  { name: 'Tailwind',   svg: `<svg viewBox="0 0 24 24"><path d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.343 8.424 11.838 8.927 12.385 9.482C13.279 10.388 14.316 11.438 16.5 11.438C18.9 11.438 20.4 10.238 21 7.838C20.1 9.038 19.05 9.488 17.85 9.188C17.157 9.014 16.662 8.511 16.115 7.956C15.221 7.05 14.184 6 12 6ZM7.5 11.438C5.1 11.438 3.6 12.638 3 15.038C3.9 13.838 4.95 13.388 6.15 13.688C6.843 13.862 7.338 14.365 7.885 14.92C8.779 15.826 9.816 16.876 12 16.876C14.4 16.876 15.9 15.676 16.5 13.276C15.6 14.476 14.55 14.926 13.35 14.626C12.657 14.452 12.162 13.949 11.615 13.394C10.721 12.488 9.684 11.438 7.5 11.438Z" fill="#06B6D4"/></svg>` },
  { name: 'PHP',        svg: `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/><path d="M7 10H9.5C10.5 10 11 10.5 11 11.5C11 12.5 10.5 13 9.5 13H8L7.5 15H6L7 10ZM8.2 11L7.9 12H9.3C9.7 12 10 11.8 10 11.4C10 11.1 9.8 11 9.4 11H8.2ZM11.5 10H13C14.5 10 15 10.8 15 11.8C15 13 14.2 14 12.8 14H11.8L11.5 15H10L11.5 10ZM12 11L11.5 13H12.6C13.3 13 14 12.6 14 11.9C14 11.4 13.7 11 13 11H12ZM15.5 10H17L16.8 11H18.2L18 12H16.6L16.3 13.3C16.2 13.7 16.4 14 16.8 14H17.5L17.3 15H16.5C15.5 15 15 14.5 15.2 13.5L15.5 10Z" fill="white"/></svg>` },
  { name: 'GitHub',     svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>` },
]

const row2 = [
  { name: 'Figma',         svg: `<svg viewBox="0 0 24 24"><path d="M8.5 2H12V8H8.5C6.567 8 5 6.433 5 4.5C5 2.567 6.567 2 8.5 2Z" fill="#F24E1E"/><path d="M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12V2Z" fill="#FF7262"/><path d="M12 9H15.5C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16C13.567 16 12 14.433 12 12.5V9Z" fill="#A259FF"/><path d="M5 12.5C5 10.567 6.567 9 8.5 9H12V16H8.5C6.567 16 5 14.433 5 12.5Z" fill="#1ABCFE"/><path d="M12 16H15.5C17.433 16 19 17.567 19 19.5C19 21.433 17.433 22 15.5 22C13.567 22 12 20.433 12 18.5V16Z" fill="#0ACF83"/></svg>` },
  { name: 'VS Code',       svg: `<svg viewBox="0 0 24 24"><path d="M17 1.5L8.5 9.5L4 6.5L1.5 7.5V16.5L4 17.5L8.5 14.5L17 22.5L22.5 20V4L17 1.5Z" fill="#007ACC"/><path d="M17 7.5L11.5 12L17 16.5V7.5Z" fill="white"/><path d="M4 8.8L8.5 12L4 15.2V8.8Z" fill="white"/></svg>` },
  { name: 'Graphic Design',svg: `<svg viewBox="0 0 24 24"><circle cx="13.5" cy="6.5" r="2.5" fill="#E2C47A"/><circle cx="17.5" cy="10.5" r="2.5" fill="#7f011f"/><circle cx="13.5" cy="14.5" r="2.5" fill="#41B883"/><circle cx="9.5" cy="10.5" r="2.5" fill="#1572B6"/><path d="M4 20h16M4 20l2-4M20 20l-2-4" stroke="#8a7a6e" stroke-width="1.5" stroke-linecap="round"/></svg>` },
  { name: 'Responsive',    svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#8a7a6e" stroke-width="1.5"><rect x="2" y="4" width="14" height="10" rx="1.5"/><rect x="16" y="7" width="6" height="7" rx="1"/><path d="M5 18h7M8.5 14v4" stroke-linecap="round"/></svg>` },
  { name: 'UI/UX',         svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#8a7a6e" stroke-width="1.5"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M3 7h18"/><circle cx="6" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><circle cx="9" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><circle cx="12" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><path d="M7 11h4M7 13h6" stroke-linecap="round"/></svg>` },
  { name: 'HTML5',         svg: `<svg viewBox="0 0 24 24"><path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#E34F26"/><path d="M12 5H18L17 17L12 18.5V5Z" fill="#EF652A"/><path d="M8 7H12V9H10L10.2 11H12V13H8.5L8 7ZM8.7 14H10.7L10.9 16L12 16.3V18.3L9.2 17.5L8.7 14Z" fill="white"/><path d="M12 7H16L15.5 11H12V9H14L13.9 11H12V13H15.2L14.8 16L12 16.3V18.3L14.8 17.5L15.3 14H12V7Z" fill="white"/></svg>` },
  { name: 'CSS3',          svg: `<svg viewBox="0 0 24 24"><path d="M4 3L5.5 19.5L12 21.5L18.5 19.5L20 3H4Z" fill="#1572B6"/><path d="M12 5H18L17 17L12 18.5V5Z" fill="#33A9DC"/><path d="M8 7H15.5L15.2 9H10L10.2 11H15L14.5 15L12 15.8L9.5 15L9.3 13H11.3L11.4 14L12 14.2L12.6 14L12.8 12H9.8L9 7H8Z" fill="white"/><path d="M12 7V9H14.8L14.6 11H12V12H14.5L14.3 14L12 14.2V15.8L14.5 15L15 12H12.5V11H15.2L15.5 9H12V7Z" fill="white"/></svg>` },
  { name: 'JavaScript',    svg: `<svg viewBox="0 0 24 24"><rect width="24" height="24" rx="2" fill="#F7DF1E"/><path d="M7 17.5C7.4 18.2 7.9 18.7 8.9 18.7C9.8 18.7 10.4 18.2 10.4 17.5C10.4 16.6 9.8 16.3 8.9 15.9L8.4 15.7C6.9 15.1 6 14.3 6 12.7C6 11.2 7.1 10 8.8 10C10.1 10 11 10.6 11.5 11.5L10.2 12.4C9.9 11.9 9.6 11.6 8.8 11.6C8 11.6 7.5 12.1 7.5 12.7C7.5 13.5 8 13.7 8.9 14.1L9.4 14.3C11.1 15 12 15.8 12 17.4C12 19.2 10.6 20.2 8.8 20.2C7.1 20.2 6 19.3 5.5 18.3L7 17.5ZM13.5 17.3C14 18.2 14.7 18.7 15.8 18.7C16.8 18.7 17.3 18.2 17.3 17.6C17.3 16.8 16.8 16.5 15.8 16.1L15.3 15.9C13.9 15.3 13 14.5 13 12.9C13 11.3 14.2 10.1 15.8 10.1C16.9 10.1 17.8 10.6 18.3 11.5L17 12.4C16.7 11.9 16.4 11.7 15.8 11.7C15.1 11.7 14.7 12.1 14.7 12.9C14.7 13.6 15.1 13.9 16 14.3L16.5 14.5C18.1 15.2 19 15.9 19 17.6C19 19.3 17.7 20.2 15.8 20.2C13.9 20.2 12.7 19.2 12.1 18.1L13.5 17.3Z" fill="#323330"/></svg>` },
]

const row3 = [
  { name: 'Vue.js',     svg: `<svg viewBox="0 0 24 24"><path d="M12 21.5L1 3.5H5.5L12 14.5L18.5 3.5H23L12 21.5Z" fill="#41B883"/><path d="M12 21.5L7.5 8.5H9.5L12 14.5L14.5 8.5H16.5L12 21.5Z" fill="#35495E"/></svg>` },
  { name: 'Tailwind',   svg: `<svg viewBox="0 0 24 24"><path d="M12 6C9.6 6 8.1 7.2 7.5 9.6C8.4 8.4 9.45 7.95 10.65 8.25C11.343 8.424 11.838 8.927 12.385 9.482C13.279 10.388 14.316 11.438 16.5 11.438C18.9 11.438 20.4 10.238 21 7.838C20.1 9.038 19.05 9.488 17.85 9.188C17.157 9.014 16.662 8.511 16.115 7.956C15.221 7.05 14.184 6 12 6ZM7.5 11.438C5.1 11.438 3.6 12.638 3 15.038C3.9 13.838 4.95 13.388 6.15 13.688C6.843 13.862 7.338 14.365 7.885 14.92C8.779 15.826 9.816 16.876 12 16.876C14.4 16.876 15.9 15.676 16.5 13.276C15.6 14.476 14.55 14.926 13.35 14.626C12.657 14.452 12.162 13.949 11.615 13.394C10.721 12.488 9.684 11.438 7.5 11.438Z" fill="#06B6D4"/></svg>` },
  { name: 'GitHub',     svg: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>` },
  { name: 'PHP',        svg: `<svg viewBox="0 0 24 24"><ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4"/><path d="M7 10H9.5C10.5 10 11 10.5 11 11.5C11 12.5 10.5 13 9.5 13H8L7.5 15H6L7 10ZM8.2 11L7.9 12H9.3C9.7 12 10 11.8 10 11.4C10 11.1 9.8 11 9.4 11H8.2ZM11.5 10H13C14.5 10 15 10.8 15 11.8C15 13 14.2 14 12.8 14H11.8L11.5 15H10L11.5 10ZM12 11L11.5 13H12.6C13.3 13 14 12.6 14 11.9C14 11.4 13.7 11 13 11H12ZM15.5 10H17L16.8 11H18.2L18 12H16.6L16.3 13.3C16.2 13.7 16.4 14 16.8 14H17.5L17.3 15H16.5C15.5 15 15 14.5 15.2 13.5L15.5 10Z" fill="white"/></svg>` },
  { name: 'Figma',      svg: `<svg viewBox="0 0 24 24"><path d="M8.5 2H12V8H8.5C6.567 8 5 6.433 5 4.5C5 2.567 6.567 2 8.5 2Z" fill="#F24E1E"/><path d="M12 2H15.5C17.433 2 19 3.567 19 5.5C19 7.433 17.433 9 15.5 9H12V2Z" fill="#FF7262"/><path d="M12 9H15.5C17.433 9 19 10.567 19 12.5C19 14.433 17.433 16 15.5 16C13.567 16 12 14.433 12 12.5V9Z" fill="#A259FF"/><path d="M5 12.5C5 10.567 6.567 9 8.5 9H12V16H8.5C6.567 16 5 14.433 5 12.5Z" fill="#1ABCFE"/><path d="M12 16H15.5C17.433 16 19 17.567 19 19.5C19 21.433 17.433 22 15.5 22C13.567 22 12 20.433 12 18.5V16Z" fill="#0ACF83"/></svg>` },
  { name: 'VS Code',    svg: `<svg viewBox="0 0 24 24"><path d="M17 1.5L8.5 9.5L4 6.5L1.5 7.5V16.5L4 17.5L8.5 14.5L17 22.5L22.5 20V4L17 1.5Z" fill="#007ACC"/><path d="M17 7.5L11.5 12L17 16.5V7.5Z" fill="white"/><path d="M4 8.8L8.5 12L4 15.2V8.8Z" fill="white"/></svg>` },
  { name: 'Responsive', svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#8a7a6e" stroke-width="1.5"><rect x="2" y="4" width="14" height="10" rx="1.5"/><rect x="16" y="7" width="6" height="7" rx="1"/><path d="M5 18h7M8.5 14v4" stroke-linecap="round"/></svg>` },
  { name: 'UI/UX',      svg: `<svg viewBox="0 0 24 24" fill="none" stroke="#8a7a6e" stroke-width="1.5"><rect x="3" y="3" width="18" height="14" rx="2"/><path d="M3 7h18"/><circle cx="6" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><circle cx="9" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><circle cx="12" cy="5" r="0.8" fill="#8a7a6e" stroke="none"/><path d="M7 11h4M7 13h6" stroke-linecap="round"/></svg>` },
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
  /* Edge fade masks so it bleeds off screen cleanly */
  mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
}

.marquee-row {
  overflow: hidden;
  padding: 6px 0;
  /* Pause marquee when user hovers */
}
.marquee-row:hover .marquee-track { animation-play-state: paused; }

.marquee-track {
  display: flex;
  gap: 0;
  width: max-content;
}

/* Left scroll: items move from right to left */
.marquee-left {
  animation: scrollLeft 28s linear infinite;
}
/* Right scroll: items move from left to right */
.marquee-right {
  animation: scrollRight 32s linear infinite;
}
/* Slower third row */
.marquee-slow {
  animation-duration: 40s;
}

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
.marquee-icon svg { width: 100%; height: 100%; display: block; }

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
  .marquee-icon { width: 18px; height: 18px; }
}

@keyframes floatCardMobile {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(-6px); }
}

</style>