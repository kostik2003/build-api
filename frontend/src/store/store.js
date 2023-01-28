import $api, { API_URL } from "../http";
import AuthService from "../service/AuthService";
import { makeAutoObservable } from "mobx";
import GetCookie from "../Cookies/getCookie";

export default class Store {
  isAuth = false;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(bool) {
    this.isLoading = bool;
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(email) {
    this.email = email;
  }

  async login(email, password) {
    try {
      this.setLoading(true);
      await AuthService.login(email, password);
      this.setAuth(true);
      this.setUser(email);
    } catch (e) {
      alert("Вы ввели неверный пароль или email");
    } finally {
      this.setLoading(false);
    }
  }

  async registration(email, password, name) {
    try {
      const res = await AuthService.registration(email, password, name);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    this.setLoading(true);
    try {
      await AuthService.logout();
      this.setAuth(false);
      this.setUser();
    } catch (e) {
      console.log(e);
    } finally {
      this.setLoading(false);
    }
  }

  async checkAuth() {
    this.setLoading(true);
    console.log("trueAuth");
    try {
      GetCookie("usrin");
      const res = await $api.get(`${API_URL}/authentication/token`, {
        credentials: true,
      });
      this.setAuth(true);
      this.setUser(res.data.expEmail);
    } catch (e) {
      console.error(e);
    } finally {
      console.log("falseAuth");
      this.setLoading(false);
    }
  }
}
