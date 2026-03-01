let slides=document.querySelectorAll(".slide-img");
let index=0;

function showSlide(){
slides.forEach(s=>s.style.opacity="0");
slides[index].style.opacity="1";
index=(index+1)%slides.length;
}
setInterval(showSlide,3000);
showSlide();

function openLightbox(src){
document.getElementById("lightbox").style.display="flex";
document.getElementById("lightbox-img").src=src;
}

function closeLightbox(){
document.getElementById("lightbox").style.display="none";
}

function bookNow(){
window.location.href="https://wa.me/916268872641";
}

// Flower Animation
function createFlower(){
const flower=document.createElement("div");
flower.classList.add("flower");
flower.innerHTML="🌸";
flower.style.left=Math.random()*window.innerWidth+"px";
flower.style.animationDuration=(Math.random()*5+5)+"s";
flower.style.fontSize=(Math.random()*20+15)+"px";
document.body.appendChild(flower);
setTimeout(()=>flower.remove(),10000);
}
setInterval(createFlower,500);

// Sparkle Effect
function createSparkle(){
const sparkle=document.createElement("div");
sparkle.classList.add("sparkle");
const hero=document.querySelector(".hero-slider");
sparkle.style.left=Math.random()*hero.offsetWidth+"px";
sparkle.style.top=Math.random()*hero.offsetHeight+"px";
hero.appendChild(sparkle);
setTimeout(()=>sparkle.remove(),1000);
}
setInterval(createSparkle,200);