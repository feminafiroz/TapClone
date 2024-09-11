import React from 'react';

function About() {
  return (
    <div className="bg-bgCourse text-white p-10 rounded-lg max-w-screen-2xl mx-auto">
        <div className = " p-10 rounded-lg border border-white">
      <div className="flex flex-col lg:flex-row items-start justify-between mb-10 lg:mb-20">
        {/* Left Side (Heading Section) */}
        <div className="lg:w-1/2 pl-4 pt-2">
          <h1 className="text-5xl font-normal">
          <span className="text-emerald-400">About of </span> School Of Science <br /> & Management
          </h1>
        </div>

        {/* Right Side (Text and Button Section) */}
        <div className="lg:w-1/2 text-left lg:text-right mt-6 lg:mt-0">
          <p className="max-w-md lg:max-w-lg text-lg mb-6 lg:ml-auto lg:text-left">
            Academy is a fully accredited institution with its headquarters in Calicut. The institution prides itself on being a vibrant effort from the part of highly experienced entrepreneurs who have successfully proved themselves in a range of academic fields.
          </p>
          <button className="bg-transparent border border-emerald-400 text-emerald-400 py-2 px-6 rounded-full hover:bg-emerald-400 hover:text-white transition duration-300">
            Read more
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Card 1 */}
        <div className="bg-gradient-to-tr  from-violet-500 via-black to-black rounded-xl p-6 text-center shadow-lg border border-white text-left">
  <h2 className="text-left text-5xl font-semibold text-emerald-400 mb-2">01</h2>
  <h3 className="text-left text-xl font-semibold text-white mb-4">What we offer</h3>
  <p className="text-left text-gray-400 mb-6">
    The skill set required for the jobs is changing every day.
  </p>
  <div className="text-right">
    <button className="bg-transparent border border-emerald-400 text-emerald-400 py-2 px-6 rounded-full hover:bg-emerald-400 hover:text-white transition duration-300">
      Read more
    </button>
  </div>
</div>


        {/* Card 2 */}
        <div className="bg-gradient-to-tr  from-violet-500 via-black to-black rounded-xl p-6 text-center shadow-lg rounded-lg border border-white">
          <h2 className="text-left text-5xl semibold text-emerald-400 mb-2">02</h2>
          <h3 className="text-left text-xl font-semibold text-white mb-4">Overseas Consultancy</h3>
          <p className="text-left text-gray-400 mb-6">
            Our overseas education consultants will help you find the best course or university.
          </p>
          <div className="text-right">
          <button className="bg-transparent border border-emerald-400 text-emerald-400 py-2 px-6 rounded-full hover:bg-emerald-400 hover:text-white transition duration-300">
            Read more
          </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className=" hidden md:block bg-gradient-to-tr  from-violet-500 via-black to-black rounded-xl p-6 text-center shadow-lg rounded-lg border border-white">
          <h2 className="text-left text-5xl semibold text-emerald-400 mb-2">03</h2>
          <h3 className="text-left text-xl font-semibold text-white mb-4">Distance Education Program</h3>
          <p className="text-left text-gray-400 mb-6">
            We believe education is lifelong. Our distance education programs help students acquire new skills.
          </p>
          <div className="text-right">
          <button className="bg-transparent border border-emerald-400 text-emerald-400 py-2 px-6 rounded-full hover:bg-emerald-400 hover:text-white transition duration-300">
            Read more
          </button>
          </div>
        </div>

        {/* Card 4 */}
        <div className="hidden md:block bg-gradient-to-tr  from-violet-500 via-black to-black rounded-xl p-6 text-center shadow-lg rounded-lg border border-white">
          <h2 className="text-left text-5xl semibold text-emerald-400 mb-2">04</h2>
          <h3 className="text-left text-xl font-semibold text-white mb-4">Add-on Courses</h3>
          <p className="text-left text-gray-400 mb-6">
            Add-on courses are an excellent way of getting more out of your degree and career.
          </p>
          <div className="text-right">
          <button className="bg-transparent border border-emerald-400 text-emerald-400 py-2 px-6 rounded-full hover:bg-emerald-400 hover:text-white transition duration-300">
            Read more
          </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
