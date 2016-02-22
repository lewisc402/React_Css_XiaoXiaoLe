import React from 'react';
import Container from './Container.jsx';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {containers: [], selectIndex: null, sourceIndex: null, targetIndex: null, selected: false};
    this.initContainers();
  }
  onContainerSelected= (index) => {
    let {containers, selectIndex, sourceIndex, targetIndex, selected} = this.state;

    if (sourceIndex && targetIndex) {
      sourceIndex = null;
      targetIndex = null;
    }

    if (sourceIndex === null) {
      sourceIndex = index;
      // if (targetIndex && this.canMove(sourceIndex, targetIndex)) {
        console.log('aaa ' + index);
        // [containers[sourceIndex].content, containers[targetIndex].content] =
        //       [containers[targetIndex].content, containers[sourceIndex].content];
      // }
      targetIndex = null;
      selected = true;
    } else if (targetIndex === null) {
      targetIndex = index;
      selected = false;
      // if (this.canMove(sourceIndex, targetIndex)) {
      //   [containers[sourceIndex].content, containers[targetIndex].content] =
      //         [containers[targetIndex].content, containers[sourceIndex].content];
      //   console.log(typeof containers[targetIndex].content);
      //   containers[targetIndex].content.moveClass = ' left';
      // }

      // sourceIndex = null;
    }

    this.setState({
      // sourceIndex: sourceIndex,
      // targetIndex: targetIndex
      sourceIndex,
      targetIndex,
      selected
      // containers
    });

    // alert(sourceIndex);
  };
  initContainers=() => {
    const animals = ['A', 'B', 'C'];
    for (let i = 0; i < 16; i++) {
      const container = {};
      const animal = animals[Math.floor(Math.random() * 3)];
      container.id = i;
      container.content = {id: i, animal: animal, moveClass: ''};
      this.state.containers.push(container);
    }
  }
  canMove = (s, t) => {
    const [xs, ys] = [Math.floor(s / 4), s % 4];
    const [xt, yt] = [Math.floor(t / 4), t % 4];
    return ((Math.abs(xs - xt) + Math.abs(ys - yt)) === 1) ? true : false;
  }
  render() {
    const {containers, selected, sourceIndex, targetIndex} = this.state;

    return (
      <div className="board">
        {containers.map((container, i) => {
          let select = false;
          if (i === sourceIndex) select = selected;
          if (i === targetIndex) {
            console.log(sourceIndex);
            container.content.moveClass = ' right';
            containers[sourceIndex].content.moveClass = ' left';
            select = selected;
          }
          return (
          <Container key={container.id} index={i} selected={select} content={container.content} callbackParent={this.onContainerSelected}/>
          );
        }
        )}
      </div>
    );
  }
}
