/* eslint-disable new-cap */
import React from 'react';
import styles from './App.module.scss';
import 'tailwindcss/tailwind.css';
import Resume from './resume/resume';
// import ReactToPdf from 'react-to-pdf';
// import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function App () {
  const divRef = React.useRef<HTMLDivElement>(<div>x</div> as unknown as HTMLDivElement);
  const a4Width = 595.28;
  const handleOnClick = () => {
    html2canvas(divRef.current as HTMLElement).then(function (canvas) {
      const pdf = new jsPDF('p', 'pt', 'a4', true);
      const resumeWidth = divRef.current.scrollWidth;
      const resumeHeight = divRef.current.scrollHeight;
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, resumeWidth, resumeHeight);
      pdf.html(divRef.current as HTMLElement, {
        html2canvas: {
          width: resumeWidth,
          scale: a4Width / resumeWidth
        },
        callback: function (pdf) {
          pdf.save('prasad-resume-2021.pdf');
          // window.open(pdf.output('bloburl') as any); // use for debugging
        }
      });
    });
  };
  return (
    <div className={`${styles.App} bg-outer`}
      style={{
        background: "url('/assets/background.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}
      >
        <button className={styles.exportBtn} onClick={() => handleOnClick()}>Save as PDF</button>
      <div className={styles.resumeContainer} ref={divRef}>
        <Resume />
      </div>
    </div>
  );
}

export default App;
