import axios from 'axios';
import {
	SUBMIT_FORM,
	FETCH_INFO,
} from "./types";
var querystring = require('querystring');

// const API_URL = 'https://qsf6mshp2m.execute-api.us-west-2.amazonaws.com/dev';
const API_URL = 'http://localhost:1337';
const BUCKET_URL = 'https://s3-us-west-2.amazonaws.com/tdspictures';

export const submitForm = userData => {
	const formData = new FormData();

	const { name, phone } = userData;

	return async dispatch => {
		try {
			const uploadData = {
				url: `${API_URL}/upload`,
				method: 'POST',
				crossDomain: true,
				data: {
					base64String: userData.base64String
				}
			};

			const upload = await axios(uploadData);
			console.log(upload);
			const picture = `${BUCKET_URL}/${upload.data.original}`;
			const thumbnail = `${BUCKET_URL}/${upload.data.thumb}`;

			const postQueryString = querystring.stringify({
				name,
				phone,
				picture,
				thumbnail,
			})

			const newUserData = await axios.post(`${API_URL}/user`, postQueryString);
			console.log(newUserData);
			const newUser = {
				id: newUserData.data.id,
				name: userData.name,
				phone: userData.phone,
				picture,
				thumbnail,
			};

			dispatch({
				type: SUBMIT_FORM,
				payload: newUser
			});
		} catch (error){
			console.log('post error');
			console.log(error);
		}
	};
};

export const fetchInfo = () => {
	console.log(`fetching`)
	return (dispatch) => {
		axios.get(`${API_URL}/user`)
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