import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

type Props = {
  popular?: boolean;
};

const Tutorial = ({ popular }: Props) => {
  return (
    <li>
      <div className="group flex flex-col space-y-4 items-center rounded-lg bg-gray-50 p-3 text-base font-bold text-gray-900 hover:bg-gray-100 hover:shadow dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 md:justify-between md:flex-row">
        {/* <Card className="max-w-sm"> */}
        <div>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
        {popular && (
          <span className="mx-3 inline-flex items-center justify-center rounded bg-gray-200 px-2 py-0.5 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-400">
            Popular
          </span>
        )}
        <Link to="/tutorials/123">
          <Button gradientDuoTone="tealToLime">
            Read more
            <svg
              className="-mr-1 ml-2 h-4 w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
        </Link>
        {/* </Card> */}
      </div>
    </li>
  );
};

export default Tutorial;
