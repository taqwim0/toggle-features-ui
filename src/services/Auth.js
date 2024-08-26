import axios from 'axios';

const API_URL = "http://localhost:8080/";

class AuthService {
    login(username, password) {
        return axios.post(API_URL + "api/login", {
            username,
            password
        }).then(response => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    logout() {
        localStorage.removeItem("user");
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem("user"));
    }
}

export default new AuthService();
