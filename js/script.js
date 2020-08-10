//created by Vitor Sammarco - https://github.com/vitorsammarco
let DarkMode;
let darkCache;
let minCss = `
<style>
#dark-mode-btn{
    outline: none;
    border: none;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    background-color: #2c2c2c;
    box-shadow: 0 4px 8px -2px black;
    position: fixed;
    left: 10px;
    bottom: 15px;
    cursor: pointer;
    transition: all 0.3s;
    z-index:10;
    }
    #dark-mode-btn:hover{
    background-color: #1a1a1a;
    box-shadow: 0 0px 12px -2px #1a1a1a;
    }
    #dark-mode-btn.powered{
    background-color: #1a1a1a;
    }
    #dark-mode-btn.powered svg{fill: #ffebcd;
    filter: drop-shadow(0px 0px 20px #ffebcd);}
    .dark-mode-icon{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%) translateX(-50%);
    width: 26px;
    height: 26px;
    fill: #b4b4b4;
    }
</style>`;

function initDarkMode() {
    let head = document.querySelector('head')
    let body = document.querySelector('body');

    //Creating container for style 🡓
    body.insertAdjacentHTML("afterbegin", "<div id='dark-mode-styles'></div>");

    //Inserting in Head style of button 🡓
    head.insertAdjacentHTML("beforeend", minCss);

    //Inserting button 🡓
    body.insertAdjacentHTML("afterbegin", `<button type="button" id="dark-mode-btn">
        <svg class="dark-mode-icon" viewBox="-12 0 448 448.04455">
            <path d="m224.023438 448.03125c85.714843.902344 164.011718-48.488281 200.117187-126.230469-22.722656 9.914063-47.332031 14.769531-72.117187 14.230469-97.15625-.109375-175.890626-78.84375-176-176 .972656-65.71875 37.234374-125.832031 94.910156-157.351562-15.554688-1.980469-31.230469-2.867188-46.910156-2.648438-123.714844 0-224.0000005 100.289062-224.0000005 224 0 123.714844 100.2851565 224 224.0000005 224zm0 0" />
        </svg></button>`);

    let btnDark = document.getElementById('dark-mode-btn');
    btnDark.addEventListener('click', classToggle);
    load();
}

function classToggle() {
    this.classList.toggle('powered');
    dark()
}

function dark() {
    let containerDarkStyle = document.querySelector('#dark-mode-styles')
    let btnDark = document.getElementById('dark-mode-btn');

    //insert your custom css inside the element below (you may need to use !important)
    let darkStyle = `
        <style>
            body{
                background-color: black;
                color: white;
            }

        </style>
        `;

    if (btnDark.classList.contains('powered')) {
        containerDarkStyle.innerHTML = darkStyle;
        darkCache = 'on';
        //Save in Cache
        localStorage.setItem("DarkMode", darkCache);
    } else {
        containerDarkStyle.innerHTML = '';
        darkCache = 'off';
        //Save in Cache
        localStorage.setItem("DarkMode", darkCache)
    }
}

function load() {
    let btnDark = document.getElementById('dark-mode-btn');
    let DarkMode = localStorage.getItem("DarkMode");
    if (DarkMode == "on") { btnDark.classList.add("powered") }
    dark();
}

initDarkMode();