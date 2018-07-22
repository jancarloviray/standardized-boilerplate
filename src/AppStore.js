import { observable, decorate } from 'mobx';

class State {
  text = '1'; // observable state
  onChange = e => (this.text = e.target.value); // action
}
decorate(State, { text: observable });
const appState = new State();

export default appState;