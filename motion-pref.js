try {
  document.body.classList.toggle('paused', localStorage.getItem('paused') === 'true');
} catch {}
