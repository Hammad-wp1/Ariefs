const Pricing = () => (
  <div className="pt-32 px-6 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-white mb-12 uppercase">Service <span className="text-yellow-500">Menu</span></h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        { name: "Haircut", price: "R 250" },
        { name: "Laser Hair Removal", price: "R 450+" },
        { name: "Full Body Massage", price: "R 600" },
        { name: "Waxing", price: "R 150+" },
        { name: "Eyebrow Threading", price: "R 80" }
      ].map((s, i) => (
        <div key={i} className="flex justify-between border-b border-white/10 pb-4">
          <span className="text-xl">{s.name}</span>
          <span className="text-yellow-500 font-bold">{s.price}</span>
        </div>
      ))}
    </div>
  </div>
);
export default Pricing;
