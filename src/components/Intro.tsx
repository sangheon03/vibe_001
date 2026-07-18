"use client";

import { useRef } from "react";

const imgBg = "/images/bg.png";
const imgBlur = "/images/blur.png";
const imgBlur1 = "/images/blur1.png";
const imgImg77541 = "/images/img77541.png";
const imgEllipse2 = "/images/ellipse2.png";
const imgVector3 = "/images/vector3.png";
const imgVector4 = "/images/vector4.png";
const imgVector9 = "/images/vector9.png";
const imgCommand = "/images/command.png";
const imgMapPin = "/images/mappin.png";
const imgCheck = "/images/check.png";
const imgIconGroup = "/images/icongroup.png";
const imgGroup = "/images/group.png";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleProfileButtonClick = () => {
    containerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full flex items-center justify-center" style={{ fontFeatureSettings: "'liga' off, 'clig' off" }}>
      <div className="w-full max-w-[1440px] flex flex-col items-center" data-node-id="1:458" data-name="Intro">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-white to-[#f8faff] w-full overflow-hidden relative" style={{ height: "880px" }} data-node-id="1:382" data-name="Main frame">
          <div className="absolute h-full left-0 top-0 w-full overflow-hidden">
            <div className="absolute h-full left-1/2 top-0 w-[1440px] -translate-x-1/2">
              <img
                alt="Background"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={imgBg}
                loading="eager"
              />
            </div>
            <div className="absolute bottom-0 h-[179px] left-0 right-0">
              <img
                alt="Blur effect"
                className="w-full h-full object-cover pointer-events-none"
                src={imgBlur}
                loading="lazy"
              />
            </div>
            <div className="absolute bottom-0 h-[450px] left-0 right-0">
              <img
                alt="Blur effect 2"
                className="w-full h-full object-cover pointer-events-none"
                src={imgBlur1}
                loading="lazy"
              />
            </div>
          </div>

          {/* Content Container */}
          <div className="absolute w-full max-w-[1440px] left-1/2 -translate-x-1/2 h-full flex flex-col gap-8 items-center justify-center pb-20 pt-[551px]">
            {/* Text Group */}
            <div className="flex flex-col items-center justify-center gap-0">
              <div className="flex flex-col justify-center">
                <p
                  className="text-[56px] font-bold text-[#222426] leading-[135%] tracking-[-1.12px] whitespace-nowrap"
                  style={{ fontFamily: "SUIT" }}
                >
                  왕거지 팔리아치 소년
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#222426] from-[85%] to-[#1a6aff]"
                  style={{ fontFamily: "SUIT" }}
                >
                  <p className="text-[56px] font-bold leading-[135%] tracking-[-1.12px] whitespace-nowrap">감자탕 깔라만씨</p>
                </div>
                <div
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(84.98057302941436deg, rgb(26, 106, 255) 0.47318%, rgb(86, 216, 255) 79.455%)",
                    fontFamily: "SUIT"
                  }}
                >
                  <p className="text-[56px] font-bold leading-[135%] tracking-[-1.12px] whitespace-nowrap">그라시아스</p>
                </div>
              </div>
            </div>

            {/* Profile Button */}
            <button
              onClick={handleProfileButtonClick}
              className="backdrop-blur-[20px] bg-gradient-to-b from-[rgba(255,255,255,0.45)] to-[rgba(255,255,255,0.9)] border-2 border-[#1f72ff] rounded-full px-10 py-5 shadow-[0px_0px_140px_0px_white,-10px_-10px_48px_0px_#cee2ff,10px_10px_48px_0px_#ced7ff] hover:opacity-90 transition-opacity cursor-pointer"
            >
              <p
                className="text-[18px] font-[800] text-[#222426] leading-[140%] tracking-[-0.36px] whitespace-nowrap"
                style={{ fontFamily: "SUIT" }}
              >
                프로필 보기
              </p>
            </button>
          </div>
        </div>

        {/* Profile Section */}
        <div
          ref={containerRef}
          className="bg-[#f8faff] w-full flex items-center justify-center py-20"
          data-node-id="1:321"
          data-name="Container"
        >
          <div className="w-full max-w-[1440px] flex items-center justify-between px-8">
            {/* Profile Image Side */}
            <div className="flex-shrink-0 relative w-[645px] h-[600px]">
              <div className="absolute left-[-370.75px] w-[1057.5px] h-[1057.5px] top-[-0.25px]">
                <div className="absolute inset-[-14.18%]">
                  <img
                    alt="Ellipse background"
                    className="w-full h-full block"
                    src={imgEllipse2}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute left-[-142px] top-[-141px] w-[1145.514px] h-[1845px]">
                <div className="relative w-full h-full overflow-hidden pointer-events-none">
                  <img
                    alt="Profile photo"
                    className="absolute w-[189.86%] h-[157.18%] top-[-57.18%] left-[-44.93%]"
                    src={imgImg77541}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="absolute h-[35.053px] w-[39.504px] left-[400.48px] top-[896.12px]">
                <img
                  alt="Vector decoration"
                  className="w-full h-full block"
                  src={imgVector3}
                  loading="lazy"
                />
              </div>
              <div className="absolute h-[81.818px] w-[96.848px] left-[194.58px] top-[-74.26px]">
                <div className="absolute inset-[0_0.92%_1.01%_0]">
                  <img
                    alt="Vector decoration 2"
                    className="w-full h-full block"
                    src={imgVector4}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Profile Info Side */}
            <div className="flex flex-col gap-16 flex-1 pl-10 pr-20 py-20">
              {/* Header */}
              <div className="flex flex-col gap-1">
                <p
                  className="text-[18px] font-semibold text-[#656565] leading-[160%]"
                  style={{ fontFamily: "Paperlogy" }}
                >
                  ABOUT ME
                </p>
                <h1
                  className="text-[48px] font-[800] text-[#222426] leading-[130%] tracking-[-0.96px] whitespace-nowrap"
                  style={{ fontFamily: "SUIT Variable" }}
                >
                  Sangheon Oh
                </h1>
              </div>

              {/* Info Container */}
              <div className="flex flex-col gap-6 w-[678px]">
                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#e0e0e0] to-transparent">
                  <img alt="" className="w-full h-full object-cover" src={imgVector9} loading="lazy" />
                </div>

                {/* MBTI */}
                <div className="flex gap-16 items-center">
                  <div className="flex gap-[10.5px] items-center w-[90px]">
                    <div className="w-[18px] h-[18px]">
                      <img
                        alt="MBTI icon"
                        className="w-full h-full"
                        src={imgCommand}
                        loading="lazy"
                      />
                    </div>
                    <p
                      className="text-[18px] font-semibold text-[#1d52e2] leading-[160%] tracking-[-0.36px] whitespace-nowrap"
                      style={{ fontFamily: "SUIT Variable" }}
                    >
                      MBTI
                    </p>
                  </div>
                  <p
                    className="text-[18px] font-normal text-[#222426] leading-[160%] tracking-[-0.36px]"
                    style={{ fontFamily: "SUIT Variable" }}
                  >
                    INTP
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#e0e0e0] to-transparent">
                  <img alt="" className="w-full h-full object-cover" src={imgVector9} loading="lazy" />
                </div>

                {/* Location */}
                <div className="flex gap-16 items-center">
                  <div className="flex gap-[10.5px] items-center w-[90px]">
                    <div className="w-[18px] h-[18px]">
                      <img
                        alt="Location icon"
                        className="w-full h-full"
                        src={imgMapPin}
                        loading="lazy"
                      />
                    </div>
                    <p
                      className="text-[18px] font-semibold text-[#1d52e2] leading-[160%] tracking-[-0.36px] whitespace-nowrap"
                      style={{ fontFamily: "SUIT Variable" }}
                    >
                      사는 곳
                    </p>
                  </div>
                  <p
                    className="text-[18px] font-normal text-[#222426] leading-[160%] tracking-[-0.36px]"
                    style={{ fontFamily: "SUIT Variable" }}
                  >
                    보라매공원 근방
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#e0e0e0] to-transparent">
                  <img alt="" className="w-full h-full object-cover" src={imgVector9} loading="lazy" />
                </div>

                {/* Status */}
                <div className="flex gap-16 items-start">
                  <div className="flex gap-[10.5px] items-center w-[90px]">
                    <div className="w-[18px] h-[18px]">
                      <img
                        alt="Status icon"
                        className="w-full h-full"
                        src={imgCheck}
                        loading="lazy"
                      />
                    </div>
                    <p
                      className="text-[18px] font-semibold text-[#1d52e2] leading-[160%] tracking-[-0.36px] whitespace-nowrap"
                      style={{ fontFamily: "SUIT Variable" }}
                    >
                      상태
                    </p>
                  </div>
                  <div className="flex flex-col gap-1" style={{ fontFamily: "SUIT Variable" }}>
                    <p className="text-[18px] font-normal text-[#222426] leading-[160%] tracking-[-0.36px]">
                      홍익대학교 시각디자인과 3학년 (휴학)
                    </p>
                    <p className="text-[18px] font-normal text-[#616161] leading-[160%] tracking-[-0.36px]">
                      알바 다니면서 웹 리디자인  |  사이드 프로젝트 2개  |  친구들 만나기
                    </p>
                    <p className="text-[18px] font-normal text-[#616161] leading-[160%] tracking-[-0.36px]">
                      느좋카페 찾아다니기  |  운동하기
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#e0e0e0] to-transparent">
                  <img alt="" className="w-full h-full object-cover" src={imgVector9} loading="lazy" />
                </div>

                {/* Hobbies */}
                <div className="flex gap-16 items-start w-full">
                  <div className="flex gap-[10.5px] items-center w-[90px]">
                    <div className="w-[18px] h-[18px] overflow-hidden flex items-center justify-center">
                      <div className="w-[15.923px] h-[16.524px]">
                        <img
                          alt="Hobby icon"
                          className="w-full h-full"
                          src={imgIconGroup}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p
                      className="text-[18px] font-semibold text-[#1d52e2] leading-[160%] tracking-[-0.36px] whitespace-nowrap"
                      style={{ fontFamily: "SUIT Variable" }}
                    >
                      취미
                    </p>
                  </div>
                  <ul
                    className="list-disc text-[18px] font-normal text-[#222426] leading-[160%] tracking-[-0.36px]"
                    style={{ fontFamily: "SUIT Variable" }}
                  >
                    <li className="ml-5">꽂힌 노래들을 양껏 담아 나만의 플레이리스트 만들기</li>
                    <li className="ml-5">답답한 게 보이면 앱서비스 아이디어 메모해놓고 평생 유기</li>
                  </ul>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#e0e0e0] to-transparent">
                  <img alt="" className="w-full h-full object-cover" src={imgVector9} loading="lazy" />
                </div>

                {/* SNS */}
                <div className="flex gap-16 items-center w-[253.5px]">
                  <div className="flex gap-[10.5px] items-center w-[90px]">
                    <div className="w-[18px] h-[18px] flex items-center justify-center">
                      <div className="w-[13.5px] h-[13.5px]">
                        <img
                          alt="SNS icon"
                          className="w-full h-full"
                          src={imgGroup}
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <p
                      className="text-[18px] font-semibold text-[#1d52e2] leading-[160%] tracking-[-0.36px] whitespace-nowrap"
                      style={{ fontFamily: "SUIT Variable" }}
                    >
                      SNS
                    </p>
                  </div>
                  <p
                    className="text-[18px] font-normal text-[#222426] leading-[160%] tracking-[-0.36px]"
                    style={{ fontFamily: "SUIT Variable" }}
                  >
                    sangheon03
                  </p>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#e0e0e0] to-transparent">
                  <img alt="" className="w-full h-full object-cover" src={imgVector9} loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
