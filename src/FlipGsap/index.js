import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Flip } from "gsap/all";
import './styles.scss'

// Đăng ký plugin Flip với gsap
gsap.registerPlugin(Flip);

const layouts = ["final", "plain", "columns", "grid"];

function FlipGrap() {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        if (container) {
            let curLayout = 0;

            const nextState = () => {

                //Lấy trạng thái hiện tại
                const state = Flip.getState(".letter, .for, .gsap", { props: "color,backgroundColor", simple: true });

                container.classList.remove(layouts[curLayout]);
                curLayout = (curLayout + 1) % layouts.length;
                container.classList.add(layouts[curLayout]);

                Flip.from(state, {
                    absolute: true,
                    stagger: 0.07,
                    duration: 0.7,
                    ease: "power2.inOut",
                    spin: curLayout === 0,
                    simple: true,
                    onEnter: (elements, animation) => gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: animation.duration() - 0.1 }),
                    onLeave: elements => gsap.to(elements, { opacity: 0 })
                });

                gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
            };

            gsap.delayedCall(1, nextState);
        }
    }, [containerRef]); 
  
    return (
        <div className="body">
            <div className={`container final`} ref={containerRef} >
                <div className="letter F">F</div>
                <div className="letter l">L</div>
                <div className="letter i">I</div>
                <div className="letter p">P</div>
                <div className="for">for</div>
                <div className="gsap">GSAP</div>
            </div>
        </div>
    );
};

export default FlipGrap;
