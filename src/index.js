console.log('%c HI', 'color: firebrick')
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(function(res){
  return res.json()
})

.then(function(data){
let message = data.message

renderMessage(message)//????

})

function renderMessage(message){

let div =  document.getElementById("dog-image-container")
 let ul = document.createElement("ul")
message.forEach(function(element){

  let img = document.createElement("img")
  img.src = element
  ul.append(img)
})
div.append(ul)
}

fetch("https://dog.ceo/api/breeds/list/all")
.then(function(res){
  return res.json()

})

.then(function(data){
  console.log(Object.keys(data.message))
let breed = data.message

renderBreed(Object.keys(data.message))

})

function renderBreed(breed){
let ul = document.getElementById("dog-breeds")
breed.forEach(function(element){
  let li = document.createElement("li")
  li.innerText = element
  li.style.color = "black"
  li.addEventListener("click", e => {
    li.style.color = li.style.color === "black" ? "red" : "black"
  })
  ul.append(li)


})

}

function filterFunction(){

  document.getElementById("breed-dropdown").classList.toggle("show");

}
