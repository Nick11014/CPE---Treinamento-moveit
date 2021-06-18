import styles from '../styles/components/Profile.module.css'

export function Profile() {
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
              Level 1
        </p>
      </div>
    </div>
  );
}
