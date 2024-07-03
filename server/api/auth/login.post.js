export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { public: { apiBase } } = useRuntimeConfig();

   
     

    
        setCookie(event, 'login_token', body, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/'
        })
        // console.log("fold" , data);

    

})