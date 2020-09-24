import {reactive, toRefs} from 'vue'

const state = reactive({
    selectedCharacter: '',
    loading: true,
})

async function fetchUrl(id) {
    let val = await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.json())
    return val 
}

export default function useCharacter(id) {

    const fetchCharacter = async () => {
        state.loading = true;
        state.selectedCharacter = await fetchUrl(id)
        state.loading = false
    }

    return {
        ...toRefs(state),
        fetchCharacter
    }
}