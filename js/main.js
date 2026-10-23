document.documentElement.classList.add('js');
(function(){
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
var h1=document.querySelector('.hero h1'),t=h1.textContent.trim(),i=0;
h1.setAttribute('aria-label',t);h1.textContent='';
t.split(' ').forEach(function(w){var s=document.createElement('span');s.className='w';s.setAttribute('aria-hidden','true');
 w.split('').forEach(function(c){var k=document.createElement('span');k.className='ch';k.style.setProperty('--i',i++);k.textContent=c;s.appendChild(k)});h1.appendChild(s)});
var els=document.querySelectorAll('h2,.about>*,.skill,.case,.note,.panel,.edu,.contact');
els.forEach(function(e,n){e.classList.add('rv');e.style.setProperty('--d',(n%3)*0.12+'s')});
var io=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.15});
els.forEach(function(e){io.observe(e)});
var bar=document.querySelector('.progress');
function sc(){var d=document.documentElement,p=d.scrollTop/(d.scrollHeight-d.clientHeight||1);bar.style.transform='scaleX('+p+')'}
addEventListener('scroll',sc,{passive:true});sc();
var links=document.querySelectorAll('.nav li a');
var so=new IntersectionObserver(function(a){a.forEach(function(x){if(x.isIntersecting){links.forEach(function(l){l.classList.toggle('on',l.getAttribute('href')==='#'+x.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('main section[id]').forEach(function(s){so.observe(s)});
var f=document.querySelector('.frame');
if(!rm&&f&&matchMedia('(hover:hover)').matches){
 document.querySelector('.hero').addEventListener('pointermove',function(e){var r=f.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;f.style.transform='perspective(900px) rotateY('+(x*10)+'deg) rotateX('+(-y*10)+'deg)'});
 document.querySelector('.hero').addEventListener('pointerleave',function(){f.style.transform=''});
}
})();

(function(){var b=document.querySelector('.menu'),n=document.getElementById('menu');if(!b||!n)return;
function set(o){n.classList.toggle('open',o);b.setAttribute('aria-expanded',String(o));b.setAttribute('aria-label',o?'Close menu':'Open menu')}
b.addEventListener('click',function(){set(b.getAttribute('aria-expanded')!=='true')});
n.addEventListener('click',function(e){if(e.target.closest('a'))set(false)});
addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
matchMedia('(min-width:861px)').addEventListener('change',function(){set(false)});})();
