// animate stats when in view
(function(){
  const nums = document.querySelectorAll('.stat-num');
  if(!nums.length) return;

  function animate(el){
    const target = +el.dataset.target || 0;
    const duration = 1400;
    let start = 0;
    const step = Math.max(1, Math.round(target / (duration/20)));
    const t = setInterval(()=>{
      start += step;
      if(start >= target){ el.textContent = target; clearInterval(t); }
      else el.textContent = start;
    }, 20);
  }

  // intersection observer
  const obs = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        nums.forEach(n=> animate(n));
        obs.disconnect();
      }
    });
  }, {threshold:0.3});

  obs.observe(document.querySelector('.stats-section'));
})();