Vue.component('task-list', {
    template: `
    <div>
        <task-item v-for="task in tasks" :key="task.id">
            <input :id="'task_' + task.id" type="checkbox" v-model="task.completed">
            <label :for="'task_' + task.id">{{ task.description }}</label>
        </task-item>
    </div>
    `,

    data() {
        return {
            tasks: [
                { id: 1, description: "Do something Mutley!", completed: true },
                { id: 2, description: "Catch that pidgeon", completed: false },
                { id: 3, description: "Penelope Pitstop", completed: true },
                { id: 4, description: "Dick Dastardly", completed: false },
            ]
        }
    }
});


Vue.component('task-item', {
    template: '<li class="unstyled-list"><slot></slot></li>',
});


new Vue({
    el: '#root',
});
