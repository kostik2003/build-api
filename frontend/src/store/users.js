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

  //получение инфы о конкретном юзере
  async reqUniqueUser(userEmail) {
    try {
      const user = await UserService.getUniueUserWithTracking(userEmail);
      return user;
    } catch (e) {
      console.error(e);
    }
  }

  async resInfoWithUniqueUser() {
    try {
      const user = await UserService.getAllInfoUser();
      console.log(user);
      return user;
    } catch (e) {
      console.error(e);
    }
  }
}
