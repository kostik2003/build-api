import UserService from "../service/UserService";
import { makeAutoObservable } from "mobx";

export default class Track {
  constructor() {
    makeAutoObservable(this);
  }

  async submit(discriptionTrack, nextDayDiscreption, calendare, formFields) {
    try {
      const res = await UserService.createReport(
        discriptionTrack,
        nextDayDiscreption,
        calendare,
        formFields
      );
    } catch (e) {
      console.error(e);
    }
  }
}
