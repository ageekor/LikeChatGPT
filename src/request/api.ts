import service from "./index";
import { ILoginData } from "../models/login";
import appConfig from "../utils/appConfig";
// 登录接口
export function login(data: ILoginData) {
  if (appConfig.value.IsDebug) {
    return Promise.resolve({
      code: 200,
      data: {
        token: "debug_token",
      },
    });
  } else {
    return service({
      url: "/login",
      method: "POST",
      data,
    });
  }
}

// 商品列表接口
export function getGoodsList() {
  return service({
    url: "/getGoodsList",
    method: "GET",
  });
}

// 用户列表接口
export function getUserList() {
  return service({
    url: "/getUserList",
    method: "GET",
  });
}

// 角色列表接口
export function getRoleList() {
  return service({
    url: "/getRoleList",
    method: "GET",
  });
}

// 权限列表接口
export function getAuthorityList() {
  return service({
    url: "/getAuthorityList",
    method: "GET",
  });
}
