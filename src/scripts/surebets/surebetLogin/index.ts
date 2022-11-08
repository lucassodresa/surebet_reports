import { getConfig } from "./utils/config";
import { globalConfig } from "./constants/surebets";
import axios from "axios";

export const surebetLogin = async () => {
  try {
    console.log("Doing login...");

    const { pathname, baseURL, params, headers, body } = getConfig({
      globalConfig,
    });

    const { headers: responseHeaders } = await axios.post(pathname, body, {
      baseURL,
      params,
      headers,
    });

    const cookies = responseHeaders["set-cookie"].join(";");

    console.log("Logged in!");

    return { cookies };
  } catch (error) {
    console.log("Something went wrong");

    console.log(error);
    return { cookies: null };
  }
};
