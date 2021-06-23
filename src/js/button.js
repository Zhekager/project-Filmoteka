export default class MyLibraryBtns {
  constructor({ selector}) {
    this.refs = this.getRefs(selector);

    // hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
  }

  disable() {
    this.refs.button.disabled = true;
  }
}