import React from 'react'
import {Link} from 'react-router-dom'


const Home = (props) => {
  return (

      <div className="container">
        <div className="innerDiv">
          <p className="watchesP">WATCHES</p>
        </div>

        <div className="homeLeft">
          <div className="topLeft">
            <img className="tlImage" src="http://static1.businessinsider.com/image/5772ed0188e4a77c708b4582-1080/z-11.jpg" alt=""/>
          </div>
          <div className="bottomLeft">
            <img className="blImage" src="http://bpc.h-cdn.co/assets/16/19/980x490/landscape-1463150817-gshock-mudmaster-watch.jpg" alt=""/>
          </div>
        </div>
        <div className="homeRight">
          <div className="topRight">
            <img className="trImage" src="https://ksr-ugc.imgix.net/assets/004/766/837/3dfa74e5342ee79fe71c2d19df7ed7ff_original.jpg?w=680&fit=max&v=1445850743&auto=format&q=92&s=b44b4b8666571f1ab3f9163c38ae2933" alt=""/>
          </div>
          <div className="bottomRight">
            <img className="brImage" src="http://online.nixon.com/images/happenings/detail/NixonxPendleton-OnWrist-800x534.jpg" alt=""/>
          </div>
          </div>
          <div className="buy">
            <div className="shopButton">
              <Link className="shopA" to="/products">SHOP</Link>
            </div>
          </div>
      </div>

  )
}

export default Home
