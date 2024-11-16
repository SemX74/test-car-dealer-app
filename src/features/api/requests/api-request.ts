import { API_ENDPOINT } from "../constants";
import { requestMethod } from "./helpers/request-method";

export const apiRequest = () => {
  const headers = {
    Accept: "application/json",
  };

  return {
    get: requestMethod("GET", headers, API_ENDPOINT),
    post: requestMethod("POST", headers, API_ENDPOINT),
    put: requestMethod("PUT", headers, API_ENDPOINT),
    delete: requestMethod("DELETE", headers, API_ENDPOINT),
    patch: requestMethod("PATCH", headers, API_ENDPOINT),
  };
};
