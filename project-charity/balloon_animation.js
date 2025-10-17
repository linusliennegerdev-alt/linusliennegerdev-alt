// Анимация шаров для благотворительного фонда
gsap.registerPlugin(ScrollTrigger);

const balloonField = document.getElementById('balloon-field');
const NUM_BALLOONS = 40;
const COLORS = ["#E74C3C", "#2ECC71", "#3498DB", "#F1C40F", "#9B59B6", "#1ABC9C"];

// Создаем шары динамически
const virtualHeight = document.documentElement.scrollHeight;

for (let i = 0; i < NUM_BALLOONS; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    
    const size = gsap.utils.random(40, 200);
    const depth = gsap.utils.mapRange(40, 200, 0.2, 1, size);
    
    balloon.style.width = `${size}px`;
    balloon.style.height = `${size * 1.2}px`;
    balloon.style.top = `${gsap.utils.random(0, virtualHeight)}px`;
    balloon.style.left = `${gsap.utils.random(-10, 90)}vw`;
    balloon.dataset.depth = depth;

    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const darkerColor = gsap.utils.interpolate(color, "black", 0.2);

    balloon.innerHTML = `
        <svg viewBox="0 0 100 120" style="filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.25));">
            <path d="M50,100 C 10,100 0,75 0,50 C 0,15 25,0 50,0 C 75,0 100,15 100,50 C 100,75 90,100 50,100 Z" fill="${color}"/>
            <path d="M 35,20 C 45,25 50,45 45,60" stroke="white" stroke-width="8" fill="none" stroke-linecap="round" opacity="0.5"/>
            <path d="M50,100 L45,105 L55,105 Z" fill="${darkerColor}"/>
            <path d="M50,105 Q ${gsap.utils.random(40, 60)} 115 50 125" stroke="#34495E" stroke-width="2" fill="none"/>
        </svg>
    `;
    balloonField.appendChild(balloon);
}

// Создаем анимацию полета (параллакс)
const balloons = document.querySelectorAll('.balloon');

balloons.forEach(balloon => {
    const depth = parseFloat(balloon.dataset.depth);
    const movement = -(virtualHeight * depth * 0.5); 

    gsap.fromTo(balloon, { y: 0 }, {
        y: movement,
        ease: "none",
        scrollTrigger: {
            trigger: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: 1 + (1 - depth) * 2, 
        }
    });
});