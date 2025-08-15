import { useState } from "react";

const PropertyFilter = () => {
  const [sort, setSort] = useState("all");
  const [type, setType] = useState("all");
  const [range, setRange] = useState(0);
  const [search, setSearch] = useState("");

  const searchHanlder = (e) => {
    e.preventDefault();
    const data = { sort, type, range, search };

    console.log(data);
  };

  return (
    <form
      className="flex justify-around items-center"
      onSubmit={searchHanlder}
      action=""
    >
      <label className="input input-sm rounded-lg bg-background">
        <i className="bx text-txt2 bx-search-alt-2"></i>
        <input
          type="search"
          className="grow"
          placeholder="Search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <kbd className="kbd kbd-sm">⌘</kbd>
        <kbd className="kbd kbd-sm">K</kbd>
      </label>

      <div className="flex text-sm text-nowrap">
        <label className="me-2 mt-1" htmlFor="type">
          Type :{" "}
        </label>
        <select
          id="type"
          value={type}
          onChange={(event) => setType(event.target.value)}
          defaultValue="all"
          className="select shadow bg-background rounded-lg select-sm"
        >
          <option>All</option>
          <option value={"plots"}>Plots</option>
          <option value={"flat"}>Flats</option>
          <option value={"farm"}>Farm</option>
        </select>
      </div>
      <div className="flex text-sm mt-1 text-nowrap">
        <label className="me-2" htmlFor="range">
          Range{" "}
          <input
            className="input text-center w-12 p-0 border-s-2 border-e-2 rounded-full text-base h-6 input-sm"
            type="tel"
            value={range}
            onChange={(event) => setRange(event.target.value)}
          />
          :{" "}
        </label>
        <input
          type="range"
          min={0}
          max="100"
          className="range range-sm range-accent"
          value={range}
          onChange={(event) => setRange(event.currentTarget.value)}
        />
      </div>

      <div className="flex text-sm text-nowrap">
        <label className="me-2 mt-1" htmlFor="sort">
          Type :{" "}
        </label>
        <select
          id="sort"
          defaultValue="all"
          className="select  bg-background rounded-lg select-sm"
          value={sort}
          onChange={(event) => setSort(event.target.value)}
        >
          <option>--select--</option>
          <option value={"l2h"}>Low to High</option>
          <option value={"h2l"}>High to Low</option>
        </select>
      </div>

      <button
        className="btn font-semibold border-0 rounded bg-accent text-background btn-ghost shadow-lg"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default PropertyFilter;
