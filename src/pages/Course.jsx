import React from "react";

// import your images (example, adjust paths as needed)
import webImg from "../assets/web-dev-img1.jpeg";
import dsImg from "../assets/data-science-course-benefits.webp";
import mlImg from "../assets/Machine-Learning-1.jpg";
import aiImg from "../assets/blog-26.jpg";
import gra from "../assets/Graphic-Design.webp";
import cyb from "../assets/WhatsApp_Image_2024-11-28_at_11_48_07_AM.jpeg";
import dsaImg from "../assets/dsa.png";
import appImg from "../assets/app-development-banner_33099-1720.avif";

export default function Courses() {
  const courses = [
    {
      title: "💻 Web Development",
      desc: "Master HTML, CSS, JavaScript, and modern frameworks to build stunning websites.",
      img: webImg,
    },
    {
      title: "📊 Data Science",
      desc: "Learn data analysis, visualization, and predictive modeling with Python and advanced tools.",
      img: dsImg,
    },
    {
      title: "🤖 Machine Learning",
      desc: "Understand algorithms and models to solve real-world problems with intelligent systems.",
      img: mlImg,
    },
    {
      title: "🧠 Artificial Intelligence",
      desc: "Explore deep learning, neural networks, and AI-powered innovations.",
      img: aiImg,
    },
    {
      title: "🎨 Graphic Design",
      desc: "Master Photoshop, Illustrator, and design principles for stunning visuals.",
      img: gra,
    },
    {
      title: "🔒 Cybersecurity",
      desc: "Protect systems, networks, and data with top security techniques.",
      img: cyb,
    },
    {
      title: "🧮 Data Structures & Algorithms (DSA)",
      desc: "Build a strong foundation in problem-solving and coding.",
      img: dsaImg,
    },
    {
      title: "📱 App Development",
      desc: "Create Android and iOS applications with modern tools like Flutter and React Native.",
      img: appImg,
    },
  ];

  return (
    <section id="course" className="py-16 bg-gray-50 mt-25">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-black-800 mb-12">
          📚 Our Popular Courses
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex flex-col items-center"
            >
              <img
                src={course.img}
                alt={course.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{course.desc}</p>
              <a
                href="#enroll"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Enroll Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
