import * as React from "react";
import {
  JustifiedInfiniteGrid,
  MasonryInfiniteGrid,
} from "@egjs/react-infinitegrid";
import { Button, Card } from "react-bootstrap";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Filters from "./filters";
import '../styles/scroller.css'
const MySwal = withReactContent(Swal);

function getItems(nextGroupKey, count) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

const Item = ({ num }) => (
  <div
    className="item"
    style={
      {
        // width: "286px",
        // height: "180px",
      }
    }
  >
    <div className="thumbnail">
      {/* <Card onClick={()=>{
    console.log("clicked me");
    MySwal.fire({
        title: <p>Hello World</p>,
        html:<div>
            <Filters/>
        </div>
        
        ,
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          
        },
      })
  }} style={{ width: '18rem' }}> */}

      <div className="frame1" onClick={function (){
    console.log("clicked me");
    MySwal.fire({
        title: <p>Hello World</p>,
        html:<div>
            <h1>hedjasflkj</h1>
        </div>
        
        ,
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          
        },
      })
  }}>
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="rectangle" />
            <img className="img" alt="Rectangle" src="" />
            <div className="text-wrapper">Lilli Origin</div>
            <p className="this-website-contain">
              This website contain
              <br />
              jewellery items qwer
              <br />
              sdfghjklzxcvbnmhcu
            </p>
            <div className="ellipse" />
          </div>
        </div>
      </div>
    </div>
    {/* <div className="info">{`egjs ${num}`}</div> */}
  </div>
);



const Scroller = () => {
  const [items, setItems] = React.useState(() => getItems(0, 10));
  // const [website,setWebsite] = React.useState([{img}])
  return (
    <MasonryInfiniteGrid
      loading={<div className="loading">Loading...</div>}
      onRequestAppend={(e) => {
        const nextGroupKey = (+e.groupKey || 0) + 1;

        e.wait();
        setTimeout(() => {
          e.ready();
          setItems([...items, ...getItems(nextGroupKey, 10)]);
        }, 1000);
      }}
    >
      {items.map((item) => (
        <Item
          data-grid-groupkey={item.groupKey}
          key={item.key}
          num={item.key}
        />
      ))}
    </MasonryInfiniteGrid>
  );
};
export default Scroller;
