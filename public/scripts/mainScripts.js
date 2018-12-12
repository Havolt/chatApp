
function getMessage(msg, delMsg) {
    console.log(msg);
    delMsg();
}

function deleteMessage() {
    document.querySelector('.chatInputTxt'). value = '';
};

function addEvtListners() {
    document.querySelector('.chatInputButton').addEventListener('click', () => {
        getMessage();
    })
    document.querySelector('.chatInputTxt').addEventListener('keydown', (e) => {
        if(e.keyCode == 13) { getMessage(e.target.value, deleteMessage) }
    })
};

(function initApp(){
    addEvtListners();
})()