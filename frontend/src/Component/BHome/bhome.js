import React from "react";
import "./bhome.css";
import welcome from "./imgh/welcome.png";
import { Link } from "react-router-dom";

export default function MainHome() {
    return (
      <div>
        <div className='container'>
          <div className='main'>
            <div class="row">
              <div class="column">
                <img src={welcome} className="bouquet" alt="signin logo" />
              </div>
              <div class="column2">
                <div className="topic">
                <h2 className='h-h1a'>WELCOME TO</h2>
                <h2 className='h-h2a'>SAMPLE WEB</h2>
                <br /><br />
                </div>
                
                <div className='bset'>
                  <div className='bt'>
                    <Link to="/login"><button type="submit" className='btnsub'>Login</button></Link>
                  </div>
                  <div className='bt'>
                    <Link to="/register"><button type="submit" className='btnsub'>Register</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  