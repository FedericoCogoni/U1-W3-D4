const newBigTab = function () {
  const generate = document.getElementById("bigTab")
  for (let i = 0; i < 76; i++) {
    bigTab.innerHTML += `<span class='cell'>${i + 1}</span>`
  }
}
newBigTab()
