// Toggle form create new Channel
const btnToggleCreate = document.getElementById('btn-toggle-create');
const channelForm = document.getElementById('channel-form');

let toggleCreate = false;
btnToggleCreate.addEventListener('click', toggleChannelForm);

function toggleChannelForm(){
    toggleCreate = !toggleCreate;

    if(toggleCreate){
        btnToggleCreate.classList.add('activate');
        btnToggleCreate.setAttribute('title', 'réduire le formulaire');
    } else {
        btnToggleCreate.classList.remove('activate');
        btnToggleCreate.setAttribute('title', 'créer un canal');
    }
}

// Update channel color
const inputChannelColor = document.getElementById("channel-color");
const headerMain = document.querySelector("main header");

inputChannelColor.addEventListener("input", changeColor);

function changeColor(e){
    let color = e.target.value.toLowerCase();
    headerMain.className = `header-channel channel-${color}`;
}

// toggle login alert message
const btnLogin = document.getElementById('btn-login');
const loginAlert = document.getElementById('login-alert');

btnLogin && btnLogin.addEventListener("click", handleLogin);

function handleLogin(e){
    e.preventDefault();
    loginAlert.classList.toggle('d-none');
}

// toggle signup alert/valid messages
const formSignup = document.getElementById("form-signup");
const inputsSignup = document.querySelectorAll("#form-signup input");
let isFormSignupValid = false

formSignup && formSignup.addEventListener("submit", handleSignup);

function handleSignup(e){
    e.preventDefault();
    isFormSignupValid = !isFormSignupValid;

    if(isFormSignupValid){
        inputsSignup.forEach(input => {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
        });
    } else {
        inputsSignup.forEach(input => {
            input.classList.remove("is-valid");
            input.classList.add("is-invalid");
        });
    }
}

// Modal confirm delete
const modalDelete = document.getElementById("deleteModal");
const modalBtnConfirm = document.getElementById("modal-btn-confirm");

modalBtnConfirm && modalBtnConfirm.addEventListener('click', closeModalConfirmDelete);

function closeModalConfirmDelete(){
    let modal = bootstrap.Modal.getInstance(modalDelete);
    modal.hide();
}

// Edit functions
const editBtn = document.getElementById("edit-btn");
const editBtnSubmit = document.getElementById("edit-btn-submit");
const editBtnClose = document.getElementById("edit-btn-close");
const editText = document.getElementById("edit-text");
const editForm = document.getElementById("edit-form");

editBtn && editBtn.addEventListener('click', toggleEdit);
editBtnSubmit && editBtnSubmit.addEventListener('click', toggleEdit);
editBtnClose && editBtnClose.addEventListener('click', toggleEdit);

function toggleEdit(e){
    e.preventDefault();
    editText.classList.toggle("d-none");
    editForm.classList.toggle("d-none");
}