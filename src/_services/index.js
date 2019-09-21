import {
    REGISTER,
    LOGIN,
    GET_AVATAR,
    GET_SCENARIO,
    API_BASE_URL,
    // ACCESS_TOKEN
} from "../_constants";

export const Services = {
    login,
    // register,
    // getAvatar,
    getScenario
};

function buildUrl(url, urlObject) {
    url = API_BASE_URL + url;
    if (urlObject.params != null) {
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
        'Content-Type': 'application/json'
    });

    // if (localStorage.getItem(ACCESS_TOKEN)){
    //     headers.append('Authorization','Bearer '+ localStorage.getItem(ACCESS_TOKEN))
    // }
    const defaults = {headers:headers};
    options = Object.assign({},defaults,options);
    return fetch(options.url,options).then(handleResponse);
};

function handleResponse(response){
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
        method:'GET'
    })
}

function register(registerRequest){
    return request({
        url: API_BASE_URL + REGISTER,
        method: 'POST',
        body: JSON.stringify(registerRequest)
    })
}
