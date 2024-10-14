import CountUp from "../components/CountUp";

const stats = [
  {
    title: "Voluptatum",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum dolorum placeat eius.",
    to: 456,
    duration: 1,
  },
  {
    title: "Dignissimos",
    subtitle:
      "Totam maiores autem voluptatum dolorum temporibus dignissimos beatae assumenda!",
    from: 100,
    to: 1200,
    duration: 2,
  },
  {
    title: "Tempora",
    subtitle:
      "Tempora repellat culpa minus vel numquam! Dignissimos, dicta consequuntur!",
    from: 10000,
    to: 147000,
  },
];

const CountUpPage = () => {
  return (
    <div className="container m-auto">
      <div className="grid gap-5 mt-24 mb-12">
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-emerald-400 to-emerald-700 bg-clip-text text-transparent">
          Nos chiffres clés
        </h1>
        <p className="text-slate-400">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          voluptatem eius ullam corrupti, harum quisquam necessitatibus enim
          obcaecati perspiciatis reiciendis quidem odit illo tempore inventore
          explicabo accusamus laboriosam suscipit? Ratione!
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-3">
        {stats.map((stat, i) => (
          <div className="grid justify-center p-2 gap-5 text-center border border-emerald-400 rounded-lg">
            <div>
              <h2 className="mb-3 text-3xl text-emerald-500 font-bold">
                {stat.title}
              </h2>
              <p className="text-slate-400 italic">{stat.subtitle}</p>
            </div>
            <CountUp
              from={stat.from}
              to={stat.to}
              durationInSeconds={i + 1}
              className="flex justify-center items-end h-full text-3xl text-emerald-400 font-bold"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountUpPage;
