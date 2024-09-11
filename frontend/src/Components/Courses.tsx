import { useState } from 'react'


function Courses() {
  const courses = [
    {
      title: "Full Stack Developer and Certification courses",
      description:
        "Every day, new technologies having the potential to transform interpersonal and professional relationships are born. Businesses are rapidly changing to digital. As a result, the need for IT professionals is also growing. According to recent studies, the demand for IT professionals will rise by 50-70 percent in the future.",
    },
    {
      title: "Bachelor of Commerce (Bcom)",
      description:
        "Bachelor of Commerce (B.Com) is a 3-year full-time program designed to cultivate business acumen among students and aims to develop various skills to make students capable of being an effective part of the organisation in various capacities.students and aims to develop various skills to make students capable of being an effective part of the organisation.",
    },
    {
      title: "BBA Computer Application",
      description:
        "BBA in Computer Application is a three-year bachelor degree designed to provide some advanced application of computer science to the students. The program trains students to tackle diverse opportunities and challenges in the IT industries. The demand for skilled and qualified IT professionals has also increased.",
    },
    {
      title: "Bsc Computer Science - AI and Data Science",
      description:
        "Artificial Intelligence and Data Science is a new branch of study that deals with scientific methodologies, processes, and techniques drawn in different domains like statistics, cognitive science, and computing the information science to extract knowledge from structured data and the information from various Sources.",
    },
    {
      title: "BBA Aviation Management",
      description:
        "The Bachelor of Business Administration (BBA) in Aviation Management is an undergraduate programme designed for those who are seeking to prepare themselves for managerial responsibilities. This will help them develop their ability to recognize and solve problems in the ever-changing scenario.The program trains students to tackle diverse opportunities various industries.",
    },
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const handleNextCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex + 1) % courses.length);
  };

  const handlePrevCourse = () => {
    setCurrentCourseIndex((prevIndex) => (prevIndex - 1 + courses.length) % courses.length);
  };

  const currentCourse = courses[currentCourseIndex];

  return (
    <div className="bg-bgCourse text-white min-h-screen flex flex-col items-center px-10 py-4">
      {/* Header Section */}
      <div className="h-72 pt-32 text-center flex-col justify-end">
        <h1 className="md:text-6xl text-4xl font- mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
        <span className="text-emerald-400">Courses </span> Available
        </h1>
        <p className="text-center md:text-lg text-gray-200 text-xs ">
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit. Cras Vitae
          Blandit Lectus.<br/> Praesent At Hendrerit Velit, At Dictum Nisl.
        </p>
      </div>
{/* Courses Section */}
      <div className="p-10 md:grid hidden rounded-3xl  gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full bg-bgCourse border border-white">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-bgCourse bg-opacity-50 p-5 rounded-lg shadow-lg border border-green-800"
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">{course.title}</h3>
            <p className="text-gray-400 mb-4">{course.description}</p>
            <div className='text-right'>
            <button className="text-green-400 border border-green-400 py-2 px-4 rounded-full hover:bg-green-400 hover:text-black transition-all">
              Read more
            </button>
            </div>
          </div>
        ))}
      </div>
      <div className="p-8 md:hidden  rounded-3xl w-full bg-bgCourse border border-white">
      <div className="bg-bgCourse bg-opacity-50 p-5 rounded-lg shadow-lg  border border-green-800">
        <h3 className="text-lg font-semibold mb-4 text-white flex">{currentCourse.title}</h3>
        <p className="text-gray-400 mb-4">{currentCourse.description}</p>
        <div className='text-right'>
        <button className="text-green-400 border border-green-400 py-2 px-4 rounded-full hover:bg-green-400 hover:text-black transition-all">
          Read more
        </button>
        </div>

      </div>
      <div className="flex justify-center mt-4">
          <button
            className="px-4 py-2 bg-green-500 hover:bg-gray-700 text-white rounded-md mr-2"
            onClick={handlePrevCourse}
          >
            {"<"}
          </button>
          <button
            className="px-4 py-2 bg-green-500 hover:bg-gray-700 text-white rounded-md"
            onClick={handleNextCourse}
          >
           {">"}
          </button>
        </div>
    </div>
    </div>
  );
}

export default Courses;