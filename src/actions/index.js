import axios from 'axios';
import {
	SUBMIT_FORM,
	FETCH_INFO,
} from "./types";

export const submitForm = userData => {
	const formData = new FormData();

	formData.append('picture', userData.file);
	formData.append('name', userData.name);
	formData.append('phone', userData.phone);
	console.log('posting', formData);

	return (dispatch) => {
		axios({
			url: `user/create`,
			method: 'POST',
			data: formData,
			headers: {
				Accept: 'application/json',
				'Content-Type': 'multipart/form-data'
			}
		})
		.then(response => {
			const newUser = {
				id: response.data.insertId,
				name: userData.name,
				phone: userData.phone,
			}
			dispatch({
				type: SUBMIT_FORM,
				payload: newUser
			});
		}).catch((error) => {
			console.log('post error');
			console.log(error);
		});
	};
};

export const fetchInfo = () => {
	console.log(`fetching`)
	return (dispatch) => {
		axios.get(`user`)
			.then(response => {
				console.log(response);
				dispatch({
					type: FETCH_INFO,
					payload: response
				});
			}).catch((error) => {
				console.log('fetched info error');
				console.log(error);
			});
	};
};