import { createFullUrl } from "./create-full-url";

export function requestMethod(
  method: string,
  defaultHeaders: Record<string, string>,
  baseUrl?: string
) {
  return async <T>(url: string) => {
    const requestOptions: RequestInit = {
      method,
      headers: defaultHeaders,
    };

    const targetUrl = createFullUrl(url, baseUrl);

    const response = await fetch(targetUrl, requestOptions);

    const text = await response.text();
    const ok = response.ok;

    if (!text || !text.trim()) {
      console.warn("Empty response");
      return {
        data: null,
        ok,
      };
    }

    try {
      return { data: JSON.parse(text) as T, ok };
    } catch (e: any) {
      if ("message" in e) {
        console.warn("Failed to parse response", e.message);
      }
      return {
        data: null,
        ok,
      };
    }
  };
}
