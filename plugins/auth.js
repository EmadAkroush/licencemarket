export default defineNuxtPlugin(async (nuxtApp) => {
    const { authUser } = useAuth();
    // const cookie = useCookie('cookie')

    try {
        const token = await $fetch('/api/auth/me', {
        })
        console.log("token" , token);

        authUser.value = token;
    } catch (error) {
        authUser.value = null;
    }
  
})