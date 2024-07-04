export default defineEventHandler(async (event) => {

    const { public: { apiBase } } = useRuntimeConfig();
    const token = getCookie(event, 'login_token');
 
    try {
        // const data = await $fetch(`${apiBase}/logout`, {
        //     method: 'GET',
        //     headers: {
        //         'Accept': 'application/json',
        //         'x-api-key': 'sq92748ZrgGqThng5KcAo2Z1fccYY5GrOgBumGYl',
        //         'Authorization': `Bearer ${token}`
        //     }
        // });
          setCookie(event, 'cookie', '', {
            httpOnly: true,
            secure: true,
            maxAge: new Date(0),
            path: '/'
        })
        // location.reload();
        // console.log("me" ,  data);

      

    } catch (error) {
   
        return error;
    }

})