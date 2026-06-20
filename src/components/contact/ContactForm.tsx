"use client";

import { motion } from "motion/react";

const contactAnimation = {
  initial: { x: 50, opacity: 0 },
  whileInView: { x: 0, opacity: 1 },
  transition: { duration: 1 },
  viewport: { once: true },
};

const ContactForm = () => {
  return (
    <div className="flex flex-col items-center justify-center font-light">
      <div className="m-12 text-center">
        For any inquiries or comments, please complete this form, and we will
        get back to you as soon as possible.
      </div>

      <motion.form
        {...contactAnimation}
        className="from-bmes-blue-300 to-bmes-blue-200 w-4/5 rounded-2xl bg-gradient-to-b p-8 shadow-lg md:w-3/5"
        action=""
      >
        <div className="flex gap-4">
          <div className="flex w-1/2 flex-col">
            <label className="mb-2 text-white">First Name</label>
            <input className="w-full bg-white p-2" />
          </div>
          <div className="flex w-1/2 flex-col">
            <label className="mb-2 text-white">Last Name</label>
            <input className="w-full bg-white p-2" />
          </div>
        </div>

        <div className="mt-4 flex flex-col">
          <label className="mb-2 text-white">Email</label>
          <input className="bg-white p-2" />
        </div>
        <div className="mt-4 flex flex-col">
          <label className="mb-2 text-white">Message</label>
          <textarea className="bg-white p-2" rows={6} />
        </div>

        <div className="mt-6 flex justify-center">
          <button className="bg-bmes-blue-300 rounded-xl px-10 py-2 text-white">
            Submit
          </button>
        </div>
      </motion.form>

      <div className="m-12 text-center">
        We look forward to hearing from you and wish you the best of luck this
        quarter!
      </div>
    </div>
  );
};

export default ContactForm;
