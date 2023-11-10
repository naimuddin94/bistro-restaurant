import SectionTitle from "../utility/SectionTitle";


const Features = () => {
    return (
      <section className="bg-[url('/assets/home/featured.jpg')] py-10 bg-cover bg-fixed bg-black/60 bg-blend-overlay text-white">
        <SectionTitle
          subHeading="Check it out"
          heading="FROM OUR MENU"
        ></SectionTitle>
        <div className="flex gap-5 items-center max-w-4xl mx-auto py-8">
          <img src="/assets/home/featured.jpg" alt="" className="w-96" />
          <div>
            <h3 className="font-medium">March 20, 2023</h3>
            <h1 className="text-lg">WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline border-0 border-b-4 mt-3 border-slate-300 text-white">Read More</button>
          </div>
        </div>
      </section>
    );
};

export default Features;