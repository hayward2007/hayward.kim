import React from "react";
import { useRouter } from "next/router";
import style from "./portfolio.module.css";

export default function Portfolio() {
    const router = useRouter();
    return (
        <>
            <div className={`${style.content} start`}>
                {/* <h1 style={{color: 'white'}}>블로그</h1> */}
            </div>
            <div className={`${style.title} row center`}>
                <div>포</div>
                <div style={{animationDelay: "0.1s"}}>트</div>
                <div style={{animationDelay: "0.2s"}}>폴</div>
                <div style={{animationDelay: "0.3s"}}>리</div>
                <div style={{animationDelay: "0.4s"}}>오</div>
                <span className={`${style.back} column center`} onClick={ () => router.push("/") }>
                    <div className='column center'>
                        <span className="material-symbols-rounded">
                            arrow_back
                        </span>
                        돌아가기    
                    </div>
                </span>
            </div>
        </>
    );
}