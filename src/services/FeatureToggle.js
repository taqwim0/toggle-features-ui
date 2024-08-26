import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

const getFeatureToggles = (token, page) => {
    return axios.get(`${API_URL}/feature-toggles?page=${page}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });
};

const createFeatureToggle = (data, token) => {
    return axios.post(`${API_URL}/feature-toggles/add`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });
};

const updateFeatureToggle = (id, data, token) => {
    return axios.put(`${API_URL}/feature-toggles/${id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });
};

const deleteFeatureToggle = (id, token) => {
    return axios.delete(`${API_URL}/feature-toggles/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
    });
};

export default {
    getFeatureToggles,
    createFeatureToggle,
    updateFeatureToggle,
    deleteFeatureToggle,
};
