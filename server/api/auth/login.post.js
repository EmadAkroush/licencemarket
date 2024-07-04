export default defineEventHandler(async (event) => {
    const body = await readBody(event);
  

   
     
       console.log("body" , body.Number);
    
        setCookie(event, 'cookie', body.Number, {
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: '/'
        })
        // console.log("fold" , data);

    

})