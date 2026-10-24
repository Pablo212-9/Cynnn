/* ====== EDIT BAGIAN INI ======
   icon: heart, star, coffee, camera, ring, flower, moon, gift, music, sun, smile
   foto: isi dengan alamat gambar (data URI) untuk mengganti ilustrasi dengan foto asli */
const CONFIG = {
  musikLatar: "UntilIFoundYou.mp3",   // isi nama file mp3 untuk musik latar, contoh: "latar.mp3" (kosongkan = pakai musik bawaan)
  nama: "Cyntia Risky Antoni", dari: "Anugrah Prasetyo", lahir: "2009-10-22",
  usiaTeks: "Terima kasih sudah menjadi dirimu, dan membiarkan aku ada di sampingmu.",
  timeline: [
    {icon:"camera", tgl:"2026-05-06", judul:"Pertama Kali Bareng", teks:"Aku gemeter banget waktu itu hehe.", foto:"Cyn2.jpg"},
    {icon:"coffee", tgl:"2026-05-08", judul:"first Date", teks:" Di TSM, Dengan suasana senang dan nyaman bersamamu", foto:"Cyn3.jpg"},
    {icon:"heart", tgl:"2026-05-08", judul:"Hari Kita Jadian", teks:"Hari ketika semuanya menjadi lebih indah.", foto:"Cyn4.jpg"},
   
    {icon:"sun", tgl:"2026-05-25", judul:"Momen Favorit", teks:"Pertama kalinya aku ngerasain kebahagiaan di sekolah.", foto:"Cyn5.jpg"},
    {icon:"ring", tgl:"Hari ini", judul:"Dan Kita Masih di Sini", teks:"Dan aku masih ingin terus menulis cerita ini bersamamu.", foto:"Cyn6.jpg"}
  ],
  alasan: [
    ["smile","Senyummu","Senyum kamu membuat hari aku jauh lebih ringan.","Cyn1.jpg"],
    ["heart","Hatimu","Kamu peduli dengan tulus, bahkan pada hal-hal kecil.","Cyn7.jpg"],
    ["mic","Tawamu","Suara tawamu adalah favoritku.","Cyn8.jpg"],
    ["flower","Lembutmu","Cara kamu memperlakukan orang lain membuatku kagum.","Cyn9.jpg"],
    ["sun","Semangatmu","Kamu ngebuat aku ingin ikut berusaha lebih baik.","Cyn10.jpg"],
    ["moon","Tenangmu","Di dekat kamu, hari yang berat terasa lebih tenang.","Cyn11.jpg"],
    ["coffee","Kebersamaan","Hal-hal sederhana terasa istimewa saat bersamamu.","Cyn12.jpg"],
    ["guitar","Cerita kita","Semua kenangan kita adalah hal yang paling kusyukuri.","Cyn13.jpg"],
    ["gift","Kejutanmu","Kamu selalu tahu cara ngebuat aku tersenyum.","Cyn14.jpg"],
    ["ring","Masa depan","Aku ingin melihat banyak tahun lagi bersamamu.","Cyn15.jpg"]
  ],
  surat: "Teruntuk Cyntiaaa,\n\nNggak kerasa ya waktu berjalan secepat ini. Dari masa-masa kelulusan SMP kemarin sampai sekarang kita udah mulai sibuk dengan dunia baru di SMA SMK, ada banyak banget hal yang berubah. Tapi dari semua itu, ada satu hal yang akan selalu jadi rutinitas favorit aku: dengerin yappingan kamu.\n\nDi antara semua hal yang berubah, kehadiran kamu selalu jadi hal yang paling bikin aku bersyukur. Terima kasih udah selalu ada, udah jadi pacar yang paling pengertian, dan selalu bisa bikin hari-hariku terasa jauh lebih tenang dan menyenangkan. Kebersamaan sama kamu tuh selalu jadi bagian favoritku di setiap minggunya.\n\nSetiap aku denger nama kamu, aku jadi keinget penggalan lirik reff lagu Timur-The Adams\n\nMengingat sekarang kita udah masuk pertengahan Oktober bulannya kamu aku cuma mau curi waktu sebentar buat bilang terima kasih. Terima kasih udah jadi pacar yang pengertian, vokalis yang paling keren, dan partner terbaik di keseharianku.\n\nSemoga kita bisa terus bikin lebih banyak cerita dan melodi yang bagus bareng-bareng ya. Ini yang udah aku siapin selama ini\n\nDari cowok sekaligus gitaris andalanmu,Dari cowok sekaligus gitaris andalanmu,",
  penutup: "Semoga tahun ini membawa semua yang kamu impikan.",
  galeri: [["camera","Momen pertama","Cyn2.jpg"],["heart","Berdua","Cyn17.jpg"],["coffee","Date santai","Cyn19.jpg"],["mic","Konser kita","Cyn20.jpg"],["flower","Favoritku","Cyn21.jpg"]],
  kuis: [
    {q:"Di mana kita pertama kali makan bareng?", o:["Depan ruang musik","Ramen Ya!","Solaria"], a:0},
    {q:"Apa makanan favoritku?", o:["Seblak","Nasgor Goreng","Seafood"], a:1},
    {q:"Kapan kita resmi jadian?", o:["2026-05-02","2026-05-06","2026-05-08"], a:2},
    {q:"Apa lagu favorit kita berdua?", o:["Smells like Teen Spirit","Can't Help Falling in Love","Timur"], a:1},
    {q:"Band atau musisi apa yang paling kusuka?", o:["Dewa 19","Padi","Rumahsakit"], a:2}
  ],
  janji: ["Aku akan selalu mendengarkan kamu.","Aku akan terus belajar menjadi lebih baik untuk kamu.","Aku akan ada saat kamu senang maupun lelah.","Aku akan menjaga tawamu.","Aku akan terus memilihmu, setiap hari."],
  lagu: [
    ["Can't Help Falling in Love","Elvis Presley","Lagu pertama yang ngebuat kita jadi lebih deket wkwkkw.","canthelpfallinginlove.mp3"],
    ["You're Still the One","Shania Twain","Lagu yang sama sama kita sukai.","yourestilltheone.mp3"],
    ["Bukti","Virgoun","Lagu yang selalu mengingatkan aku padamu hehe.","bukti.mp3"],
    ["Timur","The Adams","Lagu yang selalu mengingatkan aku padamu juga hehe.","timur.mp3"],
  ],
  permintaan: "Semoga semua permintaanmu terkabul.",
  hadiah: {judul:"Katanya Anugrah Prasetyo", teks:"CYNTIAA SAYANGGGG, I LOVEE UUU SOOO MUCHHHH BEBEEEEE, SEMOGAAA ULTAH KAMUU YANGG KE 17 INII BISA BERKESAN DI HATIII KAMUUU YAAAA."}
};
/* ============================= */
const ICONS = {
heart:'<path d="M12 21s-7.5-4.8-9.4-9.6C1.2 8 3.6 4.8 6.8 4.8c2 0 3.5 1 5.2 3.2 1.7-2.2 3.2-3.2 5.2-3.2 3.2 0 5.6 3.2 4.2 6.6C19.5 16.2 12 21 12 21z"/>',
star:'<path d="M12 2.5l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8-6.1-3.5-6.1 3.5 1.4-6.8L2.2 9.6l6.9-.8z"/>',
coffee:'<path d="M4 9h13v5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V9z"/><path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 3.5v2.5M12 3.5v2.5"/>',
camera:'<rect x="3" y="7" width="18" height="13" rx="2"/><circle cx="12" cy="13.5" r="3.6"/><path d="M8 7l1.5-3h5L16 7"/>',
ring:'<circle cx="12" cy="15" r="5.5"/><path d="M8.5 6.5L10 3h4l1.5 3.5L12 9.5z"/>',
flower:'<circle cx="12" cy="12" r="2.4"/><circle cx="12" cy="6" r="3"/><circle cx="12" cy="18" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/>',
moon:'<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
gift:'<rect x="3" y="9" width="18" height="4"/><path d="M5 13h14v8H5zM12 9v12M12 9C9 9 8 5 10.5 5S12 9 12 9zM12 9c3 0 4-4 1.5-4S12 9 12 9z"/>',
music:'<path d="M9 18V5.5l11-2.2V16"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.5" cy="16" r="2.5"/>',
sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"/>',
mic:'<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21M8.5 21h7"/>',
guitar:'<circle cx="9" cy="15" r="5.5"/><circle cx="9" cy="15" r="1.6"/><path d="M13 11l7-7M18 3l3 3"/>',
drum:'<ellipse cx="12" cy="9" rx="8" ry="3"/><path d="M4 9v7c0 1.7 3.6 3 8 3s8-1.3 8-3V9M8 12l-1 6M16 12l1 6M12 12v7M5 2.5l6 5M19 2.5l-6 5"/>',
vinyl:'<circle cx="12" cy="12" r="9.5"/><circle cx="12" cy="12" r="5.5"/><circle cx="12" cy="12" r="1.5"/>',
smile:'<circle cx="12" cy="12" r="9"/><path d="M8 14c1 2 2.3 3 4 3s3-1 4-3M9 9.5v.5M15 9.5v.5"/>'};
const $ = id => document.getElementById(id);
const pic = (icon, foto) => `<div class="pic"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[icon]||ICONS.heart}</svg>${foto?`<img src="${foto}" alt="">`:""}</div>`;
 
