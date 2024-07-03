export default defineNuxtPlugin(async (nuxtApp) => {
    const { authUser } = useAuth();
    const cookie = useCookie('cookie')
    authUser.value = cookie

  
})