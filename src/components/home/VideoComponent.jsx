import React, { useEffect, useState } from "react";

const VideoComponent = () => {

  const [loading, setLoading] = useState(false);

  return (
    <>
      {
        loading && <p className="text-black">Loading...</p>
      }
      <video
        loop
        muted
        autoPlay
        playsInline
        onLoadStart={()=>{setLoading(true)}}
        onLoadedData={()=>{setLoading(false)}}
        className="object-cover w-[22vw] tab:w-[25vw] mob:w-[47vw] h-[13vw] tab:h-[16vw] mob:h-[29vw] rounded-[100px] shadow-[0_0px_60px_-15px_#12121240] overflow-hidden"
      >
        <source src={"./samplevideo3.mp4"} type="video/mp4" />
        your browser does not support the video
      </video>
    </>
  );
};

export default VideoComponent;
