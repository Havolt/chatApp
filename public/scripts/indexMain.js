

function initApp(){
    console.log('here');
}

const vm = new Vue({
    el: '#app',
    data: {
        test: 'hi-ho'
    }
})

window.onload = initApp;