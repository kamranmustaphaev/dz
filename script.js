
// Task №1


let knopka = document.querySelectorAll(".item")

for(let i = 0;i < knopka.length; i++) {
    knopka[i].addEventListener("click", function() {
        let knopkaId = knopka[i].getAttribute("id")
        document.body.style.background = `${knopkaId}`
    })
}

// Task №2

let text = document.querySelectorAll(".text")

let texts = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet"]
for(let i = 0; i < texts.length; i++){
    for(let i = 0; i <= text.length; i++){
        text[i].innerText += `${texts[i]}`
    }

}
    



// Task №3

arr = [
    {
        link : "https://google.com",
        title : "Ссылка на гугл"
    },
    {
        link : "https://instagram.com",
        title : "Ссылка на инстаграм"
    },
    {
        link : "https://facebook.com",
        title : "Ссылка на фейсбук"
    }
    ]
let main = document.querySelector("main")

arr.forEach(function (el) {
    
   main.innerHTML += `
   <a href="${el.link}">${el.title}</a>
   `
})


// Task №4

let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let zero = document.querySelector("p")
let counter = 0;
plusBtn.addEventListener("click", function(){
        counter++;
        zero.innerText = counter;
})
minusBtn.addEventListener("click", function(){
    counter--;
        zero.innerText = counter;
})