$("nama").textContent = $("nama2").textContent = CONFIG.nama;
$("mono").textContent = CONFIG.nama.trim().charAt(0).toUpperCase();
$("sign").textContent = "Dengan cinta, " + CONFIG.dari;
$("closing").textContent = CONFIG.penutup;
$("ageText").textContent = CONFIG.usiaTeks;
document.title = "Selamat Ulang Tahun, " + CONFIG.nama;
$("tl").innerHTML = CONFIG.timeline.map(e => `<div class="ev">${pic(e.icon,e.foto)}<time>${e.tgl}</time><h3>${e.judul}</h3><p>${e.teks}</p></div>`).join("");
$("cards").innerHTML = CONFIG.alasan.map(a => `<button class="card" type="button">${pic(a[0],a[3])}<h3>${a[1]}</h3><div class="back">${a[2]}</div></button>`).join("");
document.querySelectorAll(".card").forEach(c => c.addEventListener("click", () => c.classList.toggle("open")));
$("galeri").innerHTML = CONFIG.galeri.map(g => `<figure>${pic(g[0],g[2])}<figcaption>${g[1]}</figcaption></figure>`).join("");
$("janji").innerHTML = CONFIG.janji.map(j => `<p class="pj">${j}</p>`).join("");
$("giftPic").innerHTML = pic("gift");
$("giftT").textContent = CONFIG.hadiah.judul; $("giftP").textContent = CONFIG.hadiah.teks;
$("giftBtn").onclick = () => { $("giftBox").hidden = false; $("giftBtn").hidden = true; };
$("wish").textContent = CONFIG.permintaan;
$("blow").onclick = () => { document.body.classList.add("out"); $("blow").hidden = true; $("wish").hidden = false; };
let qi = 0, score = 0;
function showQ(){ const box = $("quiz");
  if(qi >= CONFIG.kuis.length){ box.innerHTML = `<div class="q">Skormu ${score} dari ${CONFIG.kuis.length}</div><p class="sub">${score===CONFIG.kuis.length?"Sempurna! Kamu memang paling kenal aku.":"Tidak apa-apa, yang penting kita terus saling mengenal."}</p><button class="btn" id="again">Main lagi</button>`; $("again").onclick = () => { qi = 0; score = 0; showQ(); }; return; }
  const k = CONFIG.kuis[qi];
  box.innerHTML = `<div class="q">${k.q}</div>` + k.o.map((o,i) => `<button class="btn opt" data-i="${i}">${o}</button>`).join("");
  box.querySelectorAll(".opt").forEach(b => b.onclick = () => { const i = +b.dataset.i; if(i===k.a) score++;
    box.querySelectorAll(".opt").forEach(x => { x.disabled = true; x.classList.add(+x.dataset.i===k.a ? "ok" : "no"); });
    setTimeout(() => { qi++; showQ(); }, 1100); });
}
showQ();
const PLAY = '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>', PAUSE = '<svg viewBox="0 0 24 24" width="18" height="18"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor"/></svg>';
let playing = -1, bgOn = false;
$("lagu").innerHTML = CONFIG.lagu.map((l,i) => `<div class="trk" data-i="${i}"><span class="no">${i+1}</span><span class="inf"><b>${l[0]}</b><small>${l[1]}</small><em>${l[2]}</em></span><button class="pl" type="button" aria-label="Putar ${l[0]}">${PLAY}</button></div>`).join("");
function syncUI(){ document.querySelectorAll(".trk").forEach(t => { const on = +t.dataset.i === playing; t.classList.toggle("on", on); t.querySelector(".pl").innerHTML = on ? PAUSE : PLAY; });
  $("disc").classList.toggle("spin", playing >= 0); $("np").textContent = playing >= 0 ? "Sedang diputar: " + CONFIG.lagu[playing][0] : "Pilih lagu dari daftar"; $("mus").classList.toggle("on", bgOn || playing >= 0); }
