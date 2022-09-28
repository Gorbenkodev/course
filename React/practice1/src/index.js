import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import './style.css'
// import { App } from './app.js'


class Content extends React.Component {
  componentDidMount() {
    console.log('Component DID MOUNT!')
  }

  shouldComponentUpdate(newProps, newState) {
    console.log('Should we update Componrnt?')
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component DID UPDATE!')
  }

  componentWillUnmount() {
    console.log('Component WILL UNMOUNT!')
  }

  render() {
    return (
      <h3>{this.props.myNumber}</h3>
    )
  }
}

class Counter extends React.Component {
  constructor() {
    super();
		this.state = {
			count: 0,
			show: true,
		};
		this.increaseCount = this.increaseCount.bind(this)
		this.toggleCount = this.toggleCount.bind(this)

  }

	increaseCount() {
		this.setState({ count: this.state.count + 1 });
	}

	toggleCount() {
		this.setState({ show: !this.state.show})
	}

  render() {
    return(
      <div className="Counter">
        <button onClick={this.increaseCount}>
          INCREMENT
        </button>
        {
					this.state.show && (
						<Content myNumber={this.state.count} />
					)
				}
				<button onClick={this.toggleCount}>
					{this.state.show ? 'DELETE' : 'ADD'}
				</button>
      </div>
    )
  }
}


ReactDOM.render(
	<Counter />,
	document.getElementById('root')
);

