// HTML要素を取得する

const addbutton = document.getElementById("add-button")
const memocontainer = document.getElementById("memo-container")
const memoinput = document.getElementById("memo-input")

addbutton.onclick = function () {
  const text = memoinput.value //取得した要素のvalue属性にアクセスすることで、値を取得・設定できます。
  /*const card = document.createElement("div")
  card.className = "card"
  card.textContent = text
  memocontainer.append(card)
*/
  memocontainer.append(text)
  memoinput.value = ""
}
