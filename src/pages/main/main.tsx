import React from "react";
// import Spline from "@splinetool/react-spline";

import style from "./main.module.css";

export default function Main() {
	return (
	<>
		<div className={`${style.content} row`} >
			<div className={`${style.frame} column start`}>
				<h2>방구석 개발자,</h2>
				<h1>김형석</h1>
			</div>
			<div className={`${style.frame} column end`}>
			<h2>의 사촌동생,</h2>
				<h1>김건우</h1>
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

