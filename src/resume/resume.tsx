import React from 'react';
import styles from './resume.module.scss';
function Resume () {
  return (
    <div className={styles.resumeWrapper}>
      <div className="bg-secondary2 h-36 overflow-visible">
      </div>
      <div className={`${styles.headerSection} bg-white h-72 px-5 z-10 grid grid-cols-4`}>
        <div className="col-span-1">
          <img src="/assets/Prasad_Photo_2.jpg" alt="prasad"/>
        </div>
        <div className="pl-5 col-span-3 grid">
          <div className="border-b border-secondary2">
            <h1 className="text-primary text-4xl mb-3 font-bold">Prasad J</h1>
            <h3 className="text-primary text-xl pb-3">UI Developer</h3>
          </div>
          <div className="pt-3">
            <p>Passionate UI Developer with 3+ years of experience in web development using JavaScript frameworks Angular 8+, ReactJs and nextJs. Adding some more dummy text to make it to four lines. Need more content</p>
          </div>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className="bg-primary text-white pl-5 pt-36">Personal Details</div>
        <div className="bg-white text-primary pl-5 pt-36">Career Details</div>
      </div>
    </div>
  );
}

export default Resume;
