export default function Contact() {
    return (
      <section className="py-10 px-4 bg-white shadow rounded-lg">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Contact Us</h1>
        <p className="text-gray-700 text-lg leading-7">
          Wed love to hear from you! If you have any questions, feedback, or need assistance,
          please dont hesitate to get in touch with us.
        </p>
        <p className="text-gray-700 text-lg leading-7 mt-4">
          You can reach us via email at:{" "}
          <a
            href="mailto:support@reactdelivery.com"
            className="text-blue-600 underline"
          >
            support@reactdelivery.com
          </a>
        </p>
        <p className="text-gray-700 text-lg leading-7 mt-4">
          Alternatively, give us a call:{" "}
          <span className="text-blue-600 font-bold">+1 (800) 123-4567</span>
        </p>
      </section>
    );
  }
  