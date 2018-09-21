Vue.component('cdmodal', {

    template: `
    <div class="modal is-active">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
            <p class="modal-card-title">
                <slot name="header"></slot>
            </p>
            <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
                <slot>
                    <p class="has-text-danger has-text-centered">** OOPS! YOU NEED SOME CONTENT FOR THIS MODAL **</p>
                </slot>
            </section>
            <footer class="modal-card-foot">
                <slot name="footer">
                    <button class="button">Cancel</button>
                </slot>
            </footer>
        </div>
    </div>
    `
})

new Vue({
    el: '#root',
});
