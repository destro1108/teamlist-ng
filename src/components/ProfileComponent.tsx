import React from "react";
import Tooltip from "./Tooltip";
import ReactToolTip, { Place } from "react-tooltip";
import twitter from "../static/twitter.png";
import linkedin from "../static/linkedin.png";

interface Profile {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  position: string;
  description: string;
}

interface Props {
  data: Profile;
  direction: Array<Place>;
  active: string;
  handleMouse: (val: string) => void;
}

const TooltipContent = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  return (
    <div className="border-2 border-red-600 rounded-lg px-4 py-4 bg-gray-100">
      <div className="flex pt-1 pb-3">
        <p className="pt-1">{name}</p>
        <div className="flex gap-3 pl-6">
          <img src={linkedin} className="h-8 cursor-pointer" />
          <img src={twitter} className="h-8 cursor-pointer" />
        </div>
      </div>
      <p className="w-80">{description}</p>
    </div>
  );
};

const ProfileComponent = ({ data, direction, handleMouse, active }: Props) => {
  const { id, name, imageUrl, email, position, description } = data;
  const [refElement, setRefElement] = React.useState<HTMLDivElement | null>(
    null
  );
  const [isTooltipVisible, setTooltipVisible] = React.useState<boolean>(false);
  return (
    // <Tooltip
    //   direction={direction}
    //   delay={400}
    //   content={<TooltipContent name={name} description={description} />}
    // >
    <div
      className={`flex flex-col items-center px-2 py-2 ${
        id === active ? "group z-10 " : ""
      }`}
      ref={setRefElement}
      data-tip
      data-for={`${name}-tp`}
      onMouseEnter={() => handleMouse(id)}
      onMouseLeave={() => handleMouse("")}
    >
      <img
        src={imageUrl}
        className="rounded-full h-28 mb-1 border-red-600 group-hover:border-2 z-0"
      />
      {/* group-hover:opacity-100 group-hover:border-2 */}
      <p className="mt-1 text-gray-600 group-hover:font-semibold group-hover:text-gray-800">
        {name}
      </p>
      <p className="font-light text-gray-600 group-hover:font-normal group-hover:text-gray-700 transform delay-100">
        {position}
      </p>
      <Tooltip profile={{ name, email, description }} direction={direction} />
    </div>
  );
};

export default ProfileComponent;
