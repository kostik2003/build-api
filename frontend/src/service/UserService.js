export default class UserService {
  static fetchUsers() {
    return $api.get("/user");
  }
}
