import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import actions from './actions.png';
import heart from './heart.png';

export default decl({
  block: 'ItemSmallDescription',
  content() {
    return (
      <Fragment>
        <Bem elem="title-container">
        	<Bem elem="title" style={{color: this.props.titleColor}}>
        		{this.props.title}
    		</Bem>
        </Bem>
    	<Bem elem="description">
	        	{this.props.description}
	        </Bem>
    	{this.props.channelName ? (
	    	<Bem elem="channel">
	        	{this.props.channelName}
	        </Bem>
        ) : ''}
        <Bem elem="options">
			<img src={actions} alt="Ещё" />
			<img src={heart} alt="Нравится" />
        </Bem>
      </Fragment>
    );
  }
});

const getImg = (src, size) => {
	let tempString;
	if(size == 'l'){
		tempString = src.match(regex)[0];
		return src.replace(regex, tempString + '@3x');
	} else 	if(size == 'm'){
		tempString = src.match(regex)[0];
		return src.replace(regex, tempString + '@2x');
	} else return src;
}

const regex = /[\d]+/;