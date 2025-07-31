import Header from "./Header";
import Hero from "./Hero";
import BookingForm from "./BookingForm";

function HeroContainer() {
  return (
    <div className="relative min-h-screen">
      {/* Background layer with overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/airplane01.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-purple-900/40"></div>
      </div>

      {/* Content layer */}
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="w-full max-w-6xl">
            {/* Hero Section */}
            <Hero />

            {/* Booking Form */}
            <BookingForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContainer;
