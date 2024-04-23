import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

const Nav = () => {
  return (
    <>
      <div className=" flex *:items-center   border-b border-bb ml-[2rem] justify-around p-[20px] z-[999]">
        <div>
          <input placeholder="Search your item" type="text" className=" border-none bg-[#f7f6f6] outline-none mr-[20px] rounded-[5px] relative w-[14rem]  "  />
        </div>
        <div className=" pfoile-container">
             <a href="#" className=" decoration-clone text-icons-c">
              <FiHeart className="Icons"/>
             </a>

             <a href="#" className=" decoration-clone text-icons-c">
              <AiOutlineShoppingCart className="Icons"/>
             </a>

             <a href="#" className=" decoration-clone text-icons-c">
              <AiOutlineUserAdd className="Icons"/>
             </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
