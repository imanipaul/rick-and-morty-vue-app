import {reactive, toRefs} from 'vue'


const state = reactive({
    allCharacters: [],
    loading: true,
    info: null,
    currentPage: 1,
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

    const increasePage = () => {
       if (state.currentPage != state.info.pages) {
           state.currentPage++
       }
    }
    const decreasePage = () => {
       if (state.currentPage != 1) {
           state.currentPage--
       }
    }

    return {
        ...toRefs(state),
        fetchCharacters,
        increasePage,
        decreasePage
    }
}