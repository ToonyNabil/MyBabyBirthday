/**
 * Gentle Web Audio Music Box Synthesizer for birthday ambience
 */

let audioCtx: AudioContext | null = null;
let isPlayingMelody = false;
let melodyTimeout: number | null = null;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Gentle celesta / music box bell tone
export function playBellNote(frequency: number, duration: number = 1.2, volume: number = 0.15) {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc2.type = 'triangle';

    osc.frequency.setValueAtTime(frequency, now);
    osc2.frequency.setValueAtTime(frequency * 2, now); // soft harmonic shimmer

    gain.gain.setValueAtTime(0.001, now);
    gain.gain.linearRampToValueAtTime(volume, now + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    osc.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc2.start(now);
    osc.stop(now + duration);
    osc2.stop(now + duration);
  } catch (e) {
    console.error('Audio note error:', e);
  }
}

// Play a cheerful sparkle sound
export function playSparkleSound() {
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    setTimeout(() => {
      playBellNote(freq, 0.8, 0.12);
    }, idx * 75);
  });
}

// Gentle Happy Birthday music box notes (C4 = 261.63, etc.)
const MELODY: Array<{ note: number; duration: number }> = [
  { note: 261.63, duration: 400 }, // C4
  { note: 261.63, duration: 400 }, // C4
  { note: 293.66, duration: 800 }, // D4
  { note: 261.63, duration: 800 }, // C4
  { note: 349.23, duration: 800 }, // F4
  { note: 329.63, duration: 1200 }, // E4

  { note: 261.63, duration: 400 }, // C4
  { note: 261.63, duration: 400 }, // C4
  { note: 293.66, duration: 800 }, // D4
  { note: 261.63, duration: 800 }, // C4
  { note: 392.00, duration: 800 }, // G4
  { note: 349.23, duration: 1200 }, // F4

  { note: 261.63, duration: 400 }, // C4
  { note: 261.63, duration: 400 }, // C4
  { note: 523.25, duration: 800 }, // C5
  { note: 440.00, duration: 800 }, // A4
  { note: 349.23, duration: 800 }, // F4
  { note: 329.63, duration: 800 }, // E4
  { note: 293.66, duration: 1000 }, // D4

  { note: 466.16, duration: 400 }, // Bb4
  { note: 466.16, duration: 400 }, // Bb4
  { note: 440.00, duration: 800 }, // A4
  { note: 349.23, duration: 800 }, // F4
  { note: 392.00, duration: 800 }, // G4
  { note: 349.23, duration: 1400 }, // F4
];

export function startMusicBox(onStateChange?: (playing: boolean) => void) {
  if (isPlayingMelody) return;
  isPlayingMelody = true;
  if (onStateChange) onStateChange(true);

  let currentNoteIdx = 0;

  function step() {
    if (!isPlayingMelody) return;
    const current = MELODY[currentNoteIdx];
    playBellNote(current.note, 1.4, 0.14);

    currentNoteIdx = (currentNoteIdx + 1) % MELODY.length;
    const delay = current.duration + (currentNoteIdx === 0 ? 2000 : 80);
    melodyTimeout = window.setTimeout(step, delay);
  }

  step();
}

export function stopMusicBox(onStateChange?: (playing: boolean) => void) {
  isPlayingMelody = false;
  if (melodyTimeout) {
    clearTimeout(melodyTimeout);
    melodyTimeout = null;
  }
  if (onStateChange) onStateChange(false);
}
