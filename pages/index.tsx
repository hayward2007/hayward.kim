// import React from "react";
import Spline from "@splinetool/react-spline";
import style from "./index.module.css";
import Link from "next/link";
import Image from 'next/image'
import { useEffect } from "react";

export default function Main() {
	// const [width, setWidth] = useState(window.innerWidth);

	const TextRing = (text: string, size: string) => {
		const CHARS = text.split('')
		const INNER_ANGLE = 360 / CHARS.length
		const RADIUS = 2;

		return (
			<svg className={style.text_ring} style={{ '--total': CHARS.length, '--radius': RADIUS / Math.sin(INNER_ANGLE / (180 / Math.PI)), 'width': size, 'height': size } as React.CSSProperties}>
			{/* <svg className={style.text_ring} height={size} width={size} style={{ '--total': CHARS.length, '--radius': RADIUS / Math.sin(INNER_ANGLE / (180 / Math.PI)) } as React.CSSProperties}> */}
			{CHARS.map((char, index) => (
			  <text key={index} fill="white" style={{'--index': index } as React.CSSProperties}>
				{char}
			  </text>
			))}
		  </svg>
		)
	  }
	  

	  
	return (
		<>	
			<div className={`${style.content} row center`} >
				<Spline className={style.spline} style={{width: 'min(30vw, 500px)', height: 'min(30vw, 500px)'}} scene="https://prod.spline.design/uawC84Q1PaFk1Izt/scene.splinecode" />
				<div className={`${style.circle} ${style.inner}`}>
					{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ", "max(30vw, 300px)") }
				</div>
				<div className={`${style.circle} ${style.middle}`}>
					{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ", "max(50vw, 500px)") }
				</div>
				<div className={`${style.circle} ${style.outer}`}>
					{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ", "max(80vw, 800px)") }
				</div>

				<div className={`${style.frame} column start`}>
					<h2 className={style.slidein_animation}>방구석 개발자,</h2>
					<div className={`${style.title} ${style.slidein_animation}`}>김형석</div>
				</div>
				<div className={`${style.frame} column end`}>
					<div className="column">
						<div className="row">
                            <Link href="/blog" className={style.button}>블로그 보기</Link>
                            <Link href="/portfolio" className={style.button}>포트폴리오 보기</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

