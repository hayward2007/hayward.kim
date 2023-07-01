import React from "react";
// import Spline from "@splinetool/react-spline";

import style from "./main.module.css";

export default function Main() {
	return (
	<>
		<div className={`${style.content} row center`} >
			<div className={`${style.frame} column start`}>
				<h2>방구석 개발자,</h2>
				<h1>김형석</h1>
			</div>
			<div className={`${style.frame} column center`}>
				<div className="column">
					<h2 style={{height: 200}}>안녕하세요!</h2>
					<div className="row">
						<div onClick={() => console.log("Hello World!")} className={style.button}>블로그 보기</div>
						<div className={style.button}>포트폴리오 보기</div>
					</div>
				</div>
			</div>

			<div className={style.learn}>
				더 알아보기
			</div>
		</div>

		<div className={`${style.content}`} style={{backgroundColor: 'white'}}>
			
		</div>
	</>
	
	);
};

