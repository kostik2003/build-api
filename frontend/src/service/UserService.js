import $api from "../http";

export default class UserService {
  static fetchUsers() {
    return $api.get("/user");
  }

  static async createReport(
    tasks,
    discriptionTrack,
    nextDayDiscreption,
    calendare,
    discriptionTask,
    name,
    time,
    isComplite
  ) {
    return $api.post("/tracking/newpost", {
      tasks,
      discriptionTrack,
      nextDayDiscreption,
      calendare,
      discriptionTask,
      name,
      time,
      isComplite,
    });
  }
}
