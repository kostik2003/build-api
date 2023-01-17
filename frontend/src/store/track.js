import UserService from "../service/UserService";
import { makeAutoObservable } from "mobx";

export default class Track {
  constructor() {
    makeAutoObservable(this);
  }

  async submit(
    tasks,
    discriptionTrack,
    nextDayDiscreption,
    calendare,
    discriptionTask,
    name,
    time,
    isComplite
  ) {
    try {
      const res = await UserService.createReport(
        tasks,
        discriptionTrack,
        nextDayDiscreption,
        calendare,
        discriptionTask,
        name,
        time,
        isComplite
      );
    } catch (e) {
      console.error(e);
    }
  }
}
