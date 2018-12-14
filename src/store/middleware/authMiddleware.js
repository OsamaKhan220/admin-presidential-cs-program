import AuthActions from '../actions/authActions';
import axios from 'axios';
import Path from '../../config/path';

class AuthMiddleware {

    static authentication(data) {
        return dispatch => {
            dispatch(AuthActions.authentication(data))
            axios.post(`${Path.AUTHENTICATE}`, {
                userName:data.userName,
                password:data.password,
            })
            .then((response) => {
                console.log("response from server ",response);
                if (!response.data.success) {
                    dispatch(AuthActions.authenticationFailed({errorMessage:response.data.message}));
                }
                else {
                    console.log("else",response.data.userData);
                    
                    dispatch(AuthActions.authenticationSuccessul({success: true, data: response.data.userData, successMessage:response.data.message}));
                }
            })
            .catch((err) => {
                console.log(err);
                dispatch(AuthActions.authenticationFailed({errorMessage:"Something Went Wrong, Please Try Again!"}));
            });
        }
    }   
}

export default AuthMiddleware;