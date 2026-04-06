<template>
  <SiteNavbar
    :is-mobile-menu-open="isMobileMenuOpen"
    :is-navbar-scrolled="isNavbarScrolled"
    :set-navbar-ref="setNavbarRef"
    :on-toggle-mobile-menu="toggleMobileMenu"
    :on-hash-click="handleHashClick"
    :on-placeholder-click="handlePlaceholderClick"
    :on-mobile-nav-hash-click="handleMobileNavHashClick"
    :on-mobile-nav-placeholder-click="handleMobileNavPlaceholderClick"
  />

  <HeroSection
    :phone-transform="phoneTransform"
    :on-hash-click="handleHashClick"
    :on-placeholder-click="handlePlaceholderClick"
    :on-hero-mouse-move="handleHeroMouseMove"
    :on-hero-mouse-leave="handleHeroMouseLeave"
  />

  <StatsSection />
  <AboutSection />
  <HowItWorksSection />
  <DualAudienceSection />
  <AppShowcaseSection />
  <WhyReplanerSection />
  <ImpactSection />
  <SocialSection :on-placeholder-click="handlePlaceholderClick" />
  <FaqSection :active-faq-index="activeFaqIndex" :on-toggle-faq="toggleFaqItem" />
  <FinalCtaSection :on-placeholder-click="handlePlaceholderClick" />
  <SiteFooter :on-placeholder-click="handlePlaceholderClick" />

  <div v-if="isToastVisible" :style="toastStyle">{{ toastText }}</div>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import SiteNavbar from '../components/layout/SiteNavbar.vue';
import SiteFooter from '../components/layout/SiteFooter.vue';
import AboutSection from '../components/sections/AboutSection.vue';
import AppShowcaseSection from '../components/sections/AppShowcaseSection.vue';
import DualAudienceSection from '../components/sections/DualAudienceSection.vue';
import FaqSection from '../components/sections/FaqSection.vue';
import FinalCtaSection from '../components/sections/FinalCtaSection.vue';
import HeroSection from '../components/sections/HeroSection.vue';
import HowItWorksSection from '../components/sections/HowItWorksSection.vue';
import ImpactSection from '../components/sections/ImpactSection.vue';
import SocialSection from '../components/sections/SocialSection.vue';
import StatsSection from '../components/sections/StatsSection.vue';
import WhyReplanerSection from '../components/sections/WhyReplanerSection.vue';
import { useComingSoonToast } from '../composables/useComingSoonToast';
import { useSmoothHashScroll } from '../composables/useSmoothHashScroll';

const isMobileMenuOpen = ref(false);
const isNavbarScrolled = ref(false);
const activeFaqIndex = ref(null);
const phoneTransform = ref('');
const hasFinePointer = ref(false);
const navbarElement = ref(null);

const { scrollToHash } = useSmoothHashScroll(navbarElement);
const { isVisible: isToastVisible, text: toastText, toastStyle, showToast, cleanup: cleanupToast } =
  useComingSoonToast();

let lastScroll = 0;
let ticking = false;

const setNavbarRef = (element) => {
  navbarElement.value = element;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const handleHashClick = (event, href) => {
  if (!href || href === '#') {
    return;
  }

  event.preventDefault();
  scrollToHash(href);
};

const handleMobileNavHashClick = (event, href) => {
  closeMobileMenu();

  if (!href || href === '#') {
    return;
  }

  event.preventDefault();
  scrollToHash(href);
};

const handlePlaceholderClick = (event) => {
  event.preventDefault();
  showToast('Coming soon!');
};

const handleMobileNavPlaceholderClick = () => {
  closeMobileMenu();
};

const toggleFaqItem = (index) => {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index;
};

const updateNavbar = () => {
  const currentScroll = window.pageYOffset;
  isNavbarScrolled.value = currentScroll > 50;

  lastScroll = currentScroll;
  ticking = false;
};

const handleWindowScroll = () => {
  if (!ticking) {
    requestAnimationFrame(updateNavbar);
    ticking = true;
  }
};

const handleHeroMouseMove = (event) => {
  if (!hasFinePointer.value) {
    return;
  }

  const rect = event.currentTarget.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = (y - centerY) / 20;
  const rotateY = (centerX - x) / 20;

  phoneTransform.value = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
};

const handleHeroMouseLeave = () => {
  phoneTransform.value = '';
};

watch(isMobileMenuOpen, (isOpen) => {
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

onMounted(() => {
  hasFinePointer.value = window.matchMedia('(pointer: fine)').matches;
  window.addEventListener('scroll', handleWindowScroll, { passive: true });
  updateNavbar();

  console.log('Replaner initialized successfully');
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleWindowScroll);
  document.body.style.overflow = '';
  phoneTransform.value = '';
  cleanupToast();
});
</script>
