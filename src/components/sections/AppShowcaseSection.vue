<template>
    <section class="section app-showcase">
        <div class="section-container">
            <div class="showcase-grid">
                <div class="showcase-content animate-on-scroll" v-scroll-reveal>
                    <div class="showcase-tag">The App</div>
                    <h2 class="section-title">Your Scrap, Simplified</h2>
                    <p class="section-subtitle">Everything you need to sell scrap — right in your pocket. Book, track,
                        and get paid with just a few taps.</p>
                    <div class="showcase-features">
                        <div class="showcase-feature">
                            <div class="showcase-feature-icon">📅</div>
                            <div class="showcase-feature-text">
                                <h4>Smart Scheduling</h4>
                                <p>Pick a time that works for you. Morning, evening, or weekend slots available.</p>
                            </div>
                        </div>
                        <div class="showcase-feature">
                            <div class="showcase-feature-icon">�</div>
                            <div class="showcase-feature-text">
                                <h4>Live Tracking</h4>
                                <p>See exactly when your dealer arrives. No more waiting around all day.</p>
                            </div>
                        </div>
                        <div class="showcase-feature">
                            <div class="showcase-feature-icon">�</div>
                            <div class="showcase-feature-text">
                                <h4>Instant Payments</h4>
                                <p>Cash or UPI — get paid immediately when your scrap is weighed.</p>
                            </div>
                        </div>
                        <div class="showcase-feature">
                            <div class="showcase-feature-icon">📊</div>
                            <div class="showcase-feature-text">
                                <h4>Selling History</h4>
                                <p>Track every sale, view earnings, and see your environmental impact.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="showcase-visual animate-on-scroll" v-scroll-reveal>
                    <div class="showcase-phone">
                        <div class="showcase-screen">
                            <div class="phone-notch"></div>
                            <div class="app-ui">
                                <div class="app-header">
                                    <div class="app-greeting">
                                        Active Request
                                        <strong style="color: var(--fern);">In Progress</strong>
                                    </div>
                                    <div class="app-avatar"></div>
                                </div>

                                <div
                                    style="background: var(--white); border-radius: 16px; padding: 16px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                                    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
                                        <div
                                            style="width: 48px; height: 48px; background: linear-gradient(135deg, var(--fern), var(--palm-leaf)); border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                                            👤</div>
                                        <div>
                                            <div style="font-weight: 600; color: var(--evergreen);">Ramesh Scrap Dealers
                                            </div>
                                            <div style="font-size: 0.8rem; color: var(--hunter-green);">Arriving in 15
                                                min</div>
                                        </div>
                                    </div>
                                    <div
                                        style="height: 4px; background: var(--light-bg); border-radius: 2px; overflow: hidden;">
                                        <div
                                            style="width: 70%; height: 100%; background: linear-gradient(90deg, var(--fern), var(--palm-leaf));">
                                        </div>
                                    </div>
                                </div>

                                <div class="app-list">
                                    <div class="app-list-item">
                                        <div class="app-icon">📋</div>
                                        <div class="app-item-text">
                                            <h4>Request Details</h4>
                                            <p>Paper, Plastic, Metal • 12kg</p>
                                        </div>
                                    </div>
                                    <div class="app-list-item">
                                        <div class="app-icon">📍</div>
                                        <div class="app-item-text">
                                            <h4>Pickup Location</h4>
                                            <p>123 Green Street, Mumbai</p>
                                        </div>
                                    </div>
                                    <div class="app-list-item">
                                        <div class="app-icon">💵</div>
                                        <div class="app-item-text">
                                            <h4>Expected Amount</h4>
                                            <p>₹340 - ₹380</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="floating-ui-card floating-ui-1">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <div
                                style="width: 40px; height: 40px; background: linear-gradient(135deg, var(--fern), var(--palm-leaf)); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
                                ✓</div>
                            <div>
                                <div style="font-weight: 600; font-size: 0.85rem; color: var(--evergreen);">Verified
                                </div>
                                <div style="font-size: 0.75rem; color: var(--hunter-green);">ID & documents checked
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="floating-ui-card floating-ui-2">
                        <div style="display: flex; align-items: center; gap: 0.75rem;">
                            <div
                                style="width: 40px; height: 40px; background: linear-gradient(135deg, var(--lime-cream), var(--palm-leaf)); border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 1.25rem;">
                                ⭐</div>
                            <div>
                                <div style="font-weight: 600; font-size: 0.85rem; color: var(--evergreen);">4.9 Rating
                                </div>
                                <div style="font-size: 0.75rem; color: var(--hunter-green);">Based on 2,400+ reviews
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="floating-ui-card floating-ui-3">
                        <div
                            style="display: flex; align-items: center; gap: 0.5rem; color: var(--fern); font-weight: 600; font-size: 0.9rem;">
                            <span style="font-size: 1.25rem;">🌱</span>
                            Eco Impact: +12kg
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
