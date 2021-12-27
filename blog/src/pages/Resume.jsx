import React from 'react';
import './Resume.css'

export default function Resume() {
  return (
    <div>
      <div className="resume-title">
        Resume
        <p>저는 “창의적이고 책임감이 강한 프론트엔트 개발자” 입니다.</p>
        <p>
        저는 사용자 관점의 인터페이스를 구현하는 걸 좋아합니다. 사용자를 이해하고 사용자가 원하는 경험을 제공하도록 노력하는 것이 개발자에게 가장 필요한 덕목이라 믿습니다. 음악을 사랑하고 주도적으로 업무를 수행할 수 있는 환경을 선호합니다.
        </p>
        <div className="resume-content-wrapper">
          <div className="resume-content-left">
            <img src="https://nu1997.github.io/portfolio/images/resume/figure.jpeg" />
          </div> 
          <div className="resume-content-right">
            <div>
              <p>
                Educations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} ;