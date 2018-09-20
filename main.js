Vue.component('cd-message', {
    props: ['title'],

    data() {
        return {
            isVisible: true,
        }
    },

    template: `
    <article class="message" v-show="isVisible">
        <div class="message-header">
            <p>{{ title }}</p>
            <button @click="cdCloseMessage" class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            <slot></slot>
        </div>
    </article>
    `,

    methods: {
        cdCloseMessage() {
            this.isVisible = false;
        }
    }
});


new Vue({
    el: '#root',
});
