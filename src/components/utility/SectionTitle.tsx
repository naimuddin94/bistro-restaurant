import { SectionTitleProps } from "../../types/Types";

const SectionTitle = ({ subHeading, heading }: SectionTitleProps) => {
  return (
    <div className="text-center w-fit mx-auto px-8">
      <p className="text-yellow mb-3">---{subHeading}---</p>
      <h1 className="text-4xl font- border-y-4 py-3 px-8">{heading}</h1>
    </div>
  );
};

export default SectionTitle;
