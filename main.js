Vue.component('cd-coupon', {
    methods: {
        onCouponAppliedLOCAL() {
            // Make AJAX call, etc, then emit the 'applied' event...
            this.$emit('applied', { data: 'VALID COUPON' });
        }
    },

    template: '<input placeholder="Enter coupon code" @blur="onCouponAppliedLOCAL">',
});


new Vue({
    el: '#root',

    methods: {
        onCouponApplied(){
            alert('Coupon was applied!');
        }
    }
});
