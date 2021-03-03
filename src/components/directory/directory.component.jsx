//#region 'Imports'
import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';
//#endregion 'Imports'

//#region 'Global Variables'
//#endregion 'Global Variables'

//#region 'Global Methods'
//#endregion 'Global Methods'

//#region 'Validations'
//#endregion 'Validations'

//#region 'Component'
class Directory extends Component {
  //#region 'Life Cycle'
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'shop/hats',
        },
        {
          title: 'Jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shop/jackets',
        },
        {
          title: 'Sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'shop/sneakers',
        },
        {
          title: 'Womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: 'shop/womens',
        },
        {
          title: 'Mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: 'shop/mens',
        },
      ],
    };
  }
  //#endregion 'Life Cycle '

  //#region 'General Methods'
  //#endregion 'General Methods'

  //#region 'Component Variables'
  //#endregion 'Component Variables'

  //#region 'Loaders'
  //#endregion 'Loaders'

  //#region 'CRUD'
  //#endregion 'CRUD'

  //#region 'HTML'
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size}></MenuItem>
        ))}
      </div>
    );
  }
  //#endregion 'HTML'
}
//#endregion 'Component'

//#region 'Export'
export default Directory;
//#endregion 'Export'
