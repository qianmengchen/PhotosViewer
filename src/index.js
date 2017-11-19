import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Thumbnail extends React.Component {
	render() {
		return (
			<img className='thumbnail' 
				src={this.props.url} 
				alt={this.props.alt}
				onClick={this.props.onClick}/>
		);
	}
}

class FullImage extends React.Component {
	render() {
		return (
			<img className='fullImage'
				src={this.props.url}
				alt={this.props.alt}
				onClick={this.props.onClick}/>
		);
	}
}

class Container extends React.Component {
	constructor() {
		super();
		this.state = {
			photos: {},
			viewing: null
		};
	}

	componentWillMount() {
		fetch('https://jsonplaceholder.typicode.com/photos')
		.then(raw => raw.json())
		.then(all => all.slice(0, 300))
		.then((res) => {
			var photos = {};
			res.map(photo => photos[photo.id] = photo);
			this.setState({photos: photos})
		});
	}

	displayFullImage(id) {
		this.setState({viewing: id});
	}

	hideFullImage() {
		this.setState({viewing: null});
	}

	renderFullImage() {
		if (!this.state.viewing) {
			return (<div></div>);
		} else {
			var pic = this.state.photos[this.state.viewing];
			return (<div>
					<FullImage url={pic.url} alt={pic.title} onClick={() => this.hideFullImage()}/>
					<div className='remove' onClick={() => this.hideFullImage()}></div></div>
			);
		}
	}

	renderThumbnail(pic) {
		return (
			<Thumbnail key={pic.id} url={pic.thumbnailUrl} alt={pic.title} onClick={() => this.displayFullImage(pic.id)}/>
		);
	}

	render() {
		return (
			<div className='container'>
				{Object.keys(this.state.photos).map(key => this.renderThumbnail(this.state.photos[key]))}
				{this.renderFullImage()}
			</div>
		);
	}
}

class App extends React.Component {
	render() {
		return (
			<div className='photos'>
				<Container />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));