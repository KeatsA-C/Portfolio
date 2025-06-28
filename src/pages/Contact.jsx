// pages/Contact.jsx
function Contact() {
  return (
    <section className="min-h-screen py-10 px-6 text-white font-aldrich">
      <h2 className="text-4xl text-indigo-500 mb-10 text-center">Contact</h2>

      <div className="flex justify-center">
        <div className="w-full max-w-xl bg-neutral-800 border border-neutral-700 rounded-3xl p-8 shadow-lg hover:shadow-indigo-500/30 transition-shadow duration-300">
          <ul className="divide-y divide-neutral-700">
            <li className="py-6 group hover:scale-[1.02] transition-transform duration-200">
              <h3 className="text-2xl text-white mb-1 group-hover:text-indigo-400 transition-colors duration-200">
                Phone
              </h3>
              <p className="text-lg text-neutral-300 group-hover:text-white transition-colors duration-200">
                +639289747578
              </p>
            </li>

            <li className="py-6 group hover:scale-[1.02] transition-transform duration-200">
              <h3 className="text-2xl text-white mb-1 group-hover:text-indigo-400 transition-colors duration-200">
                Email
              </h3>
              <p className="text-lg text-neutral-300 group-hover:text-white transition-colors duration-200">
                keatsaudrey10@gmail.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
