import React, { useState, useEffect} from "react";
import Spline from "@splinetool/react-spline";

import style from "./main.module.css";

export default function Main() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		// console.log(position, window.innerHeight);
		setScrollPosition(position);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const TextRing = (text: string) => {
		const CHARS = text.split('')
		const INNER_ANGLE = 360 / CHARS.length
		const RADIUS = 2;
		return (
		  <span className={style.text_ring} style={{ '--total': CHARS.length, '--radius': RADIUS / Math.sin(INNER_ANGLE / (180 / Math.PI)) } as React.CSSProperties}>
			{CHARS.map((char, index) => (
			  <span key={index} style={{'--index': index } as React.CSSProperties}>
				{char}
			  </span>
			))}
		  </span>
		)
	  }

	  
	return (
	<>	
		{/* 메인 페이지 타이틀 */}
		<div className={`${style.content} row center`} >
			<Spline className={style.spline} scene="https://prod.spline.design/ukmm6q-uTyxjpejj/scene.splinecode" />
			{/* <div className="row" style={{position: 'fixed', top: 0}}>
				<div className={style.bar}>HAYWARD_KIM</div>
			</div> */}

			<div className={`${style.frame} column start`}>
				<h2 className={style.slidein_animation}>방구석 개발자,</h2>
				<div className={`${style.title} ${style.slidein_animation}`}>김형석</div>
			</div>
			<div className={`${style.frame} column end`}>
				<div className="column">
					<div className="row">
						<div onClick={() => console.log("Hello World!")} className={style.button}>블로그 보기</div>
						<div className={style.button}>포트폴리오 보기</div>
					</div>
				</div>
			</div>

			<div className={style.learn} onClick={() => {
				window.scroll({top: window.innerHeight, behavior: 'smooth'});
			}}>
				더 알아보기
			</div>
		</div>
		{/* 메인 페이지 소개 */}
		<div className={`${style.content}`}>
			{
				scrollPosition === window.innerHeight ?
				<>
					<div className={style.left}>
						<h1 className={style.slidein_animation}>개</h1>
						<h1 className={style.slidein_animation} style={{animationDelay: '0.25s'}}>간</h1>
						<h1 className={style.slidein_animation} style={{animationDelay: '0.5s'}}>지</h1>
						<h1 className={style.slidein_animation} style={{animationDelay: '0.75s'}}>나</h1>
						<h1 className={style.slidein_animation} style={{animationDelay: '1s'}}>는</h1>
					</div>
					<div className={style.right}>
						<h1 className={style.slidein_animation} style={{animationDelay: '1.25s'}}>애</h1>
						<h1 className={style.slidein_animation} style={{animationDelay: '1.5s'}}>니</h1>
						<h1 className={style.slidein_animation} style={{animationDelay: '1.75s'}}>메</h1>
						<h1 className={style.slidein_animation} style={{animationDelay: '2s'}}>이</h1>
						<h1 className={style.slidein_animation} style={{animationDelay: '2.25s'}}>션</h1>
					</div>
				</>
			:null
			}
			
			<span className={`${style.circle} ${style.inner}`}>
				{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ") }
			</span>
			<span className={`${style.circle} ${style.middle}`}>
				{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ") }
			</span>
			<span className={`${style.circle} ${style.outer}`}>
				{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ") }
			</span>
		</div>

	</>
	
	);
};

