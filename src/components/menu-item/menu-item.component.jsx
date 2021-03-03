//#region 'Imports'
import React from 'react';
import './menu-item.styles.scss';
//#endregion 'Imports'

//#region 'Global Variables'
//#endregion 'Global Variables'

//#region 'Global Methods'
//#endregion 'Global Methods'

//#region 'Validations'
//#endregion 'Validations'

//#region 'Component'
const MenuItem = ({ title, imageUrl, size }) => {
  //#region 'General Methods'
  //#endregion 'General Methods'

  //#region 'Component Variables'
  //#endregion 'Component Variables'

  //#region 'Loaders'
  //#endregion 'Loaders'

  //#region 'Redux'
  //#endregion 'Redux'

  //#region 'CRUD'
  //#endregion 'CRUD'

  //#region 'HTML'
  return (
    <div className={`${size} menu-item`} style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className='content'>
        <h1 className='title'>{title}</h1>
        <span className='subtitle'>SHOP NOW!</span>
      </div>
    </div>
  );
  //#endregion 'HTML'
};
//#endregion 'Component'

//#region 'Export'
export default MenuItem;
//#endregion 'Export'
