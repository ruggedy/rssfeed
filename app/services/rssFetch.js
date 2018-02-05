
const BASE_URL = "https://api.rss2json.com/v1/api.json?rss_url=";


export default (url) => fetch(`${BASE_URL}${url}`)
    .then(res => {
        if(res.status >= 400 && res.status <= 511){
            throw(res.json())
        }

        return res.json()
    })
