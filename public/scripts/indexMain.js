

function initApp(){
    console.log('here');
}

const vm = new Vue({
    el: '#app',
    data: {
        userMessage: '',
        userName: 'greg'
    },
    methods: {
        checkMessage: function() {
            if(this.userMessage.length > 0) {
                console.log(this.userMessage)
                const thisMessage = {};
                thisMessage.txt = vm.userMessage;
                thisMessage.user = vm.userName;
                thisMessage.time = new Date().getTime();
                
                vm.userMessage = '';
                this.sendMessage(thisMessage);
            } 
        },
        sendMessage: function (message) {
            console.log(message);
        }
    },
    computed: {
    }

})

window.onload = initApp;