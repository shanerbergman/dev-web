import { useEffect, useState } from "react";
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import cn from "clsx";

function Navbar() {
  const [yOffset, setYOffset] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleClickScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const currentYOffset = window.pageYOffset;
    const visible = yOffset > currentYOffset;

    setYOffset(currentYOffset);
    setVisible(visible);
  }

  return (
    <nav
      className={cn("sticky top-0 ease-in duration-300", {
        "-top-16": !visible,
      })}
    >
      <ul className="flex gap-12 justify-center items-center p-4 backdrop-blur-lg border-b bg-white bg-opacity-60 border-gray-200 md-gap-16">
        <a
          className="flex gap-4 justify-center items-center"
          href="https://github.com/shanerbergman"
          target="_blank"
        >
          <GitHubLogoIcon width={20} height={20} />
          <li className="hidden md:block">Github</li>
        </a>
        <a
          className="flex gap-4 justify-center items-center"
          href="https://www.linkedin.com/in/shane-r-bergman/"
          target="_blank"
        >
          <LinkedInLogoIcon width={20} height={20} />
          <li className="hidden md:block">LinkedIn</li>
        </a>

        <button
          onClick={() => handleClickScroll("projectsSection")}
          className="flex gap-4 justify-center items-center"
        >
          <RocketIcon width={20} height={20} />

          <p className="hidden md:block">My Projects</p>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
