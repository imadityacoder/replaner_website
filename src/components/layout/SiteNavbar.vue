<template>
    <nav :ref="setNavbarRef" class="navbar" :class="{ scrolled: isNavbarScrolled }" id="navbar">
        <div class="navbar-container">
            <a href="#" class="logo">
                <div class="logo-icon">R</div>
                Replaner
            </a>

            <ul class="nav-links">
                <li><a href="#home" @click="(event) => onHashClick(event, '#home')">Home</a></li>
                <li><a href="#how-it-works" @click="(event) => onHashClick(event, '#how-it-works')">How It Works</a></li>
                <li><a href="#features" @click="(event) => onHashClick(event, '#features')">Features</a></li>
                <li><a href="#impact" @click="(event) => onHashClick(event, '#impact')">Impact</a></li>
                <li><a href="#faq" @click="(event) => onHashClick(event, '#faq')">FAQ</a></li>
            </ul>

            <div class="nav-buttons">
                <a href="#" class="btn btn-secondary" @click="(event) => onPlaceholderClick(event)">Use Web App</a>
                <a href="#download" class="btn btn-primary" @click="(event) => onHashClick(event, '#download')">Download App</a>
            </div>

            <button class="mobile-menu-btn" :class="{ active: isMobileMenuOpen }" id="mobileMenuBtn" aria-label="Toggle menu"
                @click="onToggleMobileMenu">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>

        <div class="mobile-nav" :class="{ active: isMobileMenuOpen }" id="mobileNav">
            <ul class="mobile-nav-links">
                <li><a href="#home" @click="(event) => onMobileNavHashClick(event, '#home')">Home</a></li>
                <li><a href="#how-it-works" @click="(event) => onMobileNavHashClick(event, '#how-it-works')">How It Works</a></li>
                <li><a href="#features" @click="(event) => onMobileNavHashClick(event, '#features')">Features</a></li>
                <li><a href="#impact" @click="(event) => onMobileNavHashClick(event, '#impact')">Impact</a></li>
                <li><a href="#faq" @click="(event) => onMobileNavHashClick(event, '#faq')">FAQ</a></li>
            </ul>
            <div class="mobile-nav-buttons">
                <a href="#" class="btn btn-secondary" style="justify-content: center;"
                    @click="onMobileNavPlaceholderClick">Use Web App</a>
                <a href="#download" class="btn btn-primary" style="justify-content: center;"
                    @click="(event) => onMobileNavHashClick(event, '#download')">Download App</a>
            </div>
        </div>
    </nav>
</template>

<script setup>
defineProps({
  isMobileMenuOpen: {
    type: Boolean,
    required: true,
  },
  isNavbarScrolled: {
    type: Boolean,
    required: true,
  },
  setNavbarRef: {
    type: Function,
    required: true,
  },
  onToggleMobileMenu: {
    type: Function,
    required: true,
  },
  onHashClick: {
    type: Function,
    required: true,
  },
  onPlaceholderClick: {
    type: Function,
    required: true,
  },
  onMobileNavHashClick: {
    type: Function,
    required: true,
  },
  onMobileNavPlaceholderClick: {
    type: Function,
    required: true,
  },
});
</script>
