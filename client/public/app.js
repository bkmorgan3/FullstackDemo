
const text = document.getElementById("text");
const btn = document.getElementById("clickThis");
const content = document.getElementById("content");

// POkemon stuff 
const poker = document.getElementById("pokegrabber");
const pokeCon = document.getElementById("pokecontent");

btn.addEventListener("click", () => {
    // create new element 
   const newP =  document.createElement('p');
   newP.innerText = text.value
   console.log(newP)
   content.appendChild(newP);
   text.value = ''
});

poker.addEventListener("click", () => {
    const div = document.createElement("div");
    fetch("/pokemon")
    .then(res => res.json())
    .then(data => {
        console.log("my data", data.name)
        div.innerText = data.name;
        const save = document.createElement("button");
        save.innerText = "Save?"
        pokeCon.appendChild(div)
        div.appendChild(save)
    })
    
});
