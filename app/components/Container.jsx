import React from 'react';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selecting: false
    };
  }
  select = () => {
    const {index, callbackParent} = this.props;

    callbackParent(index);

    this.setState({
      selecting: true
    });
  }
  render() {
    const {index, selected} = this.props;
    // const {selecting} = this.state;
    let conClass = 'container';

    if (selected) {
      conClass = conClass + ' selected' + ' move';
    }

    return (
        <div className={conClass} onClick={this.select}>
            {index}
        </div>
    );
  }
}
