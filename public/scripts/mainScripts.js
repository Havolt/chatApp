const socket = io();

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
        usernameWarn: '',
        usernameShake: false,
        usernameFinal: '',
        userMessage: '',
        usernameBool: false,
        chatArr : []

    }, 
    methods: {
        setUsername: () => {
            if(vm.username.length > 2) {
                vm.usernameBool = true;
                vm.usernameFinal = vm.username;
            }
            else {
                vm.usernameWarn = '* Please enter a name longer than 3 characters';
                vm.usernameShake = true;
            }
        },
        getMessage: (dataName, evt) => {
            evt.preventDefault();
            if(vm.userMessage.length > 0) {
                const newOb = {
                    msg: vm[dataName],
                    name: vm.usernameFinal,
                    time: new Date()
                }
                socket.emit('chat message', newOb);
                vm.userMessage = '';
            }
        },
        writeMessage: (msg) => {
            vm.chatArr.push(msg);
        }
    }
});



(function initApp(){
    addEvtListners();
})()