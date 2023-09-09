import { useState } from "react";

export default function ImageSlider({ images }) {
  const [key, setKey] = useState(0);

  return (
    <section className="ContentImg">
      <img src={images[key].bannerCode} alt="Banner 1" className="ProductImg" />
      <div className="Arrow">
        <img
          onClick={() =>
            setKey((prev) => (prev < images.length - 1 ? prev + 1 : prev))
          }
          src="../images/icon-next.svg"
          alt="Next Icon"
        />
      </div>
      <div className="ArrowDown">
        <img
          onClick={() => setKey((prev) => (prev <= 0 ? 0 : prev - 1))}
          src="../images/icon-previous.svg"
          alt="Prev Icon"
        />
      </div>
      <article className="ProductThumb">
        {images.map((item) => {
          if (item.key === key + 1) {
            return (
              <img
                key={item.key}
                src={item.bannerCode}
                onClick={() => setKey(() => item.key - 1)}
                alt="Banner 1"
                className="ThumbImg ThumbOpacity"
              />
            );
          }
          return (
            <img
              key={item.key}
              src={item.bannerCode}
              onClick={() => setKey(() => item.key - 1)}
              alt="Banner 1"
              className="ThumbImg"
            />
          );
        })}
      </article>
    </section>
  );
}
