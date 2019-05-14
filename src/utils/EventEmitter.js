class EventEmitter {
  constructor() {
    const delegate = document.createDocumentFragment();
    ['addEventListener', 'dispatchEvent', 'removeEventListener']
      .forEach(m => this[m] = (...args) => delegate[m](...args));
  }
}

export default EventEmitter;
