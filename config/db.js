const PROD = "mongodb+srv://jonathan:1246583dv7@cluster0.5ueib.mongodb.net/az-questions-app?retryWrites=true&w=majority"
const DEV = "mongodb+srv://jonathan:1246583dv7@cluster0.5ueib.mongodb.net/az-questions-app?retryWrites=true&w=majority"

if(process.env.NODE_ENV == "production"){
    /*
        DATA-BASE (PROD)
    */
    module.exports = {mongoURI: PROD}
}else{
    /*
        DATA-BASE (DEV)
    */
    module.exports = {mongoURI: DEV}
}