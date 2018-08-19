import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
	//процесс отрисовки компонента метод render
	
	render() {
		return (
			<div>Hello world!</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));




