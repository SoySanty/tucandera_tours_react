import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHiking,
  faHome,
  faConciergeBell,
  faAddressCard,
  faChevronDown,
  faEnvelope,
  faHotel,
  faUtensils,
  faGlassMartiniAlt,
  faMountain,
  faCommentDots,
  faImage,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HomeIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faHome} className={className} />;
};
const HikingIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faHiking} className={className} />;
};
const BellIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faConciergeBell} className={className} />;
};
const ContactIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faConciergeBell} className={className} />;
};
const AddressIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faAddressCard} className={className} />;
};
const ArrowDown = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faChevronDown} className={className} />;
};
const HotelIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faHotel} className={className} />;
};
const RestaurantIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faUtensils} className={className} />;
};
const BarIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faGlassMartiniAlt} className={className} />;
};
const MountainIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faMountain} className={className} />;
};
const MessageIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faCommentDots} className={className} />;
};
const ImageIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faImage} className={className} />;
};
const DetailsIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faBook} className={className} />;
};

//Business
const WhatsappIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faWhatsapp} className={className} />;
};
const MailIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faEnvelope} className={className} />;
};
const FacebookIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faFacebookF} className={className} />;
};
const YouTubeIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faYoutube} className={className} />;
};
const InstagramIcon = (props) => {
  const { className = "" } = props;
  return <FontAwesomeIcon icon={faInstagram} className={className} />;
};

export {
  HomeIcon,
  HikingIcon,
  BellIcon,
  ContactIcon,
  AddressIcon,
  ArrowDown,
  HotelIcon,
  RestaurantIcon,
  BarIcon,
  MountainIcon,
  MessageIcon,
  WhatsappIcon,
  ImageIcon,
  DetailsIcon,
  MailIcon,
  FacebookIcon,
  YouTubeIcon,
  InstagramIcon,
};
