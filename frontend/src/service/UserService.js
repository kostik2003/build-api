import $api from "../http";
import SetCookie from "../hooks/setCookie";

export default class UserService {
  static fetchUsers() {
    return $api.get("/user");
  }

  static async createReport(
    gitSourse,
    discription,
    target,
    nextDayDiscription,
    workTime,
    reworked,
    calendare
  ) {
    return $api.post("/tracking/newpost", {
      gitSourse,
      discription,
      target,
      nextDayDiscription,
      workTime,
      reworked,
      calendare,
    });
  }
}
