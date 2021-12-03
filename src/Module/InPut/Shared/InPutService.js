import { Http } from "../../../Helper/Http";

const API_ENPOINT = {
    LIST_USER: '/org/user/list',
    LOG_IN: '/auth/login',
    SIGN_UP:'/org/user/create',
    SET_PASS: '/auth/user/set_password'
}
class InputService {
    constructor() {
        if(InputService._instance) {
            return InputService._instance;
        }
        InputService._instance = this;
    }

    login(data) {
        return Http.post(API_ENPOINT.LOG_IN, data);
    }
    signUp(data) {
        return Http.post(API_ENPOINT.SIGN_UP, data)
    }
    setPass(data1) {
        return Http.post(API_ENPOINT.SET_PASS, data1)
    }

}
const instance = new InputService();
export default instance;
