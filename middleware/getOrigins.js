import Widget from '../models/widgetModels.js';

/**
 * Function to set an array of all the origins of my DB
 */
const setOriginsDomain = async() => {
    try{ 
        const  domains = await Widget.distinct('domain');
        return domains

    } catch(err){
        console.log(err)
        return [];
    }
}

/**
 * Function to set the cors middleware options
 */
const corsOptions = async(req, callback ) => {
    try{
        const allowedOrigins = await setOriginsDomain();
        const origin = req.header('Origin');
        if(allowedOrigins){
            allowedOrigins.push('http://127.0.0.1:5173')
            const matchingOrigin = allowedOrigins.find((allowedOrigin) => {
                return origin === allowedOrigin;
            });
            if(matchingOrigin) {
                callback(null, { origin: matchingOrigin, credentials: true });
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    } catch(err){
        console.log(err)
    }

};


export { setOriginsDomain, corsOptions }