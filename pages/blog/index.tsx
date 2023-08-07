import React from 'react';
import { useRouter } from 'next/router';
import style from './blog.module.css';

export default function Blog() {
    const router = useRouter();
    return (
        <>
            <div className={`${style.content}`}>
                <div className={`${style.frame} row center`}>
                    <div className='row center' style={{width: "5000px", height:"100%"}}>
                        <div className={`${style.story}`}></div>
                        <div className={`${style.story}`}></div>
                        <div className={`${style.story}`}></div>
                        <div className={`${style.story}`}></div>
                        <div className={`${style.story}`}></div>
                        <div className={`${style.story}`}></div>
                        <div className={`${style.story}`}></div>
                        <div className={`${style.story}`}></div>
                    </div>
                </div>
             
                {/* <div className={`${style.story}`} style={{position: "absolute", transform: "translateX(-100px)"}}></div> */}
            </div>

            <div className={`${style.title} row center`}>
                <div>블</div>
                <div style={{animationDelay: "0.1s"}}>로</div>
                <div style={{animationDelay: "0.2s"}}>그</div>
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