document.querySelectorAll(".trk .pl").forEach(b => b.onclick = () => { const i = +b.closest(".trk").dataset.i; bgOn = false; if(playing === i){ Music.stop(); playing = -1; } else { Music.start(CONFIG.lagu[i][3] || TRK[i % TRK.length]); playing = i; } syncUI(); });
$("mus").innerHTML = `<svg viewBox="0 0 24 24" aria-hidden="true">${ICONS.music}</svg>`;
$("mus").onclick = () => { if(bgOn || playing >= 0){ Music.stop(); bgOn = false; playing = -1; } else { Music.start(CONFIG.musikLatar || BG); bgOn = true; } syncUI(); };
$("band").innerHTML = ["guitar","mic","drum","vinyl"].map(k => `<svg viewBox="0 0 24 24">${ICONS[k]}</svg>`).join("");
document.querySelectorAll(".page .wrap > h2").forEach((h,i) => h.insertAdjacentHTML("beforebegin", `<div class="mi"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[["guitar","drum","mic","vinyl"][i%4]]}</svg></div>`));
 
/* halaman */
const pages = [...document.querySelectorAll(".page")], reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
let started = false, ageDone = false;
function go(n){
  pages.forEach((p,i) => p.classList.toggle("on", i===n));
  document.querySelectorAll("#nav button").forEach((b,i) => b.classList.toggle("on", i===n-1));
  scrollTo(0,0);
  if(n===1 && !ageDone){ ageDone = true; const t = age(); let i = 0; const s = setInterval(() => { $("age").textContent = ++i; if(i>=t) clearInterval(s); }, 45); }
  const nb = document.querySelectorAll("#nav button")[n-1]; if(nb) nb.scrollIntoView({inline:"center",block:"nearest"});
  if(pages[n].dataset.t==="Surat" && !started){ started = true; const el = $("typed"), tx = CONFIG.surat; let k = 0;
    if(reduce){ el.textContent = tx; return; }
    (function type(){ el.textContent = tx.slice(0,++k); if(k<tx.length) setTimeout(type,38); })(); }
}
pages.forEach((p,i) => { if(i>0 && i<pages.length-1){ const b = document.createElement("button"); b.className="btn next"; b.textContent = "Lanjut ke " + pages[i+1].dataset.t; b.onclick = () => go(i+1); p.querySelector(".wrap").appendChild(b); }});
$("nav").innerHTML = pages.slice(1).map((p,i) => `<button type="button">${p.dataset.t}</button>`).join("");
document.querySelectorAll("#nav button").forEach((b,i) => b.onclick = () => go(i+1));
function age(){ const b = new Date(CONFIG.lahir), n = new Date(); let a = n.getFullYear()-b.getFullYear(); if(n < new Date(n.getFullYear(),b.getMonth(),b.getDate())) a--; return Math.max(a,0); }
 
