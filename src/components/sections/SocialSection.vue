<template>
    <section class="section social-section">
        <div class="section-container">
            <div class="section-header animate-on-scroll" v-scroll-reveal>
                <div class="section-tag">Get In Touch</div>
                <h2 class="section-title">Connect With Us</h2>
                <p class="section-subtitle">Follow our journey, get sustainability tips, and stay updated on new
                    features and city launches.</p>
            </div>

            <div class="social-grid">
                <a href="#" class="social-card animate-on-scroll" v-scroll-reveal @click="(event) => onPlaceholderClick(event)">
                    <div class="social-icon instagram">📸</div>
                    <div class="social-text">
                        <h4>Instagram</h4>
                        <p>@replaner_official</p>
                    </div>
                </a>

                <a href="#" class="social-card animate-on-scroll" v-scroll-reveal @click="(event) => onPlaceholderClick(event)">
                    <div class="social-icon linkedin">💼</div>
                    <div class="social-text">
                        <h4>LinkedIn</h4>
                        <p>Replaner India</p>
                    </div>
                </a>

                <a href="#" class="social-card animate-on-scroll" v-scroll-reveal @click="(event) => onPlaceholderClick(event)">
                    <div class="social-icon twitter">𝕏</div>
                    <div class="social-text">
                        <h4>X (Twitter)</h4>
                        <p>@replaner</p>
                    </div>
                </a>

                <a href="#" class="social-card animate-on-scroll" v-scroll-reveal @click="(event) => onPlaceholderClick(event)">
                    <div class="social-icon whatsapp">💬</div>
                    <div class="social-text">
                        <h4>WhatsApp</h4>
                        <p>+91 98765 43210</p>
                    </div>
                </a>

                <a href="mailto:hello@replaner.com" class="social-card animate-on-scroll" v-scroll-reveal style="grid-column: span 2;">
                    <div class="social-icon email">✉️</div>
                    <div class="social-text">
                        <h4>Email Us</h4>
                        <p>hello@replaner.com</p>
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
  onPlaceholderClick: {
    type: Function,
    required: true,
  },
});
</script>
