import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import './App.css';
import Header from './components/Header';

gsap.registerPlugin(useGSAP, ScrollTrigger);

function App() {

  useGSAP(
    () => {
      const pinText = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pin: '.visual-text',
          pinSpacer: false,
          start: 'top 20%',
          trigger: '.visual-text',
          endTrigger: '.what-we-do',
          y: -100,
        },
      });

      pinText.to('.visual-text', {
        y: 100,
      });


      const gallery = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          pinSpacer: false,
          trigger: '.gallery',
        },
      });

      gallery.to('.img-container', {
        y: '20%',
      });

      const whatWeDo = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: '.what-we-do .title',
          endTrigger: '.what-we-do .end-title',
          start: 'top 70%',
          end: 'bottom -20%',
          toggleClass: { targets: '.what-we-do', className: 'reached' },
        },
      });
        
      const works = gsap.utils.toArray('.works .works-panel');
      works.forEach((panel, index) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          pin: true,
          pinSpacing: false,
          pinSpacer: false,
          duration: 1000,
          onToggle: (self) => {
            const index = self.pin.getAttribute('data-index');
            if (index === '3') {
              panel.classList.add('kill');
            }
          },
        });
      });

      const middle = gsap.timeline({
        scrollTrigger: {
          scrub: 1,
          trigger: '.middle .rolling-text',
          start: 'top 50%',
          end: 'bottom 50%',
        },
      });

    }
  );

  return (
    <>
      <Header />
      <section className="main h-100vh">
        <div className="rolling-text">
          <p>WE DESIGN</p>
          <ul className="rotate">
            <li>Responsive</li>
            <li>SEO</li>
            <li>WordPress</li>
            <li>Effective</li>
            <li>Modern</li>
            <li>Everything</li>
          </ul>
          <p>WEBSITES</p>
        </div>
        <div className="visual-text">
          <span>SORO </span>
          <span>for </span>
          <span>SORO</span>
        </div>
      </section>
      <section className="gallery w-100">
        <ul className="inner">
          <li>
            <div className="card">
              <div className="img-container w-100">
                <img className="thumnail" src="/img/soro/card1.jpg" alt="썸네일" />
              </div>
            </div>
            <div className="info flex dir-column">
              <div className="flex-btw">
                <h3>DOOSAN HERITAGE</h3>
                <h3>@2023</h3>
              </div>
              <p className="dis">[RESPONSIVE WEBSITE]</p>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="img-container w-100">
                <img className="thumnail" src="/img/soro/card1.jpg" alt="썸네일" />
              </div>
            </div>
            <div className="info flex dir-column">
              <div className="flex-btw">
                <h3>DOOSAN HERITAGE</h3>
                <h3>@2023</h3>
              </div>
              <p className="dis">[RESPONSIVE WEBSITE]</p>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="img-container w-100">
                <img className="thumnail" src="/img/soro/card1.jpg" alt="썸네일" />
              </div>
            </div>
            <div className="info flex dir-column">
              <div className="flex-btw">
                <h3>DOOSAN HERITAGE</h3>
                <h3>@2023</h3>
              </div>
              <p className="dis">[RESPONSIVE WEBSITE]</p>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="img-container w-100">
                <img className="thumnail" src="/img/soro/card1.jpg" alt="썸네일" />
              </div>
            </div>
            <div className="info flex dir-column">
              <div className="flex-btw">
                <h3>DOOSAN HERITAGE</h3>
                <h3>@2023</h3>
              </div>
              <p className="dis">[RESPONSIVE WEBSITE]</p>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="img-container w-100">
                <img className="thumnail" src="/img/soro/card1.jpg" alt="썸네일" />
              </div>
            </div>
            <div className="info flex dir-column">
              <div className="flex-btw">
                <h3>DOOSAN HERITAGE</h3>
                <h3>@2023</h3>
              </div>
              <p className="dis">[RESPONSIVE WEBSITE]</p>
            </div>
          </li>
          <li>
            <div className="card">
              <div className="img-container w-100">
                <img className="thumnail" src="/img/soro/card1.jpg" alt="썸네일" />
              </div>
            </div>
            <div className="info flex dir-column">
              <div className="flex-btw">
                <h3>DOOSAN HERITAGE</h3>
                <h3>@2023</h3>
              </div>
              <p className="dis">[RESPONSIVE WEBSITE]</p>
            </div>
          </li>
        </ul>
      </section>
      <section className="what-we-do w-100 h-100vh">
        <div className="inner">
          <div className="flex">
            <h1 className="title">
              What <span>we</span> do
            </h1>
            <article className="article-wrap">
              <p>서로는 끝을 맺기를 처음과 같이합니다.</p>
              <p>작은 것 하나도 놓치지 않고 확실한 결과물을</p>
              <p>만들기 위해 항상 고민하고 소통합니다.</p>
              <br />
              <p>“소통”을 기본으로 혁신적인 기술과 창의력을</p>
              <p>더해 고객의 만족을 감동으로 전하겠습니다.</p>
              <br />
              <p>Soro Commucation want to end the same</p>
              <p>way we started.</p>
              <p>We always think and communicate to create</p>
              <p>clear results without missing a single detail.</p>
              <br />
              <p>Based on “communication”, we will add</p>
              <p>innovative technology and creativity to</p>
              <p>deliver impressive customer satisfaction.</p>
            </article>
          </div>
          <h1 className="end-title">
            <span>DESIGN</span> IS <span>NEVER</span> DONE
          </h1>
        </div>
      </section>
      <section className="works w-100">
        <div className="works-panel w-100" data-index="1">
          <div className="item-wrap">
            <div className="title-div flex">
              <p>2nd/Feb/2023</p>
              <div className="flex dir-column">
                <ul className="labels flex">
                  <li className="flex-center ali-center">Renewal</li>
                  <li className="flex-center ali-center">Website</li>
                  <li className="flex-center ali-center">Development</li>
                </ul>
                <h1 className="partner-name">
                  DN 오토보티브
                  <span>[DN AUTOMOTIVE]</span>
                </h1>
              </div>
              <a>VISIT SITE →</a>
            </div>
          </div>
        </div>
        <div className="works-panel w-100" data-index="2">
          <div className="item-wrap">
            <div className="title-div flex">
              <p>2nd/Feb/2023</p>
              <div className="flex dir-column">
                <ul className="labels flex">
                  <li className="flex-center ali-center">Renewal</li>
                  <li className="flex-center ali-center">Website</li>
                  <li className="flex-center ali-center">Development</li>
                </ul>
                <h1 className="partner-name">
                  DN 오토보티브2
                  <span>[DN AUTOMOTIVE]</span>
                </h1>
              </div>
              <a>VISIT SITE →</a>
            </div>
          </div>
        </div>
        <div className="works-panel w-100" data-index="3">
          <div className="item-wrap">
            <div className="title-div flex">
              <p>2nd/Feb/2023</p>
              <div className="flex dir-column">
                <ul className="labels flex">
                  <li className="flex-center ali-center">Renewal</li>
                  <li className="flex-center ali-center">Website</li>
                  <li className="flex-center ali-center">Development</li>
                </ul>
                <h1 className="partner-name">
                  DN 오토보티브3
                  <span>[DN AUTOMOTIVE]</span>
                </h1>
              </div>
              <a>VISIT SITE →</a>
            </div>
          </div>
        </div>
      </section>
      <section className="middle w-100 h-100vh">
        <article className="rolling-text w-100">
          <div className="txt-top">
            <span>TAIHAN·OB·NAVER CLOUD·EUGENE·DOOSAN·MOTTROL·METANET·DAESUNG</span>
            <span>TAIHAN·OB·NAVER CLOUD·EUGENE·DOOSAN·MOTTROL·METANET·DAESUNG</span>
            <span>TAIHAN·OB·NAVER CLOUD·EUGENE·DOOSAN·MOTTROL·METANET·DAESUNG</span>
          </div>
          <div className="txt-btm">
            <span>TAIHAN·OB·NAVER CLOUD·EUGENE·DOOSAN·MOTTROL·METANET·DAESUNG</span>
            <span>TAIHAN·OB·NAVER CLOUD·EUGENE·DOOSAN·MOTTROL·METANET·DAESUNG</span>
            <span>TAIHAN·OB·NAVER CLOUD·EUGENE·DOOSAN·MOTTROL·METANET·DAESUNG</span>
          </div>
        </article>
      </section>
    </>
  );
}

export default App;
