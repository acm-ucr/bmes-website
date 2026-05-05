const ContactForm = () => {
    return (
        <>
        <div className="flex flex-col items-center justify-center font-light">
            <div className="m-12">
                For any inquiries or comments, please complete this form, and we will get back
                to you as soon as possible.
            </div>

            <form className="bg-gradient-to-b from-bmes-blue-300 to-bmes-blue-200 rounded-2xl p-8 shadow-lg w-full max-w-3xl">
                <div className="flex gap-4">
                    <div className="flex flex-col flex-1">
                        <label className="text-white mb-2">First Name</label>
                        <input className="p-2 bg-white" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <label className="text-white mb-2">Last Name</label>
                        <input className="p-2 bg-white" />
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-white mb-2">Email</label>
                    <input className="p-2 bg-white" />
                </div>
                <div className="flex flex-col mt-4">
                    <label className="text-white mb-2">Message</label>
                    <textarea className="p-2 bg-white" rows={6} />
                </div>
                <div className="flex justify-center mt-6">
                    <button className="bg-bmes-blue-300 text-white px-10 py-2 rounded-xl">
                        Submit
                    </button>
                </div>
            </form>

            <div className="m-12">
                We look forward to hearing from you and wish 
                you the best of luck this quarter!
            </div>
        </div>
        </>
    );
};

export default ContactForm;