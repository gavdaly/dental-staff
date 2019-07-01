import { get } from "idb-keyval";

export async function client(method, endpoint, { body, ...customConfig } = {}) {
  const token = await get("jwt");
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
  const response = await fetch(`http://localhost:3000${endpoint}`, config);
  const json = await response.json();
  console.log("response:", json);
  return await json;
}

export default client;
