import React from 'react';
import { render } from 'react-dom';


const ProfilePic = (props) => {
  return (
    <img src='dice.png'/>
  );
}

const ProfileLink = (props) => {
  return (
    <a href={'http://www.facebook.com/' + props.username}>
      {props.username}
    </a>
  );
}

const Avatar = (props) => {
  return (
    <div>
      <ProfilePic username={props.username} />
      <ProfileLink username={props.username} />
    </div>
  );
}

const ConvasImg = ( props )  =>{

	let canStyle = {
		width : '400px',
		height : '400px',
		border : '1px solid #d4d4d4',
		boxsizing:'border-box',
	}

	let handlerClick = () =>{
		//alert("111");
		var c = document.getElementById( "canvas" );
		var ctx = c.getContext( "2d" );
		ctx.beginPath();
		ctx.arc(200,100,20,0*Math.PI,2*Math.PI);
		ctx.stroke();
	} 

	return (
		<canvas id="canvas" onClick={handlerClick} style={canStyle}>支持canvas元素（此消息在浏览器不支持canvas元素时显示）</canvas>
	);
}


export default class Hello extends React.Component {

	/*constructor(props) {
	    super(props);
	    this.state = { opacity: 0 };
	}

  	componentDidMount(){
  		this.timer = setInterval(function () {
	      var opacity = this.state.opacity;
	      opacity -= .05;
	      if (opacity < 0.1) {
	        opacity = 1.0;
	      }
	      this.setState({
	        opacity: opacity
	      });
	    }.bind(this), 100);
  	}*/

	render() {
		return (
			<ConvasImg username="dice"/>
		);
	}
}