const input = document.querySelector("input")
const save = document.querySelector("button#save")
const take = document.querySelector("button#take")

save.addEventListener("click", ev => {
  localStorage.setItem("test", input.value)
})

take.addEventListener("click", ev => {
  console.log(localStorage.getItem("test"))
})