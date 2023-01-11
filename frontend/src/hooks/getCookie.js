import Cookies from "js-cookie";

const GetCookie = (cookiename) => {
  const cookie = Cookies.get(cookiename);
  return cookie;
};
export default GetCookie;
