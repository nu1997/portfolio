import React from 'react';
import './Resume.css'
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Resume() {
  return (
    <Container fixed className="resume-wrapper">
      {/* <div className="resume-title">
        <Typography variant="h3">Resumé</Typography>
      </div> */}
      <Box className="resume-content-wrapper">
        <div className="resume-content-left">
          <img className="resume-profile-img" src="https://nu1997.github.io/portfolio/images/resume/figure.jpeg" alt="profile"/>
          <p>저는 “창의적이고 책임감이 강한 프론트엔트 개발자” 입니다.</p>
          <p>자기주도적이고 책임감 있는 프론트엔드 개발자입니다. 팀 협업을 통해 빠르게 배웁니다. 사용자를 고려한 UX/UI 디자인에 깊은 관심이 있습니다.</p>
          <p>저는 사용자 관점의 인터페이스를 구현하는 걸 좋아합니다. 사용자를 이해하고 사용자가 원하는 경험을 제공하도록 노력하는 것이 개발자에게 가장 필요한 덕목이라 믿습니다. 음악을 사랑하고 주도적으로 업무를 수행할 수 있는 환경을 선호합니다.</p>
        </div> 
        <div className="resume-content-right">
          <div className="resume-content-details">
            <Typography className="resume-content-title" variant="h5">Educations</Typography>
            <Divider variant="middle" />
            <Typography>Korea University</Typography>
            <Typography variant="body2">2015.03 - 2020.02</Typography>
            <Typography className="resume-content-title" variant="h5">Certifications</Typography>
            <Divider variant="middle" />
            <Typography variant="body1">삼성 청년 SW 아카데미 수료</Typography>
            <Typography variant="body2">2021.01 - 2021.12</Typography>
            <Typography className="resume-content-title" variant="h5">Awards and Honors</Typography>
            <Divider variant="middle" />
            <Typography variant="body1">SSAFY 공통 프로젝트 우수상 (3위)</Typography>
            <Typography variant="body2">2021.01 - 2021.12</Typography>
            <Typography variant="body1">SSAFY 특화 프로젝트 우수상 (2위)</Typography>
            <Typography variant="body2">2021.01 - 2021.12</Typography>
            <Typography variant="body1">SSAFY 자율 프로젝트 우수상 (2위)</Typography>
            <Typography variant="body2">2021.01 - 2021.12</Typography>
            <Typography variant="body1">SSAFY 자율 프로젝트 UCC 우수상 (1위)</Typography>
            <Typography variant="body2">2021.01 - 2021.12</Typography>
          </div>
        </div>
      </Box>
    </Container>
  )
} ;