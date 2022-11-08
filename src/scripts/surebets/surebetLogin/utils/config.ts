export const getConfig = ({ globalConfig }) => {
  const { origin, pathname, searchParams } = new URL(globalConfig.url);
  const params = Object.fromEntries(searchParams);

  return {
    headers: globalConfig.headers,
    body: globalConfig.body,
    params,
    baseURL: origin,
    pathname,
    fullUrl: globalConfig.url,
  };
};
