import $api, { API_URL } from "../http";
import RemoveCookie from "../hooks/removeCookie";
import SetCookie from "../hooks/setCookie";
import axios from "axios";

export default class AuthService {
  static async login(email, password) {
    const response = await $api.post("/authentication/login", {
      email,
      password,
    });
    RemoveCookie("usrin");
    SetCookie("usrin", JSON.stringify(response.data));
    return response.data;
  }

  static async registration(email, password, name) {
    return $api.post("/authentication/register", { email, password, name });
  }

  //понять в чем отличие

  // static async checkAuth() {
  //   return $api.get("/authentication/token", { credentials: true });
  // }

  // static async checkAuth() {
  //   return axios.get(`${API_URL}/authentication/token`, { credentials: true });
  // }

  static async logout() {
    RemoveCookie("usrin");
  }
}
