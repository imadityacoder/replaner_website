<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <a href="#" class="footer-logo" @click="(event) => onPlaceholderClick(event)">
                        <div class="footer-logo-icon">R</div>
                        Replaner
                    </a>
                    <p>India's most trusted scrap pickup and recycling platform. Making waste management simple,
                        rewarding, and sustainable for everyone.</p>
                </div>

                <div class="footer-column">
                    <h4>Product</h4>
                    <ul class="footer-links">
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Download App</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Web App</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">For Dealers</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Pricing</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Company</h4>
                    <ul class="footer-links">
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">About Us</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Careers</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Press</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Contact</a></li>
                    </ul>
                </div>

                <div class="footer-column">
                    <h4>Support</h4>
                    <ul class="footer-links">
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Help Center</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Safety</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Terms of Service</a></li>
                        <li><a href="#" @click="(event) => onPlaceholderClick(event)">Privacy Policy</a></li>
                    </ul>
                </div>
            </div>

            <div class="footer-bottom">
                <div class="footer-copyright">© 2025 Replaner. All rights reserved.</div>
                <div class="footer-legal">
                    <a href="#" @click="(event) => onPlaceholderClick(event)">Privacy Policy</a>
                    <a href="#" @click="(event) => onPlaceholderClick(event)">Terms of Service</a>
                    <a href="#" @click="(event) => onPlaceholderClick(event)">Cookies</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
defineProps({
  onPlaceholderClick: {
    type: Function,
    required: true,
  },
});
</script>
