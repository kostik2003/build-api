import $api from "../http";
import GetCookie from "../hooks/getCookie";
import RemoveCookie from "../hooks/removeCookie";
import SetCookie from "../hooks/setCookie";

export default class AuthService {
  static async login(email, password) {
    const response = await $api.post("/authentication/login", {
      email,
      password,
    });
    RemoveCookie("usrin");
    SetCookie("usrin", JSON.stringify(response));
    console.log("11" + response);
    return response;
  }

  static async registration(email, password, name) {
    return $api.post("/authentication/register", { email, password, name });
  }

  static async logout() {
    return $api.post("/authentication/logout");
  }
}
