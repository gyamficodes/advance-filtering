

const Price = () => {
  return (
  <>
  <div className=" pb-4">
    <h2 className="side-bar-title  text-[22px] mb-[20px]">Price</h2>

    <div className=" flex flex-col gap-4">
    <label  className=" text-[18px]">
        <input type="radio" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]" name="test2"/>
        <span className="  ml-2"></span>All
      </label>

      
    <label  className=" text-[18px]">
        <input type="radio" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]" name="test2"/>
        <span className="  ml-2"></span>$0 - $50
      </label>

      
    <label  className=" text-[18px]">
        <input type="radio" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]" name="test2"/>
        <span className="  ml-2"></span>$50 - $100
      </label>
      
    <label  className=" text-[18px]">
        <input type="radio" className=" h-[20px] w-[20px]  bg-[#eee] rounded-[50px]" name="test2"/>
        <span className="  ml-2"></span>over %150
      </label>
    </div>
  </div>
  </>
  )
}

export default Price