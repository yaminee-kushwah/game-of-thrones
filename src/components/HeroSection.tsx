const HeroSection = () => (
  <>
    <section className="relative bg-black text-white h-[90vh] flex items-center justify-center">
      <img
        src="/assets/tyrion.jpg"
        alt="Tyrion"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold uppercase">Season Premiere</h1>
        <p className="mt-4 text-lg">Streaming now on HBO</p>
        <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200">
          Watch Trailer
        </button>
      </div>
    </section>
  </>
);

export default HeroSection;
