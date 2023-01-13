import { makeAutoObservable } from "mobx";
import $api, { API_URL } from "../http";
import AdminService from "../service/AdminService";

export default class Admin {
  constructor() {
    makeAutoObservable(this);
  }
  async getUsers() {
    try {
      const res = await $api.get(`${API_URL}/admin/all`);
      console.log(res);
    } catch {
      console.error("error Admin");
    }
  }
}
