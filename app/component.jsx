import React from 'react';
import { render } from 'react-dom';


import '../style/main.css';

import imageDatasJson from '../data/imageDatas.json';

var imageDatas = (function genImageURL(imageDatasArr) {
    for (var i = 0, j = imageDatasArr.length; i < j; i++) {
        var singleImageData = imageDatasArr[i];

        singleImageData.url = 'images/' + singleImageData.fileName;

        imageDatasArr[i] = singleImageData;
    }

    return imageDatasArr;
})(imageDatasJson);


class Card extends React.Component{
	render(){
		return (
			<div  id={this.props.imageid } className="imgFigure">
				<h2>{this.props.name}</h2>
				<img src={this.props.url} alt={this.props.desc}/>
				<div></div>
				<button onClick={this.props.onClick}>Delete me</button>
			</div>
		);
	}
}

const ImgFigureApp = React.createClass({

	deleteImage : function( img ){
		this.state.imageDatas.splice( this.state.imageDatas.indexOf( img),1 );
		this.setState({ imageDatas: this.state.imageDatas });
	},

	getInitialState : function() {
		return {
			imageDatas : this.props.imageDatas.splice(0)
		}
	},

	componentDidMount : function(){

		var img0 = document.getElementById( "imageid0" );
		img0.style.transform = 'rotate(10deg)';
	},

	render : function(){
		var self = this;
		return(
			<div>
				{
					this.state.imageDatas.map(function( img,index ){
						return (
							<Card onClick={self.deleteImage.bind(null,img) }  imageid={ 'imageid' + index } name={img.fileName} url={img.url} desc={img.desc}></Card>
						)
					})
				}
			</div>
		);
	}

});

export default class Hello extends React.Component {

	render() {
		return (
			<ImgFigureApp imageDatas={imageDatas} />
		);
	}
}