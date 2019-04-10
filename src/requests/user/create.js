import axios from "../axios";

export const create = async ({ email, password }) =>
  axios
    .post("/api/accounts", {
      email,
      password
    })
    .then(response => response);
