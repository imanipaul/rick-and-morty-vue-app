import {reactive, toRefs} from 'vue'

const state = reactive({
    selectedCharacter: '',
    loading: true,
})

async function fetchUrl(id) {
    let val = await fetch(`https://rickandmortyapi.com/api/character/${id}`).then(response => response.json())
    console.log(val)
    return val 
}

export default function useCharacter(id) {
    console.log("id is", id)
    const fetchCharacter = async () => {
        state.loading = true;
        state.selectedCharacter = await fetchUrl(id)
        console.log('character is', state.selectedCharacter)
        state.loading = false
    }

    return {
        ...toRefs(state),
        fetchCharacter
    }
}