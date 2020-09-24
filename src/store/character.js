import {reactive, toRefs} from 'vue'

const state = reactive({
    selectedCharacter: '',
    loading: true,
})

async function fetchUrl(id) {
    console.log('loading? 3 ', state.loading)
    let val = await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.json())
    console.log('loading? 4 ', state.loading)
    return val 
}

export default function useCharacter(id) {

    const fetchCharacter = async () => {
        console.log('loading? 1 ', state.loading)
        state.loading = true;
        state.selectedCharacter = await fetchUrl(id)
        state.loading = false
        console.log('loading? 2 ', state.loading)
    }

    return {
        ...toRefs(state),
        fetchCharacter
    }
}