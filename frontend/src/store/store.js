import axios from "axios";
import { API_URL } from "../http";
import AuthService from "../service/AuthService";
import { makeAutoObservable } from "mobx";

export default class Store {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(user) {
    this.user = user;
  }

  async login(email, password) {
    try {
      const res = await AuthService.login(email, password);
      // console.log(res); // приходит объект
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.error(e);
    }
  }

  async registration(email, password, name) {
    try {
      const res = await AuthService.registration(email, password, name);
      localStorage.setItem("token", res.data.access_token);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.error(e);
    }
  }

  async logout() {
    try {
      const res = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuth(false);
      this.setUser();
    } catch (e) {
      console.error(e);
    }
  }

  async checkAuth() {
    try {
      const res = await axios.get(`${API_URL}/authentication`, {
        credentials: true,
      });
      const locStor = localStorage.setItem("token", res.data.access_token);
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.error(e);
    }
  }
}
