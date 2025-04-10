import Image from "next/image";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col bg-white min-h-screen">
      <main className="flex-col gap-5">
        <Hero />

        {/* Photo Section */}
        <section id="garden-photos" className="py-12 bg-yellow-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-yellow-400 mb-8">Our Beautiful Garden</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add your garden photos here */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src="/image/image.png" alt="Garden 1" width={400} height={300} className="w-full h-64 object-cover" />
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src="/image/img2.jpg" alt="Garden 2" width={400} height={300} className="w-full h-64 object-cover" />
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src="/image/img3.jpeg" alt="Garden 3" width={400} height={300} className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Previous Events Section */}
        <section className="py-12 bg-yellow-300 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white mb-8">Previous Events</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add your event cards here */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl text-gray-600 font-semibold mb-2">Summer Wedding Gala</h3>
                <p className="text-gray-600">A beautiful summer wedding celebration with 200 guests.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl text-gray-600 font-semibold mb-2">Spring Flower Festival</h3>
                <p className="text-gray-600">Annual flower showcase featuring local florists and gardeners.</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl text-gray-600 font-semibold mb-2">Autumn Harvest Party</h3>
                <p className="text-gray-600">A cozy fall celebration with seasonal decorations and activities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Garden Information Section */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8">About Our Garden</h2>
            <div className="prose prose-lg">
              <p className="text-gray-600">
                Our wedding garden is a picturesque venue nestled in the heart of nature. With lush greenery, vibrant flowers, and serene water features, it provides the perfect backdrop for your special day.
              </p>
              <p className="text-gray-600">
                We offer a variety of settings within our garden, from intimate ceremony spots to spacious reception areas. Our experienced team is dedicated to making your wedding dreams come true, ensuring every detail is perfect.
              </p>
              <p className="text-gray-600">
                Whether you&apos;re planning a small gathering or a grand celebration, our garden can accommodate your needs. We also provide top-notch catering services and have partnerships with the best local vendors to make your event truly unforgettable.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
