import React, { useEffect, useState } from "react";
import PageHeading from "../components/PageHeading";
import axios from "axios";
import { server } from "../constants/Constants";

const details = [
  {
    title: "Mouda, Nagpur, Maharashtra",
    icon: "bx-map",
  },
  {
    title: "layoutwallah@property.com",
    icon: "bx-envelope",
  },
  {
    title: "+91 123-4567-890",
    icon: "bx-phone",
  },
];

const Contact = () => {
  const [contactData, setContactData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [disable, setDisable] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const contactDataInputHandler = (e) => {
    const { id, value } = e.target;
    setContactData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  console.log(`${server}/contacts/new`);

  const contactFormSubmitHandler = async (e) => {
    e.preventDefault();

    if (!contactData.name) return setError("Name is required");
    if (!contactData.phone) return setError("Phone number is required");
    if (!contactData.subject) return setError("Subject is required");
    if (!contactData.message) return setError("Message is required");
    setDisable(true);
    await axios
      .post(`${server}/contacts/new`, contactData)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => console.error(err));

    setDisable(false);
    setContactData({
      name: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section className="bg-background">
      <PageHeading title={"Contact us"} />

      <div className="h-[75vh] w-3/4 mx-auto gap-4 pt-[8vh] flex ">
        <div className="w-2/5 mx-auto  p-4 grid gap-4 h-fit">
          <h6 className="text-[2rem] text-txt font-bold uppercase">
            Get in touch
          </h6>
          <div className="text-txt2">
            If you are interested in working with us, <br /> please get in
            touch.
          </div>

          <div className="grid gap-2">
            {details.map((elem, index) => (
              <div className="flex gap-2 items-center " key={index}>
                <div className="h-10 w-10 rounded-lg text-background2 bg-primary flex items-center justify-center">
                  <i className={`bx text-xl ${elem.icon}`}></i>
                </div>
                <h6 className="font-semibold text-primary-light">
                  {elem.title}
                </h6>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/5 mx-auto p-4 grid gap-3 h-fit">
          <h6 className="text-[2rem] font-bold text-txt uppercase">
            Contact with us
            <div className="text-xs text-txt2 mt-1">
              Our founder:{" "}
              <span className="font-bold text-primary">Shatayu Akare</span>
            </div>
          </h6>

          <form
            action=""
            onSubmit={contactFormSubmitHandler}
            className="grid gap-4 text-txt"
          >
            <div className="relative border-b-1 border-primary  ">
              <input
                id="name"
                type="text"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-2 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=""
                value={contactData.name}
                onChange={contactDataInputHandler}
              />
              <label
                htmlFor="name"
                className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Your name
              </label>
            </div>
            <div className="relative border-b-1 border-primary ">
              <input
                id="phone"
                type="tel"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-2 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=""
                value={contactData.phone}
                onChange={contactDataInputHandler}
              />
              <label
                htmlFor="phone"
                className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Phone number
              </label>
            </div>
            <div className="relative border-b-1 border-primary ">
              <input
                id="subject"
                type="text"
                className="block rounded-t-lg px-2.5 pb-2.5 pt-2 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                placeholder=""
                value={contactData.subject}
                onChange={contactDataInputHandler}
              />
              <label
                htmlFor="subject"
                className="absolute text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Subject
              </label>
            </div>
            <div className="relative border-b-1 border-primary ">
              <textarea
                className="block min-h-24 rounded-t-lg px-2.5 pb-2.5 pt-2 w-full text-sm  appearance-none  focus:outline-none focus:ring-0 peer"
                name="message"
                id="message"
                placeholder=""
                value={contactData.message}
                onChange={contactDataInputHandler}
              ></textarea>

              <label
                htmlFor="message"
                className="absolute w-full  text-sm duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Message
              </label>
            </div>

            {error && (
              <div className="text-red-500 text-xs font-semibold">{error}</div>
            )}
            <div className="flex justify-start">
              <button
                type="submit"
                disabled={disable}
                className="btn btn-ghost border-0 text-white shadow rounded-xl bg-primary disabled:bg-primary-light px-8 disabled:text-txt2"
              >
                Send Message
                {disable ? (
                  <i className="bx text-lg bx-loader bx-spin"></i>
                ) : (
                  <span></span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="h-[85vh]">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28994.022500022955!2d79.38354197302783!3d21.146110854067704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2b3558c4a95add%3A0x37ebb978a5fb2276!2sMauda%2C%20Maharashtra%20441104!5e1!3m2!1sen!2sin!4v1753621045783!5m2!1sen!2sin"
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
