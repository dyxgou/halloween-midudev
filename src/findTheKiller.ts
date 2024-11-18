export function findTheKiller(whisper: string, suspects: string[]): string {
  const checkSuspect = (whisper: string, suspect: string): boolean => {
    const UNCERTAIN_LETTER = "~";
    const WHISPER_END = "$";

    let whisperLenght = whisper.length;
    const isWhisperEnded = whisper.at(-1) === WHISPER_END;

    if (isWhisperEnded) {
      whisperLenght -= 1;
    }

    if (suspect.length > whisperLenght && isWhisperEnded) {
      return false;
    }

    for (let i = 0; i < whisperLenght; i++) {
      const letter = whisper[i];

      if (letter === UNCERTAIN_LETTER) {
        continue;
      }

      if (letter !== suspect[i]) {
        return false;
      }
    }

    return true;
  };

  let suspectMurderers: string[] = [];

  for (const suspect of suspects) {
    if (checkSuspect(whisper, suspect.toLowerCase())) {
      suspectMurderers.push(suspect);
    }
  }

  return suspectMurderers.join(",");
}
