// import React from "react";
import Spline from "@splinetool/react-spline";
import style from "./index.module.css";
import Link from "next/link";

export default function Main() {

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
			<div className={`${style.content} row center`} >
				<Spline className={style.spline} style={{width: '30vw', height: '30vw'}} scene="https://prod.spline.design/uawC84Q1PaFk1Izt/scene.splinecode" />
				<span className={`${style.circle} ${style.inner}`}>
					{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ") }
				</span>
				<span className={`${style.circle} ${style.middle}`}>
					{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ") }
				</span>
				<span className={`${style.circle} ${style.outer}`}>
					{ TextRing("HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   HAYWARD_KIM   ") }
				</span>

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

