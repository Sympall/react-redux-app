class HttpClass {
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

  get<T>(relativeUrl: string): Promise<T> {
    return this.fetchApi(relativeUrl, { method: "GET" });
  }

  post<T>(relativeUrl: string, body: T) {
    return this.fetchApi(relativeUrl, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  put<T>(relativeUrl: string, body: T) {
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

export const http = new HttpClass("http://localhost:3005");
