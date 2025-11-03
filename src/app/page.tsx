"use client";
import React, { useState, useEffect } from "react";
import {
  Heart,
  MapPin,
  Calendar,
  Clock,
  Users,
  Mail,
  Phone,
} from "lucide-react";
import Image from "next/image";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type Section = "home" | "story" | "details" | "rsvp";

interface NavItem {
  id: Section;
  icon: React.ElementType;
  label: string;
}

export default function WeddingInvitation(): React.ReactElement {
  const [timeLeft, setTimeLeft] = useState<Partial<TimeLeft>>({});
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [showRSVP, setShowRSVP] = useState<boolean>(false);

  // Wedding date - Set your actual date here
  const weddingDate: Date = new Date("2025-06-15T16:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now: Date = new Date();
      const difference: number = weddingDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (section: Section): void => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems: NavItem[] = [
    { id: "home", icon: Heart, label: "Home" },
    { id: "story", icon: Users, label: "Story" },
    { id: "details", icon: Calendar, label: "Details" },
    { id: "rsvp", icon: Mail, label: "RSVP" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-blue-50 via-sky-50 to-blue-100 font-serif">
      <div className="absolute top-0 right-0 w-full h-screen z-0 overflow-hidden opacity-30">
        <Image
          src="/main-bg.jpg"
          alt="Vercel Logo"
          width={2200}
          height={2200}
          className="w-full h-screen"
        />
      </div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 "
      >
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-sky-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center">
          {/* <div className="mb-6">
            <div className="m-4">
              <Image
                src="/hero-cover.jpg"
                alt="Logo"
                width={1000}
                height={1000}
                className="mx-auto aspect-2/3 max-w-sm border-8 border-blue-400 rounded-full object-cover mt-4"
              />
            </div>
          </div> */}
          <div className="mb-6">
            <div className="m-4">
              <Image
                src="/main-card.png"
                alt="Logo"
                width={1000}
                height={1000}
                className="mx-auto max-w-md "
              />
            </div>
          </div>

          <p className="text-sm tracking-widest text-gray-600 uppercase mb-4">
            We're getting married
          </p>

          {/* <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-2">
            Raksmey & Dilen
          </h1> */}
          <div className="">
            <Image
              src="/name.png"
              alt="Logo"
              width={1000}
              height={1000}
              className="mx-auto max-w-sm object-cover mt-4"
            />
          </div>

          <div className="w-24 h-1 bg-linear-to-r from-transparent via-blue-400 to-transparent mx-auto my-6"></div>

          <p className="text-xl text-gray-600 mb-8">15th June 2025</p>

          <div className="flex items-center justify-center gap-2 text-gray-500 mb-12">
            <MapPin className="w-4 h-4" />
            <p className="text-sm">The Garden Estate, Napa Valley</p>
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-3 max-w-sm mx-auto mb-8">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-white/80 backdrop-blur rounded-lg p-3"
              >
                <div className="text-2xl font-bold text-blue-500">
                  {value || 0}
                </div>
                <div className="text-xs text-gray-600 uppercase">{unit}</div>
              </div>
            ))}
          </div>

          {/* <button
            onClick={() => scrollToSection("rsvp")}
            className="bg-linear-to-r from-blue-400 to-sky-500 text-white px-8 py-3 rounded-full font-sans text-sm tracking-wide hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            RSVP Now
          </button> */}
        </div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="px-6 py-16 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Our Story
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-8"></div>

          <div className="space-y-6">
            <div className="relative pl-8 border-l-2 border-blue-300 pb-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]"></div>
              <p className="text-sm text-gray-500 mb-1">Spring 2019</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                We Met
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our paths crossed at a mutual friend's art gallery opening. A
                conversation about impressionism turned into hours of laughter
                and connection.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-300 pb-8">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]"></div>
              <p className="text-sm text-gray-500 mb-1">Summer 2020</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                First Adventure
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Our first trip together to the mountains. We discovered our
                shared love for hiking, campfire stories, and watching sunsets.
              </p>
            </div>

            <div className="relative pl-8 border-l-2 border-blue-300 pb-0">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-400 rounded-full -translate-x-[9px]"></div>
              <p className="text-sm text-gray-500 mb-1">Winter 2024</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                The Proposal
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                On a snowy evening in Paris, overlooking the Eiffel Tower, Dilen
                got down on one knee. Of course, she said yes!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section
        id="details"
        className="px-6 py-16 bg-linear-to-b from-blue-50 to-white"
      >
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
            Event Details
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-12"></div>

          <div className="space-y-6">
            {/* Ceremony */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Heart className="w-6 h-6 text-blue-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Ceremony
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>Saturday, June 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <span>4:00 PM - 5:00 PM</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                      <span>
                        The Garden Estate
                        <br />
                        123 Vineyard Lane, Napa Valley, CA
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Reception */}
            <div className="bg-white rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="bg-sky-100 p-3 rounded-full">
                  <Users className="w-6 h-6 text-sky-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Reception
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-sky-400" />
                      <span>Saturday, June 15, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-sky-400" />
                      <span>6:00 PM - 11:00 PM</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-sky-400 mt-0.5" />
                      <span>
                        The Garden Estate
                        <br />
                        Same Venue - Grand Ballroom
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-sans">View on Map</span>
            </a>
          </div>
        </div>
      </section>

      {/* RSVP Section */}
      <section id="rsvp" className="px-6 py-16 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">
            RSVP
          </h2>
          <div className="w-16 h-1 bg-blue-400 mx-auto mb-8"></div>

          <p className="text-center text-gray-600 mb-8">
            Please confirm your attendance by May 15th, 2025
          </p>

          {!showRSVP ? (
            <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-2xl p-8 text-center">
              <Heart className="w-16 h-16 mx-auto mb-4 text-blue-400" />
              <p className="text-gray-600 mb-6">
                Your presence would mean the world to us. Please let us know if
                you can join our celebration!
              </p>
              <button
                onClick={() => setShowRSVP(true)}
                className="bg-linear-to-r from-blue-400 to-sky-500 text-white px-8 py-3 rounded-full font-sans text-sm tracking-wide hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Fill RSVP Form
              </button>
            </div>
          ) : (
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Guests *
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all">
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Will you attend? *
                </label>
                <div className="flex gap-4">
                  <label className="flex-1 relative">
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      className="peer sr-only"
                    />
                    <div className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-blue-400 peer-checked:bg-blue-50 peer-checked:text-blue-600 transition-all">
                      Joyfully Accept
                    </div>
                  </label>
                  <label className="flex-1 relative">
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      className="peer sr-only"
                    />
                    <div className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg text-center cursor-pointer peer-checked:border-gray-400 peer-checked:bg-gray-50 peer-checked:text-gray-600 transition-all">
                      Regretfully Decline
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dietary Restrictions
                </label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all"
                  rows={3}
                  placeholder="Any dietary restrictions or allergies we should know about?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-400 to-sky-500 text-white py-4 rounded-lg font-sans text-sm tracking-wide hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                Submit RSVP
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-6 py-16 bg-linear-to-b from-white to-blue-50">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Questions?</h2>

          <div className="space-y-4">
            <a
              href="mailto:wedding@raksmeyAnddilen.com"
              className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg  hover transition-shadow"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              <span className="text-gray-700">wedding@raksmeyAnddilen.com</span>
            </a>

            <a
              href="tel:+1234567890"
              className="flex items-center justify-center gap-3 bg-white p-4 rounded-lg  hover transition-shadow"
            >
              <Phone className="w-5 h-5 text-blue-400" />
              <span className="text-gray-700">+1 (234) 567-890</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pt-12 pb-28 bg-blue-100 text-center">
        <Heart className="w-8 h-8 mx-auto mb-4 text-blue-400 fill-blue-400" />
        <p className="text-gray-600 mb-2">
          We can't wait to celebrate with you!
        </p>
        <p className="text-sm text-gray-500">Raksmey & Dilen • June 15, 2025</p>
      </footer>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0    z-50">
        <div className="flex justify-around items-center py-3 px-4 max-w-md mx-auto m-4 rounded-full bg-white/60 backdrop-blur-lg">
          {navItems.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                activeSection === id ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-xs font-sans">{label}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
}
