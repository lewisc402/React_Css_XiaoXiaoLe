import React from 'react';
import Container from './Container.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {containers: [], sourceIndex: null, targetIndex: null, selected: false};
    this.initContainers();
  }
  onContainerSelected= (index) => {
    let {sourceIndex, targetIndex, selected} = this.state;

    if (!sourceIndex) {
      sourceIndex = index;
      selected = true;
    } else if (!targetIndex) {
      targetIndex = index;
    }

    if (sourceIndex && targetIndex) {
      sourceIndex = null;
      targetIndex = null;
    }

    this.setState({
      // sourceIndex: sourceIndex,
      // targetIndex: targetIndex
      sourceIndex,
      targetIndex,
      selected
    });

    alert(sourceIndex);
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
    const {containers, selected} = this.state;

    return (
      <div className="board">
        {containers.map((container, i) => {
          return (
          <Container key={container.id} index={i} selected = {selected} cell={container.content} callbackParent={this.onContainerSelected}/>
          );
        }
        )}
      </div>
    );
  }
}
