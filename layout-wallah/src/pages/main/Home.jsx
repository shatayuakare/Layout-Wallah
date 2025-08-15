import { useState } from "react";

const Home = () => {
  const [search, setSearch] = useState("");

  const searchHandler = (e) => {
    e.preventDefault();

    console.log(search);
  };

  return (
    <section className="min-h-screen">
      <div className="h-[85vh] md:min-h-[75vh] flex items-center bg-[url('./src/assets/background.png')] bg-cover justify-center flex-col pb-14 md:pb-auto">
        <div className="btn uppercase btn-ghost rounded-full px-6 md:px-10 tracking-wide btn-xs md:btn-sm  bg-none border border-primary text-primary">
          Let us guide your Plot
        </div>

        <div className="text-xs mt-3 tracking-wider">
          We've more than 1000+ plots in our database
        </div>

        <h2 className="text-[2rem] md:text-[3rem] text-center font-semibold">
          Find your dream plot
        </h2>

        <form
          action=""
          onSubmit={searchHandler}
          className="w-4/5 md:w-1/3 mt-4 mx-auto"
        >
          <div className="shadow-lg rounded-full flex items-center justify-between relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by location"
              className="input input-bordered ps-6 p-3 w-full h-full"
            />
            <button
              type="submit"
              className="btn btn-ghost w-12 text-background h-12 rounded-full bg-primary border-0"
            >
              <i className="bx bx-search-alt text-xl"></i>
            </button>
          </div>
        </form>

        <div className="texts-sm mb-2 mt-6">Explore all thing property</div>

        <div className="flex justify-center gap-2 w-1/4 mx-auto">
          <button className="btn btn-ghost btn-xs px-4 md:btn-sm rounded-full border border-primary-light text-primary-light">
            All Property
          </button>
          <button className="btn btn-ghost btn-xs px-4 md:btn-sm rounded-full border border-primary-light text-primary-light">
            Plots
          </button>
          <button className="btn btn-ghost btn-xs px-4 md:btn-sm rounded-full border border-primary-light text-primary-light">
            Flats
          </button>
        </div>
      </div>

      <div className="min-h-[20vh] bg-primary flex justify-center"></div>
    </section>
  );
};

export default Home;
