import {
  BarIcon,
  HikingIcon,
  HotelIcon,
  RestaurantIcon,
} from "components/modules/Icons";

export const SUBMENU_ITEM_ENUM = {
  hospedaje: "Hospedaje",
  restaurant: "Restaurantes",
  bar: "Bares",
  site: "Sitios",
};

export const PATHS_ENUM = {
  sitios: "sitios",
  hospedaje: "hospedaje",
  restaurant: "restaurant",
  bar: "bar",
};

export const MENU_CATEGORIES_ENUM = [
  {
    label: "Atractivos",
    key: "sitios",
    Icon: <HikingIcon className="icon-card-list" />,
  },
  {
    label: "Hospedaje",
    key: "hospedaje",
    Icon: <HotelIcon className="icon-card-list" />,
  },
  {
    label: "Restaurantes",
    key: "restaurant",
    Icon: <RestaurantIcon className="icon-card-list" />,
  },
  {
    label: "Bares",
    key: "bar",
    Icon: <BarIcon className="icon-card-list" />,
  },
];
