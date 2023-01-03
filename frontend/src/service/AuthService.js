import $api from "../http";
import RemoveCookie from "../hooks/removeCookie";
import SetCookie from "../hooks/setCookie";

export default class AuthService {
  static async login(email, password) {
    const response = await $api.post("/authentication/login", {
      email,
      password,
    });
    // console.log("123" + response);
    RemoveCookie("usrin");
    SetCookie("usrin", JSON.stringify(response.data));
    // console.log(response.data);
    return response.data;
  }

  static async registration(email, password, name) {
    return $api.post("/authentication/register", { email, password, name });
  }

  static async logout() {
    RemoveCookie("usrin");
  }
}
