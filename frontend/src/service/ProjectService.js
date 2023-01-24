import $api from "../http";

export default class ProjectService {
  static async getProject(nameProject) {
    const req = await $api.post("/project/tasks", { nameProject });
    return req;
  }
}
