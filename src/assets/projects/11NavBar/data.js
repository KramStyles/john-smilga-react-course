import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";
export const links = [
  {
    url: "/home",
    text: "home",
  },
  {
    url: "/about-us",
    text: "about us",
  },
  {
    url: "/projects",
    text: "projects",
  },
  {
    url: "/teams",
    text: "our teams",
  },
  {
    url: "/contact-us",
    text: "contact us",
  },
];

export const socialLinks = [
  {
    url: "https://facebook.com/kramstyles",
    name: "facebook",
    icon: <AiFillFacebook />,
  },
  {
    url: "https://twitter.com/kramstyles",
    name: "twitter",
    icon: <AiFillTwitterCircle />,
  },
  {
    url: "https://github.com/kramstyles",
    name: "github",
    icon: <AiFillGithub />,
  },
  {
    url: "https://linkedin.com/in/eke-mark",
    name: "linkedin",
    icon: <AiFillLinkedin />,
  },
  {
    url: "https://mark-eke.netlify.app",
    name: "website",
    icon: <AiOutlineLink />,
  },
];
