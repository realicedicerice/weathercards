class NetworkError extends Error {
  constructor() {
    super('Network error');

    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

export { NetworkError }