import React from 'react';
import './App.scss';
import 'tailwindcss/tailwind.css';
import Resume from './resume/resume';
// import ReactToPdf from 'react-to-pdf';

function App () {
  const divRef = React.useRef<HTMLDivElement>(null);
  return (
    <div className="App bg-outer"
      style={{
        background: "url('/assets/background.jpg')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% 100%'
      }}>
      {/* <ReactToPdf targetRef={divRef} filename="Prasad-Resume.pdf">
        {({ toPdf }) => (
            <button onClick={toPdf}>Generate pdf</button>
        )}
      </ReactToPdf> */}
      <div className="resumeContainer" ref={divRef}>
        <Resume />
      </div>
    </div>
  );
}

export default App;
