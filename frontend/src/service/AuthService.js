import $api from "../http";
import RemoveCookie from "../Cookies/removeCookie";
import SetCookie from "../Cookies/setCookie";

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

  static async logout() {
    RemoveCookie("usrin");
  }
}
