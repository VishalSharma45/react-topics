import React, { useState } from 'react';
 
const GuestPage = () => {
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions with the guest information (e.g., submit to a server)
    setIsSubmitted(true);
  };

  return (
    <div className="guest-container">
      <h2>Welcome, Guest!</h2>
      {isSubmitted ? (
        <p>Thank you, {guestName}! We've received your information.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="guestName">Your Name:</label>
          <input
            type="text"
            id="guestName"
            value={guestName}
            onChange={(e) => setGuestName(e.target.value)}
            required
          />

          <label htmlFor="guestEmail">Your Email:</label>
          <input
            type="email"
            id="guestEmail"
            value={guestEmail}
            onChange={(e) => setGuestEmail(e.target.value)}
            required
          />

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default GuestPage;