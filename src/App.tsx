import React from 'react';
import styles from './App.module.scss';
import 'tailwindcss/tailwind.css';
import Resume from './resume/resume';
import ReactToPdf from 'react-to-pdf';

function App () {
  const divRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className={`${styles.App} bg-outer`}
      style={{
        background: "url('/assets/background.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
      >
      <ReactToPdf targetRef={divRef} filename="Prasad-Resume.pdf">
        {({ toPdf }) => (
            <button className={styles.exportBtn} onClick={toPdf}>Save as PDF</button>
        )}
      </ReactToPdf>
      <div className={styles.resumeContainer} ref={divRef}>
        <Resume />
      </div>
    </div>
  );
}

export default App;
