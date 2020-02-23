function highlightActiveLink() {
  /** @type { NodeListOf<Element> } */
  const link = document.querySelectorAll(".header > div > a");
  link.forEach(link => {
    const href = link.getAttribute("href");
    const isCurrentLink = window.location.pathname.startsWith(href);
    if (isCurrentLink) {
      link.parentElement.classList.add("active");
    }
  });
}
highlightActiveLink();
