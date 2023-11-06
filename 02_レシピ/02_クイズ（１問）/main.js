const choice1 = document.getElementById("choice-1")
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const ButtonContainer = document.getElementById("button-container")
const feedback = document.getElementById("feedback")

//1.選択肢の内容onclick と 正解判定の処理chooseをそれぞれ行うようにする
//2.選択肢の内容"文字列" が 選択の処理に影響しないようにする
//→「何番目の選択」として認識させる
//3.フィードバックと正解判定を分ける→配列を用いる
//4.クイズの内容と表示の処理を分ける

//★クイズの内容quiz：各プロパティを用いてテキストや画像表示
//配列を用いる
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
    {
      text: "ガ",
      feedback: "不正解！ガは、虫だよ！",
    },
  ],
}

// 正解を判定する
//choose()内に入れた引数を、f関数でchoise○○として受け取る
//chooseは正解判定の処理

//★quiz を画面に表示する関数reloadOuiz
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./images/" + quiz.image
  for (let i = 0; i < quiz.choices.length; i++) {
    const Button = document.createElement("button")
    Button.textContent = quiz.choices[i].text
    Button.onclick = function () {
      choose(i)
    }
    ButtonContainer.append(Button)
  }
}
reloadQuiz()

//onclickは選択肢の内容に対して行う処理
//choiceNumber番目の選択肢を選択→関数choose
const choose = function (choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}
//quiz→choices[choiceNumber番目]→feedbackの内容
