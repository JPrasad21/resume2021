import React from 'react';
import styles from './resume.module.scss';
import { RESUME } from './constants';
function Resume () {
  return (
    <div className={styles.resumeWrapper}>
      <div className="bg-secondary2 h-36 overflow-visible">
      </div>
      <div className={`${styles.headerSection} bg-white h-72 px-5 z-10 grid grid-cols-4`}>
        <div className="">
          <img src={RESUME.MyDetails.Image} alt={RESUME.MyDetails.Name}/>
        </div>
        <div className="pl-5 grid">
          <div className="border-b">
            <h1 className="text-primary text-4xl mb-3 font-bold">{RESUME.MyDetails.Name}</h1>
            <h3 className="text-primary text-xl pb-3">{RESUME.Intro.Role}</h3>
          </div>
          <div className="pt-5">
            <p>{RESUME.Intro.Description}</p>
          </div>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className="bg-primary text-white px-5 pt-40">
          <div className="pt-2">
            <h3 className="font-bold ">CONTACTS</h3>
            {RESUME.Contact.map(x => (
              <div key={x.Label} className="flex items-start mt-3">
                <img className="w-6 mt-2 mr-3" src={x.Image} alt={x.Label}/>
                <div>
                  <h3 className="text-sm font-bold ">{x.Label}</h3>
                  {x.Value?.map(y => (
                    <p key={y} className="text-sm text-white opacity-80" style={{ fontSize: '13px' }}>{y}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-secondary2 my-4" style={{ height: '1px' }}></div>
          <div className="">
            <h3 className="font-bold">SKILLS</h3>
            {RESUME.Skills.map(x => (
              <ul key={x} className="mt-3 list-disc pl-5">
                <li className="text-sm text-white opacity-80">{x}</li>
              </ul>
            ))}
          </div>
          <div className="bg-secondary2 my-4" style={{ height: '1px' }}></div>
          <div className="">
            <h3 className="font-bold">EDUCATION</h3>
            {RESUME.Education.map(x => (
              <div key={x.CourseName} className="mt-4">
                <p className="text-xs italic opacity-80">{x.Period}</p>
                <p className="text-secondary2 ">{x.InstituteName}</p>
                <p className="text-sm mb-1 opacity-80">{x.CourseName}</p>
                <p className="text-xs ">{x.Grade}</p>
              </div>
            ))}
          </div>
          <div className="bg-secondary2 mt-2 mb-1" style={{ height: '1px' }}></div>
          <div className="flex justify-between mt-4">

          <a className="flex justify-center items-center " href="https://github.com/JPrasad21/" target="_blank" rel="noreferrer">
              <img src="/assets/github.jpg" alt="github" className="w-7"/>
              <p className="ml-2 text-xs">JPrasad21</p>
          </a>
          <a className="flex justify-center items-center" href="https://www.linkedin.com/in/JPrasad21/" target="_blank" rel="noreferrer">
              <img src="/assets/linkedin.png" alt="linkedin"/>
              <p className="ml-2 text-xs">JPrasad21</p>
          </a>
          </div>
        </div>
        <div className="bg-white px-5 pr-10 pt-36">
          <div className="mt-2 pt-3 border-t">
            <h3 className="font-bold text-primary">WORK EXPERIENCE</h3>
            {RESUME.Work.map(x => (
              <div key={x.RoleName} className="mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg text-primary font-semibold">
                    {x.CompanyName}
                  </p>
                  <p className="text-xs italic">{x.Period}</p>
                </div>
                <p className="text-sm font-bold mb-1 text-primary">{x.RoleName}</p>
                {x.Highlights.map(y => (
                  <ul key={y} className="mt-1 list-disc pl-8">
                    <li className="text-sm text-black">{y}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
          <div className="bg-primary my-4" style={{ height: '1px' }}></div>
          <div className="">
            <h3 className="font-bold text-primary">OTHER PROJECTS</h3>
            {RESUME.OtherProjects.map(x => (
              <div key={x.Name} className="mt-4">
                <p className="text-primary font-semibold">{x.Name}</p>
                <p className="text-sm">
                  {x.Description}
                  {x.link &&
                    <a className="text-primary text-sm" href={x.link} target="_blank" rel="noreferrer">
                      https://prasad-resume-2021.surge.sh/
                    </a>}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
