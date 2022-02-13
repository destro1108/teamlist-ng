import twitter from "../static/twitter.png";
import linkedin from "../static/linkedin.png";
import ReactToolTip, { Place } from "react-tooltip";

interface TooltipProps {
  profile: { name: string; description: string; email: string };
  direction: Place[];
}

const Tooltip = ({ direction, profile }: TooltipProps) => {
  const { name, description, email } = profile;
  return (
    <ReactToolTip
      id={`${name}-tp`}
      effect="solid"
      delayHide={100}
      delayUpdate={100}
      delayShow={100}
      place={direction[0]}
      overridePosition={({ left, top }, currentEvent, currentTarget, node) => {
        if (!node) return { left, top };
        const d = document.documentElement;
        left = Math.min(d.clientWidth - node.clientWidth, left);
        top = Math.min(d.clientHeight - node.clientHeight, top);

        left = Math.max(0, left);
        top = Math.max(0, top);

        return { top, left };
      }}
      className="toolTip-Theme opacity-100 z-20 pointer-events-auto"
    >
      <div
        className={`border-2 border-red-600 rounded-lg px-4 py-2 bg-gray-100 bg-opacity-100 text-black flex flex-col ${
          direction[1] == "right" ? "items-end" : ""
        }`}
      >
        <div className="flex justify-between pt-1 pb-3">
          <div
            className={`flex flex-col ${
              direction[1] === "right" ? "items-end" : ""
            }`}
          >
            <p className="text-lg font-semibold">{name}</p>
            <p className="text-base">{email}</p>
          </div>
          <div className="  flex gap-3 pl-6">
            <img src={linkedin} className="h-8 cursor-pointer" />
            <img src={twitter} className="h-8 cursor-pointer" />
          </div>
        </div>
        <p className="w-80 text-base">{description}</p>
      </div>
    </ReactToolTip>
  );
};

export default Tooltip;
