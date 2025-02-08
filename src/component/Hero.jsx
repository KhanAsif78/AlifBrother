import PhotoHero from "../public/Image/hero.jpg";
const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen mt-5 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center items-center">
          <img
            src={PhotoHero}
            className="w-full rounded-lg shadow-2xl mx-auto"
          />
          <div>
            <p className="py-6">Make web site and App Development Services</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
