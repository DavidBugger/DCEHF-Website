export default function Testimonial() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-md">
          {/* Quote */}
          <div className="bg-[#EFF6FF] p-10 flex flex-col justify-center">
            <div className="text-[#1E3A5F] text-6xl font-serif leading-none mb-4">&ldquo;</div>
            <p className="text-gray-800 text-xl font-semibold leading-relaxed mb-6">
              Thanks to the support we received, my children can eat, learn, and sleep in a safe place. You restored our hope.
            </p>
            <p className="text-gray-500 text-[14px] font-medium">
              — Amina, IDP & Mother of 3
            </p>
          </div>

          {/* Photos grid */}
          <div className="grid grid-cols-3 h-64 lg:h-auto">
            <img
              src="/images/2026-04-29-3.40.38pm.jpeg"
              alt="Child smiling"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/2026-04-29-3.40.39pm.jpeg"
              alt="Woman with headscarf"
              className="w-full h-full object-cover"
            />
            <img
              src="/images/2026-04-29-3.40.50pm.jpeg"
              alt="Woman sewing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
