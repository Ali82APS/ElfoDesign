const $ = document
const faceBtn = $.querySelectorAll('#face-btn')
const colorBtn = $.querySelectorAll('#color-btn')
const hornsBtn = $.querySelectorAll('#horns-btn')
const tailBtn = $.querySelectorAll('#tail-btn')

let docRoot = $.querySelector(':root')

let bodyColors = [
  "#a8d530",
  "#42aaff",
  "#f3d55b",
  "#ff4f51",
  "#904ae8",
  "#ffa711",
];

let colors = [...bodyColors, 'transparent']

// let [faceCounter, colorCounter, hornsCounter, tailCounter] = [0, 0, 0, 0] instead of 4lines but the best way is in next line... .
let [faceCounter, colorCounter, hornsCounter, tailCounter] = Array(4).fill(0) //prooo

const setCounter = (counter, length) => {
    return counter < length - 1 ? counter + 1 : 0
}

faceBtn.addEventListener('click', () => {
    faceCounter = setCounter(faceCounter, 6)
    $.getElementById('face').setAttribute('src', `face-${faceCounter}.png`)
})
colorBtn.addEventListener('click', () => {
    colorCounter = setCounter(colorCounter, bodyColors.length)
    docRoot.style.setProperty('--color-character', bodyColors[colorCounter])
})
hornsBtn.addEventListener('click', () => {
    hornsCounter = setCounter(colorCounter, colors.length)
    docRoot.style.setProperty('--color-horns', colors[hornsCounter])
})
tailBtn.addEventListener('click', () => {
    tailCounter = setCounter(colorCounter, colors.length)
    docRoot.style.setProperty('--color-tail', colors[tailCounter])
})