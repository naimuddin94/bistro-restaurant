import Banner from "../../components/home/Banner";
import Features from "../../components/home/Features";
import OrderOnline from "../../components/home/OrderOnline";
import PopularMenu from "../../components/home/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner />
      <OrderOnline />
      <PopularMenu />
      <Features />
    </div>
  );
};

export default Home;
