import React from "react";

const YouTube = () => {
  return (
    <>
      {" "}
      {/* YouTube */}
      <div className="h-[250px] sm:h-[400px] md:h-[550px] flex items-center justify-center w-[50%] mt-[20px] mr-[550px] sm:mt-0 shadow-md mx-auto shadow-gray-400  ">
        <div className=" h-full w-[90%] ">
          {/* <iframe
                    className="w-full h-full object-cover"
                    src="https://www.youtube.com/embed/wF6v4VlWvLM?si=tgAvq8qPU0jrPYlN"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                ></iframe> */}
          <iframe
            className="w-full h-[200px] sm:h-[350px] md:h-[500px] md:w-[80%] mx-auto mt-[20px] sm:mt-[40px] object-cover rounded-xl shadow-xl"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default YouTube;
