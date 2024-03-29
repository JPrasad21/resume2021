/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable new-cap */
import styles from './App.module.scss';
import 'tailwindcss/tailwind.css';
// import Resume from './resume/resume';
import SimpleResume from './resume/simple-resume';

function App () {
  return (
    <div
      className={`${styles.App} bg-outer`}
      style={{
        background: "url('/assets/background.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
    >
      <div className={styles.resumeContainer}>
        <SimpleResume />
      </div>
    </div>
  );
}

export default App;
