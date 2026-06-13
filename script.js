const garden = document.getElementById('garden');

// Create cute floating bubbles instead of stars
function createBubbles() {
  const numBubbles = 40;
  for (let i = 0; i < numBubbles; i++) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${Math.random() * 100}vw`;
    
    // Varying sizes
    const size = Math.random() * 15 + 5;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    
    bubble.style.animationDelay = `${Math.random() * 15}s`;
    bubble.style.animationDuration = `${10 + Math.random() * 10}s`;
    
    garden.appendChild(bubble);
  }
}

createBubbles();

garden.addEventListener('click', (e) => {
  if (e.target.closest('.flower-head-group')) {
    return;
  }
  createFlower(e.clientX, e.clientY);
});

// Cute confetti colors
const confettiColors = ['#ff7eb3', '#ff758c', '#ffdcb6', '#bae6fd', '#fde047', '#a7f3d0'];

function createSparkles(x, y) {
  const numSparkles = 8 + Math.floor(Math.random() * 6);
  for (let i = 0; i < numSparkles; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    sparkle.style.left = `${x}px`;
    sparkle.style.top = `${y}px`;
    
    // Random solid color from cute palette
    sparkle.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    
    const size = 5 + Math.random() * 4;
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    
    const angle = Math.random() * Math.PI * 2;
    const distance = 20 + Math.random() * 30;
    const tx = Math.cos(angle) * distance;
    const ty = Math.sin(angle) * distance;
    
    sparkle.style.setProperty('--tx', `${tx}px`);
    sparkle.style.setProperty('--ty', `${ty}px`);
    
    garden.appendChild(sparkle);
    setTimeout(() => { sparkle.remove(); }, 1000);
  }
}

function createHeart(x, y) {
  const heart = document.createElement('div');
  heart.className = 'heart-particle';
  
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  
  const rot0 = -20 + Math.random() * 40;
  const rot1 = -30 + Math.random() * 60;
  const rot2 = -40 + Math.random() * 80;
  
  const tx1 = -10 + Math.random() * 20;
  const ty1 = -15 - Math.random() * 15;
  
  const tx2 = -20 + Math.random() * 40;
  const ty2 = -60 - Math.random() * 40; 
  
  heart.style.setProperty('--rot0', `${rot0}deg`);
  heart.style.setProperty('--rot1', `${rot1}deg`);
  heart.style.setProperty('--rot2', `${rot2}deg`);
  heart.style.setProperty('--tx1', `${tx1}px`);
  heart.style.setProperty('--ty1', `${ty1}px`);
  heart.style.setProperty('--tx2', `${tx2}px`);
  heart.style.setProperty('--ty2', `${ty2}px`);

  heart.innerHTML = `
    <svg viewBox="0 0 32 32" width="100%" height="100%">
      <path d="M16,28.261c0,0-14-7.926-14-17.046c0-4.008,3.208-7.215,7.215-7.215c2.378,0,4.475,1.157,5.772,2.946c1.189-1.748,3.228-2.946,5.556-2.946C24.551,4,28,7.449,28,11.531C28,20.334,16,28.261,16,28.261z" fill="#ff7eb3"/>
    </svg>
  `;
  
  garden.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 2500);
}

function createFlower(x, y) {
  const flower = document.createElement('div');
  flower.className = 'flower-wrapper';
  
  const scale = 0.6 + Math.random() * 0.5; 
  const wrapperRotation = -10 + Math.random() * 20; 
  
  const curveX = 50 + (Math.random() * 40 - 20); 
  
  const leafDir = Math.random() > 0.5 ? 1 : -1;
  const leafPath = leafDir === 1 
    ? `M 50 110 Q 65 105 70 90 Q 55 95 50 110`
    : `M 50 110 Q 35 105 30 90 Q 45 95 50 110`;
  
  const uniqueId = Math.random().toString(36).substr(2, 9);

  flower.style.left = `${x}px`;
  flower.style.top = `${y}px`;
  flower.style.transform = `scale(${scale}) rotate(${wrapperRotation}deg)`;

  const flowerType = Math.floor(Math.random() * 9);
  let petalsSVG = '';
  let centerSVG = '';

  // Solid, cute pastel colors
  switch (flowerType) {
    case 0:
      petalsSVG = `
        <path d="M 0 0 Q 5 -12 0 -22 Q -5 -12 0 0" fill="#ffffff" transform="rotate(0)" />
        <path d="M 0 0 Q 5 -12 0 -22 Q -5 -12 0 0" fill="#ffffff" transform="rotate(60)" />
        <path d="M 0 0 Q 5 -12 0 -22 Q -5 -12 0 0" fill="#ffffff" transform="rotate(120)" />
        <path d="M 0 0 Q 5 -12 0 -22 Q -5 -12 0 0" fill="#ffffff" transform="rotate(180)" />
        <path d="M 0 0 Q 5 -12 0 -22 Q -5 -12 0 0" fill="#ffffff" transform="rotate(240)" />
        <path d="M 0 0 Q 5 -12 0 -22 Q -5 -12 0 0" fill="#ffffff" transform="rotate(300)" />
      `;
      centerSVG = `<circle cx="0" cy="0" r="4.5" fill="#fde047" class="flower-center"/>`;
      break;
    case 1:
      petalsSVG = `
        <circle cx="0" cy="-10" r="7.5" fill="#ff7eb3" transform="rotate(0)" />
        <circle cx="0" cy="-10" r="7.5" fill="#ff7eb3" transform="rotate(72)" />
        <circle cx="0" cy="-10" r="7.5" fill="#ff7eb3" transform="rotate(144)" />
        <circle cx="0" cy="-10" r="7.5" fill="#ff7eb3" transform="rotate(216)" />
        <circle cx="0" cy="-10" r="7.5" fill="#ff7eb3" transform="rotate(288)" />
      `;
      centerSVG = `<circle cx="0" cy="0" r="6" fill="#ffe4e6" class="flower-center"/>`;
      break;
    case 2:
      petalsSVG = `
        <path d="M 0 0 C 4 -8 3 -16 0 -18 C -3 -16 -4 -8 0 0" fill="#ffffff" transform="rotate(0)" />
        <path d="M 0 0 C 4 -8 3 -16 0 -18 C -3 -16 -4 -8 0 0" fill="#ffffff" transform="rotate(45)" />
        <path d="M 0 0 C 4 -8 3 -16 0 -18 C -3 -16 -4 -8 0 0" fill="#ffffff" transform="rotate(90)" />
        <path d="M 0 0 C 4 -8 3 -16 0 -18 C -3 -16 -4 -8 0 0" fill="#ffffff" transform="rotate(135)" />
        <path d="M 0 0 C 4 -8 3 -16 0 -18 C -3 -16 -4 -8 0 0" fill="#ffffff" transform="rotate(180)" />
        <path d="M 0 0 C 4 -8 3 -16 0 -18 C -3 -16 -4 -8 0 0" fill="#ffffff" transform="rotate(225)" />
        <path d="M 0 0 C 4 -8 3 -16 0 -18 C -3 -16 -4 -8 0 0" fill="#ffffff" transform="rotate(270)" />
        <path d="M 0 0 C 4 -8 3 -16 0 -18 C -3 -16 -4 -8 0 0" fill="#ffffff" transform="rotate(315)" />
      `;
      centerSVG = `<circle cx="0" cy="0" r="5" fill="#f59e0b" class="flower-center"/>`;
      break;
    case 3:
      petalsSVG = `
        <path d="M 0 0 C 8 -12 0 -22 -8 -12 Z" fill="#7dd3fc" transform="rotate(0)" />
        <path d="M 0 0 C 8 -12 0 -22 -8 -12 Z" fill="#7dd3fc" transform="rotate(90)" />
        <path d="M 0 0 C 8 -12 0 -22 -8 -12 Z" fill="#7dd3fc" transform="rotate(180)" />
        <path d="M 0 0 C 8 -12 0 -22 -8 -12 Z" fill="#7dd3fc" transform="rotate(270)" />
      `;
      centerSVG = `<circle cx="0" cy="0" r="4" fill="#f0f9ff" class="flower-center"/>`;
      break;
    case 4:
      for(let i=0; i<12; i++) {
         petalsSVG += `<path d="M 0 0 Q 3 -10 0 -16 Q -3 -10 0 0" fill="#fde047" transform="rotate(${i * 30})" />`;
      }
      centerSVG = `<circle cx="0" cy="0" r="5" fill="#d97706" class="flower-center"/>`;
      break;
    case 5:
      for(let i=0; i<7; i++) {
         petalsSVG += `<path d="M 0 0 L 3 -10 L 0 -20 L -3 -10 Z" fill="#c084fc" transform="rotate(${i * (360/7)})" />`;
      }
      centerSVG = `<circle cx="0" cy="0" r="5" fill="#faf5ff" class="flower-center"/>`;
      break;
    case 6:
      petalsSVG = `
        <circle cx="0" cy="-11" r="7" fill="#fb7185" transform="rotate(0)" />
        <circle cx="0" cy="-11" r="7" fill="#fb7185" transform="rotate(72)" />
        <circle cx="0" cy="-11" r="7" fill="#fb7185" transform="rotate(144)" />
        <circle cx="0" cy="-11" r="7" fill="#fb7185" transform="rotate(216)" />
        <circle cx="0" cy="-11" r="7" fill="#fb7185" transform="rotate(288)" />
      `;
      centerSVG = `<circle cx="0" cy="0" r="6" fill="#ffe4e6" class="flower-center"/>`;
      break;
    case 7:
      petalsSVG = `
        <path d="M 0 0 C 8 -15 4 -22 0 -25 C -4 -22 -8 -15 0 0" fill="#f0fdf4" transform="rotate(0)" />
        <path d="M 0 0 C 8 -15 4 -22 0 -25 C -4 -22 -8 -15 0 0" fill="#f0fdf4" transform="rotate(120)" />
        <path d="M 0 0 C 8 -15 4 -22 0 -25 C -4 -22 -8 -15 0 0" fill="#f0fdf4" transform="rotate(240)" />
      `;
      centerSVG = `<circle cx="0" cy="0" r="3.5" fill="#34d399" class="flower-center"/>`;
      break;
    case 8:
      petalsSVG = `
        <path d="M -7 -14 Q -10 -5 0 0 Q 10 -5 7 -14 Q 4 -20 0 -15 Q -4 -20 -7 -14" fill="#f472b6" />
        <path d="M -4 -17 Q 0 -5 0 0 Q 0 -5 4 -17 Q 0 -23 -4 -17" fill="#fbcfe8" />
      `;
      centerSVG = ''; 
      break;
  }
  
  const drawLeaf = flowerType !== 1 && flowerType !== 6 && flowerType !== 8;

  flower.innerHTML = `
    <svg viewBox="0 0 100 160" width="100" height="160" class="flower-svg">
      <defs>
        <filter id="soft-shadow-${uniqueId}" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="0" dy="3" stdDeviation="2" flood-color="rgba(0,0,0,0.1)"/>
        </filter>
      </defs>
      
      <path class="stem-path" d="M 50 160 Q ${curveX} 100 50 40" stroke="#86efac" stroke-width="2.5" fill="none" stroke-linecap="round" />
            
      ${drawLeaf ? `
      <path class="leaf-path" d="${leafPath}" fill="#bbf7d0" stroke="#86efac" stroke-width="1.5" />
      ` : ''}
      
      <g transform="translate(50, 40)">
        <g class="flower-head-group">
          <g class="petals" filter="url(#soft-shadow-${uniqueId})">
            ${petalsSVG}
          </g>
          ${centerSVG}
        </g>
      </g>
    </svg>
  `;

  garden.appendChild(flower);

  setTimeout(() => {
    const angleRad = (wrapperRotation - 90) * (Math.PI / 180);
    const headX = x + Math.cos(angleRad) * (120 * scale);
    const headY = y + Math.sin(angleRad) * (120 * scale);
    
    createSparkles(headX, headY);
    
    const numHearts = 1 + Math.floor(Math.random() * 2);
    for(let i = 0; i < numHearts; i++) {
        setTimeout(() => createHeart(headX, headY), i * 150);
    }
  }, 600);
}

// Background Music Setup
const bgMusic = new Audio('Love Me Not-Downringtone.com.mp3');
bgMusic.loop = true;
bgMusic.volume = 0; // Start at 0 for fade in

let musicStarted = false;

function playMusicWithFade() {
  if (musicStarted) return;
  
  bgMusic.play().then(() => {
    musicStarted = true;
    // Fade in over 5 seconds
    let vol = 0;
    const fadeInterval = setInterval(() => {
      vol += 0.05;
      if (vol >= 1) {
        bgMusic.volume = 1;
        clearInterval(fadeInterval);
      } else {
        bgMusic.volume = vol;
      }
    }, 250); // 0.05 every 250ms = 1.0 over 5000ms
  }).catch(err => {
    console.log("Autoplay blocked. Waiting for user interaction to play music.");
  });
}

// Attempt to play after 2.5 seconds
setTimeout(() => {
  playMusicWithFade();
}, 2500);

// Also try on any click in case autoplay was blocked by the browser
document.addEventListener('click', () => {
  if (!musicStarted) {
    playMusicWithFade();
  }
});
