const socket = io();

const chatArr = [];

socket.on('chat message', (msg) => {
    vm.writeMessage(msg);
})



// function getMessage(msg, delMsg) {
//     socket.emit('chat message', msg);
//     delMsg();
// }

function deleteMessage() {
    document.querySelector('.chatInputTxt'). value = '';
};

function addEvtListners() {
    // document.querySelector('.chatInputButton').addEventListener('click', (e) => {
    //     getMessage(e.target.parentElement.children[0].value, deleteMessage)
    // })
    // document.querySelector('.chatInputTxt').addEventListener('keydown', (e) => {
    //     if(e.keyCode == 13) { getMessage(e.target.value, deleteMessage)}
    // })
};

const vm = new Vue({
    el: '#app',
    data: {
        username: '',
        userMessage: '',
        usernameBool: false

    }, 
    methods: {
        setUsername: () => {
            if(vm.username.length > 2) {
                vm.usernameBool = true;
            }
        },
        getMessage: (dataName) => {
            if(vm.userMessage.length > 0) {
                socket.emit('chat message', vm[dataName]);
                vm.userMessage = '';
            }
        },
        writeMessage: (msg) => {
            console.log(msg)
        }
    }
});



(function initApp(){
    addEvtListners();
})()