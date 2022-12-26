import UserService from "../service/UserService";
import { makeAutoObservable } from "mobx";

export default class Track {
  constructor() {
    makeAutoObservable(this);
  }

  async submit(
    gitSourse,
    discription,
    target,
    nextDayDiscreption,
    workTime,
    reworked,
    calendare
  ) {
    try {
      const res = await UserService.createReport(
        gitSourse,
        discription,
        target,
        nextDayDiscreption,
        workTime,
        reworked,
        calendare
      );
    } catch (e) {
      console.error(e);
    }
  }
}
