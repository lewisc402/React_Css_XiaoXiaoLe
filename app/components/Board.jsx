import React from 'react';
import Container from './Container.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {containers: []};
    this.initContainers();
  }
  selected = () => {
    console.log('sss');
  };
  initContainers=() => {
    for (let i = 0; i < 16; i++) {
      const container = {};
      container.id = i;
      container.content = i;
      this.state.containers.push(container);
    }
  }
  render() {
    const {containers } = this.state;

    return (
      <div className="board">
        {containers.map((container, i) => {
          return (
          <Container key={container.id} index={i} cell={container.content} onClick={this.selected}/>
          );
        }
        )}
      </div>
    );
  }
}
