import React from 'react';
import Filter from '../filter';
import "./delivery.css";

const deliveryFilters = [
  {
    id: 1,
    icon: <i className="fa-solid fa-sliders absolute-center"></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",
  },
  {
    id: 3,
    title: "Safe and Hygienic",
  },
  {
    id: 4,
    title: "Pure Veg",
  },
  {
    id: 5,
    title: "Delivery Time",
    icon: <i className="fa-solid fa-arrow-up-wide-short absolute-center"></i>,
  },
  {
    id: 6,
    title: "Great Offers",
  },
];

const Delivery = () => {
  return (
    <div>
      <div className="max-width">
        <Filter filterList={deliveryFilters}/>
      </div>
    </div>
  );
};
export default Delivery;