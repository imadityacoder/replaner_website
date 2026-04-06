function animateCounter(element) {
  const text = element.textContent;
  const numMatch = text.match(/[\d.]+/);

  if (!numMatch) {
    return;
  }

  const targetNum = parseFloat(numMatch[0]);
  const suffix = text.replace(/[\d.]+/, '');
  const isDecimal = targetNum % 1 !== 0;
  const duration = 2000;
  const startTime = performance.now();

  const updateCounter = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - (1 - progress) * (1 - progress);
    const currentNum = targetNum * easeProgress;

    if (isDecimal) {
      element.textContent = `${currentNum.toFixed(1)}${suffix}`;
    } else {
      element.textContent = `${Math.floor(currentNum)}${suffix}`;
    }

    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = text;
    }
  };

  requestAnimationFrame(updateCounter);
}

function findStatNumberElement(card) {
  for (const child of card.children) {
    if (child.classList.contains('stat-number')) {
      return child;
    }
  }

  return null;
}

export function createStatCounterDirective() {
  return {
    mounted(el) {
      const observer = new IntersectionObserver(
        (entries, instance) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const statNumber = findStatNumberElement(entry.target);
            if (statNumber) {
              animateCounter(statNumber);
            }
            instance.unobserve(entry.target);
          });
        },
        { threshold: 0.5 },
      );

      el.__statCounterObserver = observer;
      observer.observe(el);
    },
    unmounted(el) {
      if (el.__statCounterObserver) {
        el.__statCounterObserver.unobserve(el);
        el.__statCounterObserver.disconnect();
        delete el.__statCounterObserver;
      }
    },
  };
}
