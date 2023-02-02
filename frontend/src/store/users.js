import { makeAutoObservable } from "mobx";
import $api, { API_URL } from "../http";
import UserService from "../service/UserService";

export default class User {
  constructor() {
    makeAutoObservable(this);
  }
  //получение всех пользователей
  async getUsers() {
    try {
      const res = await UserService.getAllUsersWithTracking(
        `${API_URL}/project/users`
      );
      return res.data;
    } catch (e) {
      console.error(e);
    }
  }
}
