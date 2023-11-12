import { CoverProps } from "../../types/Types";

const Cover = ({ coverImg, heading }: CoverProps) => {
  return (
    <div
      className="hero h-[500px] bg-cover"
      style={{
        backgroundImage: `url(${coverImg})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content bg-gray-950/30 p-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-semibold uppercase">{heading}</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cover;
