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
      alert("Не выбран проект, или заполнены не все поля");
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
  async deleteTracking(id) {
    try {
      const req = UserService.deleteTracking(id);
      // console.log(req);
      return req;
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }
}
