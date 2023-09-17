class HTTPError extends Error {
  constructor(public response : Response) {
    super(`HTTP Error ${response.status}`);

    Object.setPrototypeOf(this, HTTPError.prototype);
  }
}

export { HTTPError }