/* bintang & konfeti */
const cv = $("stars"), cx = cv.getContext("2d"); let W,H,stars=[],run=true;
function size(){ W=cv.width=innerWidth; H=cv.height=innerHeight; stars=Array.from({length:Math.round(W*H/9000)},()=>({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.3+.3,p:Math.random()*6})); }
function draw(t){ cx.clearRect(0,0,W,H); for(const s of stars){ cx.globalAlpha=.35+.35*Math.sin(t/1200+s.p); cx.fillStyle="#e8648f"; cx.beginPath(); cx.arc(s.x,s.y,s.r,0,7); cx.fill(); } if(run && !reduce) requestAnimationFrame(draw); }
size(); addEventListener("resize",size); requestAnimationFrame(draw);
function confetti(){ if(reduce) return; const col=["#e8648f","#ff9bbb","#ffd1e0","#1d2b64"];
  const bits=Array.from({length:100},()=>({x:W/2,y:H/2,vx:(Math.random()-.5)*14,vy:-Math.random()*13-3,c:col[Math.random()*4|0],w:Math.random()*7+3,a:Math.random()*6})); let f=0;
  (function tick(){ cx.clearRect(0,0,W,H); for(const b of bits){ b.vy+=.28; b.x+=b.vx; b.y+=b.vy; b.a+=.2; cx.globalAlpha=1; cx.fillStyle=b.c; cx.save(); cx.translate(b.x,b.y); cx.rotate(b.a); cx.fillRect(-b.w/2,-b.w/4,b.w,b.w/2); cx.restore(); } if(++f<100) requestAnimationFrame(tick); })(); }
