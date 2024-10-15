import GlowingCard from "../components/GlowingCard";

const HomePage = () => {
  return (
    <div className="container m-auto py-8">
      <div className="grid grid-cols-3 gap-5">
        <GlowingCard>
          <div className="p-12 text-white bg-gray-80000">Banana</div>
        </GlowingCard>
        <GlowingCard borderColor="#059669" direction="clockwise">
          <div className="p-8 text-white">Banana</div>
        </GlowingCard>
        <GlowingCard borderColor="#059669">
          <div className="p-4 text-red-500">Banana</div>
        </GlowingCard>
      </div>
    </div>
  );
};

export default HomePage;
