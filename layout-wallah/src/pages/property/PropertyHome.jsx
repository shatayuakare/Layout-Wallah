import { useEffect, useState } from "react";
import Logo from "../../components/Logo";
import PropertyFilter from "../../components/PropertyFilter";
import axios from "axios";
import { server } from "../../constants/Constants";

const fetchProperties = async () => {
  axios
    .get(`${server}/properties`)
    .then((res) => {})
    .catch((err) => console.log(err));
};

const PropertyHome = () => {
  const [properties, setProperties] = useState();

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <section className="bg-background2 overflow-hidden flex">
      <div className="w-1/5 bg-background">
        <div className="h-[10%] flex items-center justify-center">
          <Logo light={false} />
        </div>
        hi
      </div>
      <div className="w-4/5">
        <div className="w-full bg-amber-300 h-[10%]">How are you</div>
        <div className="h-full bg-background2 overflow-y-auto">
          <div className="w-full font-semibold p-3 text-txt">
            <PropertyFilter />
          </div>

          <div className="grid">
            {/* {properties.map((elem, index) => (
              <></>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyHome;