/* mesin musik band (lagu orisinal, dibuat langsung di browser) */
let el = null, ac, master, nb, timer, step = 0, next = 0, cur = null;
const NOTE = m => 440*Math.pow(2,(m-69)/12);
const BG = {bpm:78, st:"arp", dr:0, ch:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]], bs:[45,41,36,43], ld:[-1,-1,2,-1,-1,1,-1,-1]};
const TRK = [
 {bpm:124, st:"strum", dr:1, ch:[[52,55,59],[48,52,55],[55,59,62],[50,54,57]], bs:[40,36,43,38], ld:[2,-1,1,-1,2,-1,0,-1]},
 {bpm:66, st:"arp", dr:0, ch:[[55,59,62],[52,55,59],[48,52,55],[50,54,57]], bs:[43,40,36,38], ld:[-1,2,-1,1,-1,0,-1,-1]},
 {bpm:150, st:"strum", dr:1, ch:[[48,52,55],[55,59,62],[57,60,64],[53,57,60]], bs:[36,43,45,41], ld:[0,-1,1,2,-1,1,0,-1]},
 {bpm:96, st:"arp", dr:1, ch:[[57,60,64],[50,53,57],[53,57,60],[52,55,59]], bs:[45,38,41,40], ld:[-1,2,-1,-1,1,-1,2,0]}];
function tone(t,f,d,type,v,lp){ const o=ac.createOscillator(), g=ac.createGain(), fl=ac.createBiquadFilter(); o.type=type; o.frequency.value=f; fl.type="lowpass"; fl.frequency.value=lp;
  g.gain.setValueAtTime(v,t); g.gain.exponentialRampToValueAtTime(.001,t+d); o.connect(fl); fl.connect(g); g.connect(master); o.start(t); o.stop(t+d+.05); }
function hit(t,d,v,type,f){ const s=ac.createBufferSource(), fl=ac.createBiquadFilter(), g=ac.createGain(); s.buffer=nb; fl.type=type; fl.frequency.value=f;
  g.gain.setValueAtTime(v,t); g.gain.exponentialRampToValueAtTime(.001,t+d); s.connect(fl); fl.connect(g); g.connect(master); s.start(t); s.stop(t+d+.05); }
function kick(t){ const o=ac.createOscillator(), g=ac.createGain(); o.frequency.setValueAtTime(130,t); o.frequency.exponentialRampToValueAtTime(40,t+.12);
  g.gain.setValueAtTime(.8,t); g.gain.exponentialRampToValueAtTime(.001,t+.25); o.connect(g); g.connect(master); o.start(t); o.stop(t+.3); }
