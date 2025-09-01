
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.accordion button').forEach(btn => {
    btn.addEventListener('click', () => {
      const dd = btn.parentElement?.nextElementSibling;
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!expanded).toString());
      if (dd) dd.style.display = expanded ? 'none' : 'block';
    });
  });
});
