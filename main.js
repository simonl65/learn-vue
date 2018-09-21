Vue.component('cd-coupon', {
    methods: {
        onBlur() {
            // Make AJAX call, etc, then emit the 'applied' event...
            this.$emit('applied', { status: 200, data: 'valid coupon' });
        }
    },

    template: '<input placeholder="Enter coupon code" @blur="onBlur">',
});


new Vue({
    el: '#root',

    data: {
        couponWasApplied: false,
    },

    methods: {
        onCouponApplied() {
            this.couponWasApplied = true;
            console.log('couponWasApplied:', this.couponWasApplied);
        }
    }
});
