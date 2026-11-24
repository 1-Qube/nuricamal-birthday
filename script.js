/**
 * Nuricamal's 12th Birthday — Digital Art Gallery
 * Interactive Vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Ambient Floating Elements (Paint Drops, Stars)
  initAmbientDecorations();

  // 2. Confetti Particle Engine
  const confetti = initConfettiEngine();

  // 3. Audio Chime Synthesizer (Web Audio API)
  const soundFX = initAudioSynthesizer();

  // 4. Interactive Canvas (The Little Artist's Studio)
  initInteractiveCanvas();

  // 5. Birthday Surprise Modal
  initSurpriseModal(confetti, soundFX);

  // 6. Make a Wish & Interactive Candle
  initMakeAWish(confetti, soundFX);

  // 7. Gallery Artwork Mounting (Image Uploader)
  initGalleryFrameMounting();
});

/* ==========================================================================
   1. AMBIENT FLOATING DECORATIONS
   ========================================================================== */
function initAmbientDecorations() {
  const container = document.getElementById('ambientLayer');
  if (!container) return;

  const colors = [
    'rgba(232, 93, 78, 0.4)',   // Vermilion
    'rgba(242, 169, 59, 0.45)', // Sun Gold
    'rgba(78, 135, 106, 0.4)',  // Sage
    'rgba(59, 91, 165, 0.4)',   // Ultramarine
    'rgba(154, 122, 160, 0.4)', // Soft Lavender
    'rgba(217, 101, 139, 0.35)' // Rose
  ];

  const particleCount = window.innerWidth < 768 ? 14 : 26;

  for (let i = 0; i < particleCount; i++) {
    const el = document.createElement('div');
    el.className = 'ambient-particle';
    
    // Vary size between 8px and 28px
    const size = Math.floor(Math.random() * 20) + 8;
    const isStar = Math.random() > 0.65;
    
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.top = `${Math.random() * 100}vh`;
    el.style.left = `${Math.random() * 100}vw`;
    el.style.animationDuration = `${Math.floor(Math.random() * 16) + 14}s`;
    el.style.animationDelay = `-${Math.random() * 10}s`;

    if (isStar) {
      el.textContent = Math.random() > 0.5 ? '✦' : '★';
      el.style.color = colors[Math.floor(Math.random() * colors.length)];
      el.style.fontSize = `${size}px`;
      el.style.background = 'transparent';
      el.style.display = 'flex';
      el.style.alignItems = 'center';
      el.style.justifyContent = 'center';
    } else {
      el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      // Watercolor organic shape
      el.style.borderRadius = `${Math.random()*40 + 30}% ${Math.random()*40 + 30}% ${Math.random()*40 + 30}% ${Math.random()*40 + 30}%`;
    }

    container.appendChild(el);
  }
}

/* ==========================================================================
   2. VANILLA CONFETTI PARTICLE ENGINE
   ========================================================================== */
function initConfettiEngine() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return { burst: () => {} };

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const colors = [
    '#E85D4E', '#F2A93B', '#FAD02C', '#4E876A',
    '#3B5BA5', '#9A7AA0', '#D9658B', '#65B396'
  ];

  class Confetto {
    constructor(x, y, isBurst = true) {
      this.x = x || width * 0.5;
      this.y = y || height * 0.5;
      this.size = Math.random() * 9 + 6;
      this.color = colors[Math.floor(Math.random() * colors.length)];
      
      const angle = Math.random() * Math.PI * 2;
      const speed = isBurst ? Math.random() * 16 + 8 : Math.random() * 4 + 2;
      
      this.vx = Math.cos(angle) * speed;
      this.vy = Math.sin(angle) * speed - (isBurst ? 5 : 0);
      this.gravity = 0.35;
      this.drag = 0.94;
      this.opacity = 1;
      this.rotation = Math.random() * 360;
      this.rotationSpeed = (Math.random() - 0.5) * 12;
      this.shape = Math.random() > 0.4 ? 'rect' : 'circle';
    }

    update() {
      this.vx *= this.drag;
      this.vy *= this.drag;
      this.vy += this.gravity;
      this.x += this.vx;
      this.y += this.vy;
      this.rotation += this.rotationSpeed;
      this.opacity -= 0.009;
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, this.opacity);
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;

      if (this.shape === 'rect') {
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size * 0.6);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, this.size / 2, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    }
  }

  let animating = false;

  function loop() {
    if (particles.length === 0) {
      ctx.clearRect(0, 0, width, height);
      animating = false;
      return;
    }

    ctx.clearRect(0, 0, width, height);

    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw(ctx);
      if (p.opacity <= 0 || p.y > height + 20) {
        particles.splice(i, 1);
      }
    }

    requestAnimationFrame(loop);
  }

  function burst(originX, originY, count = 90) {
    const x = originX || width * 0.5;
    const y = originY || height * 0.45;
    for (let i = 0; i < count; i++) {
      particles.push(new Confetto(x, y, true));
    }
    if (!animating) {
      animating = true;
      loop();
    }
  }

  return { burst };
}

