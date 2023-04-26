import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillTwitterSquare,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineLink,
} from "react-icons/ai";
export const links = [
    {
        url: '/',
        text: 'home'
    },
    {
        url: '/about-us',
        text: 'about us'
    },
    {
        url: '/projects',
        text: 'projects'
    },
    {
        url: '/teams',
        text: 'our teams'
    },
    {
        url: '/contact-us',
        text: 'contact us'
    }
]

export const socialLinks = [
    {
        url: 'https://facebook.com/kramstyles',
        icon: <AiFillFacebook/>
    },
    {
        url: 'https://twitter.com/kramstyles',
        icon: <AiFillTwitterCircle/>
    },
    {
        url: 'https://github.com/kramstyles',
        icon: <AiFillGithub/>
    },
    {
        url: 'https://linkedin.com/in/eke-mark',
        icon: <AiFillLinkedin/>
    },
    {
        url: 'https://mark-eke.netlify.app',
        icon: <AiOutlineLink/>
    }
]
