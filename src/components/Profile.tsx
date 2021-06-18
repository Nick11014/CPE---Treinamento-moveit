import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const {level} = useContext(ChallengesContext);
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://cdn.discordapp.com/attachments/796163490208677929/855258136319098880/49110899_2064231723706096_706103459664887808_n.jpg"
        alt="Matheus Menezes"
      />
      <div>
          <strong>
              Matheus Menezes
          </strong>
          <p>
              <img src="icons/Level.svg" alt="Level"></img>
              Level {level}
        </p>
      </div>
    </div>
  );
}
