

function initApp(){
    console.log('here');
}

const vm = new Vue({
    el: '#app',
    data: {
        userMessage: ''
    },
    methods: {
        checkMessage: function() {
            if(this.userMessage.length > 0) {
                console.log(this.userMessage)
                const thisMessage = this.userMessage;
                vm.userMessage = '';
            } 
        }
    },
    computed: {
    }

})

window.onload = initApp;