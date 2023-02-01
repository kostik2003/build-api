import $api from "../http";

export default class UserService {
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

  static async getAllUsersWithTracking() {
    const asdf = $api.get("/project/users");
    return asdf;
  }

  static async getUniueUserWithTracking() {
    return $api.get("/project/users/:email");
  }
}
