import $api from "../http";

export default class UserService {
  static fetchUsers() {
    return $api.get("/user");
  }

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

  static async getAllTracking() {
    return $api.get("/tracking/posts");
  }

  static async deleteTracking(id) {
    const req = $api.post("/tracking/delete", { id });
    return req;
  }
}
