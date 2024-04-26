const Category = () => {
  return <>
  <div className=" pb-4">
    <h1 className="  text-[22px] mb-[20px]">Category</h1>

    <div className=" flex  flex-col gap-4">
      <label  className=" text-[18px]">
        <input type="radio" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]" name="test"/>
        <span className="  ml-2"></span>All
      </label>
      <label  className=" text-[18px]">
        <input type="radio" name="test" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]"/>
        <span className="  ml-2"></span>Sneaks
      </label>
      <label  className=" text-[18px]">
        <input type="radio" name="test" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]"/>
        <span className="  ml-2"></span>Flats
      </label>
      <label  className=" text-[18px]">
        <input type="radio" name="test" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]"/>
        <span className="  ml-2"></span>Sandals
      </label>
      <label  className=" text-[18px]">
        <input type="radio" name="test" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]"/>
        <span className="  ml-2"></span>Heels
      </label>
    </div>
  </div>
  </>;
};

export default Category;
