// Sound effects utility
// In a real app, you'd load actual audio files
// For now, we'll use Web Audio API to generate simple sounds

export const playSound = (type: 'correct' | 'levelup' | 'streak' | 'badge' | 'error') => {
  // Check if user has sounds enabled (could be a preference)
  const soundsEnabled = localStorage.getItem('soundsEnabled') !== 'false';
  if (!soundsEnabled) return;

  try {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    let frequency = 440;
    let duration = 0.1;
    
    switch (type) {
      case 'correct':
        frequency = 523.25; // C5 - pleasant success tone
        duration = 0.15;
        break;
      case 'levelup':
        frequency = 659.25; // E5 - ascending success
        duration = 0.3;
        break;
      case 'streak':
        frequency = 783.99; // G5 - exciting tone
        duration = 0.2;
        break;
      case 'badge':
        frequency = 880; // A5 - celebratory
        duration = 0.4;
        break;
      case 'error':
        frequency = 220; // A3 - lower, warning tone
        duration = 0.2;
        break;
    }
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.value = frequency;
    oscillator.type = type === 'error' ? 'sawtooth' : 'sine';
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  } catch (error) {
    // Silently fail if audio context is not available
  }
};

