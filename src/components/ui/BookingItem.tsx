// components/BookingItem.js
import React from 'react';

type Iprops={
    title:string;
    description:string;
    price:string;
    selected:boolean;
    onToggle:()=>void
}
const BookingItem = ({ title, description, price, selected, onToggle }:Iprops) => {
  return (
    <div className={`booking-item ${selected ? 'selected' : ''}`}>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Price: {price}</p>
      <button onClick={onToggle}>{selected ? 'Remove' : 'Book'}</button>
    </div>
  );
};

export default BookingItem;
