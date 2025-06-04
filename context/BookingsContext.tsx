import React, { createContext, useState, ReactNode, useContext } from 'react';

type Booking = {
  studioId: string;
  studioName: string;
  time: string;
};

type BookingsContextType = {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
};

const BookingsContext = createContext<BookingsContextType | undefined>(undefined);

export const BookingsProvider = ({ children }: { children: ReactNode }) => {
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = (booking: Booking) => {
    setBookings((prev) => [...prev, booking]);
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking }}>
      {children}
    </BookingsContext.Provider>
  );
};

export const useBookings = () => {
  const context = useContext(BookingsContext);
  if (!context) {
    throw new Error('useBookings must be used within a BookingsProvider');
  }
  return context;
};
