import React, { useState, useEffect } from "react";

const MarqueeProposal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sentences = [
  "Dunyoyimni boshqalarga oʻxshamagan holda yoritasan.",
  "Sening yonindagi har bir daqiqa sehrdek tuyuladi.",
  "Mening dunyim sen bilan boshlanadi va sen bilan tugaydi.",
  "Yuragim tezroq urishiga sababchi sensan.",
  "Yonimda boʻlganingda hayot mukammal tuyuladi.",
  "Kelajagimni sensiz tasavvur qila olmayman.",
  "Eng qorongʻi kunlarimda ham mening quyoshimsan.",
  "Sen bilan har bir kun bir baraka/baxtdir.",
  "Yuragimni toʻldiradigan yetishmayotgan boʻlagimsan.",
  "Hatto oddiy daqiqalarni ham ajoyib qilasan.",
  "Dunyoyimni yanada charogʻon va baxtli qilasan.",
  "Sen men hech qachon uygʻonishni xohlamaydigan tushimsan.",
  "Bir umr hayotimning sevgisi boʻlasanmi?",
];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sentences.length);
    }, 9000); // Change sentence every 9 seconds
    return () => clearInterval(interval);
  }, [sentences.length]);

  return (
    <div
      style={{
        width: "50%",
        height: "75px",
        margin: "50px auto",
        borderRadius: "25px",
        overflow: "hidden",
        position: "relative",
        background: "transparent",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
        border: "4px solid #ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          whiteSpace: "nowrap",
          position: "absolute",
          animation: "marquee 10s linear infinite",
        }}
        key={currentIndex}
      >
        <span
          style={{
            fontSize: "2rem",
            fontFamily: "Charm, serif", 
            // fontFamily: "Beau Rivage, serif", 
            fontStyle: "normal",
            fontWeight: "700",
            color: "#191a19",
            textShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
          }}
        >
          {sentences[currentIndex]}
        </span>
      </div>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%); /* Start fully off-screen to the right */
          }
          100% {
            transform: translateX(-100%); /* End fully off-screen to the left */
          }
        }
      `}</style>
    </div>
  );
};

export default MarqueeProposal;
