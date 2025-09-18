export default function Contact() {
  return (
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

      <br />
      <p className="text-lg text-blue-600 font-medium pb-2 mt-25">Contact Us</p>
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
      <br />
    </form>
  );
}
