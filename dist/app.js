const projects = {
  cafe: ['Café Management System', 'A café operations application for managing menus, taking orders, preparing bills and tracking sales.'],
  drive: ['Driving School Management System', 'An application for student registration, instructor assignment and lesson booking, with checks for scheduling conflicts.'],
  bus: ['Bus Ticket Reservation System', 'A web application for searching routes, checking seat availability and reviewing booking history.']
};
const modal = document.querySelector('#modal');
const detail = document.querySelector('#detail');
function openPanel(title, html) {
  modal.setAttribute('aria-label', title);
  detail.innerHTML = html;
  modal.showModal();
}
document.querySelectorAll('.card').forEach(card => card.addEventListener('click', () => {
  const id = card.dataset.id;
  const [name, description] = projects[id];
  openPanel(name, '<img alt="" src="assets/'+id+'.webp"><div class="modalcopy"><h2>'+name+'</h2><p>'+description+'</p><a href="https://github.com/IT24102666/portfolio/blob/main/index.html">View project write-up on GitHub</a></div>');
}));
document.querySelector('#reel').addEventListener('click', () => {
  openPanel('Portfolio reel', '<video aria-label="Animated sunset portrait of Kasfbi in Sri Lanka" controls loop autoplay muted playsinline poster="assets/hero.webp"><source media="(dynamic-range: high)" src="assets/reel-hdr.mp4" type=\'video/mp4; codecs="hvc1"\'><source src="assets/reel.mp4" type="video/mp4"></video>');
});
document.querySelector('#close').onclick = () => modal.close();
modal.addEventListener('click', e => {if(e.target === modal) modal.close()});
modal.addEventListener('close', () => detail.replaceChildren());
const motion = document.querySelector('#motion');
let paused = matchMedia('(prefers-reduced-motion: reduce)').matches;
try {const old=localStorage.getItem('paused'); if(old!==null) paused=old==='true'} catch {}
function updateMotion(){
  document.body.classList.toggle('paused',paused);
  motion.setAttribute('aria-pressed',String(paused));
  motion.querySelector('span').textContent = paused ? 'Motion off' : 'Motion on';
}
updateMotion();
motion.onclick=()=>{paused=!paused;updateMotion();try{localStorage.setItem('paused',String(paused))}catch{}};
document.querySelectorAll('.jelly').forEach(button => {
  button.addEventListener('pointermove', e => {
    if(paused || e.pointerType!=='mouse') return;
    const r=button.getBoundingClientRect();
    button.style.translate=((r.left+r.width/2-e.clientX)*.075)+'px '+((r.top+r.height/2-e.clientY)*.12)+'px';
  });
  button.addEventListener('pointerleave',()=>button.style.translate='');
});
