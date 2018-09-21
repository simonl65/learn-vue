window.Event = new Vue();

Vue.component('cd-coupon', {
    methods: {
        onBlur() {
            // Make AJAX call, etc, then emit the 'applied' event...
            Event.$emit('applied');
        }
    },

    template: '<input placeholder="Enter coupon code" @blur="onBlur">',
});


new Vue({
    el: '#root',

    data: {
        couponWasApplied: false,
    },

    created() {
        Event.$on( 'applied', () => console.log('I got it!') );
    }
});
