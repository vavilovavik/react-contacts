import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
		<div>
			<h1>Список контактов</h1>
			<div><a to='/add'>Добавить контакт</a></div>
		</div>
    );
  }
}

export default App;
