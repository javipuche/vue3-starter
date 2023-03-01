import axios from '@/api/clients/default'
import { useAxios } from '@vueuse/integrations/useAxios'

export default () => {
  return useAxios(
    'https://dummyjson.com/products/',
    { method: 'get' },
    { immediate: false },
    axios
  )
}
