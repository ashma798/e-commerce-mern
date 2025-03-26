import React, { useEffect, useState } from 'react'
import CustomButton from '../CustomButton';
import { About2 } from '../About';

const Banner = () => {
   
    return (
        <>
            <div
                style={{
                    backgroundColor: "grey",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000000",
                    margin: "10px 0"
                }}
            >
                <h1>Banner Page</h1>
               
                <div style={{
                    backgroundColor: "grey",
                    height: "200px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "#000000",
                    margin: "10px 0"
                }}>
                   
                </div>

            </div>
           </>
    )
}

export default Banner;
