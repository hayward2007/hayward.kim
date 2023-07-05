import React from 'react';
import { useRouter } from 'next/router';
import style from './blog.module.css';

export default function Blog() {
    const router = useRouter();
    return (
        <>
            <div className={`${style.content} start`}>
                {/* <h1 style={{color: 'white'}}>블로그</h1> */}
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