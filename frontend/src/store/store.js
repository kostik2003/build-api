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
      this.setUser(email);
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
    //axios 404 etaCar
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

//access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ik1heGltLkl2YW5jaGlrQG1haWwucnUiLCJzdWIiOjEsIm5hbWUiOiJNYXgiLCJpYXQiOjE2NzIzNDQ5Mjh9.OqUwf391zHucsRTc8iwRdg-2Kn0qa36ZZjS2YEI2VXA"
