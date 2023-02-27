export const findPokemonNumber = (url: string): string => {
  const urlWithoutFinalSlash: string = url.slice(0, -1);
  const number: string = urlWithoutFinalSlash.substring(
    urlWithoutFinalSlash.lastIndexOf("/") + 1
  );
  return number;
};

export const capitalizeWord = (word: string | undefined): string => {
  let wordToReturn = "";
  if (word !== undefined) {
    wordToReturn = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return wordToReturn;
};
