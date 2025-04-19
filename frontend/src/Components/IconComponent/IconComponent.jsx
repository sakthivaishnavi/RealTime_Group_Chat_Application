import React from 'react'
import styles from './IconComponent.module.css';
import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';

const IconComponent = ({ room }) => {
  return (
    <div className={styles.IconComponent}>
        <div className={styles.leftInnerContainer}>
          <img src={onlineIcon} className={styles.onlineIcon} alt='online'/>
        </div>
        <div className={styles.rightInnerContainer}>
          <img src={closeIcon} className={styles.closeIcon} alt='close'/>
        </div>
 
    </div>
  )
}

export default IconComponent