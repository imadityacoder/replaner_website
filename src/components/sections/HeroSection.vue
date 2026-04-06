<template>
    <section class="hero" id="home">
        <div class="hero-bg-shapes">
            <div class="hero-shape hero-shape-1"></div>
            <div class="hero-shape hero-shape-2"></div>
            <div class="hero-shape hero-shape-3"></div>
        </div>

        <div class="hero-container">
            <div class="hero-content">
                <div class="hero-badge">
                    <span></span>
                    Now Available in 50+ Cities
                </div>

                <h1 class="hero-title">
                    Turn Scrap Into <span class="highlight">Cash Instantly</span>
                </h1>

                <p class="hero-description">
                    Connect with verified scrap dealers near you. Schedule pickups in seconds,
                    get fair prices, and get paid on the spot. The smart way to recycle.
                </p>

                <div class="hero-buttons">
                    <a href="#download" class="btn btn-primary" @click="(event) => onHashClick(event, '#download')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                            <polyline points="7 10 12 15 17 10" />
                            <line x1="12" y1="15" x2="12" y2="3" />
                        </svg>
                        Download App
                    </a>
                    <a href="#" class="btn btn-secondary" @click="(event) => onPlaceholderClick(event)">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        Use Web App
                    </a>
                </div>

                <div class="hero-trust">
                    <div class="trust-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        Fast Pickup
                    </div>
                    <div class="trust-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17.5 19c0-1.7-1.3-3-3-3h-11c-1.7 0-3 1.3-3 3" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M22 19c0-1.7-1.3-3-3-3h-1" />
                            <circle cx="17" cy="8" r="3" />
                        </svg>
                        Nearby Dealers
                    </div>
                    <div class="trust-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        Easy Booking
                    </div>
                    <div class="trust-item">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        Eco-Friendly
                    </div>
                </div>
            </div>


            <div class="hero-visual" @mousemove="onHeroMouseMove" @mouseleave="onHeroMouseLeave">
                <div class="phone-mockup" :style="phoneMockupStyle">
                    <div class="phone-screen">
                        <div class="phone-notch"></div>
                        <div class="app-ui">
                            <div class="app-header">
                                <div class="app-greeting">
                                    Good Morning
                                    <strong>Rahul!</strong>
                                </div>
                                <div class="app-avatar"></div>
                            </div>

                            <div class="app-card">
                                <h3>Schedule a Pickup</h3>
                                <p>Turn scrap into cash today</p>
                                <button class="app-button">Book Now</button>
                            </div>

                            <div class="app-list">
                                <div class="app-list-item">
                                    <div class="app-icon">📦</div>
                                    <div class="app-item-text">
                                        <h4>Paper & Cardboard</h4>
                                        <p>₹15/kg • 5 dealers nearby</p>
                                    </div>
                                </div>
                                <div class="app-list-item">
                                    <div class="app-icon">🥤</div>
                                    <div class="app-item-text">
                                        <h4>Plastic</h4>
                                        <p>₹12/kg • 3 dealers nearby</p>
                                    </div>
                                </div>
                                <div class="app-list-item">
                                    <div class="app-icon">🔌</div>
                                    <div class="app-item-text">
                                        <h4>E-Waste</h4>
                                        <p>₹45/kg • 2 dealers nearby</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="floating-card floating-card-1">
                    <div class="mini-stat">
                        <div class="mini-stat-icon">💰</div>
                        <div class="mini-stat-text">
                            <strong>₹2,500+</strong>
                            <span>Average monthly</span>
                        </div>
                    </div>
                </div>

                <div class="floating-card floating-card-2">
                    <div class="mini-stat">
                        <div class="mini-stat-icon">⚡</div>
                        <div class="mini-stat-text">
                            <strong>30 min</strong>
                            <span>Fast response</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  phoneTransform: {
    type: String,
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
  onHeroMouseMove: {
    type: Function,
    required: true,
  },
  onHeroMouseLeave: {
    type: Function,
    required: true,
  },
});

const phoneMockupStyle = computed(() => {
  if (!props.phoneTransform) {
    return undefined;
  }

  return {
    transform: props.phoneTransform,
  };
});
</script>
