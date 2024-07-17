import "../index.css";

function SecondProfile() {
  return (
    <>
      <div className="card  my-32  p-44 flex gap-44  flex-col fixed">
        <div className="flex   basis-1/4    relative">
          <div className=" w-80 h-28 hover:shadow-2xl  py-11 pt-20 mt-0 flex   items-center justify-center bg-blue-300       ">
            <div className="basis-1/4 ">
              {" "}
              <div className=" absolute w-20 h-20 border-4 border-white bg-gray-300  rounded-full flex items-center   font-black   justify-center text-center text-3xl cursor-pointer hover:shadow-2xl  shadow-xl ">
                👤
              </div>
            </div>
          </div>
        </div>

        <div className="flex  bg-pink-300 basis-1/4 ">
          <div className="w-12 h-12 rounded-full bg-yellow-300"> </div>
        </div>
      </div>
    </>
  );
}

export default SecondProfile;
