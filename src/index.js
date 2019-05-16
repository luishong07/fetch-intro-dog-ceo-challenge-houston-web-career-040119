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
let dd = document.getElementById("breed-dropdown")
dd.addEventListener("change",(e) =>{
  selection = e.target.value
  //conditional formatting based on selection
  // code here

  for (let i of ul.children){
    console.log(i.innerText.charAt(0))

    if (selection === i.innerText.charAt(0))
    {
        console.log("BING BONG")
        i.style.display = "block"
    }//if
    else {
      i.style.display = "none"
    }




  }//for loop



  //========================================
}) //eventlistener
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
