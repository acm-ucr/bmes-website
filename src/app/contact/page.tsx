import Header from "@/components/Header";
import contactHeader from "@/public/headers/contactHeader.webp";
import mobileContactHeader from "@/public/mobileHeaders/mobileEvents.webp";
import FollowUs from "@/components/contact/FollowUs";
import GetInTouch from "@/components/contact/GetInTouch";
import ContactForm from "@/components/contact/ContactForm";

const Contact = () => {
  return (
    <div>
      <Header
        title="Contact Us"
        image={contactHeader}
        mobileImage={mobileContactHeader}
      />
      <GetInTouch />
      <FollowUs />
      <ContactForm />
    </div>
  );
};

export default Contact;
