import $api from "../http";

export default class AdminService {
  static async getUsers() {
    const res = await $api.get("/admin");
    return res;
  }
}
