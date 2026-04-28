import Header from "@/components/Header";
import contactHeader from "@/public/headers/contactHeader.webp";
import SocialButton from "@/components/SocialButton";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Header title="Contact Us" image={contactHeader} />
      <SocialButton
        link="https://discord.com/invite/7GNPMW7WSW?fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGn34U9YaLyDhICIaNzOHtLjvqxueBan3elDUjVTVFFzipfpvsyGMwyvgLvTUM_aem_si5PEemM00N8TnKpOVyGSA"
        icon={FaDiscord}
      />
    </div>
  );
};

export default Contact;
