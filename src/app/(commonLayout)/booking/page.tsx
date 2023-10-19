// components/BookingPage.js
'use client'
import React, { useEffect, useState } from 'react';
import BookingItem from '../../../components/ui/BookingItem'; // Create this component for each service

const BookingPage = () => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [cartData,setCartData] = useState();
//   const handleServiceSelection = (service) => {
//     // Add or remove the selected service
//     if (selectedServices.includes(service)) {
//       setSelectedServices(selectedServices.filter((item) => item !== service));
//     } else {
//       setSelectedServices([...selectedServices, service]);
//     }
//   };

  return (
    <div className="booking-page">
      <h1 className="booking-page__title">Book Your Services</h1>
      <div className="booking-page__services">
        <BookingItem
          title="Laptop Screen Replacement"
          description="We will replace your laptop screen with a brand new one."
          price="$100"
          selected={selectedServices.includes("Laptop Screen Replacement")}
          onToggle={() => console.log("Laptop Screen Replacement")}
        />
        {/* Add more BookingItem components for other services */}
      </div>
      <div className="booking-page__summary">
        <h2>Booking Summary</h2>
        <ul>
          {selectedServices.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
        <p>Total: ${selectedServices.length * 100}</p>
      </div>
    </div>
  );
};

export default BookingPage;
