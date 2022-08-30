// import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Data } from "./Data";
import { ADD } from "../redux/actions/action";
import { Stack, Rating } from "@mui/material";

const Cards = () => {


const dispatch = useDispatch();

const send = (e)=>{
  
  // console.log(e);

  dispatch(ADD(e))


}

  return (
    <>
      <div className="container">
        <h1>Add To Card</h1>
        <div className="row">
          {Data.map((element,i) => (
            <div className="col-lg-6 col-sm-12 col-xl-4" key={i}>
              <div className="card mx-2 mt-4">
                <img
                  className="card-img-top"
                  src={element.imgdata}
                  alt="Card image"
                />
                <div className="card-body">
                  <h4 className="card-title">{element.rname}</h4>

                    <Stack>Rating</Stack>
                    <Rating />
                    
                  <p className="card-text">Price : $ {element.price}</p>

                  <button
                    varint="primaruy"
                    className="btn btn-primary"
                    onClick={() => send(element)}
                  >
                    ADD TO CART
                  </button> 
  
                </div>
              </div> 
            </div>
          ))}
        </div>

      </div>
      <div className="footer">
        
      </div>
    </>
  );
};

export default Cards;
