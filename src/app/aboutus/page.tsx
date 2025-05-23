import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
   <div className="bg-white text-gray-800">

      {/* Banner Section */}
      <section
        className="relative w-full h-[70vh]  bg-cover bg-center"
       
      >
        <div className="absolute inset-0 bg-[url(/image/img2.jpg)] bg-cover bg-center bg-opacity-50 flex flex-col items-center justify-center text-white px-4">
          <Image
            src="/image/img3.jpg"
            width={160}
            height={160}
            alt="Owner"
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg mb-4"
          />
          <h1 className="text-4xl font-bold">Welcome to Our Garden</h1>
          <p className="mt-2 text-lg">Crafted with love, rooted in dreams</p>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-16 px-4 md:px-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-green-700 mb-10">Our Journey</h2>
        <div className="space-y-12 max-w-5xl mx-auto">

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/images/img2.jpg"
               width={160}
            height={160}
              alt="Beginning"
              className="rounded-xl shadow-md md:w-1/2"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">It All Started With a Dream</h3>
              <p className="text-gray-600">
                Years ago, we envisioned a place where love could blossom in nature’s embrace. From empty land to an oasis of memories, the journey began with hard work, passion, and belief in timeless beauty.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <Image
              src="/images/img2.jpg"
               width={160}
            height={160}
              alt="Development"
              className="rounded-xl shadow-md md:w-1/2"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">Turning Soil Into Serenity</h3>
              <p className="text-gray-600">
                Every stone, flower, and tree has been handpicked and placed with intention. The garden grew — not just in beauty, but as a symbol of dedication and community spirit.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <Image
              src="/images/img2.jpg"
               width={160}
            height={160}
              alt="Opening"
              className="rounded-xl shadow-md md:w-1/2"
            />
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-2">A Place Where Stories Begin</h3>
              <p className="text-gray-600">
                Today, our garden is a celebration of love, laughter, and togetherness. We are proud to host weddings, engagements, and memories that last forever under the open sky.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner Message Section */}
      <section className="py-16 px-4 md:px-16 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Owner&apos;s Message</h2>
          <p className="text-xl italic text-gray-700 mb-6">
            &quot;This garden was never just about flowers or ceremonies — it was about creating a space where love could find its stage, and dreams could take root and bloom.&quot; 🌸
          </p>
          <div className="text-gray-600 text-base">
            <p className="mb-4">
              From the first spade in the soil to the laughter echoing through the trees, this place has grown with me. It&apos;s a reflection of resilience, community, and the magic that happens when you nurture a dream with love and patience.
            </p>
            <p className="mb-2">
              I welcome you to not just celebrate events here, but to become a part of our story — a journey of passion, nature, and unforgettable moments.
            </p>
            <p className="font-semibold text-green-700 mt-6">– Lakshya Saini</p>
          </div>
        </div>
      </section>
    </div>

  )
}

export default page