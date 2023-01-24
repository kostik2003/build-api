import { makeAutoObservable } from "mobx";
import ProjectService from "../service/ProjectService";

export default class Project {
  constructor() {
    makeAutoObservable(this);
  }

  async getAllToday(nameProject) {
    try {
      const res = await ProjectService.getProject(nameProject);
      return res;
    } catch (e) {
      console.error(e);
    }
  }
}
