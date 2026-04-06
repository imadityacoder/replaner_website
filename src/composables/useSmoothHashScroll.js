export function useSmoothHashScroll(navbarRef) {
  const scrollToHash = (href) => {
    if (!href || href === '#') {
      return;
    }

    const targetId = href.startsWith('#') ? href.slice(1) : href;
    const target = document.getElementById(targetId);

    if (!target) {
      return;
    }

    const navHeight = navbarRef.value ? navbarRef.value.offsetHeight : 0;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  return { scrollToHash };
}
