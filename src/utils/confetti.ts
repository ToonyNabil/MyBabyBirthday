import confetti from 'canvas-confetti';

export function triggerBirthdayConfetti() {
  // Burst from left edge
  confetti({
    particleCount: 60,
    angle: 60,
    spread: 55,
    origin: { x: 0.1, y: 0.7 },
    colors: ['#f43f5e', '#fb7185', '#fbbf24', '#f472b6', '#ffffff', '#e11d48'],
  });

  // Burst from right edge
  confetti({
    particleCount: 60,
    angle: 120,
    spread: 55,
    origin: { x: 0.9, y: 0.7 },
    colors: ['#f43f5e', '#fb7185', '#fbbf24', '#f472b6', '#ffffff', '#e11d48'],
  });

  // Center celebratory shower
  setTimeout(() => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { x: 0.5, y: 0.5 },
      colors: ['#fb7185', '#f59e0b', '#fda4af', '#f43f5e', '#fed7aa'],
    });
  }, 200);
}

export function triggerHeartShower() {
  const defaults = {
    spread: 360,
    ticks: 100,
    gravity: 0.8,
    decay: 0.94,
    startVelocity: 30,
    colors: ['#ff4d6d', '#ff758f', '#ffb3c1', '#f59e0b', '#fff'],
  };

  confetti({
    ...defaults,
    particleCount: 40,
    scalar: 1.2,
    shapes: ['circle'],
  });
}
