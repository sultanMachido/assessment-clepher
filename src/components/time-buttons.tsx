import { TIME_RANGE } from "../constants";

type TimeButtonsProps = {
  selectTimeRange: (newTime: string) => void;
  currentTimeRange: string;
};

const TimeButtons = ({
  selectTimeRange,
  currentTimeRange,
}: TimeButtonsProps) => {
  return (
    <div className="flex w-4/12 justify-between">
      <button
        className={`p-3 shadow-lg ${
          currentTimeRange === TIME_RANGE.DAILY
            ? "bg-gray-100"
            : "bg-purple-200"
        } rounded-[5px] text-sm font-bold`}
        onClick={() => selectTimeRange(TIME_RANGE.DAILY)}
        disabled={currentTimeRange === TIME_RANGE.DAILY}
      >
        DAILY
      </button>
      <button
        className={`p-3 shadow-lg ${
          currentTimeRange === TIME_RANGE.WEEKLY ? "bg-gray-100" : "bg-blue-200"
        }  rounded-[5px] text-sm font-bold`}
        onClick={() => selectTimeRange(TIME_RANGE.WEEKLY)}
      >
        WEEKLY
      </button>
      <button
        className={`p-3 shadow-lg ${
          currentTimeRange === TIME_RANGE.MONTHLY
            ? "bg-gray-100"
            : "bg-green-200"
        }  rounded-[5px] text-sm font-bold`}
        onClick={() => selectTimeRange(TIME_RANGE.MONTHLY)}
      >
        MONTHLY
      </button>
    </div>
  );
};

export default TimeButtons;
