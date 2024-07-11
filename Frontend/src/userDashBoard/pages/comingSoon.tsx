import { useState, useEffect } from 'react';

const ComingSoonPage = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date('2024-12-31') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<{ days?: number; hours?: number; minutes?: number; seconds?: number }>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="min-h-screen pt-6 bg-gray-900 text-white flex items-start justify-center">
      <div className="max-w-lg w-full p-6 bg-gray-800 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="mb-6">We are working hard to bring you something amazing! Stay tuned for updates.</p>
        <div className="mb-6">
          {timeLeft.days !== undefined ? (
            <div className="flex justify-center space-x-4">
              <div>
                <span className="block text-4xl font-semibold">{timeLeft.days}</span>
                <span className="block">Days</span>
              </div>
              <div>
                <span className="block text-4xl font-semibold">{timeLeft.hours}</span>
                <span className="block">Hours</span>
              </div>
              <div>
                <span className="block text-4xl font-semibold">{timeLeft.minutes}</span>
                <span className="block">Minutes</span>
              </div>
              <div>
                <span className="block text-4xl font-semibold">{timeLeft.seconds}</span>
                <span className="block">Seconds</span>
              </div>
            </div>
          ) : (
            <span className="text-2xl">The time has come!</span>
          )}
        </div>
        <form className="mb-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg mb-3 bg-gray-700 text-white"
          />
          <button type="submit" className="w-full bg-blue-500 p-3 rounded-lg text-white font-semibold">Notify Me</button>
        </form>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" className="text-blue-500">Facebook</a>
          <a href="https://instagram.com" className="text-pink-500">Instagram</a>
          <a href="https://github.com" className="text-gray-500">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonPage;
