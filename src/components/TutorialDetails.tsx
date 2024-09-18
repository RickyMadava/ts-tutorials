import { Button, Card, Modal } from "flowbite-react";
import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";
import { HiOutlineExclamationCircle } from "react-icons/hi";

const TutorialDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this product?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Card href="#" className="mx-20 my-10 text-center relative">
        <div className="flex flex-wrap justify-center gap-4 absolute top-4 right-4">
          <button
            className="inline-block rounded bg-transparent p-2 text-xs font-medium transition ease-in-out hover:scale-110 hover:text-sky-600 hover:bg-sky-700/25 z-50"
            // onClick={handleSetShowModalEdit}
          >
            <TiEdit size={17} />
          </button>
          <button
            className="inline-block rounded bg-transparent p-2 text-xs font-medium transition ease-in-out hover:scale-110 hover:text-red-600 hover:bg-red-700/25"
            onClick={() => setOpenModal(true)}
          >
            <RiDeleteBin5Line size={15} />
          </button>
        </div>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, totam
          quaerat, dolores laborum eaque minus iusto voluptates possimus
          consequatur reprehenderit illo praesentium, debitis dolore eligendi
          repellat? Sunt alias quis enim.
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          tempore architecto minus omnis magni eligendi esse fugiat nam vitae
          nemo, nihil cum temporibus quos perferendis quis error, labore tenetur
          odit!
        </p>
      </Card>
    </>
  );
};

export default TutorialDetails;
