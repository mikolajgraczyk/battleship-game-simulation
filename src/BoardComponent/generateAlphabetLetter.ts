export const generateAlphabetLetter = (index: number): string => {
    const charCodeA = "A".charCodeAt(0);
    return String.fromCharCode(charCodeA + index);
  };