<template>
    <section class="stats-section">
        <div class="stats-container">
            <div class="stats-grid animate-on-scroll" v-scroll-reveal>
                <div class="stat-card" v-stat-counter>
                    <div class="stat-icon">🚛</div>
                    <div class="stat-number">50K+</div>
                    <div class="stat-label">Pickups Completed</div>
                </div>
                <div class="stat-card" v-stat-counter>
                    <div class="stat-icon">👥</div>
                    <div class="stat-number">25K+</div>
                    <div class="stat-label">Active Users</div>
                </div>
                <div class="stat-card" v-stat-counter>
                    <div class="stat-icon">🏪</div>
                    <div class="stat-number">1,200+</div>
                    <div class="stat-label">Verified Dealers</div>
                </div>
                <div class="stat-card" v-stat-counter>
                    <div class="stat-icon">🌍</div>
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Cities Served</div>
                </div>
            </div>
        </div>
    </section>
</template>
