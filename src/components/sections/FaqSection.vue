<template>
    <section class="section faq-section" id="faq">
        <div class="section-container">
            <div class="section-header animate-on-scroll" v-scroll-reveal>
                <div class="section-tag">FAQ</div>
                <h2 class="section-title">Questions? Answered.</h2>
                <p class="section-subtitle">Everything you need to know about selling scrap with Replaner.
                    Can't find what you're looking for? Reach out anytime.</p>
            </div>

            <div class="faq-container">
                <div v-for="(item, index) in faqItems" :key="item.question" class="faq-item animate-on-scroll"
                    v-scroll-reveal :class="{ active: activeFaqIndex === index }">
                    <button class="faq-question" @click="onToggleFaq(index)">
                        {{ item.question }}
                        <svg class="faq-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6 9 12 15 18 9" />
                        </svg>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            {{ item.answer }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
defineProps({
  activeFaqIndex: {
    type: Number,
    default: null,
  },
  onToggleFaq: {
    type: Function,
    required: true,
  },
});

const faqItems = [
  {
    question: 'What is Replaner?',
    answer:
      'Replaner is a digital platform that connects individuals and businesses with verified scrap dealers for easy scrap collection. We streamline the entire process from booking to payment, making recycling convenient and rewarding.',
  },
  {
    question: 'How does the pickup process work?',
    answer:
      'Simply select your scrap categories, schedule a pickup time, and a verified dealer will arrive at your location. They\'ll weigh the materials, offer you the agreed price, and pay you instantly. You\'ll receive a digital receipt and can rate your experience.',
  },
  {
    question: 'Is it safe and reliable?',
    answer:
      'Absolutely. Every dealer on our platform undergoes thorough background verification including ID checks and document validation. We also have a rating system so you can see reviews from other users before booking.',
  },
  {
    question: 'How do dealers get requests?',
    answer:
      'Dealers receive pickup requests from nearby customers through our dealer app. They can accept or decline based on their availability and location. Our algorithm matches customers with the most suitable dealers in their area.',
  },
  {
    question: 'Which scrap categories are supported?',
    answer:
      'We support all major scrap categories including paper & cardboard, plastic, metals (iron, aluminum, copper, brass), e-waste (old electronics, batteries), glass, and more. Prices vary by category and current market rates.',
  },
  {
    question: 'Is the web app different from the mobile app?',
    answer:
      'Both offer the same core functionality. The mobile app provides additional conveniences like push notifications and camera access for quick scrap identification. The web app is perfect for desktop users who prefer scheduling from their computer.',
  },
  {
    question: 'How can I contact support?',
    answer:
      'You can reach our support team via email at hello@replaner.com, through WhatsApp at +91 98765 43210, or via the in-app chat feature. We\'re available 7 days a week to help with any issues or questions.',
  },
];
</script>
