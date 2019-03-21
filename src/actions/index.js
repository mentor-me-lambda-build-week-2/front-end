import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const FETCH_DATA_START = "FETCH_DATA_START";
export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";

export const REGISTER_START = "REGISTER_START";
export const ASK_START = 'ASK_START';
export const DELETE_START = 'DELETE_START';
export const ANSWER_START = 'ANSWER_START';


export const register = creds => dispatch => {
	dispatch({ type: REGISTER_START });
	axios.defaults.withCredentials = true
	// console.log('Creds ', creds);
	return axios
		.post("https://mentorme-backend.now.sh/api/register", creds)
		.then(res => {
			// console.log('Res ', res);
			localStorage.setItem("token", res.data.jwt);
			localStorage.setItem("id", res.data.id );
			localStorage.setItem("firstname", res.data.firstname );
			localStorage.setItem("username", res.data.username );
		})
		.catch( err =>  console.log(err));
};

export const login = creds => dispatch => {
	dispatch({ type: LOGIN_START });
	axios.defaults.withCredentials = true;
	return axios.post("https://mentorme-backend.now.sh/api/login", creds)
		.then(res => {
			localStorage.setItem("token", res.data.jwt);
			localStorage.setItem("id", res.data.id );
			localStorage.setItem("firstname", res.data.firstname );
			localStorage.setItem("username", res.data.username );
		})
		.catch(err => console.log(err));
};

//----------------------------------------------
//QUESTIONS 
//----------------------------------------------


export const getQuests = () => dispatch => {
	dispatch({ type: FETCH_DATA_START });
	axios
		.get("https://mentorme-backend.now.sh/api/questions", {
			headers: { Authorization: localStorage.getItem("token") }
		})
		.then(res => {
			console.log(res);
			dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data });
		})
		.catch(err => {
			console.log(err.response);
			if (err.response.status === 403) {
				localStorage.removeItem("token");
			}
			dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
		});
};

/// Call question with question id, title and body. 
export const askQuest = question  => dispatch => {
	dispatch({ type: ASK_START });
	axios.defaults.withCredentials = true;
	// console.log('Creds ', creds);
	return axios
		.post("https://mentorme-backend.now.sh/api/questions", question)
		.then(res => {
			console.log()
		})
		.catch( err =>  console.log(err));
};


//called with question id 
export const deleteQuest = id_var  => dispatch => {
	dispatch({ type: DELETE_START });
	axios.defaults.withCredentials = true;
	// console.log('Creds ', creds);
	return axios
		.delete(`https://mentorme-backend.now.sh/api/questions/${id_var}`)
		.then(res => {
			console.log()
		})
		.catch( err =>  console.log(err));
};


// takes id and creds
export const editQuest = (id_var, creds)  => dispatch => {
	dispatch({ type: DELETE_START });
	axios.defaults.withCredentials = true;
	// console.log('Creds ', creds);
	return axios
		.put(`https://mentorme-backend.now.sh/api/questions/${id_var}`, creds)
		.then(res => {
			console.log()
		})
		.catch( err =>  console.log(err));
};


//----------------------------------------------------
//ANSWERS BELOW
//----------------------------------------------------


//Called with question id, user_id, title, body. 
export const getAnswer = () => dispatch => {
	dispatch({ type: FETCH_DATA_START });
	axios
		.get("https://mentorme-backend.now.sh/api/answers", {
			headers: { Authorization: localStorage.getItem("token") }
		})
		.then(res => {
			console.log(res);
			dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data });
		})
		.catch(err => {
			console.log(err.response);
			if (err.response.status === 403) {
				localStorage.removeItem("token");
			}
			dispatch({ type: FETCH_DATA_FAILURE, payload: err.response });
		});
};

/// Call question with question id, title and body. 

export const postAnswer = question  => dispatch => {
	dispatch({ type: ANSWER_START });
	axios.defaults.withCredentials = true;
	// console.log('Creds ', creds);
	return axios
		.post("https://mentorme-backend.now.sh/api/answers", question)
		.then(res => {
			console.log()
		})
		.catch( err =>  console.log(err));
};


//called with question id 
export const deleteAnswer = id_var  => dispatch => {
	dispatch({ type: DELETE_START });
	axios.defaults.withCredentials = true;
	// console.log('Creds ', creds);
	return axios
		.delete(`https://mentorme-backend.now.sh/api/answers/${id_var}`)
		.then(res => {
			console.log()
		})
		.catch( err =>  console.log(err));
};


// takes id and creds
export const editAnswer = (id_var, creds)  => dispatch => {
	dispatch({ type: DELETE_START });
	axios.defaults.withCredentials = true;
	// console.log('Creds ', creds);
	return axios
		.put(`https://mentorme-backend.now.sh/api/answers/${id_var}`, creds)
		.then(res => {
			console.log()
		})
		.catch( err =>  console.log(err));
};
