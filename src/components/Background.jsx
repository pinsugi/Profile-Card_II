import "../index.css";

function Background() {
  return (
    <div className="bg-green-500   h-screen w-full   ">
      <div className="relative  max-w-lg flex  bg-blue-100    ">
        <div className="   p-6 w-96 h-96  md:p-2 md:w-90 md:h-90   bg-green-200 rounded-br-full  mix-blend-multiply  fixed ">
          {" "}
        </div>
        <div className=" p-60 w-96 h-96 rounded-tl-full   md:p-2 md:w-96 md:h-96 mix-blend-multiply bg-green-200 fixed right-0 bottom-0 "></div>
      </div>

      <div className="flex flex-col card mx-auto my-auto mt-36 px-40 py-44 rounded-tr-3xl rounded-tl-3xl rounded-bl-3xl rounded-br-3xl ">
        <div className=" w-80 h-20    py-11 pt-24 mt-0 mb-20 flex  rounded-tr-3xl rounded-tl-3xl items-center justify-center bg-green-400      ">
          <div className="basis-1/4 ">
            {" "}
            <div className=" w-20 h-20 border-4 absolute  border-white bg-slate-300  rounded-full flex items-center     justify-center text-center  text-3xl cursor-pointer shadow-[0px_10px_5px_green] hover:shadow-[10px_-5px_10px_green]  ">
              👤
            </div>
          </div>
        </div>
        <div className="  w-64 h-48 justify-center items-center text-center  mb-20 ">
          <div className="font-serif font-bold">
            {" "}
            Victor Crest <span className="font-light   ">26</span>{" "}
          </div>
          <div className=" font-thin">London </div>
          <hr className="font-normal bg-gray-300 h-1 w-72 my-5 mr-24 bottom-0" />
          <div className=" font-bold text-2xl">
            {" "}
            <span className=" ml-10">80k</span>
            <span className="ml-6"> 803k </span>
            <span className="ml-5"> 1.4.K </span>
          </div>
          <div className="m">
            <span className="m font-thin"> Followers</span>
            <span className="ml-8 font-thin">Likes </span>
            <span className="ml-8 font-thin ">Photos </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
