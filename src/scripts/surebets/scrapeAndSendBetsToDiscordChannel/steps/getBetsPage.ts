import axios from "axios";
import { globalConfig } from "../constants/surebets";
import { getConfig } from "../utils/config";

export const getBetsPage = async () => {
  const { headers, params, pathname, baseURL } = getConfig({
    fullUrl: process.env.BRENNO_CONFIG_URL,
    globalConfig,
  });
  const { data, status } = await axios.get(pathname, {
    headers,
    baseURL,
    params,
  });

  // retry login after 1 min
  if (status !== 200) throw new Error("Something went wrong in request");

  return { htmlPageWithBets: data, baseURL };
};
