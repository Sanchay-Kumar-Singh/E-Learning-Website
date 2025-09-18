import abt from "../assets/about.jpg";
export default function About() {
    return (
        <>
          <br />  <h1 className="text-3xl font-semibold text-center mx-auto mt-25">About Us</h1>
            <p className="text-sm text-slate-500 text-center mt-2 max-w-md mx-auto">
               “Empowering learners everywhere with expert-led courses, interactive lessons, and structured roadmaps to unlock their full potential.”
            </p>
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-0 py-10">
                <img className="max-w-sm w-full h-90 rounded-xl  border-2"
                    src={abt} 
                    alt="" />
                <div>
                    <h1 className="text-3xl font-semibold">Our Latest features</h1>
                    <p className="text-sm text-slate-500 mt-2">
                       “Learn from expert-led courses with interactive lessons, structured roadmaps, and certifications to boost your skills.”
                    </p>
            
                    <div className="flex flex-col gap-10 mt-6">
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/flashEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Expert-Led Content</h3>
                                <p className="text-sm text-slate-500">Learn from industry professionals with courses designed by experts.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/colorsEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Structured Learning Roadmaps:</h3>
                                <p className="text-sm text-slate-500">Follow step-by-step roadmaps from beginner to expert..</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="size-9 p-2 bg-indigo-50 border border-indigo-200 rounded">
                                <img src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/aboutSection/puzzelEmoji.png" alt="" />
                            </div>
                            <div>
                                <h3 className="text-base font-medium text-slate-600">Structured Learning Roadmaps:</h3>
                                <p className="text-sm text-slate-500">Earn certificates to showcase your new skills.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};