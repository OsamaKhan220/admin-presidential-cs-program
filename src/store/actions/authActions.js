class AuthActions {

    static AUTHENTICATION = "AUTHENTICATION";
    static AUTHENTICATION_SUCCESSFUL = "AUTHENTICATION_SUCCESSFUL";
    static AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";


    
    static  authentication(data){
        return {
            type : this.AUTHENTICATION,
            data : data
        }
    }
    static authenticationSuccessul(data){
        return {
            type : this.AUTHENTICATION_SUCCESSFUL,
            data: data
        }
    }
    static authenticationFailed(data){
        return {
            type : this.AUTHENTICATION_FAILED ,
            data: data
        }
    }

}

export default AuthActions;