import React from "react";
import Spline from "@splinetool/react-spline";

import style from "./main.module.css";

export default function Main() {
	return (
	<>	
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

			<div className={style.learn} onClick={async () => {
				await window.scroll({top: window.innerHeight, behavior: 'smooth'});
			}}>
				더 알아보기
			</div>

		</div>

		<div className={`${style.content}`} style={{backgroundColor: 'white'}}>
			
		</div>

	</>
	
	);
};

