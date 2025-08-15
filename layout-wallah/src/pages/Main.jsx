import Home from "./main/Home";
import BuyProcess from "./main/BuyProcess";
import Category from "./main/Category";
import RecentProperties from "./main/RecentProperties";
import CustomerReview from "./main/CustomerReview";
import PropertyArea from "./main/PropertyArea";
import RecentArticle from "./main/RecentArticle";
import WhyWithWorkUs from "./main/WhyWithWorkUs";
import FAQ from "./main/FAQ";

const Main = () => {
  return (
    <main className="bg-background text-txt">
      <Home />
      <BuyProcess />
      <Category />
      <RecentProperties />
      <CustomerReview />
      <PropertyArea />
      <WhyWithWorkUs />
      <RecentArticle />
      <FAQ />
    </main>
  );
};

export default Main;
