const state = {
    todos: []
}
const getters = {
    allTodos: state => state.todos
}
const mutations = {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) =>
        (state.todos = state.todos.filter(todo => todo.id !== id))
}
const actions = {
    async fetchTodos({
        commit
    }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        // console.log(response);
        commit('setTodos', response.data);
    },
    async addTodo({
        commit
    }, title) {
        const response = await axios.post(`https://jsonplaceholder.typicode.com/todos`, {
            title,
            completed: false
        });
        commit('newTodo', response.data);
    },
    async deleteTodo({
        commit
    }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({
        commit
    },count) {
        console.log(count)
        const response = await axios.get(`http://jsonplaceholder.typicode.com/todos?_limit=${count}`);
        commit('setTodos', response.data);
    },

}
export default {
    state,
    getters,
    mutations,
    actions
}