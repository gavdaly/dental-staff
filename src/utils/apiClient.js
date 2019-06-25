export async function client(method, endpoint, { body, ...customConfig }) {
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
  console.log("api call:", endpoint, config);
  const response = await fetch(`http://localhost:4000${endpoint}`, config);
  return await response.json();
}

export default client;
