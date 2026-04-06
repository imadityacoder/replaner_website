import { createApp } from 'vue';
import App from './App.vue';
import { createScrollRevealDirective } from './composables/useScrollReveal';
import { createStatCounterDirective } from './composables/useStatCounter';
import './styles/style.css';
import './styles/toast-keyframes.css';

const app = createApp(App);

app.directive('scroll-reveal', createScrollRevealDirective());
app.directive('stat-counter', createStatCounterDirective());

app.mount('#app');
