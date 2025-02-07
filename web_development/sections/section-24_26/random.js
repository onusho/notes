const mainButton = document.querySelector('button')
const h1 = document.querySelector('h1')
const generateRGB = () => {
    const generate = () => Math.floor(Math.random() * 255);
    return `rgb(${generate()}, ${generate()}, ${generate()})`;
} 


mainButton.addEventListener('click', function() {
    const color = generateRGB()
    document.body.style.backgroundColor = color
    h1.innerText = color
})

const cButtons = document.querySelectorAll('button.bcolor')
const cH1 = document.querySelector('h1.bcolor')
for (let button of cButtons) {
    button.addEventListener('click', function() {
        const color = generateRGB()
        button.style.backgroundColor = color
        button.innerText = color
    })
}