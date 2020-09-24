import {reactive, toRefs} from 'vue'

const state = reactive({
    location: '',
    loading: true,
})

async function fetchUrl(id) {
    let val = await fetch(`https://rickandmortyapi.com/api/location/${id}`).then(response => response.json())
    return val 
}

export default function useLocation(id) {

    const fetchLocation = async () => {
        state.loading = true;
        state.selectedLocation = await fetchUrl(id)
        state.loading = false
    }

    return {
        ...toRefs(state),
        fetchLocation
    }
}