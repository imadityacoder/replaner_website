<template>
    <section class="section final-cta" id="download">
        <div class="section-container">
            <div class="animate-on-scroll" v-scroll-reveal>
                <h2 class="section-title">Ready to Turn Scrap Into Cash?</h2>
                <p class="section-subtitle">Join thousands already selling with Replaner. Download the app and get your
                    first pickup scheduled in minutes.</p>

                <div class="final-cta-buttons">
                    <a href="#" class="btn btn-primary" @click="(event) => onPlaceholderClick(event)">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download App
                    </a>
                    <a href="#" class="btn btn-secondary" @click="(event) => onPlaceholderClick(event)">Become a Dealer</a>
                </div>
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
