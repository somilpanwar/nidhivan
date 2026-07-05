import Image from "next/image";

const intoDetails =[
  {
    title: "Garden & Outdoor Spaces",
    imgUrl: "/images/gdn-photo1.png",
    label: "Previous event",
    description: "Warm lights, live music, and an intimate open-air celebration.",
  },{
    title: "Rooms & Suites",
    imgUrl: "/images/room_photo1.jpeg",
    label: "Previous event",
    description: "luxurious rooms and suites with elegant decor, modern amenities, and serene views.",
  }
]
const Introsection = () => {
  return (
    <section className="w-full px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <h1
          className="p-3 text-4xl font-bold text-[#3b2522] md:pl-0 md:text-6xl"
          style={{ fontFamily: "var(--font-runalto)" }}
        >
          INTRODUCTION
        </h1>

        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:gap-8">
          {intoDetails.map((detail, index) => (
            <article
              key={index}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[#6b4b3a]/10 bg-[#fffaf0] shadow-[0_12px_30px_rgba(59,37,34,0.06)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Image
                src={detail.imgUrl}
                alt={detail.title}
                width={900}
                height={600}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />

              <div className="flex flex-1 flex-col justify-between p-6 md:p-7">
                <h2
                  className="text-center py-2 text-[#3b2522]"
                  style={{ fontFamily: "var(--font-runalto)" }}
                >
                  {detail.title}
                </h2>
                <p className="mt-3 text-center text-sm leading-7 tracking-wide text-gray-900">
                  {detail.description}
                
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introsection;
