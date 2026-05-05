const ContactForm = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center font-light">
        <div className="m-12">
          For any inquiries or comments, please complete this form, and we will
          get back to you as soon as possible.
        </div>

        <form
          className="from-bmes-blue-300 to-bmes-blue-200 w-full max-w-3xl rounded-2xl bg-gradient-to-b p-8 shadow-lg"
          action="https://docs.google.com/forms/d/e/1FAIpQLSfEp520S0MsaVBYi7kvwI3MK9AidS6VyGL4aw1YiJ4low1M2A/formResponse"
        >
          <div className="flex gap-4">
            <div className="flex flex-1 flex-col">
              <label className="mb-2 text-white">First Name</label>
              <input className="bg-white p-2" />
            </div>
            <div className="flex flex-1 flex-col">
              <label className="mb-2 text-white">Last Name</label>
              <input className="bg-white p-2" />
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
        </form>

        <div className="m-12">
          We look forward to hearing from you and wish you the best of luck this
          quarter!
        </div>
      </div>
    </>
  );
};

export default ContactForm;
