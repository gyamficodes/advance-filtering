import Category from "../Sidebar/Category/Category";
import Price from "../Sidebar/Price/Price";
import Colors from "../Sidebar/Colors/Clolors";
const Sidebar = () => {
  return (
    <>
      <section className="  ">
          <div className=" mt-[70px]">
          <Category />
          <Price />
          <Colors />
          </div>

      </section>
    </>
  );
};

export default Sidebar;
