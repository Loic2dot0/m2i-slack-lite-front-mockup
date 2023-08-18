const btnToggleCreate = document.getElementById('btn-toggle-create');
const channelForm = document.getElementById('channel-form');

let toggleCreate = false;
btnToggleCreate.addEventListener('click', toggleChannelForm);

function toggleChannelForm(){
    toggleCreate = !toggleCreate;

    if(toggleCreate){
        channelForm.classList.remove('d-none');
    } else {
        channelForm.classList.add('d-none');
    }
}