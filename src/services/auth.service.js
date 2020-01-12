import axios from 'axios';
import qs from 'qs';
import constants from '../constants';

class AuthService {
    login(data) {
        const url = `${constants.BASE_URL}login`;
        return axios({
            url,
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic Tk9STUE6Tk9STUExMjM='
            },
            data: qs.stringify({
                username: data.username,
                password: data.password,
                grant_type: 'password'
            })
        })
            .then(response => {
                console.log('LOGIN ___', response);
                axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.data.accessToken;
                return response;
            })
            .catch(err => {
                return err.response;
                // console.log(err);
            })
    }
}

export default AuthService;