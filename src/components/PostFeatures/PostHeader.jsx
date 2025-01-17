import { HiOutlineDotsHorizontal } from "react-icons/hi";
import UserName from "../UsersInfo/UserName";
import CreatedAt from "./CreatedAt";
import Modal from "../Modal/Modal";
import useToggle from "../../hooks/useToggle";
import { AiOutlinePlusSquare } from "react-icons/ai";
import Swal from "sweetalert2";

const PostHeader = ({ photo, userName, title }) => {
  const {
    toggle: option,
    setToggle: setOption,
    handleToggle: handleOptionModal,
  } = useToggle();

  const {
    toggle: edit,
    setToggle: setEdit,
    handleToggle: handleEditModal,
  } = useToggle();

  // Post Delete
  const handlePostDelete = () => {
    setOption(false);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <div className="post-header flex justify-between items-center">
        <div className="post-user flex items-center">
          <div className="user-info flex items-center gap-2">
            <div className="user-photo">
              <img
                className="w-8 h-8 rounded-full cursor-pointer object-cover"
                src={photo}
                alt=""
              />
            </div>

            <div className="post-info">
              <div className="post-user-info flex items-center">
                <div className="user-name">
                  <UserName name="codersultan" verified="true" />
                </div>

                <div className="time flex items-center">
                  <div className="w-[3px] h-[3px] rounded-full bg-slate-500 mx-1"></div>
                  <div className=" ml-1">
                    <CreatedAt time="23h" />
                  </div>
                </div>
              </div>

              <div className="post-title -mt-2">
                {title && (
                  <span className="text-xs font-normal cursor-pointer">
                    {title}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="post-btn">
          <button
            title="More options"
            onClick={handleOptionModal}
            className="p-1 text-xl  text-slate-700"
          >
            <HiOutlineDotsHorizontal />
          </button>

          {option && (
            <Modal width="22%" rounded="12px" close="false">
              <div className="option-item border-b">
                <button
                  onClick={() => {
                    setOption(false);
                    handleEditModal();
                  }}
                  className="w-full px-3 py-3.5 text-sm font-bold text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
              </div>
              <div className="option-item border-b">
                <button
                  onClick={handlePostDelete}
                  className="w-full px-3 py-3.5 text-sm font-bold text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
              <div className="option-item border-b">
                <button
                  onClick={() => setOption(false)}
                  className="w-full px-3 py-3.5 text-sm "
                >
                  Cancle
                </button>
              </div>
            </Modal>
          )}

          {edit && <Modal title="Post Edit" width="76%" height="95%" />}
        </div>
      </div>
    </>
  );
};

export default PostHeader;
