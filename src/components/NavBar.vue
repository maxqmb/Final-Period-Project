<template>
  <nav role="navigation" aria-label="Main navigation">

    <!-- Logo on the left -->
    <router-link class="nav-logo" to="/" aria-label="Home">
      <img src="/assets/logo.png" alt="MQ Logo" class="nav-logo-img" />
    </router-link>

    <!-- All links on the right, left-aligned -->
    <ul class="nav-links" role="list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/resume">Resume</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>

    <!-- Hamburger (mobile only) -->
    <button
      class="hamburger"
      :class="{ open: mobileOpen }"
      @click="mobileOpen = !mobileOpen"
      aria-label="Toggle menu"
      :aria-expanded="mobileOpen"
    >
      <span></span><span></span><span></span>
    </button>

  </nav>
</template>

<script setup>
import { inject } from 'vue'
const mobileOpen = inject('mobileOpen')
</script>