const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const mButton = document.getElementById("m-button")
const bButton = document.getElementById("2-button")

let count = 0

// ボタン要素のonclickハンドラに関数を代入する
plusButton.onclick = function () {
  // count を更新
  count += 1
  // count を表示
  display.textContent = count
}

mButton.onclick = function () {
  // count を更新
  count -= 1
  // count を表示
  display.textContent = count
}

bButton.onclick = function () {
  // count を更新
  count *= 2
  // count を表示
  display.textContent = count
}
