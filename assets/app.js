const replaceMap = new Map();

replaceMap.set('e', 'enter');
replaceMap.set('i', 'imes');
replaceMap.set('a', 'ai');
replaceMap.set('o', 'ober');
replaceMap.set('u', 'ufat');

const textArea = document.getElementById("secret-phrase");
const cryptButton = document.getElementById("crypt");
const decryptButton = document.getElementById("decrypt");
const copyButton = document.getElementById("copy");

const noMessage = document.querySelector(".no-message");
const hasMessage = document.querySelector(".has-message");

cryptButton.addEventListener("click", (e) => {
  e.preventDefault();
  let phrase = textArea.value;

  for (const vowel of replaceMap){
    const [key, value] = vowel;
    const reg = new RegExp(`${key}`, "ig");
    phrase = phrase.replace(reg, value);
  }

  noMessage.classList.add("hide");
  hasMessage.classList.remove("hide");
  hasMessage.firstChild.textContent = phrase;
});

decryptButton.addEventListener('click', (e) => {
  e.preventDefault();
  let phrase = textArea.value;

  for (const vowel of replaceMap){
    const [key, value] = vowel;
    const reg = new RegExp(`${value}`, "ig");
    phrase = phrase.replace(reg, key);
  }

  noMessage.classList.add("hide");
  hasMessage.classList.remove("hide");
  hasMessage.firstChild.textContent = phrase;
});

copyButton.addEventListener('click', () => {
  const phrase = hasMessage.firstChild.textContent
  navigator.clipboard.writeText(phrase);
});