import React from 'react';
import { RESUME } from './simple-resume-constants';
function SimpleResume () {
  return (
    <div className='py-4 px-10'>
      <div className=''>
        <h1 className='text-black text-3xl mb-0 font-bold'>
          {RESUME.MyDetails.Name}
        </h1>
        <h3 className='text-black text-lg'>{RESUME.Intro.Role}</h3>
      </div>
      <div className='flex justify-between mt-2'>
        {RESUME.Connect.map((x) => (
          <a
            key={x.Link}
            className='flex justify-center items-center text-hyperlink underline'
            href={x.Link}
            target='_blank'
            rel='noreferrer'
          >
            <img className='w-4 mr-2' src={x.Image} alt={x.Value} />
            <p className='text-sm'>{x.Value}</p>
          </a>
        ))}
        {RESUME.Contact.map((x) => (
          <div key={x.Label} className='flex items-center '>
            <img className='w-4 mr-2' src={x.Image} alt={x.Label} />
            <p
              className={`text-sm ${
                x.Label === 'Email' ? 'text-hyperlink underline' : 'text-black'
              }`}
            >
              {x.Value}
            </p>
          </div>
        ))}
      </div>
      {/* <div className='bg-primary mt-3 mb-2' style={{ height: '2px' }}></div> */}
      <div className='mt-3'>
        <p className='text-sm'>{RESUME.Intro.Description}</p>
      </div>
      <div className='bg-primary my-3' style={{ height: '2px' }}></div>
      <div className=''>
        <h3 className='font-bold text-black'>SKILLS</h3>
        <div className=''>
          {RESUME.SkillsNew.map((x) => (
            <div key={x.Category} className='my-1 text-black text-sm'>
              <span className='font-semibold'>{x.Category + ': '}</span>
              <span>{x.List}</span>
            </div>
          ))}
        </div>
      </div>
      <div className='pt-2'>
        <h3 className='font-bold text-black'>WORK&nbsp;EXPERIENCE</h3>
        {RESUME.Work.map((x) => (
          <div key={x.RoleName} className='mt-2'>
            <div className='flex justify-between items-start'>
              <div>
                <a href={x.LinkedIn} target='_blank' rel='noreferrer'>
                  <p className='text-lg text-black font-semibold'>
                    {x.CompanyName}
                  </p>
                </a>
                <p className='text-sm font-bold text-black'>{x.RoleName}</p>
              </div>
              <div>
                <p className='text-xs italic text-right mb-1'>{x.Period}</p>
                <p className='text-sm italic font-semibold text-right'>
                  {x.Location}
                </p>
              </div>
            </div>
            <ul className='mt-1 list-disc pl-8'>
              {x.Highlights.map((y) => (
                <li key={y} className='text-sm text-black '>
                  {y}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className='mt-4'>
        <div className=''>
          <h3 className='font-bold text-black'>EDUCATION</h3>
          {RESUME.Education.map((x) => (
            <div
              key={x.CourseName}
              className='flex justify-between items-start  mt-0'
            >
              <div>
                <p className='text-base font-semibold text-black mb-1'>
                  {x.InstituteName}
                </p>
                <p className='text-sm '>
                  <span>{x.CourseName} - </span>
                  <span className='font-semibold'>{x.Grade}</span>
                </p>
              </div>
              <div>
                <p className='text-xs italic text-right mb-1'>{x.Period}</p>
                <p className='text-sm italic font-semibold text-right'>
                  {x.Location}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className='mt-4'>
          <h3 className='font-bold text-black'>PROJECTS</h3>
          {RESUME.OtherProjects.map((x) => (
            <div key={x.Name} className='mt-2 '>
              <div className='flex justify-between items-center'>
                <p className='text-base text-black font-semibold'>{x.Name}</p>
                <p className='text-xs italic'>{x.Period}</p>
              </div>
              <ul className='mt-1 list-disc pl-8'>
                <li className='text-sm text-black'>
                  {x.Description}
                  {x.link && (
                    <a
                      className='text-hyperlink text-sm underline'
                      href={x.link}
                      target='_blank'
                      rel='noreferrer'
                    >
                      Live Demo
                    </a>
                  )}
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SimpleResume;
