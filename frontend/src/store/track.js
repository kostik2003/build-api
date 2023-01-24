import UserService from "../service/UserService";
import { makeAutoObservable } from "mobx";

export default class Track {
  constructor() {
    makeAutoObservable(this);
  }

  async submit(
    discriptionTrack,
    nameProject,
    nextDayDiscription,
    calendare,
    formFields
  ) {
    try {
      const res = await UserService.createReport(
        discriptionTrack,
        nameProject,
        nextDayDiscription,
        calendare,
        formFields
      );
    } catch (e) {
      console.error(e);
    }
  }

  async getAllTracking() {
    try {
      const res = UserService.getAllTracking();
      return res;
    } catch (e) {
      console.error(e);
    }
  }
}
