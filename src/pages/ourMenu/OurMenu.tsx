import MenuFoods from "../../components/shared/MenuFoods";
import coverImg from "/assets/menu/banner3.jpg";
import dessertImg from "/assets/menu/dessert-bg.jpeg";
import pizzaImg from "/assets/menu/pizza-bg.jpg";
import saladImg from "/assets/menu/salad-bg.jpg";
import soupsImg from "/assets/menu/soup-bg.jpg";

const OurMenu = () => {
  return (
    <div>
      <MenuFoods img={coverImg} heading="our menu" category="offered" isTitle />
      <MenuFoods img={dessertImg} heading="Dessert" category="dessert" />
      <MenuFoods img={pizzaImg} heading="Pizza" category="pizza" />
      <MenuFoods img={saladImg} heading="Salad" category="salad" />
      <MenuFoods img={soupsImg} heading="Soups" category="soup" />
    </div>
  );
};

export default OurMenu;
