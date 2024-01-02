import React, { useEffect, useRef } from 'react'
import bg from '../images/bg1.png';
import './styles.scss';
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/all";
import snow5 from '../images/rain/snow5.png';
import tuanloc from '../images/tuanLoc.png';
import change from '../images/changeimg.png';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

function ScrollDemo() {
    const containerRef = useRef(null);
    const colors = ['#ff0000', '#00ff00', '#0000ff']
    
    useEffect(() => {
        const textElement = containerRef.current;

        if (textElement) {
            const contentHolderHeight = document.querySelector(".content-holder").offsetHeight;
            const imgHolderHeight = window.innerHeight;
            const additionalScrollHeight = window.innerHeight;
            const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalScrollHeight;

            document.body.style.height = `${totalBodyHeight}px`;
            ScrollTrigger.create({
                trigger: '.website-content',
                start: "-0.1% top",
                end: 'bottom bottom',
                onEnter: () => {
                    gsap.set(".website-content", {
                        position: 'absolute',
                        top: '195%'
                    });
                },
                onLeaveBack: () => {
                    gsap.set(".website-content", {
                        position: 'fixed',
                        top: '0'
                    })
                }
            })

            gsap.to('.letters:first-child', {
                x: -6600,
                scale: 10,
                ease: "power2.inOut",
                scrollTrigger: {
                    start: "top top",
                    end: `+=200%`,
                    scrub: 1
                }
            });

            gsap.to(".letters:last-child", {
                x: 6600,
                scale: 10,
                ease: "power2.inOut",
                scrollTrigger: {
                    start: "top top",
                    end: `+=200%`,
                    scrub: 1
                }
            });

            gsap.to(".img-holder", {
                rotation: 0,
                clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
                ease: "power2.inOut",
                scrollTrigger: {
                    start: "top top",
                    end: `+=200%`,
                    scrub: 1
                }
            });

            gsap.to(".imgbg", {
                scale: 1,

                ease: "power2.inOut",
                scrollTrigger: {
                    start: "top top",
                    end: `+=200%`,
                    scrub: 1
                }
            });

            const tl = gsap.timeline({ repeat: -1 });

            colors.forEach((color, index) => {
                tl.to('.text-content', {
                    color,
                    duration: 1, 
                    delay: index,
                });
            });



            // textElement.childNodes.forEach((textElement) => {
            //     const hoverTimeline = gsap.timeline({ paused: true });
            //     hoverTimeline.to(textElement, { scale: 1, duration: 0.3 });

            //     textElement.addEventListener('mouseenter', () => {
            //         hoverTimeline.play();
            //     });

            //     textElement.addEventListener('mouseleave', () => {
            //         hoverTimeline.reverse();
            //     });
            // });

            gsap.to(".content", {
                scale: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    start: "center 80%",
                    end: "center 20%",
                    scrub: true
                }
            });
        }

    }, [containerRef]);

    useEffect(() => {
        let typeSplit;
    
        function runSplit() {
          typeSplit = new SplitType(".content", {
            types: "line, word"
          });
          document.querySelectorAll('.word').forEach(word => {
            word.innerHTML += "<div class='line-mask'></div>";
          });
          createAnimation();
        }
    
        runSplit();

        function createAnimation() {
          let allMasks = document.querySelectorAll('.word .line-mask');
    
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".content",
              start: "top center",
              end: "bottom center",
              scrub: 1
            }
          });
    
          tl.to(allMasks, {
            width: "0%",
            duration: 3,
            stagger: 1
          });
        }
      }, []);

    return (
        <div className='srollWrap'>
            <div className='logo'>  </div>
            <div className='headers'>
                <div className='letters' ref={containerRef}>
                    <div className='text-content'>chris</div>
                </div>
                <div className='letters' >
                    <div className='text-content'>tmas</div>
                </div>
            </div>
            <div className="website-content" >
                <div className='img-holder'>
                    <img className='imgbg' src={bg} alt='' />
                </div>
                <div className="content-holder">
                    <div className='row'>
                        <h1 >Giới thiệu</h1>
                    </div>
                    <div className='row'>
                    <div className='content'>Những câu chuyện về ông già Noel có thể bạn đã nghe rất nhiều rồi nhưng chuyện về những chú tuần lộc kéo xe cho ông già Noel thì sao? Bạn đã từng nghe qua, có biết chúng hình dạng như thể nào, có thật không? Chúng có bao nhiêu con và tại sao ông già Noel lại chọn tuần lộc để kéo xe mà không phải loài vật nào khác?</div>
                        <div className='img'>
                            <img src={tuanloc} alt='' />
                        </div>
                    </div>
                    <div className='row'>
                    <div className='content'>Người tuyết là một tác phẩm điêu khắc trên tuyết được nhân cách hóa thường được đắp ở những vùng có tuyết rơi. Ở nhiều nơi, người tuyết được đắp bao gồm ba quả cầu tuyết lớn với các kích cỡ khác nhau với một số trang trí bổ sung cho khuôn mặt và các nơi khác. Do tính dễ tạo hình của tuyết nên có rất nhiều phong cách khác nhau có thể được sáng chế ra. Các vật trang trí phổ biến bao gồm cành cây làm cánh tay, một khuôn mặt cười đơn giản và một củ cà rốt được dùng làm mũi. Có thể đặt thêm một số trang phục chẳng hạn như mũ hoặc khăn quàng cổ</div>
                        <div className='img'>
                            <img src={snow5} alt='' />
                        </div>
                    </div>
                    <div className='row'>
                  <div  className='content'>Nhấn vào nút "Thay Đổi Trang Phục" để biến đổi vẻ ngoại hình của người tuyết. Chiếc mũ len ấm áp, chiếc áo len dễ thương, và những chiếc găng tay màu sắc sẽ tạo nên những trang phục tuyết mới mẻ và độc đáo.Bạn có thể thay đổi giữa ngày và đêm bằng cách nhấn vào nút "Thay Đổi Ngày Đêm". Ngôi làng sẽ chuyển đổi từ ánh sáng mặt trời tỏa nắng sang bầu trời đêm bí ẩn, tạo ra không khí huyền bí và tuyệt vời.</div>
                        <div className='img'>
                            <img src={change} alt='' />
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>

    )
}

export default ScrollDemo