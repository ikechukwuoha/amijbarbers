import React from 'react';
import BookingPage from './BookingPage'; // Assuming you'll separate the components

// Direct booking flow that bypasses service selection
const DirectBookingFlow = ({ selectedService, onBack, barbers }) => {
    // Ensure selectedService is defined
    if (!selectedService) {
      return <div>No service selected</div>;
    }
  
    return (
      <BookingPage service={selectedService} onBack={onBack} barbers={barbers} />
    );
  };

export default DirectBookingFlow;