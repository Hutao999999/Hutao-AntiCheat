const homeButton = document.querySelector("header .navigation #home")
const discordButton = document.querySelector("header .navigation #discord")
const aboutButton = document.querySelector("header .navigation #about")

const homePage = document.querySelector(".home")
const discordPage = document.querySelector(".discord")
const aboutPage = document.querySelector(".about")

const joinDiscord = document.querySelector(".discord .board #discord")

homeButton.addEventListener("click", () => {
  reset()

  homePage.classList.add("selected")
})

discordButton.addEventListener("click", () => {
  reset()

  discordPage.classList.add("selected")
})

aboutButton.addEventListener("click", () => {
  reset()

  aboutPage.classList.add("selected")
})

joinDiscord.addEventListener("click", () => {
  window.location = "https://discord.gg/2P3PfYvMqp"
})

const reset = () => {
  homePage.classList.remove("selected")
  discordPage.classList.remove("selected")
  aboutPage.classList.remove("selected")
}