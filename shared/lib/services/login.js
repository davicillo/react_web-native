

const BASE_URL = 'baseUrl';

export const login = async (url = `${BASE_URL}/login`) => {
    var params = {
        method: 'post',
    }
    const resul = await getResource(url, params);
    return resul;
};

export const logout = async (url = `${BASE_URL}/logout`) => {
    var params = {
        method: 'post',
    }
    const resul = await getResource(url, params);
    return resul;
};

const getResource = async (url, params) => {
    try{
        //const response = await fetch(url, params);
        //const resource = await response.json();
        var resource = {returnCode: 0, returnMessage: ''};
        if(url.endsWith('login')){
            resource.user = {user_name: 'david'}
        }
        else{
            resource.user = null
        }
        console.log(resource)
        return resource;
    }
    catch(error){
        console.error(error)
    }
    
  };