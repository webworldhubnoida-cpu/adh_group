import React from "react";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaPhoneAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const properties = [
  {
    id: 1,
    title: "3 BHK Luxury Apartment",
    location: "Gomti Nagar, Lucknow",
    price: "₹85 Lakh",
    area: "1650 Sq.ft",
    beds: 3,
    baths: 3,
    status: "Ready To Move",
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d",
  },
  {
    id: 2,
    title: "2 BHK Premium Flat",
    location: "Shaheed Path, Lucknow",
    price: "₹62 Lakh",
    area: "1250 Sq.ft",
    beds: 2,
    baths: 2,
    status: "Resale",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
  },
  {
    id: 3,
    title: "4 BHK Villa",
    location: "Sultanpur Road, Lucknow",
    price: "₹1.45 Cr",
    area: "2800 Sq.ft",
    beds: 4,
    baths: 4,
    status: "Ready To Move",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
];

const ResaleProperty = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[350px] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Resale Properties
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Explore verified resale apartments, villas and commercial properties
            with best market value.
          </p>
        </div>
      </section>

      {/* Property Listing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-orange-500 font-semibold uppercase tracking-wider">
              Available Properties
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-3">
              Featured Resale Listings
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <div
                key={property.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
              >
                <div className="relative">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-64 object-cover"
                  />

                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-4 py-2 rounded-full">
                    {property.status}
                  </span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{property.title}</h3>

                  <div className="flex items-center text-gray-600 mb-4">
                    <FaMapMarkerAlt className="mr-2 text-orange-500" />
                    {property.location}
                  </div>

                  <div className="text-2xl font-bold text-orange-500 mb-5">
                    {property.price}
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center border-t border-b py-4">
                    <div>
                      <FaBed className="mx-auto text-orange-500 mb-2" />
                      <p className="text-sm">{property.beds} Beds</p>
                    </div>

                    <div>
                      <FaBath className="mx-auto text-orange-500 mb-2" />
                      <p className="text-sm">{property.baths} Baths</p>
                    </div>

                    <div>
                      <FaRulerCombined className="mx-auto text-orange-500 mb-2" />
                      <p className="text-sm">{property.area}</p>
                    </div>
                  </div>

                  <button
                    className="w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 cursor-pointer"
                    onClick={() => navigate("/contact")}
                  >
                    <FaPhoneAlt />
                    Enquire Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= PROPERTY VIDEO ================= */}
      <section className="relative overflow-hidden bg-gray-900">
        <div className="relative h-[350px] sm:h-[450px] lg:h-[550px]">
          {/* Video */}
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
          >
            <source src="/videos/property-tour.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/55" />

          {/* Content */}
          <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
            <div className="max-w-3xl text-white">
              <span className="mb-4 inline-block rounded-full bg-orange-500 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em]">
                Find Your Perfect Property
              </span>

              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Discover Homes That
                <span className="block text-orange-400">
                  Feel Like Your Own
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-200 sm:text-base">
                Explore premium homes, apartments and villas in prime locations
                with trusted property assistance.
              </p>

              <button
                onClick={() => navigate("/contact")}
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-orange-600 hover:shadow-xl"
              >
                Enquire About Property
                <FaPhoneAlt className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResaleProperty;
