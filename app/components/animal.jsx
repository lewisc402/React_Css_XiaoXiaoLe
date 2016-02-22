import React from 'react';

export default class Animal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {moveClass: ''};
  }
  render() {
    const {content} = this.props;
    const cellClass = 'cell' + content.moveClass;

    return (
        <div className={cellClass} >
          {content.animal}
        </div>
    );
  }
}
