import React from 'react';
import  arrow  from '../assets/images/Arrow 1.png';

function ContactForm() {
  return (
    <div className="bg-bgCourse text-white min-h-screen flex items-center justify-center p-8">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Section - Contact Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl sm:text-6xl font-normal mb-2">
            <span className="text-emerald-400">Let's Get</span> In  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; → <br />Touch

            </h1>
            
            
          </div>

          <div className="space-y-12 pb-10">
            <div>
              <p className="font-normal text-gray-500 text-">Phone</p>
              <p className="font-normal text-base">9656300567</p>
              <p className="font-normal">9037206760</p>
            </div>

            <div>
              <p className="font-normal text-gray-500">Email</p>
              <p className="font-normal">Admissions.Co.In</p>
            </div>

            <div>
              <p className="font-normal text-gray-500">Address</p>
              <p className="font-normal">Education,<br/> 2nd Floor, Central Arcade,</p>
              <p className="font-normal">Cherooty Road,<br/> Calicut - 673032</p>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div>
        <p className="mt-4 mb-8 text-gray-400 max-w-xs hidden md:block">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
        </p>
        <div className="bg-white text-black p-8 rounded-lg shadow-lg">
  <h2 className="text-xl font-bold mb-6">Contact</h2>
  <form className="space-y-4">
      <input
        type="text"
        placeholder="First Name"
        className="border-b border-gray-300 p-2 w-full outline-none"
      />
      <input
        type="text"
        placeholder="Last Name"
        className="border-b border-gray-300 p-2 w-full outline-none"
      />
    <input
      type="email"
      placeholder="Email"
      className="border-b border-gray-300 p-2 w-full outline-none"
    />
    <input
      type="tel"
      placeholder="Phone"
      className="border-b border-gray-300 p-2 w-full outline-none"
    />
    <select className="border-b border-gray-300 p-2 w-full outline-none">
      <option value="">Courses</option>
      <option value="course1">Course 1</option>
      <option value="course2">Course 2</option>
    </select>
    <button
      type="submit"
      className="w-full bg-emerald-400 text-white py-3 rounded-md hover:bg-emerald-500 transition duration-300"
    >
      Submit
    </button>
  </form>
</div>

        </div>
      </div>
    </div>
  );
}

export default ContactForm;
