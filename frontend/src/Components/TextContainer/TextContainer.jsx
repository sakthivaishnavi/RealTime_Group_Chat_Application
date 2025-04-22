import styles from './TextContainer.module.css';
import onlineIcon from '../../assets/onlineIcon.png';
const TextContainer = ({ users = [] }) => {
    return (
        <div className={styles.textContainer}>
            {/* <div>
                <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
            </div> */}
            {Array.isArray(users) && users.length > 0 ? (
                <div>
                    <h1>People currently chatting:</h1>
                    <div className={styles.activeContainer}>
                        <h2>
                            {users.map(({ name }) => (
                                <div key={name} className={styles.activeItem}>
                                    {name}
                                    <img alt="Online Icon" src={onlineIcon} />
                                </div>
                            ))}
                        </h2>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default TextContainer;