const choice1 = document.getElementById("choice-1")
const choice2 = document.getElementById("choice-2")
const choice3 = document.getElementById("choice-3")
const feedback = document.getElementById("feedback")
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")

// クイズ の内容
const quiz = {
  text: "私の好きなプロ野球の球団はどれでしょう？",
  image: "baseball.jpeg",
  choices: [
    {
      text: "巨人",
      feedback: "残念！一番嫌いです。オレンジを見ただけで嫌悪感を抱くほどに",
    },
    {
      text: "オリックス",
      feedback: "残念！2023年日本シリーズで負けちゃって残念",
    },
    {
      text: "阪神タイガース",
      feedback: "正解！素晴らしい球団",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = "./image/" + quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
}

// 正解を判定する
const choose = function (choiceNumber) {
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

//処理
choice1.onclick = function () {
  // ゴリアテを選択
  choose(0)
}
choice2.onclick = function () {
  // ゼニガメを選択
  choose(1)
}
choice3.onclick = function () {
  // ガニメデを選択
  choose(2)
}
// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
