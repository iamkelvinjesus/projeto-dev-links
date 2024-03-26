function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituri a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a iamgem light
    img.setAttribute("src", "./assets/kelvinlight7.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/Avatark.png")
  }
}
