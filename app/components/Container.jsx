import React from 'react';
import Animal from './Animal.jsx';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selecting: false
    };
  }
  select = () => {
    const {index, callbackParent} = this.props;
    console.log('sss ' + index);

    callbackParent(index);

    // this.setState({
    //   selecting: true
    // });
  }
  render() {
    const {index, selected, content} = this.props;
    // const {selecting} = this.state;
    let conClass = 'container';

    if (selected) {
      conClass = conClass + ' selected ';
    }

    return (
        <div className={conClass} onClick={this.select}>
            <Animal content={content}/>
        </div>
    );
  }
}
