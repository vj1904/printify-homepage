import Delivery from "../images/3685741.jpg";
import Profit from "../images/profit.png";
import Idea from "../images/idea.jpg";

export default function Features() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Feature 1: Fast Delivery */}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          {/* Top Centered Round Image */}
          <img
            src={Delivery}
            alt="Fast Delivery"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">Fast Delivery</h3>
          <p>Get your products in no time with our rapid delivery options.</p>
        </div>

        {/* Feature 2: Higher Profits */}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          {/* Top Centered Round Image */}
          <img
            src={Profit}
            alt="Higher Profits"
            className="w-24 h-24 mx-auto rounded-full mb-4 bg-white"
          />
          <h3 className="text-xl font-semibold">Higher Profits</h3>
          <p>
            We offer some of the lowest prices in the industry because print
            providers continuously compete to win your business.
          </p>
        </div>

        {/* Feature 3: Top-Quality Materials */}
        <div className="p-6 bg-gray-100 rounded-lg text-center">
          {/* Top Centered Round Image */}
          <img
            src={Idea}
            alt="Top-Quality Materials"
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-xl font-semibold">Top-Quality Materials</h3>
          <p>Premium materials for durable, long-lasting products.</p>
        </div>
      </div>
    </section>
  );
}
