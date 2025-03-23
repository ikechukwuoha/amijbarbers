import React, { useState, useEffect } from 'react';
import { 
  Calendar, Clock, ChevronLeft, ChevronRight, CreditCard, 
  User, Phone, Mail, Users, Check, AlertTriangle, X, Info
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

const BookingPage = ({ onBack = [] }) => {
const location = useLocation();
const { service, barbers = [] } = location.state || {};
  // State for booking form
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedBarber, setSelectedBarber] = useState('');
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [bookedSlots, setBookedSlots] = useState({});
  const [tooltipInfo, setTooltipInfo] = useState({ visible: false, time: '', top: 0, left: 0 });
  
  // Available time slots
  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', 
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM'
  ];

  // Fetch booked slots on component mount and when date changes
  useEffect(() => {
    fetchBookedSlots();
  }, []);


if (!service) {
    return <div>No service selected. Please go back and select a service.</div>;
}

  // Function to fetch booked slots from your backend
  const fetchBookedSlots = () => {
    // This would typically be an API call to get booked slots
    // For now, we'll simulate some booked slots including March 23, 2024 at 9:00 AM
    
    // Mock data for demonstration
    const mockBookedSlots = {
      '2024-03-23': ['9:00 AM', '2:00 PM'], // March 23, 2024 has 9:00 AM and 2:00 PM booked
      '2024-03-24': ['11:00 AM', '1:00 PM'],
      '2024-03-25': ['10:00 AM', '4:00 PM'],
    };
    
    setBookedSlots(mockBookedSlots);
  };

  // Check if a time slot is booked
  const isTimeSlotBooked = (date, time) => {
    return bookedSlots[date] && bookedSlots[date].includes(time);
  };

  // Function to get days in month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to get day of week (0 = Sunday, 6 = Saturday)
  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  // Calculate calendar days
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  
  // Generate calendar days
  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null); // Empty cells for days before the 1st
  }
  
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // Navigate months
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  // Date formatting
  const formatDate = (date) => {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };

  // Month name
  const monthName = currentMonth.toLocaleDateString('en-US', { month: 'long' });

  // Select date
  const handleDateSelect = (day) => {
    if (!day) return;
    
    const selectedDate = new Date(year, month, day);
    // Don't allow booking dates in the past
    if (selectedDate < new Date().setHours(0, 0, 0, 0)) return;
    
    const formattedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setBookingDate(formattedDate);
    setBookingTime(''); // Reset time selection when date changes
  };

  // Handle booking submission
  const handleSubmit = () => {
    if (currentStep === 1) {
      // Validate date and time
      if (!bookingDate || !bookingTime) {
        setError('Please select both date and time');
        return;
      }
      // For barber services, validate barber selection
      if (service.category === 'barber' && !selectedBarber && barbers.length > 0) {
        setError('Please select a barber');
        return;
      }
      setError('');
      setCurrentStep(2);
    } else if (currentStep === 2) {
      // Validate contact information
      if (!name || !email || !phone) {
        setError('Please fill in all fields');
        return;
      }
      if (!email.includes('@')) {
        setError('Please enter a valid email address');
        return;
      }
      setError('');
      setCurrentStep(3);
    } else if (currentStep === 3) {
      // Process payment
      initiatePayment();
    }
  };

  // Initiate Paystack payment
  const initiatePayment = () => {
    setIsLoading(true);
    
    // This would typically be an API call to your backend
    // For now, we'll simulate a payment process
    setTimeout(() => {
      setIsLoading(false);
      
      // After successful payment, update booked slots
      updateBookedSlots();
      
      // Mock function for Paystack integration
      mockPaystackPayment();
    }, 1500);
  };

  // Update booked slots after successful booking
  const updateBookedSlots = () => {
    // This would be an API call to your backend to update booked slots
    // For now, we'll update our local state
    const updatedBookedSlots = { ...bookedSlots };
    
    if (!updatedBookedSlots[bookingDate]) {
      updatedBookedSlots[bookingDate] = [];
    }
    
    if (!updatedBookedSlots[bookingDate].includes(bookingTime)) {
      updatedBookedSlots[bookingDate].push(bookingTime);
    }
    
    setBookedSlots(updatedBookedSlots);
  };

  // Mock Paystack payment
  const mockPaystackPayment = () => {
    const paymentInfo = {
      publicKey: 'pk_test_xxxxxxxxxxxxxxxxxxxxxxxx', // Replace with your Paystack public key
      email,
      amount: service.price * 100, // Paystack expects amount in kobo (or cents)
      reference: `BOOKING-${Date.now()}`,
      onSuccess: () => {
        // Handle successful payment
        setCurrentStep(4);
      },
      onCancel: () => {
        setError('Payment was cancelled');
      },
      onClose: () => {
        // Handle when payment modal is closed
      }
    };
    console.log(paymentInfo);
    
    // In a real implementation, you would use the Paystack SDK
    // For now, we'll just proceed to success
    setCurrentStep(4);
  };

  // Handle mouse enter for time slot tooltip
  const handleTimeSlotMouseEnter = (e, time) => {
    if (isTimeSlotBooked(bookingDate, time)) {
      const rect = e.currentTarget.getBoundingClientRect();
      setTooltipInfo({
        visible: true,
        time: time,
        top: e.clientY,
        left: e.clientX
      });
    }
  };
  
  // Handle mouse leave for time slot tooltip
  const handleTimeSlotMouseLeave = () => {
    setTooltipInfo({ ...tooltipInfo, visible: false });
  };

  // Render steps
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Select Date & Time</h2>
            
            {/* Date selection */}
            <div className="bg-gray-900 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <button 
                  onClick={goToPreviousMonth}
                  className="text-amber-500 hover:text-amber-400"
                >
                  <ChevronLeft size={20} />
                </button>
                <h3 className="text-lg font-medium text-white">{monthName} {year}</h3>
                <button 
                  onClick={goToNextMonth}
                  className="text-amber-500 hover:text-amber-400"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
              
              {/* Calendar */}
              <div className="grid grid-cols-7 gap-1 text-center mb-2">
                {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
                  <div key={day} className="text-gray-400 text-sm py-1">{day}</div>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center">
                {days.map((day, index) => {
                  const dateString = day ? `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}` : '';
                  const isToday = day && new Date(dateString).setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0);
                  const isPast = day && new Date(dateString) < new Date().setHours(0, 0, 0, 0);
                  const isSelected = dateString === bookingDate;
                  const hasBookings = day && bookedSlots[dateString] && bookedSlots[dateString].length > 0;
                  
                  return (
                    <div 
                      key={index}
                      onClick={() => handleDateSelect(day)}
                      className={`py-2 rounded-md text-sm relative ${
                        !day 
                          ? 'invisible' 
                          : isPast 
                            ? 'text-gray-600 cursor-not-allowed' 
                            : isSelected 
                              ? 'bg-amber-500 text-black font-medium cursor-pointer' 
                              : isToday 
                                ? 'border border-amber-500 text-amber-500 cursor-pointer hover:bg-gray-800' 
                                : 'text-white cursor-pointer hover:bg-gray-800'
                      }`}
                    >
                      {day}
                      {hasBookings && !isPast && !isSelected && (
                        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-red-500 rounded-full"></span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Time selection */}
            <div>
              <h3 className="text-lg font-medium text-white mb-3">Select Time</h3>
              
              {bookingDate ? (
                <div className="grid grid-cols-3 gap-2 relative">
                  {timeSlots.map(time => {
                    const isBooked = isTimeSlotBooked(bookingDate, time);
                    
                    return (
                      <div 
                        key={time}
                        onClick={() => !isBooked && setBookingTime(time)}
                        onMouseEnter={(e) => handleTimeSlotMouseEnter(e, time)}
                        onMouseLeave={handleTimeSlotMouseLeave}
                        className={`py-2 px-4 rounded-md text-center relative ${
                          isBooked
                            ? 'bg-gray-800 text-gray-500 cursor-not-allowed'
                            : bookingTime === time 
                              ? 'bg-amber-500 text-black font-medium cursor-pointer' 
                              : 'bg-gray-900 text-white hover:bg-gray-800 cursor-pointer'
                        }`}
                      >
                        {time}
                        {isBooked && (
                          <span className="absolute top-1 right-1">
                            <X size={14} className="text-red-500" />
                          </span>
                        )}
                      </div>
                    );
                  })}

                  {tooltipInfo.visible && (
                    <div 
                      className="absolute z-10 bg-gray-800 text-white p-2 rounded shadow-lg text-sm"
                      style={{ 
                        top: '0px', 
                        left: '50%',
                        transform: 'translateX(-50%) translateY(-100%)',
                        marginTop: '-8px'
                      }}
                    >
                      <div className="flex items-center">
                        <AlertTriangle size={14} className="text-red-500 mr-1" />
                        <span>This time slot has been booked.</span>
                      </div>
                      <p className="text-gray-300 text-xs mt-1">Please select another time or date.</p>
                    </div>
                  )}
                </div>
              ) : (
                <div className="bg-gray-900 p-4 rounded-md text-center text-gray-400">
                  Please select a date first to view available time slots
                </div>
              )}
              
              <div className="mt-4 flex items-center text-sm text-gray-400">
                <Info size={14} className="mr-1" />
                <span>Time slots with <X size={14} className="inline text-red-500 mx-1" /> have already been booked</span>
              </div>
            </div>
            
            {/* Barber selection (only for barber services) */}
                {service.category === 'barber' && barbers.length > 0 && (
                    <div>
                    <h3 className="text-lg font-medium text-white mb-3">Select Barber</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {barbers.map(barber => (
                        <div 
                            key={barber.id}
                            onClick={() => setSelectedBarber(barber.id)}
                            className={`p-3 rounded-md cursor-pointer transition-all ${
                            selectedBarber === barber.id 
                                ? 'bg-amber-500 text-black' 
                                : 'bg-gray-900 text-white hover:bg-gray-800'
                            }`}
                        >
                            <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
                                <User size={20} className={selectedBarber === barber.id ? 'text-black' : 'text-amber-500'} />
                            </div>
                            <div>
                                <div className="font-medium">{barber.name}</div>
                                <div className={`text-xs ${selectedBarber === barber.id ? 'text-black' : 'text-gray-400'}`}>
                                {barber.specialization}, {barber.contact}
                                </div>
                            </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                )
                }
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Contact Information</h2>
            
            <div className="bg-gray-900 rounded-lg p-4 mb-4">
              <div className="flex items-center border-b border-gray-800 pb-3 mb-3">
                <Calendar size={18} className="text-amber-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-400">Appointment Date & Time</div>
                  <div className="text-white">{bookingDate && formatDate(bookingDate)} at {bookingTime}</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock size={18} className="text-amber-500 mr-2" />
                <div>
                  <div className="text-sm text-gray-400">Service Duration</div>
                  <div className="text-white">{service.duration} minutes</div>
                </div>
              </div>
              
              {service.category === 'barber' && selectedBarber && (
                <div className="flex items-center mt-3 pt-3 border-t border-gray-800">
                  <User size={18} className="text-amber-500 mr-2" />
                  <div>
                    <div className="text-sm text-gray-400">Selected Barber</div>
                    <div className="text-white">
                      {barbers.find(b => b.id === selectedBarber)?.name}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-400 mb-1">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-3 focus:border-amber-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-1">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-3 focus:border-amber-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-gray-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full bg-gray-900 text-white border border-gray-700 rounded-md py-2 px-3 focus:border-amber-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        );
      
      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-white">Review & Payment</h2>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <h3 className="text-lg font-medium text-white mb-3">Booking Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Service:</span>
                  <span className="text-white font-medium">{service.name}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Date & Time:</span>
                  <span className="text-white">{bookingDate && formatDate(bookingDate)} at {bookingTime}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Duration:</span>
                  <span className="text-white">{service.duration} minutes</span>
                </div>
                
                {service.category === 'barber' && selectedBarber && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Barber:</span>
                    <span className="text-white">
                      {barbers.find(b => b.id === selectedBarber)?.name}
                    </span>
                  </div>
                )}
              </div>
              
              <div className="border-t border-gray-800 pt-3 mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-400">Total:</span>
                  <span className="text-xl text-amber-500 font-bold">${service.price.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="bg-black bg-opacity-50 p-3 rounded-md mb-4">
                <div className="flex items-start">
                  <CreditCard size={18} className="text-amber-500 mr-2 mt-1" />
                  <div className="text-sm text-gray-300">
                    Payment will be processed securely via Paystack. Click "Proceed to Payment" to complete your booking.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 4:
        return (
          <div className="space-y-6 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
              <Check size={32} className="text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-white">Booking Confirmed!</h2>
            
            <p className="text-gray-300">
              Your appointment has been successfully booked for <br/>
              <span className="text-white font-medium">
                {bookingDate && formatDate(bookingDate)} at {bookingTime}
              </span>
            </p>
            
            <div className="bg-gray-900 rounded-lg p-4 text-left">
              <h3 className="text-lg font-medium text-white mb-3">Booking Details</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Booking Reference:</span>
                  <span className="text-white font-medium">BOOKING-{Date.now().toString().slice(-8)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Service:</span>
                  <span className="text-white">{service.name}</span>
                </div>
                
                {service.category === 'barber' && selectedBarber && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Barber:</span>
                    <span className="text-white">
                      {barbers.find(b => b.id === selectedBarber)?.name}
                    </span>
                  </div>
                )}
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount Paid:</span>
                  <span className="text-amber-500 font-medium">${service.price.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300">
              A confirmation email has been sent to <span className="text-white">{email}</span>
            </p>
          </div>
        );
      
      default:
        return null;
    }
  };

  // Back button handler
  const handleBack = () => {
    if (currentStep > 1 && currentStep < 4) {
      setCurrentStep(currentStep - 1);
      setError('');
    } else if (currentStep === 4) {
      // If confirmation screen, go back to services
      onBack();
    } else {
      onBack();
    }
  };

  // Title for the current step
  const getStepTitle = () => {
    switch (currentStep) {
      case 1: return 'Book Appointment';
      case 2: return 'Contact Details';
      case 3: return 'Payment';
      case 4: return 'Confirmation';
      default: return 'Book Appointment';
    }
  };

  // Button text for the current step
  const getButtonText = () => {
    switch (currentStep) {
      case 1: return 'Continue to Details';
      case 2: return 'Continue to Payment';
      case 3: return 'Proceed to Payment';
      case 4: return 'Back to Services';
      default: return 'Continue';
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6">
        <button 
          onClick={handleBack}
          className="text-amber-500 hover:text-amber-400 flex items-center"
        >
          <ChevronLeft size={16} className="mr-1" /> 
          {currentStep === 4 ? 'Back to Services' : 'Back'}
        </button>
      </div>
      
      <div className="bg-black border border-gray-800 rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-800">
          <h1 className="text-2xl font-bold text-white">
            {getStepTitle()} - {service.name}
          </h1>
        </div>
        
        {/* Progress indicator */}
        {currentStep < 4 && (
          <div className="px-6 py-3 bg-gray-900 border-b border-gray-800">
            <div className="flex items-center space-x-2">
              {[1, 2, 3].map((step) => (
                <React.Fragment key={step}>
                  <div 
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium 
                      ${currentStep >= step ? 'bg-amber-500 text-black' : 'bg-gray-800 text-white'}`}
                  >
                    {step}
                  </div>
                  
                  {step < 3 && (
                    <div 
                      className={`flex-1 h-1 ${currentStep > step ? 'bg-amber-500' : 'bg-gray-800'}`}
                    ></div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
        
        {/* Error message */}
        {error && (
          <div className="mx-6 mt-4 px-4 py-3 bg-red-900 bg-opacity-50 border border-red-700 rounded-md text-white flex items-start">
            <AlertTriangle size={18} className="text-red-400 mr-2 flex-shrink-0 mt-0.5" />
            <p>{error}</p>
          </div>
        )}
        
        <div className="p-6">
          {renderStep()}
          
          {currentStep < 4 && (
            <div className="mt-8 flex justify-end">
              <button 
                onClick={handleSubmit}
                disabled={isLoading}
                className={`flex items-center bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-6 rounded-md ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? 'Processing...' : getButtonText()}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingPage;