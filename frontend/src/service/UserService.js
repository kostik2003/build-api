import $api from "../http";

export default class UserService {
  //создание нового поста
  static async createReport(
    discriptionTrack,
    nameProject,
    nextDayDiscription,
    calendare,
    formFields
  ) {
    return $api.post("/tracking/newpost", {
      discriptionTrack,
      nameProject,
      nextDayDiscription,
      calendare,
      formFields,
    });
  }

  //получение всех постов для авторизованного юзера
  static async getAllTracking() {
    return $api.get("/tracking/posts");
  }

  //удаление трэка по id (только для авторизованного юзера)
  static async deleteTracking(id) {
    const req = $api.post("/tracking/delete", { id });
    return req;
  }

  //получение всех пользователе
  static async getAllUsersWithTracking() {
    const asdf = $api.get("/project/users");
    return asdf;
  }

  //просмотр информации о конкретном пользователе
  static async getUniueUserWithTracking(userEmail) {
    return $api.post("/project/user/:email", { userEmail });
  }

  //косяк -- летит запрос на :email а не на мыло юзера
  static async getAllInfoUser() {
    return $api.get("/project/user/:");
  }
}
