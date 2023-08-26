// Toggle form create new Channel
const btnToggleCreate = document.querySelector('#btn-toggle-create');
const channelForm = document.querySelector('#channel-form');

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
const inputChannelColor = document.querySelector('#channel-color');
const inputUpdateChannelColor = document.querySelector('#update-channel-color');
const headerChannel = document.querySelector('.header-channel');
const channelColor = [ 'channel-red',
                        'channel-cyan',
                        'channel-green',
                        'channel-yellow',
                        'channel-grey',
                        'channel-black',
                        'channel-white',
                        'channel-blue',
                        'channel-orange',
                        'channel-purple',
                        'channel-eldenring'
                    ];

inputChannelColor.addEventListener('input', changeColor);
inputUpdateChannelColor && inputUpdateChannelColor.addEventListener('input', changeColor);

function changeColor(){
    let color = this.value.toLowerCase();
    headerChannel.classList.remove(...channelColor);
    headerChannel.classList.add(`channel-${color}`);
}

// toggle login alert message
const btnLogin = document.querySelector('#btn-login');
const loginAlert = document.querySelector('#login-alert');

btnLogin && btnLogin.addEventListener('click', handleLogin);

function handleLogin(e){
    e.preventDefault();
    loginAlert.classList.toggle('d-none');
}

// toggle signup alert/valid messages
const formSignup = document.querySelector('#form-signup');
const inputsSignup = document.querySelectorAll('#form-signup input');
let isFormSignupValid = false

formSignup && formSignup.addEventListener('submit', handleSignup);

function handleSignup(e){
    e.preventDefault();
    isFormSignupValid = !isFormSignupValid;

    if(isFormSignupValid){
        inputsSignup.forEach(input => {
            input.classList.remove('is-invalid');
            input.classList.add('is-valid');
        });
    } else {
        inputsSignup.forEach(input => {
            input.classList.remove('is-valid');
            input.classList.add('is-invalid');
        });
    }
}

// Modal Post confirm delete
const modalDelete = document.querySelector('#deleteModal');
const modalBtnConfirm = document.querySelector('#modal-btn-confirm');

modalBtnConfirm && modalBtnConfirm.addEventListener('click', closeModalConfirmDelete);

function closeModalConfirmDelete(){
    let modal = bootstrap.Modal.getInstance(modalDelete);
    modal.hide();
}

// Edit Post functions
const editBtn = document.querySelector('#edit-btn');
const editBtnSubmit = document.querySelector('#edit-btn-submit');
const editBtnClose = document.querySelector('#edit-btn-close');
const editText = document.querySelector('#edit-text');
const editForm = document.querySelector('#edit-form');

editBtn && editBtn.addEventListener('click', toggleEdit);
editBtnSubmit && editBtnSubmit.addEventListener('click', toggleEdit);
editBtnClose && editBtnClose.addEventListener('click', toggleEdit);

function toggleEdit(e){
    e.preventDefault();
    editText.classList.toggle('d-none');
    editForm.classList.toggle('d-none');
}

// Modal confirm delete channel
const modalChannelDelete = document.querySelector('#deleteChannelModal');
const modalChannelBtnConfirm = document.querySelector('#modalChannel-btn-confirm');

modalChannelBtnConfirm && modalChannelBtnConfirm.addEventListener('click', closeModalChannelConfirmDelete);

function closeModalChannelConfirmDelete(){
    let modal = bootstrap.Modal.getInstance(modalChannelDelete);
    modal.hide();
}

// Edit Channel function
const editChannelBtn = document.querySelector('#editChannel-btn');
const editchannelBtnClose = document.querySelector('#editchannel-btn-close');
const channelUpdateForm = document.querySelector('#channel-updateform');
const channelTitle = document.querySelector('.header-channel h2');

editChannelBtn && editChannelBtn.addEventListener('click', toggleEditChannel);
editchannelBtnClose && editchannelBtnClose.addEventListener('click', toggleEditChannel);
channelUpdateForm && channelUpdateForm.addEventListener('submit', toggleEditChannel);

function toggleEditChannel(e){
    e.preventDefault();
    channelTitle.classList.toggle('d-none');
    channelUpdateForm.classList.toggle('d-none');
}

