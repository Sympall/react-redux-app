export class HttpClass<T> {
  baseUrl: string;
  requestInit: RequestInit = {
    headers: { "Content-type": "application/json" },
  };

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  private fetchApi(url: string, request?: RequestInit) {
    return fetch(this.baseUrl + url, {
      ...this.requestInit,
      ...request,
    })
      .then((res) => res.json())
      .catch((e) => {
        console.error("Fetch error:: ", request?.method, url);
        return e;
      });
  }

  get(relativeUrl: string) {
    return this.fetchApi(relativeUrl, { method: "GET" });
  }

  post(relativeUrl: string, body: T) {
    return this.fetchApi(relativeUrl, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  put(relativeUrl: string, body: T) {
    return this.fetchApi(relativeUrl, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  delete(relativeUrl: string) {
    return this.fetchApi(relativeUrl, {
      method: "DELETE",
    });
  }
}
