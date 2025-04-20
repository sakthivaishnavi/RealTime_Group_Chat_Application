import React from 'react'
import styles from './IconComponent.module.css';
import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';

const IconComponent = ({ room }) => {
  return (
    <div className={styles.IconComponent}>
        <div className={styles.leftInnerContainer}>
          <img src={onlineIcon} className={styles.onlineIcon} alt='online'/>
          <h3 className={styles.room}>Room : {room}</h3>
        </div>
        <div className={styles.rightInnerContainer}>
         <a href="/"><img src={closeIcon} className={styles.closeIcon} alt='close'/></a>
        </div>
 
    </div>
  )
}

export default IconComponent