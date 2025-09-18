import photo from "../assets/image.png";
export default function Footer() {
    return (
          <>
          <hr />
        <footer className="px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full bg-gradient-to-b from-[#7d7eda] to-[#3a37d7] text-gray-500">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
                <div className="md:max-w-96">
                    <img src={photo} className="w-40" alt="" />
                    <p className="mt-6 text-sm text-white">
                      "Empowering learners everywhere with expert-led courses, interactive lessons, and structured roadmaps to unlock their full potential."
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20">
                    <div>
                        <h2 className="font-semibold mb-5 text-black">Company</h2>
                        <ul className="text-sm text-white space-y-2">
                            <li><a href="/">Home</a></li>
                            <li><a href="/about">About us</a></li>
                            <li><a href="/course">Courses</a></li>
                            <li><a href="/roadmaps">Roadmaps</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5 text-black">Get in touch</h2>
                        <div className="text-sm text-white space-y-2">
                            <p>+91-95559438XX</p>
                            <p>E-Learners@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-white text-xs md:text-sm pb-5">
                Copyright 2025 © <a href="/">E-Learners</a>. All Right Reserved.
            </p>
        </footer>
          </>
    );
};