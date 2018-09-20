Vue.component('cd-message', {
    props: ['title', 'body'],

    template: `
    <div>
        <article class="message">
            <div class="message-header">
                <p>{{ title }}</p>
                <button @click="cd-close-message" class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>
    </div>
    `,
});


new Vue({
    el: '#root',
});
