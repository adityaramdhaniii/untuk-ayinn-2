// ====== EDIT BAGIAN INI ======
const NAMA="Ayinn", DARI="seseorang yang sayang kamu";
const CAPTIONS=["foto 1","foto 2","foto 3","foto 4","foto 5"];
const DOA=[
"Semoga kamu selalu sehat dan bahagia.","Semoga mimpi-mimpimu satu per satu jadi nyata.","Semoga kamu dikelilingi orang-orang yang tulus.",
"Semoga setiap langkahmu dimudahkan.","Semoga kamu selalu berani jadi diri sendiri.","Semoga nilai dan prestasimu terus naik.",
"Semoga kamu nggak pernah kehabisan alasan untuk tertawa.","Semoga hatimu selalu hangat dan kuat.","Semoga keluargamu selalu rukun dan sehat.",
"Semoga kamu ketemu banyak hal baru yang bikin semangat.","Semoga capek dan sedihmu cepat jadi cerita lucu.","Semoga kamu selalu ingat betapa berharganya dirimu.",
"Semoga rezekimu lancar dan berkah.","Semoga kamu makin dewasa tanpa kehilangan sisi lucumu.","Semoga setiap hari ada hal kecil yang bikin senyum.",
"Semoga cita-citamu terus kamu kejar sampai dapat.","Semoga 17 jadi awal dari bab terbaik hidupmu."];
const SURAT=`Dear ${NAMA},\n\nSelamat ulang tahun yang ke-17! Rasanya baru kemarin, tapi sekarang kamu sudah sweet seventeen.\n\nAku cuma mau bilang: kamu berharga, kamu hebat, dan kamu pantas dapat semua hal baik. Jangan buru-buru dewasa, nikmati tiap prosesnya.\n\nSemoga hari ini penuh tawa, kue yang enak, dan orang-orang yang sayang sama kamu.\n\nDengan sayang,\n${DARI} 💗`;
// ==============================
document.getElementById('nm').textContent=NAMA;document.getElementById('nm2').textContent=NAMA;
const $=id=>document.getElementById(id);
// background: balon naik + kelopak jatuh (transform only, ringan)
(function(){const bg=$('bg'),m=innerWidth<600,B=['🎈','🎈','🎈','💗','🎀','🎁','💖'],Pt=['🌸','🌷','🌸','✨','🌺','💮','🦋','⭐'];
const mk=(cls,ch,i)=>{const s=document.createElement('span');s.className=cls;s.textContent=ch;
s.style.left=Math.random()*96+'%';s.style.fontSize=(cls=='b'?26+Math.random()*30:16+Math.random()*14)+'px';
s.style.setProperty('--dx',(Math.random()*120-60)+'px');s.style.setProperty('--r',(Math.random()*80-40)+'deg');
s.style.animationDuration=(cls=='b'?14+Math.random()*10:12+Math.random()*10)+'s';s.style.animationDelay=(-Math.random()*20)+'s';bg.appendChild(s)};
const nb=m?16:28,np=m?22:36;
for(let i=0;i<nb;i++)mk('b',B[i%B.length],i);for(let i=0;i<np;i++)mk('p',Pt[i%Pt.length],i)})();
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')}),{threshold:.2});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
// age counter
let a=0;const t=setInterval(()=>{$('age').textContent=++a;if(a>=17)clearInterval(t)},110);
// gallery
CAPTIONS.forEach((c,i)=>{const d=document.createElement('label');d.className='pol';
d.innerHTML=`<div class="ph">+ foto</div><b>${c}</b><input type="file" accept="image/*">`;
const im=new Image();im.onload=()=>{const p=d.querySelector('.ph');p.style.backgroundImage=`url(${im.src})`;p.textContent=''};im.src=`assets/images/foto${i+1}.jpg`;
d.querySelector('input').onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();
r.onload=()=>{const p=d.querySelector('.ph');p.style.backgroundImage=`url(${r.result})`;p.textContent=''};r.readAsDataURL(f)};
$('gal').appendChild(d)});
// doa
let di=0;function showDoa(){$('dn').textContent=`DOA KE-${di+1} DARI 17`;$('dt').textContent=DOA[di];$('db').style.width=((di+1)/17*100)+'%'}
showDoa();
$('dnext').onclick=()=>{const d=$('doa');d.style.opacity=0;d.style.transform='scale(.96)';setTimeout(()=>{di=(di+1)%17;showDoa();d.style.opacity=1;d.style.transform='none';if(di==16)boom()},250)};
// confetti
const cv=$('cv'),cx=cv.getContext('2d');let P=[],run=false;
function sz(){cv.width=innerWidth;cv.height=innerHeight}sz();addEventListener('resize',sz);
function boom(){const c=['#ff7eb0','#c9a7ff','#ffc94d','#7ee0ff','#fff'];
for(let i=0;i<160;i++)P.push({x:innerWidth/2,y:innerHeight*.6,vx:(Math.random()-.5)*16,vy:-Math.random()*16-4,s:Math.random()*7+4,c:c[i%5],r:Math.random()*6,l:160});
if(!run){run=true;loop()}}
function loop(){cx.clearRect(0,0,cv.width,cv.height);P=P.filter(p=>p.l>0);
P.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.vy+=.25;p.r+=.2;p.l--;cx.save();cx.translate(p.x,p.y);cx.rotate(p.r);cx.fillStyle=p.c;cx.globalAlpha=Math.min(1,p.l/40);cx.fillRect(-p.s/2,-p.s/2,p.s,p.s*.6);cx.restore()});
if(P.length)requestAnimationFrame(loop);else run=false}
$('again').onclick=boom;
// cake
let blown=false;
function blow(){if(blown)return;blown=true;$('cake').classList.add('out');$('cap').textContent='yeay! semoga harapanmu terkabul 💫';$('blow').disabled=true;boom();$('lhint').textContent='suratnya sudah terbuka, tap amplopnya 💌'}
$('blow').onclick=blow;$('cake').onclick=blow;
// letter
let typed=false;
$('env').onclick=()=>{if(!blown){$('lhint').textContent='tiup lilin dulu ya 🕯️';return}
$('env').classList.toggle('open');
if(!typed&&$('env').classList.contains('open')){typed=true;let i=0;const p=$('paper');
const k=setInterval(()=>{p.textContent=SURAT.slice(0,++i);p.style.whiteSpace='pre-wrap';if(i>=SURAT.length)clearInterval(k)},35)}};

const audio = new Audio('assets/audio/lagu.mp3');
audio.loop = true;
audio.volume = 0.5;

$('music').onclick = async () => {
  if (audio.paused) {
    try {
      await audio.play();
      $('music').textContent = '♪ musik: nyala';
    } catch (error) {
      console.error('Gagal memutar lagu:', error);
    }
  } else {
    audio.pause();
    $('music').textContent = '♪ musik: mati';
  }
};

