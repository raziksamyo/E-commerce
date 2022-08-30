import React, { useState } from "react";
import logo from "../IMAGES/logo1.jpg";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import Cardgift from "../IMAGES/cartgift.gif";
import { useDispatch, useSelector } from "react-redux";
import Table from "react-bootstrap/Table";
import { DLT } from "../redux/actions/action";
 



const Header = () => {




  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const dispatch = useDispatch()

  const [anchorEl, setAnchorEl] = useState(null);

  
  const open = Boolean(anchorEl);


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dlt = (id) =>{
    dispatch(DLT(id))
  }









  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <nav className="navbar navbar-expand-sm navbar-dark">
            {/* <!-- Brand/logo --> */}
            <a className="navbar-brand" href="#">
              <img src={logo} alt="logo" className="logo-images" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
              {/* <i className="fa-thin fa-bars"></i> */}
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              {/* <!-- Links --> */}
              <ul className="navbar-nav">
             

                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    HOME
                  </Link>
                </li>

         

                <li className="nav-item">
                  <a className="nav-link" href="#">
                    <Badge
                      badgeContent={getdata.length}
                      color="primary"
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    >
                      <i className="fa-solid fa-cart-shopping cart"></i>
                    </Badge>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {getdata.length ? (
              <div
                className="card_details"
            
              >
                <Table>
                  <thead>
                    <tr>
                      <th>Photo</th>
                      <th>Booking Detail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {getdata.map((e) => {
                      return (
                        <>
                          <tr>
                            <td>
                         
                              <img
                                src={e.imgdata}
                                alt=""
                                className="baskrt-img"
                              />
                          
                            </td>
                            <td>
                              <p>{e.rname}</p>
                              <p>Price : ₹{e.price}</p>
                             
                              <p
                                className="baskrt-para"
                               
                                onClick={() => dlt(e.id)}
                              >
                                
                              </p>
                            </td>

                            <td
                              className="mt-5 basket-td"
                           
                              onClick={() => dlt(e.id)}
                            >
                              <i className="fas fa-trash largetrash"></i>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    
                  </tbody>
                </Table>
              </div>
            ) : (
              <div
                className="card_detai"
                
              >
              
                <pattern>Your carts is empty</pattern>
                <img
                  src={Cardgift}
                  alt=""
                  className="empty-img"
             
                />
              </div>
            )}
          </Menu>
        </div>
      </div>
    </>
  );
};

export default Header;
