import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <div className=" flex items-center   border-b borde-r border-[#ccc]  justify-between px-[30px] p-[20px]">
        <div>
          <input
            placeholder="Search your item"
            type="text"
            className=" border-none bg-[#f7f6f6] outline-none mr-[20px] rounded-[5px] relative w-[14rem]  "
          />
        </div>
        <div className=" pfoile-container">
          <div className="  flex items-center gap-3 h-full">
            <a href="#" className=" decoration-clone text-icons-c">
              <FiHeart className=" w-[1.5rem] h-[1.5rem]  text-[#00]" />
            </a>

            <a href="#" className=" decoration-clone text-icons-c">
              <AiOutlineShoppingCart className="w-[1.5rem] h-[1.5rem] text-[#00]" />
            </a>

            <a href="#" className=" decoration-clone text-icons-c">
              <AiOutlineUserAdd className="w-[1.5rem] h-[1.5rem] text-[#00]" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
