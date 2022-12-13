function solution(letter) {
  var answer = "";
  const morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };
  const newArray = letter.split(" ");
  console.log(newArray);
  newArray.forEach((value) => {
    console.log(value);
    console.log(morse[value]);
    answser = answer + morse[value];
    console.log("=========================");
  });

  return newArray
    .map((value) => {
      return morse[value];
    })
    .join("");
}
