import React from "react";
import { Place } from "react-tooltip";
import Tooltip from "./Tooltip";

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

// const TooltipContent = ({
//   name,
//   description,
// }: {
//   name: string;
//   description: string;
// }) => {
//   return (
//     <div className="border-2 border-red-600 rounded-lg px-4 py-4 bg-gray-100">
//       <div className="flex pt-1 pb-3">
//         <p className="pt-1">{name}</p>
//         <div className="flex gap-3 pl-6">
//           <img src={linkedin} className="h-8 cursor-pointer" />
//           <img src={twitter} className="h-8 cursor-pointer" />
//         </div>
//       </div>
//       <p className="w-80">{description}</p>
//     </div>
//   );
// };

const ProfileComponent = ({ data, direction, handleMouse, active }: Props) => {
  const { id, name, imageUrl, email, position, description } = data;
  const [refElement, setRefElement] = React.useState<HTMLDivElement | null>(
    null
  );
  return (
    <div
      className={`flex flex-col items-center px-2 py-2 text-gray-600 ${
        id === active ? "group z-10 transition-all" : ""
      }`}
      ref={setRefElement}
      data-tip
      data-for={`${name}-tp`}
      onMouseEnter={() => handleMouse(id)}
      onMouseLeave={() => handleMouse("")}
    >
      <img
        src={imageUrl}
        className="rounded-full h-28 mb-1 border-red-600 group-focus:border-2 group-hover:border-2 z-0"
      />
      {/* group-hover:opacity-100 group-hover:border-2 */}
      <p className="mt-1 text-xl text-center font-semibold group-hover:text-gray-800  transition-all">
        {name}
      </p>
      <p className="font-normal group-hover:text-gray-700  transition-all">
        {position}
      </p>
      <Tooltip profile={{ name, email, description }} direction={direction} />
    </div>
  );
};

export default ProfileComponent;
