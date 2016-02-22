import React from 'react';
import Animal from './Animal.jsx';

export default class Container extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selecting: false
    };
  }
  select = (e) => {
    const {index, callbackParent} = this.props;
    console.log('sss ' + index);
    e.stopPropagation();
    e.preventDefault();

    callbackParent(index);

    // this.setState({
    //   selecting: true
    // });
  }
  render() {
    const {selected, content} = this.props;
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
