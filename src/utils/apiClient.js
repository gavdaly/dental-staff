export function client(method, endpoint, { body, ...customConfig }) {
  const token = ""; //get token
  const headers = { "content-type": "application/json" };
  if (token) {
    headers.Authorization = token;
  }
  const config = {
    method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };
  if (body) {
    config.body = JSON.stringify(body);
  }
  return window
    .fetch(`localhost:3000/${endpoint}`, config)
    .then(response => response.json);
}

export default client;
