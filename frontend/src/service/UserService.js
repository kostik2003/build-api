import $api from "../http";

export default class UserService {
  static fetchUsers() {
    return $api.get("/user");
  }

  static async createReport(
    discriptionTrack,
    nextDayDiscreption,
    calendare,
    formFields
  ) {
    return $api.post("/tracking/newpost", {
      discriptionTrack,
      nextDayDiscreption,
      calendare,
      formFields,
    });
  }
}
