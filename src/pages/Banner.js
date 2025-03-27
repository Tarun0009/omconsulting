const Banner = () => {
    return (
      <section
        id="banner-designing"
        className="h-screen bg-white-400 flex flex-col items-center justify-center text-white text-4xl font-bold"
      >
        <h2 className="mb-4">Banner Designing</h2>
        <p className="max-w-lg text-center text-lg text-white opacity-80">
          Stunning banners that capture attention and drive conversions. We create custom banner designs tailored to your business needs, ensuring maximum impact.
        </p>
        <div className="mt-6">
          <button className="bg-white text-yellow-400 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-500 hover:text-white transition duration-300">
            Create Your Banner
          </button>
        </div>
      </section>
    );
  };
  
  export default Banner;
  