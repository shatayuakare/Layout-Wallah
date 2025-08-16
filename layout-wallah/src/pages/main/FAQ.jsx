import ContentHeading from "../../components/ContentHeading";
import faqs from "../../api/faq.json";

const FAQ = () => {
  return (
    <section className="content-center" id="faq">
      <ContentHeading title={"FAQ"} description={"Ask your own question"} />
      <div className="mx-2 md:mx-auto md:w-3/5 mt-4">
        {faqs.map((elem, index) => (
          <div
            className="collapse collapse-plus border rounded-lg mb-2 border-primary bg-background2"
            key={index}
          >
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title font-semibold">
              Q{index + 1}. {elem.question}
            </div>
            <div className="collapse-content text-sm">{elem.answer}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
