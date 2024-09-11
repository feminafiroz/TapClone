import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full  bg-bgCourse text-white ">
      <div className="mx-auto w-full max-w-7xl px-6 py-8">
        <div className='border border-white rounded-lg  px-12 py-10'>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
          <div className="mb-6">
            <ul className="text-sm  space-y-2 font-normal">
              <li>9656300567</li>
              <li className="pb-4">9037206760</li>
              <li className="pb-10"><a href="mailto:Admissions@Co.in" className="hover:underline">Admissions@Co.in</a></li>
              <li>2nd Floor, Central Arcade,<br /> Cherooty Road,<br /> Calicut - 673032</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-2 font-normal">
            <div>
              <h1
                className="mb-3 font-medium opacity-60 text-emerald-400"  placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}              >
                Explore
              </h1>
              <ul className="space-y-2 ">
                <li><a href="#" className="hover:underline">Home</a></li>
                <li><a href="#" className="hover:underline">About us</a></li>
                <li><a href="#" className="hover:underline">Courses</a></li>
                <li><a href="#" className="hover:underline">Gallery</a></li>
                <li><a href="#" className="hover:underline">Contact us</a></li>
                <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h1
                className="mb-3 font-medium opacity-60 text-emerald-400"
              >
                Courses
              </h1>
              <ul className="space-y-2 font-normal">
                <li><a href="#" className="hover:underline">Full Stack Developer and Certification courses</a></li>
                <li><a href="#" className="hover:underline">Bachelor of Commerce (BCom)</a></li>
                <li><a href="#" className="hover:underline">BBA Computer Application</a></li>
                <li><a href="#" className="hover:underline">BSc Computer Science - AI and Data Science</a></li>
                <li><a href="#" className="hover:underline">BBA Aviation Management</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end space-x-4">
  <a href="#" className="bg-green-500 text-black hover:text-white px-4 py-2 rounded-md flex items-center justify-center">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="#" className="bg-green-500 text-black hover:text-white px-4 py-2 rounded-md flex items-center justify-center">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="#" className="bg-green-500 text-black hover:text-white px-4 py-2 rounded-md flex items-center justify-center">
    <i className="fab fa-linkedin-in"></i>
  </a>
</div>
</div>
      </div>
    </footer>
  );
};

export default Footer;