/* ==========================================================================
   3. WEB AUDIO CHIME SYNTHESIZER
   ========================================================================== */
function initAudioSynthesizer() {
  let ctx = null;

  function getAudioContext() {
    if (!ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) ctx = new AudioCtx();
    }
    if (ctx && ctx.state === 'suspended') {
      ctx.resume();
    }
    return ctx;
  }

  function playChime() {
    try {
      const actx = getAudioContext();
      if (!actx) return;

      // Magical pentatonic harp notes (C5, D5, E5, G5, A5, C6)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      const now = actx.currentTime;

      notes.forEach((freq, idx) => {
        const osc = actx.createOscillator();
        const gain = actx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);

        gain.gain.setValueAtTime(0, now + idx * 0.1);
        gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.1 + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.1 + 1.2);

        osc.connect(gain);
        gain.connect(actx.destination);

        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 1.25);
      });
    } catch {
      // Audio autoplay policy fallback
    }
  }

  return { playChime };
}

/* ==========================================================================
   4. INTERACTIVE CANVAS (DRAWING STUDIO)
   ========================================================================== */
function initInteractiveCanvas() {
  const canvas = document.getElementById('paintCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const colorSwatches = document.querySelectorAll('.color-swatch');
  const customColorInput = document.getElementById('customColorInput');
  const brushSlider = document.getElementById('brushSizeSlider');
  const brushSizeDisplay = document.getElementById('brushSizeDisplay');
  const brushBtn = document.getElementById('brushToolBtn');
  const eraserBtn = document.getElementById('eraserToolBtn');
  const clearBtn = document.getElementById('clearCanvasBtn');
  const saveBtn = document.getElementById('saveCanvasBtn');

  // Drawing state
  let currentColor = '#E85D4E';
  let currentSize = 12;
  let currentTool = 'brush'; // 'brush' or 'eraser'
  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;

  // Responsive High-DPI Canvas Setup
  function setupCanvasResolution() {
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Save existing drawing before resizing
    let tempCanvas = null;
    if (canvas.width > 0 && canvas.height > 0) {
      tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      tempCanvas.getContext('2d').drawImage(canvas, 0, 0);
    }

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    if (tempCanvas) {
      ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height);
    } else {
      // Fill canvas with delicate paper white
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, rect.width, rect.height);
    }
  }

  setupCanvasResolution();
  window.addEventListener('resize', () => {
    // Debounced resize to avoid flickering
    clearTimeout(canvas._resizeTimer);
    canvas._resizeTimer = setTimeout(setupCanvasResolution, 250);
  });

  // Calculate pointer coordinates inside canvas
  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  function startDrawing(e) {
    e.preventDefault();
    isDrawing = true;
    const pos = getPos(e);
    lastX = pos.x;
    lastY = pos.y;

    // Draw single dot on click/tap
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, currentSize / 2, 0, Math.PI * 2);
    ctx.fillStyle = currentTool === 'eraser' ? '#FFFFFF' : currentColor;
    ctx.fill();
  }

  function draw(e) {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    
    // Smooth quadratic curve midpoint
    const midX = (lastX + pos.x) / 2;
    const midY = (lastY + pos.y) / 2;
    ctx.quadraticCurveTo(lastX, lastY, midX, midY);

    ctx.strokeStyle = currentTool === 'eraser' ? '#FFFFFF' : currentColor;
    ctx.lineWidth = currentSize;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.stroke();

    lastX = pos.x;
    lastY = pos.y;
  }

  function stopDrawing() {
    isDrawing = false;
  }

  // Pointer & Touch Events
  canvas.addEventListener('pointerdown', startDrawing);
  canvas.addEventListener('pointermove', draw);
  canvas.addEventListener('pointerup', stopDrawing);
  canvas.addEventListener('pointercancel', stopDrawing);
  canvas.addEventListener('pointerleave', stopDrawing);

  // Palette Color Swatches
  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      colorSwatches.forEach(s => s.classList.remove('active'));
      swatch.classList.add('active');
      currentColor = swatch.getAttribute('data-color');
      
      // If currently on eraser, switch back to brush
      if (currentTool === 'eraser') {
        setTool('brush');
      }
    });
  });

  // Custom Color Input
  if (customColorInput) {
    customColorInput.addEventListener('input', (e) => {
      currentColor = e.target.value;
      colorSwatches.forEach(s => s.classList.remove('active'));
      if (currentTool === 'eraser') {
        setTool('brush');
      }
    });
  }

  // Brush Size Slider
  if (brushSlider && brushSizeDisplay) {
    brushSlider.addEventListener('input', (e) => {
      currentSize = parseInt(e.target.value, 10);
      brushSizeDisplay.textContent = `${currentSize}px`;
    });
  }

  // Tool Selection (Brush / Eraser)
  function setTool(tool) {
    currentTool = tool;
    if (tool === 'brush') {
      brushBtn.classList.add('active');
      eraserBtn.classList.remove('active');
    } else {
      eraserBtn.classList.add('active');
      brushBtn.classList.remove('active');
    }
  }

  if (brushBtn) brushBtn.addEventListener('click', () => setTool('brush'));
  if (eraserBtn) eraserBtn.addEventListener('click', () => setTool('eraser'));

  // Clear Canvas
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      const rect = canvas.getBoundingClientRect();
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, rect.width, rect.height);
    });
  }

  // Save Artwork as PNG
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      const link = document.createElement('a');
      link.download = `nuricamal-masterpiece-12th-birthday.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
}

/* ==========================================================================
   5. BIRTHDAY SURPRISE MODAL (UNFOLDING LETTER)
   ========================================================================== */
function initSurpriseModal(confetti, soundFX) {
  const modal = document.getElementById('surpriseModal');
  const openHeroBtn = document.getElementById('openSurpriseHeroBtn');
  const openNavBtn = document.getElementById('surpriseNavBtn');
  const openWishBtn = document.getElementById('revealSurpriseFromWishBtn');
  const closeBtn = document.getElementById('closeSurpriseBtn');
  const modalConfettiBtn = document.getElementById('modalConfettiBtn');

  if (!modal) return;

  function openModal() {
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Lock background scroll
    confetti.burst(window.innerWidth * 0.5, window.innerHeight * 0.4, 80);
    soundFX.playChime();
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openHeroBtn) openHeroBtn.addEventListener('click', openModal);
  if (openNavBtn) openNavBtn.addEventListener('click', openModal);
  if (openWishBtn) openWishBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // Close when clicking modal backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (modalConfettiBtn) {
    modalConfettiBtn.addEventListener('click', (e) => {
      const rect = modalConfettiBtn.getBoundingClientRect();
      confetti.burst(rect.left + rect.width / 2, rect.top, 60);
      soundFX.playChime();
    });
  }
}

/* ==========================================================================
   6. MAKE A WISH & INTERACTIVE CANDLE
   ========================================================================== */
function initMakeAWish(confetti, soundFX) {
  const candleWrapper = document.getElementById('interactiveCandle');
  const candleFlame = document.getElementById('candleFlame');
  const candleSmoke = document.getElementById('candleSmoke');
  const candleStatus = document.getElementById('candleStatus');
  const makeWishBtn = document.getElementById('makeWishBtn');
  const heroWishBtn = document.getElementById('heroWishBtn');
  const celebrationMessage = document.getElementById('wishCelebrationMessage');

  let isBlownOut = false;

  function blowOutCandle(originElement) {
    if (isBlownOut) {
      // Re-light the candle
      isBlownOut = false;
      candleFlame.style.opacity = '1';
      candleFlame.style.transform = 'scale(1)';
      candleSmoke.classList.remove('active');
      candleStatus.textContent = 'Tap the candle to blow out the flame!';
      if (celebrationMessage) celebrationMessage.classList.add('hidden');
      return;
    }

    // Extinguish candle
    isBlownOut = true;
    candleFlame.style.opacity = '0';
    candleFlame.style.transform = 'scale(0.2)';
    candleSmoke.classList.add('active');
    candleStatus.textContent = '✨ Wish Made! Tap to light again.';

    // Show celebration message
    if (celebrationMessage) {
      celebrationMessage.classList.remove('hidden');
    }

    // Trigger magical sounds and confetti burst
    const rect = originElement ? originElement.getBoundingClientRect() : { left: window.innerWidth / 2, top: window.innerHeight / 2, width: 0 };
    confetti.burst(rect.left + rect.width / 2, rect.top, 120);
    soundFX.playChime();
  }

  if (candleWrapper) {
    candleWrapper.addEventListener('click', () => blowOutCandle(candleWrapper));
    candleWrapper.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        blowOutCandle(candleWrapper);
      }
    });
  }

  if (makeWishBtn) {
    makeWishBtn.addEventListener('click', () => blowOutCandle(makeWishBtn));
  }

  if (heroWishBtn) {
    heroWishBtn.addEventListener('click', () => {
      // Smooth scroll to wishes section and trigger blow
      const wishesSec = document.getElementById('wishes');
      if (wishesSec) {
        wishesSec.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          blowOutCandle(candleWrapper);
        }, 800);
      }
    });
  }
}

/* ==========================================================================
   7. GALLERY ARTWORK MOUNTING (IMAGE UPLOADER)
   ========================================================================== */
function initGalleryFrameMounting() {
  const fileInputs = document.querySelectorAll('.frame-file-input');

  fileInputs.forEach(input => {
    input.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const targetId = input.getAttribute('data-target');
      const container = document.getElementById(targetId);
      if (!container) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        container.innerHTML = `
          <img src="${event.target.result}" alt="Nuricamal's Painting" style="width:100%; height:100%; object-fit:cover; display:block;" />
        `;
      };
      reader.readAsDataURL(file);
    });
  });
}
