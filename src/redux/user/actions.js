import UserType from "./user-type";

export const loginUser = (payload) => ({
    type: UserType.Login,
    payload,
  });