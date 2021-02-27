import React from 'react';
import { toast } from 'react-toastify';

function errorResponseHandler(error) {
	if (error) {
		let message;
		if (error.response) {
			if (error.response.status === 500) message = 'Something went wrong';
			else message = error.response.message;
			toast(message);
			console.log(message);
			return Promise.reject(error);
		}
	}
}

export default errorResponseHandler;
