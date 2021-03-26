export default function (token = "", action) {
    if (action.type === 'addTokenFromSignUp') {
        return action.token
    }
    if (action.type === 'addTokenFromSignIn') {
        return action.token
    }
    if (action.type === 'addTokenFromSignInAdmin') {
        return action.token
    } 
    if (action.type === 'addTokenFromSignInSuperAdmin') {
        return action.token
    }else {
        return token
    }
}