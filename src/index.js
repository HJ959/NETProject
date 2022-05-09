// import js modules
import * as PIXI from 'pixi.js';
import {
    getRandomInt
} from './usefulFunctions';

// throw in the css as well
import './css/normalise.css'
import './css/main.css'

// variables
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
});


// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1,
    antialias: true,
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// containers can hold groups of things could create 
// a container for every 'down swipe' reveals more of the path
const startContainer = new PIXI.Container();
app.stage.addChild(startContainer);


const bezier = new PIXI.Graphics();

startContainer.addChild(bezier);

//////////////////////////////////////////////////////////////////////////////
// detect touches
let mouseX, mouseY;
let pointerDownFlag = false;
let onceDownFlag = true;
let lastMouseX, lastMouseY;
onpointermove = function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if ((pointerDownFlag === true && onceDownFlag === false) && (lastMouseY - mouseY) > 50) {
        onceDownFlag = true;
        bezier.clear();
        bezier.lineStyle(sizes.width * 0.1, 0xAA0000, 1);
        bezier.bezierCurveTo(sizes.height * getRandomInt(1, 10) * 0.1, getRandomInt(1, 10), sizes.width * getRandomInt(1, 10) * 0.1, sizes.height * 0.4, sizes.height * 0.5, sizes.width * 0.6);

        bezier.position.x = sizes.width * (getRandomInt(1, 2) * 0.1);
        bezier.position.y = -10;
        // swipe down  
    }
    if ((pointerDownFlag === true && onceDownFlag === false) && (mouseY - lastMouseY) > 50) {
        onceDownFlag = true;
        // swipe up
    }
    if (mouseX !== undefined) lastMouseX = mouseX;
    if (mouseY !== undefined) lastMouseY = mouseY;
};

onpointerdown = function (e) {
    pointerDownFlag = true;
    onceDownFlag = false;

};

onpointerup = function (e) {
    pointerDownFlag = false;
    onceDownFlag = true;

};