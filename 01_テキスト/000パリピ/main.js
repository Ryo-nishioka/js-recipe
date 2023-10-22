const person = document.getElementById("person")

let age = 26
let isWorking = true // 仕事をしているか
let isInSpace = false // 宇宙にいるか
let isBeardShaved = false // ひげを剃っているか

const draw = function () {
  if (isWorking) {
    person.textContent = "🧑‍💻"
  } else {
    person.textContent = "😄"
  }

  if (isInSpace) {
    person.textContent += "✨🪐✨"
  } else {
    person.textContent += "🈁➡️🌏"
  }
}

draw() // "🧑‍💻🈁➡️🌏"
