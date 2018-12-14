import AuthActions from '../actions/authActions';

function authReducer(state = {
    user: null,
    isError: false,
    isLoading: false,
    errorMessage: false,
    userId: null,
    isLoggedIn:false,
    successMessage: null,
    authToken: null
}, action) {
    switch (action.type) {
        
        case AuthActions.AUTHENTICATION:
            return {
                ...state,
                errorMessage:null,
                successMessage:null,
                userId: action.data.userId,
                isLoading : true,
                isLoggedIn:false,
                authToken : null
            };
        case AuthActions.AUTHENTICATION_SUCCESSFUL:
            return {
                ...state,
                isError:false,
                isLoading : false,
                authToken:action.data.data.databaseToken,
                user: action.data.data,
                isLoggedIn:true,
                errorMessage:null,
                successMessage: action.data.successMessage,
            };
        case AuthActions.AUTHENTICATION_FAILED:
            return {
                ...state,
                errorMessage: action.data.errorMessage,
                successMessage:null,
                isError: true,
                isLoading : false,
                isLoggedIn:false
            };
        default:
            return state;
    }
}
export default authReducer;