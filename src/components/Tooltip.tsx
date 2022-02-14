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
        // To make the tooltip flip if it going out of viewport
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
        className={`flex flex-col px-4 py-2 bg-gray-100 bg-opacity-100 text-black rounded-lg border-2 border-red-600 shadow-md shadow-gray-800 ${
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
          <div className="flex gap-3 pl-6 text-red-600">
            <a
              href="https://linkedin.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="none"
                strokeWidth="2"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="p-1.5 h-8 w-8 text-red-600 ring-2 ring-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a
              href="https://twitter.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="none"
                strokeWidth="2"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="p-1.5 h-8 w-8 ring-2 ring-red-600 rounded-full hover:bg-red-600 hover:text-white transition-colors"
              >
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        <p className="w-80 text-base">{description}</p>
      </div>
    </ReactToolTip>
  );
};

export default Tooltip;
