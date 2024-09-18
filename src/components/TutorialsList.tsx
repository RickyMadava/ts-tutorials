import { Card, Pagination } from "flowbite-react";
import Tutorial from "./Tutorial";
import { useState } from "react";

const TutorialsList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <Card className="mx-20 my-10">
      <h5 className="mb-3 text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
        Tutorials Lists
      </h5>
      <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
        This is a demo project. You can add a new tutorial here. The tutorials
        will be listed here.
      </p>
      <ul className="my-4 space-y-3">
        <Tutorial popular />
        <Tutorial />
        <Tutorial popular />
        <Tutorial popular />
        <Tutorial />
      </ul>
      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </Card>
  );
};

export default TutorialsList;
