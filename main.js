Vue.component('task', {
    template: '<li><slot></slot></li>',

    data() {
        return {
            message: "Hello",
        }
    }
});

new Vue({
    el: '#root',
    
});
