let interval = null;
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function randomLetter() {
  const randomNumber = Math.floor(Math.random() * letters.length)
  return letters[randomNumber];
}

function changeName(newName) {
  console.log({newName});
  const name = document.getElementById("member_name");

  name.innerText = newName.toUpperCase(); // Convertendo para maiúsculas
  name.setAttribute('data-value', newName.toUpperCase()); // Convertendo para maiúsculas

  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    let text = name.innerText.split("");

    text = text.map((_, index) => {
      const isCorrectLetter = index < iteration;
      return isCorrectLetter ? newName[index].toUpperCase() : randomLetter();
    });

    name.innerText = text.join("");

    if(iteration >= newName.length){ 
      clearInterval(interval);
    }

    iteration += 1;
  }, 60);
}