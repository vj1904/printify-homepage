// src/components/Hero.js
import Trust from "../images/29.jpg";
import Fast from "../images/5385940.jpg";

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center bg-gray-100 py-20">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">
          Build Your Dream Products
        </h1>
        <p className="mb-8 text-lg text-gray-800">
          High-quality printing on demand, at your fingertips.
        </p>
        <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Start Now
        </button>
      </section>

      {/* Branding Section with Image on the Right */}
      <section className="bg-white py-20 mx-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Left: Description/Branding */}
          <div className="md:w-1/2 text-left md:pr-8">
            <h2 className="text-3xl font-bold mb-4">
              A Trusted Partner for Your Business
            </h2>
            <p className="text-lg mb-6">
              Partner with us to ensure your products are delivered on time,
              every time. Our platform offers a seamless experience, from design
              to delivery.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Learn More
            </button>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={Trust}
              alt="Trusted Partner"
              className="w-3/4 h-auto rounded-lg shadow-lg mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Another Section with Image on the Right */}
      <section className="bg-gray-100 py-20">
        <div className="container flex flex-col md:flex-row items-center justify-between px-4 mx-20">
          {/* Left: Description */}
          <div className="md:w-1/2 text-left md:pr-8">
            <h2 className="text-3xl font-bold mb-4">Fast & Reliable Service</h2>
            <p className="text-lg mb-6">
              We ensure that your designs are brought to life with the highest
              quality, and we’re committed to delivering your orders on time.
            </p>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
              Get Started
            </button>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img
              src={Fast}
              alt="Fast & Reliable Service"
              className="w-2/3 h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
