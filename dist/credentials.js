const form = document.querySelector('.award-tools');
const query = document.querySelector('#query');
const kind = document.querySelector('#kind');
const entries = [...document.querySelectorAll('.award')];
function filterAwards() {
  const term = query.value.trim().toLocaleLowerCase();
  let total = 0;
  for (const card of entries) {
    card.hidden = (kind.value && kind.value !== card.dataset.kind) || !card.textContent.toLocaleLowerCase().includes(term);
    if (!card.hidden) total++;
  }
  document.querySelector('#count').textContent = total ? total + (total === 1 ? ' entry' : ' entries') : 'No matching credentials. Try another search or category.';
}
form.hidden = false;
query.addEventListener('input', filterAwards);
kind.addEventListener('change', filterAwards);
