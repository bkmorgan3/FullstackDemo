console.log("hi")

const text = document.getElementById("text");
const btn = document.getElementById("clickThis");
const content = document.getElementById("content");
console.log(content)

btn.addEventListener("click", () => {
    // create new element 
   const newP =  document.createElement('p');
   newP.innerText = text.value
   console.log(newP)
   content.appendChild(newP);
   text.value = ''
});