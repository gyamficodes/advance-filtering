import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <>
      <section className="flex h-screen overflow-hidden  bg-[#fff]">
        {/* side-bar */}
        <div className=" h-full w-[20%] border-r border-[#ccc]">
          <div className=" h-[9.7%] border-b border-[#ccc]">
          <div className="   flex items-center justify-center ">
          <h1 className=" text-[45px] cursor-pointer">🛒</h1>
        </div>
          </div>
          <div className=" h-full ">
            <div className="flex items-center justify-center">
            <Sidebar/>
            </div>
       
          </div>
      
        </div>
  {/* side-bar */}

  {/* Main-content */}
        <div className="w-full h-full ">
          {/* Nav-bar */}
          <div className="navbar h-[10%] ">
          <Nav/>
          </div>
            {/* Nav-bar */}

            {/* Content-Page */}
          <div className="h-[90%] overflow-hidden overflow-y-auto  px-[30px]">
          <Recommended/>
            <Product/> 
          </div>
            {/* Content-Page */}
        </div>
          {/* Main-content */}
      </section>

     
    </>
  );
}

export default App;
