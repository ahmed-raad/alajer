import httpService from "./httpService";
import { apiUrl } from "../config.json";

async function register(user) {
    let body = {
      fullname: user.fullname,
      job: user.job,
      account_type: user.account_type,
      email: user.email,
      password: user.password,
      city: user.city,
      phonenumber: user.phonenumber,
    };

    const {data: response} = await httpService.post(apiUrl + "/register", body);
    localStorage.setItem("user-info", JSON.stringify(response));
}

async function login(email, password) {
    let body = {
      email: email,
      password: password
    };

    const {data: response} = await httpService.post(apiUrl + "/login", body);
    localStorage.setItem("user-info", JSON.stringify(response));
}

function logout() {
    localStorage.removeItem("user-info");   
}

function get_current_user() {
    try {
      const userInfo = JSON.parse(localStorage.getItem("user-info"));
      return {
        user: userInfo.user,
        accessToken: userInfo.accessToken
      }
    } catch (ex) {return null}
}

async function user_update(user, token) {
    const headers =  {
      'Authorization': `Bearer ${token}`,
    };
    let {data: response} = await httpService.patch(`${apiUrl}/users/${user.id}`, user, {headers});
    let new_user = {...response}
    delete new_user.password;
    response.token = token;
    response = {accessToken: token, user: new_user};
    localStorage.setItem("user-info", JSON.stringify(response));
}


export default {
  register,
  login,
  logout,
  get_current_user,
  user_update
}