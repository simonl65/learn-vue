Vue.component('cd-modal', {
    template: `
        <div class="modal is-active">
            <div class="modal-background" @click="$emit('close-modal')"></div>
            <div class="modal-content">
                <div class="box">
                    <slot></slot>
                </div>
            </div>

            <button class="modal-close is-large" @click="$emit('close-modal')" aria-label="close"></button>
        </div>
    `
});


new Vue({
    el: '#root',

    data: {
        showModal: false
    },


});
