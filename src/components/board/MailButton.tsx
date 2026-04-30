import type React from "react";

interface MailButtonProps {
  email: string;
  name: string;
  icon: React.ComponentType;
}

const MailButton = ({ email, name, icon: Icon }: MailButtonProps) => {
  return (
    <a
      href={`mailto:${email}`}
      aria-label={`Email ${name}`}
      className="bg-bmes-blue-300 flex h-14 w-14 items-center justify-center rounded-md p-3 text-3xl text-white shadow-lg"
    >
      <Icon />
    </a>
  );
};

export default MailButton;
