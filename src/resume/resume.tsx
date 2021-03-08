import React from 'react';
import styles from './resume.module.scss';
import { RESUME } from './constants';
function Resume () {
  return (
    <div className={styles.resumeWrapper}>
      <div className="bg-secondary2 h-44  overflow-visible"></div>
      <div
        className={`${styles.headerSection} bg-white px-5 z-10 flex flex-col`}
      >
        <div className="flex justify-between pb-2">
          <div className="flex flex-col">
            <h1 className="text-primary text-5xl mb-3 font-bold">
              {RESUME.MyDetails.Name}
            </h1>
            <h3 className="text-primary text-2xl">{RESUME.Intro.Role}</h3>
          </div>
          <div>
            {RESUME.Contact.map((x) => (
              <div key={x.Label} className="flex items-center my-2">
                <img className="w-4 mr-3" src={x.Image} alt={x.Label} />
                <p className="text-sm text-primary">{x.Value}</p>
              </div>
            ))}
            <div className="flex justify-between">
              {RESUME.Connect.map((x) => (
                <a
                  key={x.Link}
                  className="flex justify-center items-center "
                  href={x.Link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="w-4 mr-3" src={x.Image} alt={x.Value} />
                  <p className="text-sm text-primary">{x.Value}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-primary my-4" style={{ height: '2px' }}></div>
        <div className="">
          <p>{RESUME.Intro.Description}</p>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className="bg-primary text-white px-5 pt-32">
          <div className="">
            <h3 className="font-bold">SKILLS</h3>
            <ul className="mt-3 list-disc pl-6">
              {RESUME.Skills.map((x) => (
                <li key={x} className="text-white opacity-80 my-2 pl-1">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-secondary2 my-4" style={{ height: '2px' }}></div>
          <div className="">
            <h3 className="font-bold">EDUCATION</h3>
            {RESUME.Education.map((x) => (
              <div key={x.CourseName} className="grid gap-2 mt-5">
                <p className="text-secondary2 ">{x.InstituteName}</p>
                <p className="text-sm ">{x.CourseName}</p>
                <p className="text-xs ">{x.Grade}</p>
                <p className="text-xs italic opacity-80">{x.Period}</p>
              </div>
            ))}
          </div>
          <div className="bg-secondary2 my-4" style={{ height: '2px' }}></div>
          <div className="">
            <h3 className="font-bold">LANGUAGES</h3>
            <ul className="mt-3 list-disc pl-6">
              {RESUME.Languages.map((x) => (
                <li key={x} className="text-white opacity-80 my-2 pl-1">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white px-5 pr-10 pt-28">
          <div className="bg-primary 4" style={{ height: '2px' }}></div>
          <div className="pt-4">
            <h3 className="font-bold text-primary">WORK&nbsp;EXPERIENCE</h3>
            {RESUME.Work.map((x) => (
              <div key={x.RoleName} className="mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-lg text-primary font-semibold">
                    {x.CompanyName}
                  </p>
                  <p className="text-xs italic">{x.Period}</p>
                </div>
                <p className="text-sm font-bold mb-1 text-primary">
                  {x.RoleName}
                </p>
                <ul className="mt-1 list-disc pl-8">
                  {x.Highlights.map((y) => (
                    <li key={y} className="text-sm text-black ">
                      {y}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-primary my-4" style={{ height: '2px' }}></div>
          <div className="">
            <h3 className="font-bold text-primary">PROJECTS</h3>
            {RESUME.OtherProjects.map((x) => (
              <div key={x.Name} className="mt-3">
                <div className="flex justify-between items-center">
                  <p className="text-lg text-primary font-semibold">{x.Name}</p>
                  <p className="text-xs italic">{x.Period}</p>
                </div>
                <ul className="mt-1 list-disc pl-8">
                  <li className="text-sm text-black">
                    {x.Description}
                    {x.link && (
                      <a
                        className="text-primary text-sm"
                        href={x.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {x.link}
                      </a>
                    )}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
