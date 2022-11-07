export const getConfig = ({ fullUrl, globalConfig }) => {
  const { origin, pathname, searchParams } = new URL(fullUrl);
  const params = Object.fromEntries(searchParams);

  return {
    headers: globalConfig.headers,
    params,
    baseURL: origin,
    pathname,
    fullUrl,
  };
};
