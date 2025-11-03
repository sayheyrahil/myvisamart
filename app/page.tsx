'use client';

import { useState, useEffect } from 'react';
import { Mail, Phone, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-12-31T23:59:59').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async () => {
    if (email) {
      setIsLoading(true);
      try {
        // Option 1: Using EmailJS (you'll need to install emailjs-com and configure it)
        // import emailjs from 'emailjs-com';
        // await emailjs.send(
        //   'YOUR_SERVICE_ID',
        //   'YOUR_TEMPLATE_ID',
        //   {
        //     to_email: email,
        //     subject: 'Thank you for subscribing!',
        //     message: 'Thank you for subscribing to Visamart! We will notify you when we launch.'
        //   },
        //   'YOUR_USER_ID'
        // );

        // Option 2: Send to your own API endpoint
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: email,
            subject: 'Thank you for subscribing to Visamart!',
            message: `Hi there! Thank you for subscribing to Visamart with email: ${email}. We'll notify you as soon as we launch!`
          }),
        });

        if (response.ok) {
          setIsSubmitted(true);
          setEmail('');
        } else {
          throw new Error('Failed to send email');
        }
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Sorry, there was an error sending the email. Please try again.');
      } finally {
        setIsLoading(false);
      }
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <header className="bg-sky-400 text-white hidden">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <nav className="hidden md:flex gap-8 text-sm">
            <a href="#" className="hover:text-sky-100 transition-colors">Discover</a>
            <a href="#" className="hover:text-sky-100 transition-colors">Special Deals</a>
            <a href="#" className="hover:text-sky-100 transition-colors">Support</a>
          </nav>
          <div className="flex items-center gap-6 ml-auto text-sm">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-sky-100 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 98765 43210</span>
            </a>
            <a href="mailto:example@gmail.com" className="flex items-center gap-2 hover:text-sky-100 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">example@gmail.com</span>
            </a>
          </div>
        </div>
      </header>

      <div className="border-b-4 border-sky-400 hidden">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8 text-sky-500" />
            <span className="text-2xl font-bold text-gray-800">Visamart</span>
          </div>

          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <Input
                type="search"
                placeholder="Search"
                className="w-full pr-12 h-12 rounded-full border-2 border-gray-200 focus:border-sky-400"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-sky-500 hover:text-sky-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="rounded-full border-2 border-sky-400 text-sky-500 hover:bg-sky-50">
              Login
            </Button>
            <Button className="rounded-full bg-sky-500 hover:bg-sky-600 text-white">
              Sign Up
            </Button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-8">
            <div className="bg-sky-500 text-white  rounded-full p-3 text-xl md:p-10 md:text-8xl  font-medium shadow-lg">
              Coming Soon
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Something Amazing is
            <span className="block text-sky-500 mt-2">On Its Way</span>
          </h1>

          <p className="text-xl text-gray-600 mb-16 max-w-2xl mx-auto">
            We're working hard to bring you an incredible experience. Get ready for something extraordinary!
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-sky-400 transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-sky-500 mb-2">
                {timeLeft.days}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Days</div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-sky-400 transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-sky-500 mb-2">
                {timeLeft.hours}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Hours</div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-sky-400 transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-sky-500 mb-2">
                {timeLeft.minutes}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Minutes</div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 border-t-4 border-sky-400 transform hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-sky-500 mb-2">
                {timeLeft.seconds}
              </div>
              <div className="text-gray-600 text-sm uppercase tracking-wide">Seconds</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Get Notified When We Launch
            </h2>
            <p className="text-gray-600 mb-6">
              Be the first to know when we go live. Enter your email below.
            </p>
            {isSubmitted ? (
              <div className="text-center py-4">
                <div className="text-green-600 font-semibold mb-2">✓ Thank you!</div>
                <p className="text-gray-600">We'll notify you when we launch.</p>
              </div>
            ) : (
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 border-2 border-gray-200 focus:border-sky-400"
                />
                <Button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-sky-500 hover:bg-sky-600 h-12 px-8 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Sending...' : 'Notify Me'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-20 hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShoppingBag className="w-6 h-6 text-sky-400" />
            <span className="text-xl font-bold">Visamart</span>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2025 Visamart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
