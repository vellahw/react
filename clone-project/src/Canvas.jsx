import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import './Canvas.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function Canvas(props) {
  const main = useRef();
  const rightCardsRef = useRef();

  useGSAP(
    () => {
      // gsap.to('.left', {
      //   width: '100%',
      //   height: '100%',
      //   left: 0,
      //   borderRadius: 0,
      //   scrollTrigger: {
      //     trigger: '.sec',
      //     start: 'width 300px',
      //     end: 'width 100%',
      //     pin: '.sec',
      //     scrub: 0.5,
      //     markers: true,
      //   },
      // });

      const secondSection = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pin: true,
          trigger: '.sec',
          endTrigger: '.third',
        },
      });

      const pinSection = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pin: '.pin',
          trigger: '.pin',
        },
      });

      pinSection.to('.active-square', {
        width: '100%',
        height: '100%',
        left: 0,
        borderRadius: 0,
        //  duration: 50,
        scrollTrigger: {
          trigger: '.active-square',
          //  pin: '.pin',
          //  pinSpacing: false,
          markers: true,
          id: 'active-square',
          y: 300,
        },
      });

      secondSection.to('.square', {
        scrollTrigger: {
          trigger: '.trigger',
          toggleClass: { targets: '.square', className: 'active' },
        },
      });
      secondSection.to('.square-bg', {
        scrollTrigger: {
          scrub: 1,
          trigger: '.trigger',
          toggleClass: { targets: '.square-bg', className: 'active' },
        },
      });

      // secondSection.to('.card-wrap', {
      //   opacity: 1,
      // })
    },
    { scope: main }
  );

  return (
    <div id="wrap" ref={main}>
      <section className="first"></section>
      <section className="sec">
        <div className="inner">
          <div className="pin">
            <div className="active-square"></div>
            <div className="card-wrap">
              <div className="card">소통</div>
              <div className="card">인성</div>
              <div className="card">지성</div>
              <div className="card">창의성</div>
              <div className="card">체력</div>
            </div>
          </div>
          <div className="right" ref={rightCardsRef}>
            <div className="square"></div>
            <div className="square-bg"></div>
          </div>
          <div className="trigger"></div>
        </div>
      </section>
      <section className="third"></section>
    </div>
  );
}

export default Canvas;
