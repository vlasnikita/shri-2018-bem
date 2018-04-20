import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import ItemSmallImage from 'b:ItemSmallImage';
import ItemSmallDescription from 'b:ItemSmallDescription';
import ItemMedium from 'b:ItemMedium';
import ItemLarge from 'b:ItemLarge';
import data from '../../data.js';

export default decl({
  block: 'Feed',
  content() {
    return (
      <Fragment>
        {getItems()}
      </Fragment>
    );
  }
});

const getItems = () => data.map(itemData => {
	if(itemData.size === 's'){
		if(itemData.image) {
			return (
				<ItemSmallImage
					key={itemData.title}
					title={itemData.title}
					titleColor={itemData.titleColor}
					image={itemData.image}
					size={itemData.size}
					channelName={itemData.channelName}
				/>
			)
		} else return (
			<ItemSmallDescription
				key={itemData.title}
				title={itemData.title}
				titleColor={itemData.titleColor}
				description={itemData.description}
				size={itemData.size}
				channelName={itemData.channelName}
			/>
		)
	} else if(itemData.size === 'm'){
		return (
		<ItemMedium
			key={itemData.title}
			title={itemData.title}
			titleColor={itemData.titleColor}
			image={itemData.image ? itemData.image : false}
			description={itemData.description ? itemData.description : false}
			size={itemData.size}
			channelName={itemData.channelName}
		/>
		)
	} else {
		return (
			<ItemLarge
				key={itemData.title}
				title={itemData.title}
				titleColor={itemData.titleColor}
				image={itemData.image ? itemData.image : false}
				description={itemData.description ? itemData.description : false}
				size={itemData.size}
				channelName={itemData.channelName}
			/>
		)
	}
});