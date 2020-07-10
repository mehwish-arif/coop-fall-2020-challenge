//student
//fallcoop2020

class EventSourcer {
  constructor() {
    this.value = 0;
    this.state = [0];
    this.index = 0;
  }

  add(num) {
    const result = this.value + num;
    this.state.push(result);
    this.index = this.index + 1;
    this.value = result;
  }
  subtract(num) {
    const result = this.value - num;
    this.index = this.index + 1;
    this.state.push(result);
    this.value = result;
  }
  undo() {
    let currentIndex = this.index - 1;
    if(currentIndex < 0){
      currentIndex = 0;
    }
    this.index = currentIndex;
    const result = this.state[currentIndex];
    this.value = result;
  }
  redo() {
    let currentIndex = this.index + 1;
    if(currentIndex > this.state.length) {
      currentIndex = this.state.length - 1
    } else {
      this.index = currentIndex;
    }

    const result = this.state[currentIndex];
    this.value = result;
  }
  bulk_undo(num) {
    const currentIndex = this.index - num;
    this.index = currentIndex;
    const result = this.state[this.currentIndex];
    this.value = result;

  }
  bulk_redo(num) {
    const currentIndex = this.index + num;
    this.index = currentIndex;
    const result = this.state[this.currentIndex];
    this.value = result;
  }
}

// ----- Do not modify anything below this line (needed for test suite) ------
module.exports = EventSourcer;
