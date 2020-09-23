import {reactive, toRefs} from 'vue'

const url = 'https://jsonplaceholder.typicode.com/todos'

const state = reactive({
    todos: [],
    loading: true,
    selectedTodo: null
})

async function fetchUrl(url) {
    let val = await fetch(url).then(response => response.json())
    console.log(val)
    return val 
}

export default function useTodos() {
    const fetchTodos = async () => {
        state.loading = true;
        state.todos = await fetchUrl(url)
        console.log('todos is', state.todos)
        state.loading = false
    }

    return {
        ...toRefs(state),
        fetchTodos
    }
}