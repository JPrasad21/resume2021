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
                    <p key={y} className="text-sm text-secondary2" style={{ fontSize: '13px' }}>{y}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-secondary2 my-6" style={{ height: '1px' }}></div>
          <div className="">
            <h3 className="font-bold">SKILLS</h3>
            {RESUME.Skills.map(x => (
              <ul key={x} className="mt-3 list-disc pl-5">
                <li className="text-sm text-secondary2">{x}</li>
              </ul>
            ))}
          </div>
          <div className="bg-secondary2 my-6" style={{ height: '1px' }}></div>
          <div className="">
            <h3 className="font-bold">EDUCATION</h3>
            {RESUME.Education.map(x => (
              <div key={x.CourseName} className="mt-4">
                <p className="text-xs italic">{x.Period}</p>
                <p className="text-secondary2">{x.InstituteName}</p>
                <p className="text-sm mb-1">{x.CourseName}</p>
                <p className="text-xs font-bold">{x.Grade}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white px-5 pr-10 pt-36">
          <div className="mt-2 pt-3 border-t">
            <h3 className="font-bold text-primary">WORK EXPERIENCE</h3>
            {RESUME.Work.map(x => (
              <div key={x.RoleName} className="mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-xl text-secondary2 font-bold">
                    {x.CompanyName}
                  </p>
                  <p className="text-xs italic">{x.Period}</p>
                </div>
                <p className="text-sm font-bold mb-1">{x.RoleName}</p>
                {x.Highlights.map(y => (
                  <ul key={y} className="mt-1 list-disc pl-8">
                    <li className="text-sm text-black">{y}</li>
                  </ul>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
