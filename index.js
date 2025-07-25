let btn1 = document.querySelector(".btn1")
let btn2 = document.querySelector(".btn2")
let input = document.querySelector('input')
let body = document.querySelector("body")
let span=document.querySelector('span')

btn1.addEventListener("click", () => {
    let randomColor = GetRandomColor()
    body.style.backgroundColor = randomColor
    span.innerText=body.style.backgroundColor
})

function changeColor(color){
     body.style.backgroundColor=color
     span.innerText=color

}

btn2.addEventListener("click",()=>{
   let color = input.value
   changeColor(color)
})

function GetRandomColor() {
    let red = Math.floor(Math.random() * 255)
    let green = Math.floor(Math.random() * 255)
    let blue = Math.floor(Math.random() * 255)

    let color = `rgb(${red},${green},${blue})`
    return color
}
