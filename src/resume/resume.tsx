import React from 'react';

function Resume () {
  return (
    <div>
      <div className="bg-secondary2 h-60 overflow-visible">
        <div className="relative top-5 bg-white h-64 px-5 z-10 grid grid-cols-4">
          <div className="m-5 mr-0 border-primary border col-span-1">Image</div>
          <div className="m-5 col-span-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad non dignissimos qui cum, quis perferendis explicabo fugit veritatis possimus corrupti in quos obcaecati cupiditate quisquam officia molestiae deleniti iure provident!</div>
        </div>
      </div>
      <div className="h-60 grid grid-cols-4">
        <div className="bg-primary text-white pt-20 px-5 col-span-1">Personal Details</div>
        <div className="bg-white text-primary pt-20 px-5 col-span-3">Career Details</div>
      </div>
    </div>
  );
}

export default Resume;
