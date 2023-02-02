import UserService from "../service/UserService";
import { makeAutoObservable } from "mobx";

export default class Track {
  constructor() {
    makeAutoObservable(this);
  }

  //отправка отчета
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
      return res;
    } catch (e) {
      alert("Не выбран проект, или заполнены не все поля");
    }
  }
  //получение всех отчетов в таблицу для авторизованного юзера
  async getAllTracking() {
    try {
      const res = await UserService.getAllTracking();
      return res;
    } catch (e) {
      console.error(e);
    }
  }
  //удаление поста авторизованного пользователя по id
  async deleteTracking(id) {
    try {
      const req = await UserService.deleteTracking(id);
      alert("Успешно удалено");
      return req;
    } catch (e) {
      console.log(e);
      alert(e);
    }
  }
}
