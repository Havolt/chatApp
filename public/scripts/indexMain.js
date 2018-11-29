

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
            fetch('/getMessage')
                .then((res) => {
                    if(res.status !== 200) {
                        console.log(`There was a problem: ${res.statusText}`);
                        return;
                    } else {
                        res.json().then((data) => {
                            console.log(data);
                        })
                    }
                })
        }
    },
    computed: {
    }

})

window.onload = initApp;