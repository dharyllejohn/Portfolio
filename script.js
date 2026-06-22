// LOADER
window.addEventListener("load",()=>{
    document.getElementById("loader").style.display="none";
});

// SCROLL REVEAL
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:0.15});

document.querySelectorAll(".reveal").forEach(el=>{
    observer.observe(el);
});

// SCROLL PROGRESS
window.addEventListener("scroll",()=>{
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll/height)*100;
    document.getElementById("progress").style.width = scrolled + "%";
});

// PARTICLES
const canvas=document.getElementById("bg-canvas");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let particles=[];

for(let i=0;i<60;i++){
    particles.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        r:Math.random()*2,
        dx:(Math.random()-0.5)*0.4,
        dy:(Math.random()-0.5)*0.4
    });
}

function animate(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    particles.forEach(p=>{
        p.x+=p.dx;
        p.y+=p.dy;

        if(p.x<0||p.x>canvas.width)p.dx*=-1;
        if(p.y<0||p.y>canvas.height)p.dy*=-1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle="rgba(56,189,248,0.5)";
        ctx.fill();
    });

    requestAnimationFrame(animate);
}
animate();

// CURSOR GLOW
const glow=document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{
    glow.style.left=e.clientX+"px";
    glow.style.top=e.clientY+"px";
});

// RESIZE FIX
window.addEventListener("resize",()=>{
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
});
