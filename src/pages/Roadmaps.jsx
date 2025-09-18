import React from "react";
import { Link } from "react-router-dom";

export default function Roadmaps() {
  const courses = [
    {
      title: "Web Development",
      steps: [
        "HTML & CSS Basics",
        "JavaScript Fundamentals",
        "React.js",
        "Backend (Node.js/Express)",
        "Deploy Website",
      ],
    },
    {
      title: "Data Science",
      steps: [
        "Python Basics",
        "Data Analysis with Pandas",
        "Visualization (Matplotlib/Seaborn)",
        "Machine Learning",
        "Projects & Deployment",
      ],
    },
    {
      title: "AI & Machine Learning",
      steps: [
        "Python & NumPy",
        "Statistics & Probability",
        "ML Algorithms",
        "Deep Learning (TensorFlow/PyTorch)",
        "AI Projects",
      ],
    },
    {
      title: "Cyber Security",
      steps: [
        "Networking Basics",
        "Linux & Scripting",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Cyber Security Projects",
      ],
    },
  ];

  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-gray-50 min-h-screen text-center mt-25">
      <h1 className="text-4xl font-bold text-center text-black-900 mb-12">
        Roadmaps for Your Courses
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
              {course.title}
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {course.steps.map((step, idx) => (
                <li key={idx} className="hover:text-indigo-500 transition">
                  {step}
                </li>
              ))}
            </ol>
            <Link
              to="/course"
              className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
            >
              Explore {course.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
