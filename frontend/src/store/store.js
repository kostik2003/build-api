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
      await AuthService.login(email, password);
      this.setAuth(true);
      this.setUser(email);
    } catch (e) {
      console.error(e);
    } finally {
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
    try {
      await AuthService.logout();
      this.setAuth(false);
      this.setUser();
    } catch (e) {
      console.error(e);
    }
  }

  async checkAuth() {
    this.setLoading(true);
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
      this.setLoading(false);
    }
  }
}
