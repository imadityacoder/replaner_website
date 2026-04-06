const STAGGERED_PARENT_CLASSES = ['steps-grid', 'benefits-grid', 'audience-grid', 'stats-grid'];

export function createScrollRevealDirective() {
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1,
  };

  return {
    mounted(el) {
      const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const card = entry.target;
          const parent = card.parentElement;

          if (parent) {
            const hasStaggeredParent = STAGGERED_PARENT_CLASSES.some((className) =>
              parent.classList.contains(className),
            );

            if (hasStaggeredParent) {
              const siblings = Array.from(parent.children);
              const index = siblings.indexOf(card);
              card.style.transitionDelay = `${index * 0.1}s`;
            }
          }

          card.classList.add('visible');
          instance.unobserve(card);
        });
      }, observerOptions);

      el.__scrollRevealObserver = observer;
      observer.observe(el);
    },
    unmounted(el) {
      if (el.__scrollRevealObserver) {
        el.__scrollRevealObserver.unobserve(el);
        el.__scrollRevealObserver.disconnect();
        delete el.__scrollRevealObserver;
      }
    },
  };
}
