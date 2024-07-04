export default defineEventHandler(async (event) => {

    const { public: { apiBase } } = useRuntimeConfig();
     const token = getCookie(event, 'cookie');
 
    try {
        const token = getCookie(event, 'cookie');
        console.log("der" , token.value);

        return token;

    } catch (error) {
        if (error.statuscode == 401) {
            setCookie(event, 'cookie', '', {
                httpOnly: true,
                secure: true,
                maxAge: new Date(0),
                path: '/'
            })
        }
        return error;
    }

})