import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHiking,
  faHome,
  faConciergeBell,
  faAddressCard,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

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

export { HomeIcon, HikingIcon, BellIcon, ContactIcon, AddressIcon, ArrowDown };
