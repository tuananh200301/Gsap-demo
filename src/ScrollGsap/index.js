import React, { useEffect, useRef } from "react";
import './styles.scss'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

function ScrollGsap() {
  const arrowBtnRef = useRef(null);

    useEffect(() => {
      //Thiết lập thuộc tính cho các lớp
        gsap.set('.main', {
            position: 'fixed',
            background: '#fff',
            width: '100%',
            maxWidth: '1920px',
            height: '100%',
            top: '60px',
            left: '50%',
            x: '-50%'
        });
        gsap.set('.scrollDist', { width: '100%', height: '200%' });

        // Tạo hiệu ứng dựa trên sự kiện cuộn trang
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.scrollDist',
                start: 'top top',
                end: 'bottom bottom',
                scrub: 1
            }
        });

        timeline
            .fromTo('.sky', { y: 0 }, { y: -200 }, 0)
            .fromTo('.cloud1', { y: 100 }, { y: -800 }, 0)
            .fromTo('.cloud2', { y: -150 }, { y: -500 }, 0)
            .fromTo('.cloud3', { y: -50 }, { y: -650 }, 0)
            .fromTo('.mountBg', { y: -10 }, { y: -100 }, 0)
            .fromTo('.mountMg', { y: -30 }, { y: -250 }, 0)
            .fromTo('.mountFg', { y: -50 }, { y: -600 }, 0);

        const arrowBtn = arrowBtnRef.current;

        const handleMouseEnter = () => {
            gsap.to('.arrow', { y: 10, duration: 0.8, ease: 'back.inOut(3)', overwrite: 'auto' });
        };

        const handleMouseLeave = () => {
            gsap.to('.arrow', { y: 0, duration: 0.5, ease: 'power3.out', overwrite: 'auto' });
        };

        const handleClick = () => {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth', //  scrolls slowly 
            });
        };

        arrowBtn.addEventListener('mouseenter', handleMouseEnter);
        arrowBtn.addEventListener('mouseleave', handleMouseLeave);
        arrowBtn.addEventListener('click', handleClick);

        return () => {
            arrowBtn.removeEventListener('mouseenter', handleMouseEnter);
            arrowBtn.removeEventListener('mouseleave', handleMouseLeave);
            arrowBtn.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className="body">
            <div className="scrollDist"></div>
            <div className="main">
                <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
                    <mask id="m">
                        <g className="cloud1">
                            <rect fill="#fff" width="100%" height="801" y="799" />
                            <image href="https://assets.codepen.io/721952/cloud1Mask.jpg" width="1200" height="800" />
                        </g>
                    </mask>

                    <image className="sky" href="https://assets.codepen.io/721952/sky.jpg" width="1200" height="590" />
                    <image className="mountBg" href="https://assets.codepen.io/721952/mountBg.png" width="1200" height="800" />
                    <image className="mountMg" href="https://assets.codepen.io/721952/mountMg.png" width="1200" height="800" />
                    <image className="cloud2" href="https://assets.codepen.io/721952/cloud2.png" width="1200" height="800" />
                    <image className="mountFg" href="https://assets.codepen.io/721952/mountFg.png" width="1200" height="800" />
                    <image className="cloud1" href="https://assets.codepen.io/721952/cloud1.png" width="1200" height="800" />
                    <image className="cloud3" href="https://assets.codepen.io/721952/cloud3.png" width="1200" height="800" />
                    <text fill="#fff" x="350" y="200">EXPLORE</text>
                    <polyline className="arrow" fill="#fff" points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250" />

                    <g mask="url(#m)">
                        <rect fill="#fff" width="100%" height="100%" />
                        <text x="350" y="200" fill="#162a43">FURTHER</text>
                    </g>

                    <rect ref={arrowBtnRef} width="100" height="100" opacity="0" x="550" y="220" style={{ cursor: "pointer" }} />
                </svg>
            </div>
        </div>
    );
};

export default ScrollGsap;

