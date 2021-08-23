import {
  UilCalling,
  UilEnvelopeCheck,
  UilTwitterAlt,
} from "@iconscout/react-unicons";
import "./contact.scss";

export const data = [
  {
    id: 1,
    contactTitle: "Call or Whatsapp",
    contactDesc: "+234 803 428 5512",
    icon: <UilCalling size="40" className="phoneIcon" />,
  },
  {
    id: 2,
    contactTitle: "Email",
    contactDesc: "atu.prosper@gmail.com",
    icon: <UilEnvelopeCheck size="40" className="phoneIcon" />,
  },
  {
    id: 3,
    contactTitle: "Twitter",
    contactDesc: "@prosperjohnson",
    icon: <UilTwitterAlt size="40" className="phoneIcon" />,
  },
];
