import "../index.css";

function Bag() {
  return (
    <div className="bag flex flex-row gap-60 basis-3 ">
      <div className="bg-blue-400 w-24 h-24 text-center pt-6 hover:translate-x-1 hover:translate-y-2 ml-5   pr-1 cursor-pointer text-5xl rounded-full">
        {" "}
        📨
      </div>

      <div className="">
        <div className="flex flex-col">
          <div className="">Sign up to our</div>
          <div className="font-semibold text-2xl">Newsletter</div>
          <div className=" font-light">
            {" "}
            Subscribe to out newsletter and stay updated{" "}
          </div>
          <div className="">
            <input
              type="text"
              className=" font-thin   "
              placeholder="✉ Your email "
            />
          </div>
          <div className="">
            <button type="submit" className="bg-yellow-500 px-24 rounded-lg  ">
              {" "}
              Sign up{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bag;
