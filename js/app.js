const btnToggleCreate = document.getElementById('btn-toggle-create');
const channelForm = document.getElementById('channel-form');

let toggleCreate = false;
btnToggleCreate.addEventListener('click', toggleChannelForm);

function toggleChannelForm(){
    toggleCreate = !toggleCreate;

    if(toggleCreate){
        channelForm.classList.remove('d-none');
        btnToggleCreate.classList.add('activate');
        btnToggleCreate.setAttribute('title', 'réduire le formulaire');
    } else {
        channelForm.classList.add('d-none');
        btnToggleCreate.classList.remove('activate');
        btnToggleCreate.setAttribute('title', 'créer un canal');
    }
}

const inputChannelColor = document.getElementById("channel-color");
const headerMain = document.querySelector("main header");

inputChannelColor.addEventListener("input", changeColor);

function changeColor(e){
    let color = e.target.value.toLowerCase();
    headerMain.className = `header-channel channel-${color}`;
}

const btnLogin = document.getElementById('btn-login');
const loginAlert = document.getElementById('login-alert');

btnLogin.addEventListener("click", handleLogin);

function handleLogin(e){
    e.preventDefault();
    loginAlert.classList.toggle('d-none');
}