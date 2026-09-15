
const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
const modal=document.querySelector('.search-modal'), openSearch=document.querySelector('.search-button'), closeSearch=document.querySelector('.close-search'), input=document.querySelector('#search-input'), results=document.querySelector('#search-results');
function close(){modal?.classList.remove('open');modal?.setAttribute('aria-hidden','true')}
openSearch?.addEventListener('click',async()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');input?.focus(); if(!window.searchData){window.searchData=await fetch('/search-index.json').then(r=>r.json())}});
closeSearch?.addEventListener('click',close);modal?.addEventListener('click',e=>{if(e.target===modal)close()});
input?.addEventListener('input',()=>{const q=input.value.trim().toLowerCase(); if(!window.searchData||!q){results.innerHTML='<p class="muted">Start typing to search the research library.</p>';return}
const hits=window.searchData.filter(x=>(x.title+' '+x.description+' '+x.type).toLowerCase().includes(q)).slice(0,12);
results.innerHTML=hits.length?hits.map(x=>`<div class="result"><small>${x.type}</small><a href="${x.url}"><h3>${x.title}</h3></a><p>${x.description}</p></div>`).join(''):'<p class="muted">No matching research found.</p>'});
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('[data-category]').forEach(c=>{c.style.display=(f==='all'||c.dataset.category===f)?'':'none'})}));
document.querySelectorAll('pre code').forEach(code=>{const b=document.createElement('button');b.className='copy-code';b.textContent='Copy';b.onclick=()=>navigator.clipboard.writeText(code.innerText).then(()=>{b.textContent='Copied';setTimeout(()=>b.textContent='Copy',1200)});code.parentElement.parentElement.insertBefore(b,code.parentElement)});
