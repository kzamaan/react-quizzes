import axios from 'axios';
import { baseApiOptions, BASE_URL } from './config';

const instance = axios.create({ baseURL: BASE_URL, ...baseApiOptions });

instance.interceptors.request.use(
	(config) => {
		const token = localStorage.getItem('token');
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default instance;
