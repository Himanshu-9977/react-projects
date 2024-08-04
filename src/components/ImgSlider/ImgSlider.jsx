import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const ImgSlider = ({ url, limit }) => {
  const [photos, setPhotos] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchImg() {
    try {
      setIsLoading(true);
      const response = await fetch(`${url}${limit}`);
      const data = await response.json();
      if (data) {
        setPhotos(data);
        setIsLoading(false);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImg(url);
  }, [url]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (errorMsg !== null) {
    return <div>{errorMsg}</div>;
  }

  return (
    <div className="flex my-20 items-center justify-center">
      <div className="relative w-full max-w-4xl h-[500px] rounded-2xl overflow-hidden flex items-center justify-center">
      <div className="flex justify-center items-center w-full h-full">
        {photos && photos.length ? (
          photos.map((photo, idx) => (
            <img
              key={idx}
              src={photo.download_url}
              alt={`Slide ${idx + 1}`}
              className={`w-full h-full object-cover ${
                idx === currentSlide ? "block" : "hidden"
              }`}
            />
          ))
        ) : null}
      </div>
      <button
        className="absolute left-[15px] top-1/2 transform -translate-y-1/2 bg-zinc-700 p-2 rounded-full"
        onClick={() => setCurrentSlide((prev) => (prev === 0 ? photos.length - 1 : prev - 1))}
      >
        <ArrowLeft size={24} />
      </button>
      <button
        className="absolute right-[15px] top-1/2 transform -translate-y-1/2 bg-zinc-700 p-2 rounded-full"
        onClick={() => setCurrentSlide((prev) => (prev === photos.length - 1 ? 0 : prev + 1))}
      >
        <ArrowRight size={24} />
      </button>
    </div>
    </div>
  );
};

export default ImgSlider;