function sched(){ if(!master||!cur) return; const P = cur, dur = 30/P.bpm;
  while(next < ac.currentTime + .15){ const s = step%8, b = (step>>3)%4, c = P.ch[b], t = next;
    if(P.st==="arp") tone(t, NOTE(c[[0,1,2,1,0,1,2,1][s]]+12), .8, "triangle", .2, 2500);
    else if([0,2,3,5,7].includes(s)) c.forEach((n,i) => tone(t+i*.012, NOTE(n), .35, "sawtooth", .07, 1800));
    if(s%4===0) tone(t, NOTE(P.bs[b]), dur*3, "triangle", .35, 500);
    if(P.dr){ if(s%4===0) kick(t); if(s===2||s===6) hit(t,.15,.3,"bandpass",1800); hit(t,.04,.08,"highpass",7000); }
    if(P.ld[s] >= 0) tone(t, NOTE(c[P.ld[s]]+24), dur*1.6, "triangle", .12, 3000);
    next += dur; step++; } }
const Music = {
  start(P){ if(typeof P === "string"){ this.stop(); el = new Audio(P); el.loop = true; el.play(); return; }
    if(!ac){ ac = new (window.AudioContext||window.webkitAudioContext)(); const n = ac.sampleRate; nb = ac.createBuffer(1,n,n); const d = nb.getChannelData(0); for(let i=0;i<n;i++) d[i] = Math.random()*2-1; }
    if(ac.state==="suspended") ac.resume(); this.stop(); master = ac.createGain(); master.gain.value = .8; master.connect(ac.destination);
    cur = P; step = 0; next = ac.currentTime + .08; timer = setInterval(sched, 25); },
  stop(){ if(el){ el.pause(); el = null; } clearInterval(timer); cur = null; if(master){ master.disconnect(); master = null; } } };
 
(function(){ const fx = $("fx"), col = ["#ff8fb3","#ffc2d6","#1d2b64","#e8648f"];
  const shape = (t,c) => t===0 ? `<svg viewBox="0 0 40 72"><ellipse cx="20" cy="22" rx="16" ry="20" fill="${c}"/><path d="M20 42l-3 5h6z" fill="${c}"/><path d="M20 47q-6 8 0 14t0 10" fill="none" stroke="#e8648f" stroke-width="1"/></svg>`
    : t===1 ? `<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.8-9.4-9.6C1.2 8 3.6 4.8 6.8 4.8c2 0 3.5 1 5.2 3.2 1.7-2.2 3.2-3.2 5.2-3.2 3.2 0 5.6 3.2 4.2 6.6C19.5 16.2 12 21 12 21z" fill="${c}"/></svg>`
    : `<svg viewBox="0 0 24 24"><g fill="${c}"><circle cx="12" cy="5.5" r="4"/><circle cx="18.2" cy="10" r="4"/><circle cx="15.8" cy="17.3" r="4"/><circle cx="8.2" cy="17.3" r="4"/><circle cx="5.8" cy="10" r="4"/></g><circle cx="12" cy="12" r="3" fill="#fff3b0"/></svg>`;
  for(let i=0;i<18;i++){ const d = document.createElement("div"), t = i%3;
    d.className = "fl"; d.style.cssText = `left:${Math.random()*92}%;width:${(t?20:28)+Math.random()*(t?20:22)}px;animation-duration:${14+Math.random()*12}s;animation-delay:${-Math.random()*22}s`;
    d.innerHTML = shape(t, col[i%4]); fx.appendChild(d); } })();
$("open").onclick = () => { run=false; confetti(); $("fx").classList.add("on"); Music.start(CONFIG.musikLatar || BG); bgOn = true; $("mus").classList.add("show"); syncUI(); setTimeout(() => { $("nav").classList.add("on"); go(1); }, reduce?0:1500); };
 
/* animasi muncul saat di-scroll: Tour (.ev), Hits (.card), Janji (.pj) */
if("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches){
  const io = new IntersectionObserver((list) => list.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } }), {threshold:.15, rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll(".ev, .card, .pj").forEach((el,i) => { el.classList.add("rv"); if(el.classList.contains("card")) el.style.transitionDelay = (i%3)*90 + "ms"; io.observe(el); });
}
 