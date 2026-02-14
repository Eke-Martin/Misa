const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* Move NO button */
noBtn.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

/* YES click */
yesBtn.addEventListener("click", () => {
    startFireworks();
    setTimeout(()=>{
        window.location.href="letter.html";
    },2000);
});

/* Floating hearts */
setInterval(()=>{
    const heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(Math.random()*20+15)+"px";
    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),6000);
},300);

/* Simple fireworks */
function startFireworks(){
    const canvas=document.getElementById("fireworks");
    const ctx=canvas.getContext("2d");

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

    for(let i=0;i<80;i++){
        ctx.beginPath();
        ctx.arc(
            Math.random()*canvas.width,
            Math.random()*canvas.height,
            3,
            0,
            Math.PI*2
        );
        ctx.fillStyle="white";
        ctx.fill();
    }
}
