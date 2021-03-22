export default function (token = "", action) {
    if (action.type === 'addTokenFromSignUp') {
        return action.token
    }
    if (action.type === 'addTokenFromSignIn') {
        console.log("Token from reducer", action.token)
        return action.token
    } else {
        return token
    }
}