document.querySelector('header > div > h1').innerText = "Inspector Chouseau"
document.querySelector('header > div > h2').innerText = "This IZ Cheif Inspector Chouseau speaking on the pheaun"

function reDisplay() {

let windowSizes = `Window size is ${window.innerWidth} pixels wide by ${window.innerHeight} pixels tall.`

let offSet = `Window offset is ${window.screenX} from the left edge and ${window.screenY} pixels from the top of the display`

let myUrl = `The page URL is ${window.location.href}`

let myWindow = document.querySelector('#myWindow').innerText = windowSizes + '\n' + offSet + '\n' + myUrl 

}

reDisplay()

function windowDisplay() {

let pageTitle = `The title of this document is ${document.title}`;

let lastEdit = `This docuemnt was last motified on ${document.lastModified}`;

let docProp = document.getElementById('myTitle').innerText = pageTitle + '\n' + lastEdit

}


windowDisplay()

