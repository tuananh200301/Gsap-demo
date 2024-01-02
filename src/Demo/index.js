import React, { useEffect, useState } from "react";
import './styles.scss';
import gsap from "gsap";
import t1 from '../images/t1.png';
import t2 from '../images/t2.png';
import t3 from '../images/t3.png';
import t4 from '../images/t4.png';
import t5 from '../images/t5.png';
import mtrang from '../images/matTrang.png';
import mtroi from '../images/mattroi.png';
import snow1 from '../images/rain/snow1.png';
import snow2 from '../images/rain/snow2.png';
import snow3 from '../images/rain/snow3.png';
import snow4 from '../images/rain/snow4.png';
import snow5 from '../images/rain/snow5.png';
import snow6 from '../images/rain/snow6.png';
import snow7 from '../images/rain/snow7.png';
import changeIcon from '../images/change.png';
import tuanLoc from '../images/tuanLoc.png';

function Demo() {

  useEffect(() => {
    // Tuyết rơi
    const numSnowflakes = 100; // Tăng số lượng bông tuyết
    const snowflakeContainer = document.querySelector(".demoWrap");

    for (let i = 0; i < numSnowflakes; i++) {
      const snowflake = createSnowflake();
      snowflakeContainer.appendChild(snowflake);
      animateSnowflake(snowflake);
    }

  }, []);

  const createSnowflake = () => {
    const snowflake = document.createElement("img");
    snowflake.src = getRandomSnowflakeImage();
    snowflake.className = "snowflake";
    document.body.appendChild(snowflake);
    return snowflake;
  };

  const getRandomSnowflakeImage = () => {
    const snowflakeImages = [t1, t2, t3, t4, t5];
    return snowflakeImages[Math.floor(Math.random() * snowflakeImages.length)];
  };

  const animateSnowflake = (snowflake) => {
    const xPos = -100 + Math.random() * (window.innerWidth - 100);
    const duration = 10 + Math.random() * 10

    gsap.to(snowflake, {
      x: xPos, // Vị trí bắt đầu điểm ảnh 
      y: window.innerHeight, // Vị trí kết thúc điểm ảnh
      duration: duration,
      repeat: -1, //Lặp vô hạn
      ease: "power1.inOut",
      onComplete: () => resetSnowflake(snowflake),
    });
  };

  const resetSnowflake = (snowflake) => {
    const xPos = Math.random() * window.innerWidth;
    gsap.set(snowflake, { x: xPos, y: -50 });
  };

  // Chuyển đổi background ngày - đêm
  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeBackground = () => {
    const targetFilter = !isDarkMode
      ? "grayscale(0%) brightness(100%) contrast(100%)"
      : "grayscale(20%) brightness(30%) contrast(135%) saturate(175%)";


    gsap.to('.demoWrap', {
      duration: 1,
      filter: targetFilter,
      ease: "power3.out",
    });

    gsap.to('.imgDarkMode', {
      duration: 0.5,
      opacity: 0.1,
      x: !isDarkMode ? -50 : 0, // Di chuyển ảnh sang phải
      rotation: 45,
      ease: "power1.easeOut",
      onComplete: () => {
        // Sau khi hoàn thành hiệu ứng opacity, cập nhật src và hiển thị ảnh mới
        setIsDarkMode(!isDarkMode);
        gsap.to('.imgDarkMode', {
          duration: 0.5,
          opacity: 1,
          rotation: 0,
          ease: "power1.easeOut",
        });
      },
    });

    gsap.to('.reindeer', {
      filter: isDarkMode ? "drop-shadow(0px 2px 2px #faea10)" : "",
      duration: 0.5,
    });
    gsap.to('.changeImg', {
      backgroundColor: isDarkMode ? "#faea10" : "#1014fa63",
      duration: 0.5,
    });
    gsap.to('.imgChange', {
      filter: isDarkMode ? "drop-shadow(0px 2px 2px #faea10)" : "",
      duration: 0.5,
    });
  };

  // const changeBackground = () => {
  //   setIsDarkMode(!isDarkMode);

  //   gsap.to(".demoWrap", {
  //     opacity: 1,
  //     duration: 5,
  //     ease: "power1.inOut",
  //     onStart: () => {
  //       gsap.set(".demoWrap", {
  //         mixBlendMode: "darken", // Chọn mode phù hợp
  //       });
  //     },
  //     onComplete: () => {
  //       // Đặt giá trị tương phản ở giá trị tối đa hoặc tối thiểu khi hoàn thành
  //       gsap.set(".demoWrap", {
  //         mixBlendMode: "normal", // Chuyển về chế độ bình thường
  //       });
  //     },
  //   });

  //   gsap.to('.imgDarkMode', {
  //         duration: 0.5,
  //         opacity: 0.1,
  //         x: !isDarkMode ? -50 : 0, // Di chuyển ảnh sang phải
  //         rotation: 45,
  //         ease: "power1.easeOut",
  //         onComplete: () => {
  //           // Sau khi hoàn thành hiệu ứng opacity, cập nhật src và hiển thị ảnh mới
  //           setIsDarkMode(!isDarkMode);
  //           gsap.to('.imgDarkMode', {
  //             duration: 0.5,
  //             opacity: 1,
  //             rotation: 0,
  //             ease: "power1.easeOut",
  //           });
  //         },
  //       });

  //       gsap.to('.reindeer', {
  //         filter: !isDarkMode ? "drop-shadow(0px 2px 2px #faea10)": "",
  //         duration: 0.5,
  //       });
  //       gsap.to('.changeImg', {
  //         backgroundColor: !isDarkMode ? "#faea10" : "#1014fa63", 
  //         duration: 0.5,
  //       });
  //       gsap.to('.imgChange', {
  //         filter: !isDarkMode ? "drop-shadow(0px 2px 2px #faea10)": "",
  //         duration: 0.5,
  //       });
  // };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleImageClick = () => {
    if (isExpanded) {
      // Nếu ảnh đã mở rộng, thực hiện hiệu ứng khi đóng lại
      gsap.to(".imgChange", {
        duration: 1.5,
        scale: 1,
        x: 0,
        rotation: 0,
      });
    } else {
      // Nếu ảnh chưa mở rộng, thực hiện hiệu ứng khi mở rộng
      gsap.to(".imgChange", {
        duration: 1.5,
        scale: 1,
        x: -200,
        // y: -100,
        rotation: 360,
      });
    }

    setIsExpanded(!isExpanded);
  };


  const [currentImage, setCurrentImage] = useState(snow1);
  const [rotationCount, setRotationCount] = useState(0);

  const images = [snow1, snow2, snow3, snow4, snow5, snow6, snow7];

  const handleClick = () => {
    const currentIndex = images.indexOf(currentImage);
    const nextIndex = (currentIndex + 1) % images.length;

    const newRotationCount = rotationCount + 1;

    gsap.to('.changeImg', {
      rotation: newRotationCount * 180, // 180 độ cho mỗi vòng quay
      duration: 0.3,
    });

    setRotationCount(newRotationCount);

    gsap.timeline()
      .to('.imgChange', { rotationY: -90, duration: 0.15, opacity: 0 })
      .call(() => setCurrentImage(images[nextIndex]))
      .to('.imgChange', { rotationY: 0, duration: 0.15, opacity: 1 });
  };

  useEffect(() => {

    const shakeTimeline = gsap.timeline({ repeat: -1 });

    // Định nghĩa hiệu ứng lắc đầu
    const headShake = () => {
      return gsap.to('.imgChange', {
        duration: 0.1,
        rotation: 5,
        yoyo: true,
        repeat: 1,
        ease: "power1.inOut",
      });
    };

    // Thêm các hiệu ứng lắc vào timeline
    shakeTimeline.add(headShake(), "+=1");
    shakeTimeline.add(headShake(), "+=1");
    shakeTimeline.add(headShake(), "+=1");

    // Bắt đầu timeline sau vài giây
    gsap.delayedCall(2, () => {
      shakeTimeline.play();
    });

  }, []);


  useEffect(() => {
    document.body.style.overflowX = "hidden";

    const runTimeline = gsap.timeline({ repeat: -1, repeatDelay: 6 });

    // Thêm hiệu ứng chạy qua màn hình vào timeline
    runTimeline.to('.reindeer', {
      x: "2200", // Dịch chuyển từ trái qua phải
      duration: 10,
      ease: "linear",
      onComplete: () => {
        // Không set lại vị trí ngay tại đây
      },
    });

  }, []);

  return (
    <div className="wrap" >
      <div className="demoWrap"  >

      </div>
      <div onClick={changeBackground}>
        <img className="imgDarkMode" src={!isDarkMode ? mtrang : mtroi} alt="" />
      </div>
      <img className="imgChange" src={currentImage} onClick={handleImageClick} alt="" />
      <img className="changeImg" src={changeIcon} onClick={handleClick} alt="" />
      <img className="reindeer" src={tuanLoc} alt="" />
    </div>

  );
}

export default Demo;
