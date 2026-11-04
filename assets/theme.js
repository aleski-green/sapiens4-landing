/* Choose a fresh theme on each page opening; the toggle lasts for this visit. */
(() => {
  function apply(theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#1a1a1a' : '#fafafa';
    document.querySelectorAll('[data-theme-toggle]').forEach(button => {
      const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`;
      button.textContent = theme === 'dark' ? '☀' : '☾';
      button.setAttribute('aria-label', label);
      button.title = label;
      button.setAttribute('aria-pressed', String(theme === 'dark'));
    });
  }
  apply(Math.random() < 0.7 ? 'dark' : 'light');
  document.addEventListener('DOMContentLoaded', () => apply(document.documentElement.dataset.theme));
  document.addEventListener('click', event => {
    if (event.target.closest('[data-theme-toggle]')) {
      apply(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
    }
  });
})();
