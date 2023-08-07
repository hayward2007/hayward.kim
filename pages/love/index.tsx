import style from "./love.module.css";

export default function Love() {
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
		);
	  }
	  

	  
	return (
		<>	
			<div className={`${style.content} row center`} >
				<div className={`${style.circle} ${style.middle}`}>
					{ TextRing("6rWs7IOB7J2A   6rWs7IOB7J2A   6rWs7IOB7J2A   6rWs7IOB7J2A   ", "max(50vw, 500px)") }
					{/* { TextRing("SANG._.7   SANG._.7   SANG._.7   SANG._.7   SANG._.7    SANG._.7    ", "max(50vw, 500px)") } */}
				</div>
				<div className={`${style.circle} ${style.outer}`}>
					{ TextRing("6rWs7IOB7J2A   6rWs7IOB7J2A   6rWs7IOB7J2A   6rWs7IOB7J2A   6rWs7IOB7J2A   6rWs7IOB7J2A   6rWs7IOB7J2A    ", "max(80vw, 800px)") }
					{/* { TextRing("SANG._.7   SANG._.7   SANG._.7   SANG._.7   SANG._.7   SANG._.7   SANG._.7   SANG._.7   SANG._.7   ", "max(80vw, 800px)") } */}
				</div>

				<div className={`${style.frame} column center`}>
					<div className={`${style.title}`}>YOU</div>
				</div>
			</div>
		</>
    );
}