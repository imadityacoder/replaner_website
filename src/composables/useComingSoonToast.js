import { computed, ref } from 'vue';

export function useComingSoonToast() {
  const isVisible = ref(false);
  const isExiting = ref(false);
  const text = ref('Coming soon!');
  let hideTimer = null;
  let removeTimer = null;

  const toastStyle = computed(() => ({
    position: 'fixed',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#132A13',
    color: 'white',
    padding: '0.75rem 1.5rem',
    borderRadius: '999px',
    fontWeight: '500',
    zIndex: '9999',
    animation: `${isExiting.value ? 'fadeSlideDown' : 'fadeSlideUp'} 0.3s ease`,
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  }));

  const clearTimers = () => {
    if (hideTimer) {
      clearTimeout(hideTimer);
      hideTimer = null;
    }
    if (removeTimer) {
      clearTimeout(removeTimer);
      removeTimer = null;
    }
  };

  const showToast = (message = 'Coming soon!') => {
    clearTimers();
    text.value = message;
    isVisible.value = true;
    isExiting.value = false;

    hideTimer = window.setTimeout(() => {
      isExiting.value = true;
      removeTimer = window.setTimeout(() => {
        isVisible.value = false;
        isExiting.value = false;
      }, 300);
    }, 2000);
  };

  const cleanup = () => {
    clearTimers();
    isVisible.value = false;
    isExiting.value = false;
  };

  return {
    isVisible,
    text,
    toastStyle,
    showToast,
    cleanup,
  };
}
