import { offer } from "../assets/images/index.js";
import Button from "../components/Button.jsx";
import { arrowRight } from "../assets/icons/index.js";

const SpecialOffer = () => {
  return (
    <section className="justify-wrap items-cente flex gap-10 max-xl:flex-col-reverse">
      <div className="flex-1">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
