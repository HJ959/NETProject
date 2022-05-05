// import js modules
import * as PIXI from 'pixi.js';

// throw in the css as well
import './css/normalise.css'
import './css/main.css'

// variables
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application({
    resizeTo: window,
    resolution: window.devicePixelRatio || 1
});

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// containers can hold groups of things could create 
// a container for every 'down swipe' reveals more of the path
const startContainer = new PIXI.Container();
app.stage.addChild(startContainer);

// load the texture we need
app.loader.add('bathmatt', 'media/nicebathmatt.png').load((loader, resources) => {
    // This creates a bathmatt from a 'spidey.png' image
    const bathmatt = new PIXI.Sprite(resources.bathmatt.texture);

    // Setup the position of the bathmatt
    bathmatt.x = app.renderer.width / 2;
    bathmatt.y = app.renderer.height / 2;

    // Rotate around the center
    bathmatt.anchor.x = 0.5;
    bathmatt.anchor.y = 0.5;

    // Add the bathmatt to the scene we are building
    startContainer.addChild(bathmatt);

    // Listen for frame updates
    app.ticker.add((delta) => {
        // each frame we spin the bathmatt around a bit
        bathmatt.rotation -= 0.008 * delta;
    });
});

//////////////////////////////////////////////////////////////////////////////
const secondContainer = new PIXI.Container();
app.stage.addChild(secondContainer);
secondContainer.visible = false;

// Create a new texture
const texture = PIXI.Texture.from('media/spidey.png');

// Create a 5x5 grid of bunnies
for (let i = 0; i < 25; i++) {
    const spidey = new PIXI.Sprite(texture);
    spidey.anchor.set(0.5);
    spidey.x = (i % 5) * 40;
    spidey.y = Math.floor(i / 5) * 40;
    secondContainer.addChild(spidey);
}

// Move secondContainer to the center
secondContainer.x = app.screen.width / 2;
secondContainer.y = app.screen.height / 2;

// Center spidey sprite in local secondContainer coordinates
secondContainer.pivot.x = secondContainer.width / 2;
secondContainer.pivot.y = secondContainer.height / 2;

// Listen for animate update
app.ticker.add((delta) => {
    // rotate the secondContainer!
    // use delta to create frame-independent transform
    secondContainer.rotation -= 0.01 * delta;
});
//////////////////////////////////////////////////////////////////////////////
// detect touches
let mouseX, mouseY;
let pointerDownFlag = false;
let onceDownFlag = true;
let lastMouseX;
onpointermove = function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if ((pointerDownFlag === true && onceDownFlag === false) && mouseX !== lastMouseX) {
        startContainer.visible = !startContainer.visible;
        secondContainer.visible = !secondContainer.visible;
        onceDownFlag = true;
    }
    if (mouseX !== undefined) lastMouseX = mouseX;
};

onpointerdown = function (e) {
    pointerDownFlag = true;
    onceDownFlag = false;
};

onpointerup = function (e) {
    pointerDownFlag = false;
    onceDownFlag = true;
};