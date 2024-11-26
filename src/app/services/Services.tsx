const Services = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-gray-800 mb-6">Our Premium Services</h2>
        <p className="text-xl text-gray-600 mb-12">
          We offer a comprehensive suite of delivery services tailored to meet the needs of both businesses and individuals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Service Card - Same Day Delivery */}
          <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl  font-semibold text-blue-600 mb-6">Same Day Delivery</h3>
            <p className="text-lg text-gray-700">
              Enjoy the convenience of having your items delivered on the same day, ensuring urgent deliveries are never a problem.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-medium transition duration-300 hover:bg-blue-500">
              Learn More
            </button>
          </div>

          {/* Service Card - Scheduled Delivery */}
          <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl  font-semibold text-blue-600 mb-6">Scheduled Delivery</h3>
            <p className="text-lg text-gray-700">
              Schedule your deliveries to fit your needs, whether it’s for the next day, week, or at a specific time.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-medium transition duration-300 hover:bg-blue-500">
              Learn More
            </button>
          </div>

          {/* Service Card - International Shipping */}
          <div className="bg-white p-8 rounded-xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-3xl  font-semibold text-blue-600 mb-6">International Shipping</h3>
            <p className="text-lg text-gray-700">
              We provide reliable international delivery services, ensuring your shipments reach their global destinations securely.
            </p>
            <button className="mt-6 bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-medium transition duration-300 hover:bg-blue-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
