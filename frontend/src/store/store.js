import axios from "axios";
import { API_URL } from "../http";
import AuthService from "../service/AuthService";
import { makeAutoObservable } from "mobx";
import GetCookie from "../hooks/getCookie";

export default class Store {
  isAuth = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(bool) {
    this.isAuth = bool;
  }

  setUser(email) {
    this.email = email;
  }

  async login(email, password) {
    try {
      const res = await AuthService.login(email, password);
      this.setAuth(true);
      this.setUser(res.data.email);
    } catch (e) {
      console.error(e);
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
      const res = await AuthService.logout();
      this.setAuth(false);
      this.setUser();
    } catch (e) {
      console.error(e);
    }
  }

  async checkAuth() {
    try {
      const res = await axios.get(`${API_URL}/etacar`, {
        credentials: true,
      });
      console.log(this.user);
      GetCookie("ursin");
      this.setAuth(true);
      this.setUser(res.data.user);
    } catch (e) {
      console.error(e);
    }
  }
}
