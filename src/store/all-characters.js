import {reactive, toRefs} from 'vue'


const state = reactive({
    allCharacters: [],
    loading: true,
    info: null
})


async function fetchAllUrl(page) {
    let val = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`).then(response => response.json())
    return val 
}

export default function useCharacters() {
 
    const fetchCharacters = async (page) => {
        state.loading = true;
        let {info, results} = await fetchAllUrl(page)
        state.info = info
        state.allCharacters = results
        console.log('characters are', state.allCharacters)
        state.loading = false

        console.log("info is", info)
        console.log("results is", results)
    }

    return {
        ...toRefs(state),
        fetchCharacters
    }
}