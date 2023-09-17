class ContextValueNotProvidedError extends Error {
  constructor() {
    super('Context value not provided!');

    Object.setPrototypeOf(this, ContextValueNotProvidedError.prototype);
  }
}

export { ContextValueNotProvidedError }