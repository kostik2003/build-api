import $api from "../http";

export default class ProjectService {
  //для получения тасок, выполненных сегодня по конкретному проекту.
  static async getProjectWithTasks(nameProject) {
    const req = await $api.post("/project/tasks", { nameProject });
    return req;
  }

  //получение всех проектов, добавленных с консоли.
  static async getAllProject() {
    const res = await $api.get("/project/allproject");
    return res;
  }
}
