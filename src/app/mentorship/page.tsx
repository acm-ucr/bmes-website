import Header from "@/components/Header";
import mentorHeader from "@/public/headers/mentorHeader.webp";
import mobileHeader from "@/public/mobileHeaders/mobileMentorship.webp";
import AboutProgram from "@/components/mentorship/AboutProgram";

const Page = () => {
  return (
    <div>
      <Header
        title="Mentorship Program"
        subtitle="Applications are currently open!"
        image={mentorHeader}
        mobileImage={mobileHeader}
      />
      <AboutProgram />
    </div>
  );
};

export default Page;
