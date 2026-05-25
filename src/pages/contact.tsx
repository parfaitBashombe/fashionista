import { useState } from "react";
import { useToast } from "../context/toast-context";

const contactInfo = [
  {
    icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z",
    title: "Address",
    detail: "123 Fashion St, New York, NY 10001",
  },
  {
    icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    title: "Email",
    detail: "contact@fashionista.com",
  },
  {
    icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
    title: "Phone",
    detail: "+1 (234) 567-890",
  },
  {
    icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Business Hours",
    detail: "Mon – Fri, 9am – 6pm EST",
  },
];

const subjects = ["Product Inquiry", "Order Support", "Collaboration", "General Feedback", "Other"];

const ContactPage = () => {
  const { addToast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [sending, setSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
    addToast("Message sent! We'll get back to you within 24 hours.", "success");
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent transition";

  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* Hero */}
      <header className="bg-gradient-main pt-32 pb-20 text-white text-center px-6">
        <span className="inline-block px-5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-xs font-medium tracking-widest uppercase border border-white/20 mb-4">
          Get in Touch
        </span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold drop-shadow-lg">Contact Us</h1>
        <p className="mt-4 text-base text-white/85 max-w-xl mx-auto leading-relaxed">
          We'd love to hear from you — reach out for inquiries, feedback, or collaborations.
        </p>
      </header>

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-2xl font-bold font-serif mb-2">Reach Out Anytime</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Have a question about a product or want to collaborate? Our team is always happy to help.
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div
                  key={info.title}
                  className="bg-white p-5 rounded-xl border border-gray-100 hover:border-gray-200 flex items-start gap-4 transition"
                >
                  <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={info.icon} />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{info.title}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{info.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-8 md:p-10">
            <h2 className="text-2xl font-bold font-serif mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block mb-1.5 text-sm font-semibold text-gray-700">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1.5 text-sm font-semibold text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1.5 text-sm font-semibold text-gray-700">
                  Subject
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                >
                  <option value="">Select a subject</option>
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block mb-1.5 text-sm font-semibold text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us what's on your mind..."
                  rows={6}
                  required
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={sending}
                className="w-full py-4 rounded-xl bg-gradient-main text-white font-semibold hover:opacity-90 transition disabled:opacity-60 flex items-center justify-center gap-2 text-sm"
              >
                {sending ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
