import { Link } from "react-router-dom";
import photo from "../assets/ELearning-Evolution-Tracing-the-History-of-Online-Learning.png";
import webImg from "../assets/web-dev-img1.jpeg";
import dsImg from "../assets/data-science-course-benefits.webp";
import mlImg from "../assets/Machine-Learning-1.jpg";
import aiImg from "../assets/blog-26.jpg";
import gra from "../assets/Graphic-Design.webp";
import cyb from "../assets/WhatsApp_Image_2024-11-28_at_11_48_07_AM.jpeg";
import dsaImg from "../assets/dsa.png";
import appImg from "../assets/app-development-banner_33099-1720.avif";
import abt from '../assets/about.jpg'

export default function Home() {
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
        const roadmaps= [
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
 <>
    <div className="text-center py-22 xl:mt-16 mt-12">
         <img src={photo} alt=""  className="mx-auto w-95 sm:w-300 h-132 rounded-3xl"/><br /><br />
      <h1 className="text-4xl font-bold mb-4 text-blue-700">Welcome to E-Learning website 🚀</h1>
      <p className="text-lg text-gray-900">Welcome to E-Learn, your personalized platform for mastering technology and career-ready skills. <br />  Whether you’re a student, professional, or lifelong learner, we provide structured courses, interactive roadmaps, and hands-on projects to accelerate your growth. <br /> Start learning today and take your first step towards success.</p>
  <br /><br />
  <h1 className="text-3xl md:text-4xl font-semibold text-center mx-auto">
  About Us
</h1>
<p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
  “Empowering learners everywhere with expert-led courses, interactive lessons, 
  and structured roadmaps to unlock their full potential.”
</p>

<div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
  {/* About Image */}
  <img
    className="border-2 max-w-sm w-full rounded-xl"
    src={abt}
    alt="About Section"
  />

  {/* Key Features */}
  <div>
    <h1 className="text-3xl font-semibold">Key Features for Learners:</h1>
    <p className="text-sm text-slate-500 mt-2">
      “Learn from expert-led courses with interactive lessons, structured 
      roadmaps, and certifications to boost your skills.”
    </p>

    <div className="flex flex-col gap-8 mt-8">
      {/* Feature 1 */}
      <div className="flex items-center gap-4">
        <div className="size-12 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png"
            alt="Expert Icon"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base font-medium text-slate-600">Expert-Led Content</h3>
          <p className="text-sm text-slate-500">
            Learn from industry professionals with courses designed by experts.
          </p>
        </div>
      </div>

      {/* Feature 2 */}
      <div className="flex items-center gap-4">
        <div className="size-12 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png"
            alt="Roadmap Icon"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base font-medium text-slate-600">Structured Roadmaps</h3>
          <p className="text-sm text-slate-500">
            Follow step-by-step learning paths from beginner to expert.
          </p>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex items-center gap-4">
        <div className="size-12 p-2 bg-indigo-50 border border-indigo-200 rounded flex items-center justify-center">
          <img
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png"
            alt="Certificate Icon"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="text-base font-medium text-slate-600">Certifications</h3>
          <p className="text-sm text-slate-500">
            Earn certificates to showcase your new skills.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
       <section id="course" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-black-800 mb-12">
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
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12 bg-gray-50 min-h-screen text-center">
          <h1 className="text-4xl font-bold text-center text-black-900 mb-12">
            Roadmaps for Your Courses
          </h1>
    
          <div className="grid md:grid-cols-2 gap-10">
            {roadmaps.map((roadmaps, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all"
              >
                <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
                  {roadmaps.title}
                </h2>
                <ol className="list-decimal list-inside space-y-2 text-gray-700">
                  {roadmaps.steps.map((step, idx) => (
                    <li key={idx} className="hover:text-indigo-500 transition">
                      {step}
                    </li>
                  ))}
                </ol>
                <Link
                  to="/course"
                  className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition"
                >
                  Explore {roadmaps.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
          </div>
          <form
      action="https://api.web3forms.com/submit"
      method="POST"
      className="flex flex-col items-center text-sm"
    >
      {/* Web3Forms Access Key */}
      <input
        type="hidden"
        name="access_key"
        value="17067777-eb0c-4d4b-8039-e3b51331296e"
      />
 
      <p className="text-lg text-blue-600 font-medium pb-2">Contact Us</p>
      <h1 className="text-4xl font-semibold text-black-700 pb-4">
        Get in touch with us
      </h1>
      <p className="text-sm text-gray-500 text-center pb-10">
        Drop us a message and enhance your learning experience.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-8 w-[350px] md:w-[700px]">
        <div className="w-full">
          <label className="text-black/70" htmlFor="name">
            Your Name
          </label>
          <input
            className="h-12 p-2 mt-2 w-full border border-black rounded outline-none focus:border-indigo-300"
            type="text"
            name="name"
            required
          />
        </div>
        <div className="w-full">
          <label className="text-black" htmlFor="email">
            Your Email
          </label>
          <input
            className="h-12 p-2 mt-2 w-full border border-black rounded outline-none focus:border-indigo-300"
            type="email"
            name="email"
            required
          />
        </div>
      </div>

      <div className="mt-6 w-[350px] md:w-[700px]">
        <label className="text-black" htmlFor="message">
          Message
        </label>
        <textarea
          className="w-full mt-2 p-2 h-40 border border-black rounded resize-none outline-none focus:border-indigo-300"
          name="message"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-5 bg-indigo-600 text-white h-12 w-56 px-4 rounded active:scale-95 transition"
      >
        Send Message
      </button>
    </form> <br /><br />
 </>
  );
}
