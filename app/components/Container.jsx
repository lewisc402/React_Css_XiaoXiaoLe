import React from 'react';

export default class Container extends React.Component {
  render() {
    const {index, onClick} = this.props;

    return (
        <div className="container " onClick={onClick}>
            {index}
        </div>
    );
  }
}
