import {
    REGISTER,
    LOGIN,
    GET_SCENARIO,
    API_BASE_URL,
    GET_OVERVIEW,
    FIMATIC_ENGINE,
    RECOMMEND
    // ACCESS_TOKEN
} from "../_constants";

export const Services = {
    login,
    // register,
    getOverview,
    getScenario,
    recommend
};

function buildUrl(url, urlObject) {
    url = API_BASE_URL + url;
    if (urlObject.params != undefined) {
        let paramArr = Object.entries(urlObject.params);
        for (let i = 0; i < paramArr.length; i++) {
            let param = paramArr[i];
            if (param[1] === "") {

            } else if (i === paramArr.length - 1) {
                url = url + "?" + param[0] + "=" + param[1];
            } else {
                url = url + "&" + param[0] + "=" + param[1];
            }
        }
    }
    return url;
}

const request = (options) => {
    const headers = new Headers({
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
    });

    // if (localStorage.getItem(ACCESS_TOKEN)){
    //     headers.append('Authorization','Bearer '+ localStorage.getItem(ACCESS_TOKEN))
    // }
    const defaults = {
        // mode : 'no-cors',
        headers:headers};
    options = Object.assign({},defaults,options);
    console.log(options.url);
    return fetch(options.url,options).then(handleResponse);
};

function handleResponse(response){
    console.log(response);
    return response.text().then(text =>{
        const data = text && JSON.parse(text);
        if(response.ok){
            return data;
        } else {
            return Promise.reject(data);
        }
    })
}

function login(loginRequest){
    console.log(loginRequest);
    return request(
        {
            url: API_BASE_URL + LOGIN,
            method: 'POST',
            body: JSON.stringify(loginRequest)
        }
    );
}

function logout(){
    localStorage.removeItem("user");
    // localStorage.removeItem(ACCESS_TOKEN);
}

function getScenario(getScenarioRequest){
    let final_url = buildUrl(GET_SCENARIO,getScenarioRequest);
    return request({
        url:final_url,
        method:'POST',
        body:JSON.stringify(getScenarioRequest)
    })
}

function register(registerRequest){
    return request({
        url: API_BASE_URL + REGISTER,
        method: 'POST',
        body: JSON.stringify(registerRequest)
    })
}

function getOverview(){
    return request({
        url:API_BASE_URL + GET_OVERVIEW,
        method:'GET'
    })
}

function recommend(recommendRequest){
    return request({
        url: FIMATIC_ENGINE + RECOMMEND,
        method: 'POST',
        body: JSON.stringify(recommendRequest)
    })
}