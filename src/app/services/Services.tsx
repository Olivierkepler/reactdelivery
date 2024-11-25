const Services = () => {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-10">Our Services</h2>
          <p className="text-lg mb-8">We offer a wide range of delivery services tailored to your needs.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Example Service Card */}
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Same Day Delivery</h3>
              <p>Get your items delivered on the same day!</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Scheduled Delivery</h3>
              <p>Schedule deliveries according to your convenience.</p>
            </div>
            <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">International Shipping</h3>
              <p>We offer international delivery services worldwide.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Services;
  