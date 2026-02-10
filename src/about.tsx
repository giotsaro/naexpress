import logo from "./assets/logo.png";
import { BsTruck } from "react-icons/bs";
import { LuPhone  } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";

function About() {
  return (
  <section className="w-full bg-gray-100 py-20 px-4">
  <div className="max-w-6xl mx-auto">

    {/* Top Layout */}
    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">

    {/* Logo + MC/DOT */}
<div className="flex flex-col justify-center items-center gap-6">

  {/* Logo */}
  <div className="bg-white p-8 rounded-2xl shadow-md w-64 flex justify-center">
    <img
      src={logo}
      alt="N&A Express Logo"
      className="w-full h-auto"
    />
  </div>

  {/* MC/DOT */}
  <div className="bg-white p-4 rounded-lg shadow w-64 text-center">
    <h3 className="text-sm font-semibold text-gray-700">MC# 1634256</h3>
    <h3 className="text-sm font-semibold text-gray-700">DOT# 4226127</h3>
  </div>

</div>


      {/* Text */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          About N&A Express LLC
        </h2>

        <p className="text-gray-700 leading-relaxed mb-4">
          N&A Express LLC is a nationwide logistics company operating
          across the United States. We provide freight transportation
          services using cargo vans, sprinters, and box trucks.
        </p>

        <p className="text-gray-700 leading-relaxed mb-4">
          We use phone calls and SMS messaging to communicate with
          customers, brokers, drivers, and business partners for
          dispatching, load coordination, shipment updates, delivery
          confirmations, scheduling, and customer support.
        </p>

        <p className="text-gray-700 leading-relaxed">
          We value long-term partnerships and always strive to provide
          reliable service, clear communication, and competitive rates.
        </p>
      </div>
    </div>

    {/* Stats */}
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <BsTruck className="mx-auto mb-3 text-blue-700" size={32} />
        <h3 className="text-xl font-bold ">500+</h3>
        <p className="text-gray-600 text-sm">Monthly Loads</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <LuMapPin className="mx-auto mb-3 text-blue-700" size={32} />
        <h3 className="text-xl font-bold">48 States</h3>
        <p className="text-gray-600 text-sm">Coverage</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <FiUsers className="mx-auto mb-3 text-blue-700" size={32} />
        <h3 className="text-xl font-bold">100+</h3>
        <p className="text-gray-600 text-sm">Drivers</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow text-center">
        <LuPhone className="mx-auto mb-3 text-blue-700" size={32} />
        <h3 className="text-xl font-bold">24/7</h3>
        <p className="text-gray-600 text-sm">Support</p>
      </div>

    </div>

    {/* CTA */}
    <div className="text-center">
      <a
        href="#contact"
        className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow transition"
      >
        Contact Us
      </a>
    </div>

  </div>
</section>

  );
}

export default About;
