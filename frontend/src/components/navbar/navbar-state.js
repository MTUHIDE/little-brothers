import { ref } from 'vue'
export const collapsed = ref(false)
export const toggleNavbar = () => (collapsed.value = !collapsed.value)
export const navbarHeight = 50