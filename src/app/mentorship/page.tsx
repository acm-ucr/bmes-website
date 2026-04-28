import Header from "@/components/Header";
import mentorHeader from "@/public/headers/mentorHeader.webp";
import AboutProgram from "@/components/mentorship/AboutProgram";

const Page = () => {
  return (
    <div>
      <Header
        title="Mentorship Program"
        subtitle="Applications are currently open!"
        image={mentorHeader}
      />
      <AboutProgram />
    </div>
  );
};

export default Page;
