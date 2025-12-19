import Header from "./components/Header";
import Services from "./components/Services";
import Features from "./components/Features";
import Gallery from "./components/Gallery";
import JoinUs from "./components/JoinUs";
import JoinUsForm from "./components/JoinUsForm";
import Resources from "./components/Resources";
import Testimonials from "./components/Testimonials";
import CharitySection from "./components/CharitySection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section with two-column layout */}
      <section className="flex items-center justify-center px-8 py-16 min-h-[calc(100vh-88px)]">
        <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-6xl font-bold text-[#3D2817] leading-tight">
              Offering aid<br />to the less<br />fortunate
            </h1>
            <p className="text-lg text-gray-600 max-w-md">
              It is about giving back to the community, and making the world a better place
            </p>
            <button suppressHydrationWarning className="bg-[#6B5FD8] hover:bg-[#5a4ec7] text-white font-semibold px-8 py-3 rounded-lg transition-colors w-fit">
              MAKE A DONATION
            </button>
          </div>

          {/* Right Column - Image Content */}
          <div className="flex justify-center items-center relative h-[500px]">
            {/* Blue decorative shape - positioned behind */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#2B9BF4] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10"></div>
            
            {/* Black diagonal stripes */}
            <div className="absolute bottom-12 left-8 w-32 h-32 -z-10">
              <div className="space-y-2">
                <div className="h-1 w-24 bg-black transform -rotate-45"></div>
                <div className="h-1 w-24 bg-black transform -rotate-45"></div>
                <div className="h-1 w-24 bg-black transform -rotate-45"></div>
                <div className="h-1 w-24 bg-black transform -rotate-45"></div>
              </div>
            </div>

            {/* Decorative squiggle line - above the image */}
            <svg className="absolute top-8 right-12 w-32 h-24" viewBox="0 0 120 100" fill="none">
              <path 
                d="M 10 50 Q 30 20, 50 50 T 90 50 T 110 30" 
                stroke="#000000" 
                strokeWidth="2" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>

            {/* Circular image container */}
            <div className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-8 border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=500&h=500&fit=crop"
                alt="Children in community"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Red box with text - positioned at bottom right */}
            <div className="absolute bottom-0 right-8 bg-[#E63946] text-white p-6 rounded-lg shadow-lg max-w-[200px]">
              <p className="font-bold text-sm leading-tight">
                Our Goal Is to Academically Help Poor People
              </p>
              <p className="text-xs mt-2">become volunteer</p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Features />
      <Gallery />
      <JoinUs />
      <JoinUsForm />
      <Resources />
      <Testimonials />
      <CharitySection />
      <Footer />
    </div>
  );
}
