import Header from "@/components/Header";
import contactHeader from "@/public/headers/contactHeader.webp";
import FollowUs from "@/components/contact/FollowUs";
import GetInTouch from "@/components/contact/GetInTouch";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <Header title="Contact Us" image={contactHeader} />
      <GetInTouch />
      <ContactForm />
      <FollowUs />
    </div>
  );
};

export default Contact;
