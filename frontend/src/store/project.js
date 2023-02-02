import { makeAutoObservable } from "mobx";
import ProjectService from "../service/ProjectService";

export default class Project {
  constructor() {
    makeAutoObservable(this);
  }

  //получение всех трэков по проекту за сегодня.
  async getAllToday(nameProject) {
    try {
      const res = await ProjectService.getProjectWithTasks(nameProject);
      return res;
    } catch (e) {
      console.error(e);
    }
  }

  //получение всех проектов, добавленных с консоли.
  async getAllProject() {
    try {
      const res = await ProjectService.getAllProject();
      return res;
    } catch (e) {
      console.error(e);
    }
  }
}
