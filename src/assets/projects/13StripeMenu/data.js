import {
  TbCreditCard,
  TbCreditCardOff,
  TbCards,
  TbPlug,
  TbPlugConnected,
  TbHelp,
  TbMoneybag,
  TbABOff,
  TbUsers,
} from "react-icons/tb";
export const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: <TbCreditCard />, url: "/payment.com" },
      { label: "terminal", icon: <TbCreditCardOff />, url: "/terminal.com" },
      { label: "connect", icon: <TbCards />, url: "/connect.com" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: <TbPlug />, url: "/plugins.com" },
      { label: "libraries", icon: <TbPlugConnected />, url: "/libraries.com" },
      { label: "help", icon: <TbHelp />, url: "/help.com" },
      { label: "billing", icon: <TbMoneybag />, url: "/billing.com" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: <TbABOff />, url: "/about.com" },
      { label: "customers", icon: <TbUsers />, url: "/customers.com" },
    ],
  },
];
