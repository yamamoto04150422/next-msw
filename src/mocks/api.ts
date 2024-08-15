type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiRequestOptions {
  method: HttpMethod;
  url: string;
  body?: Record<string, unknown>;
  params?: Record<string, string>;
}

export async function apiRequest<T>({
  method,
  url,
  body,
  params,
}: ApiRequestOptions): Promise<T> {
  const headers = {
    "Content-Type": "application/json",
  };

  const queryString = params
    ? "?" + new URLSearchParams(params).toString()
    : "";

  const response = await fetch(url + queryString, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
}
