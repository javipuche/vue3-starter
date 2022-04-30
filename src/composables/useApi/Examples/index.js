import axios from '@/api/clients/default'
import useAxios from '@/composables/useAxios'
import { reactive, toRefs } from 'vue'

export default () => {
    const state = reactive({
        response: null,
        data: null,
        error: null,
        isLoading: false,
        isFinished: false
    })

    const fetchData = async () => {
        const { response, data, error, isLoading, isFinished } = await useAxios('https://dummyjson.com/products/', { method: 'get' }, axios)

        state.response = response
        state.data = data
        state.error = error
        state.isLoading = isLoading
        state.isFinished = isFinished
    }

    return {
        ...toRefs(state),
        fetchData
    }
}
