import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./Availibility.css";
import * as FaIcons from "react-icons/fa";
import Input from "@material-ui/core/Input";
import BannerWithText from '../BannerImgComponents/BannerImgComponents';
import bannerimg from "../../Images/Chor.jpg";

// ** with useState ** //

const initialList = [];

const Availible = () => {
  const [list, setList] = React.useState(initialList);
  const [name, setName] = React.useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ name, id: uuidv4() });

    setList(newList);

    setName("");
    console.log(list);
  }
  function handleRemove(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }
  const [show, SetShow] = useState(false);
  const LinksBan = [
    {
      subLinkName: 'Home',
      subDash: '/',
      subLink: '/'
    },
 

  ];
  return (
    <>
    <BannerWithText
    imgSrc={bannerimg}
    heading={"Available Slots"}
    subHeading={`Available Slots`}
    LinksBan={LinksBan}
    height={"400px"}
    backgroundSize={"100% 400px"}
    conmarpad={"mt-5 pt-5"}
    fontsize={"60px"}
    />
    <div className="docpages">
      <h1 className="heading">Slots and Timmings w.r.p Days</h1>
      <div
        style={{
          margin: 10,
          textAlign:'center',
        }}
      >
        <h6>
          <FaIcons.FaRegPlusSquare color="blue" /> click me to add slots
        </h6>
        <h2 >
          Monday{" "}
        </h2>
      </div>
      <div>
        {show ? (
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          backgroundColor: "#f5f5f5",
          height: "100%",
          borderRadius: "10px",
          flexDirection: "row",
          boxShadow: "0px 0px 4px #888888",
          margin: 10,
        }}
      >
        {/* <h6
          style={{
            //   alignSelf:'left',
            fontWeight: "bold",
            marginTop: "10px",
          }}
        >
          SLOTS:{" "}
        </h6> */}
        <List list={list} onRemove={handleRemove} />
        <FaIcons.FaRegPlusSquare
            className="iconss"
            color="blue"
            onClick={() => SetShow(!show)}
          />
      </div>



      <div
        style={{
          margin: 10,
          textAlign:'center'
        }}
      >
        <h2>
          Tuesday{" "}
         
        </h2>
  
      </div>
      <div>
        {show ? (
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          backgroundColor: "#f5f5f5",
          height: "100%",
          borderRadius: "10px",
          flexDirection: "row",
          boxShadow: "0px 0px 4px #888888",
          margin: 10,
        }}
      >
        <List list={list} onRemove={handleRemove} />
        <FaIcons.FaRegPlusSquare
<<<<<<< HEAD
            className="iconss"
            color="blue"
            onClick={() => SetShow(!show)}
          />
      </div>

      <div
        style={{
          margin: 10,
          textAlign:'center'
        }}
      >
        <h2>
          Wednesday{" "}
         
        </h2>
  
      </div>
      <div>
        {show ? (
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          backgroundColor: "#f5f5f5",
          height: "100%",
          borderRadius: "10px",
          flexDirection: "row",
          boxShadow: "0px 0px 4px #888888",
          margin: 10,
        }}
      >
        <List list={list} onRemove={handleRemove} />
        <FaIcons.FaRegPlusSquare
=======
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
            className="iconss"
            color="blue"
            onClick={() => SetShow(!show)}
          />
      </div>

<<<<<<< HEAD

=======
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
      <div
        style={{
          margin: 10,
          textAlign:'center'
        }}
      >
        <h2>
<<<<<<< HEAD
          Thursday{" "}
=======
          Wednesday{" "}
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
         
        </h2>
  
      </div>
      <div>
        {show ? (
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          backgroundColor: "#f5f5f5",
          height: "100%",
          borderRadius: "10px",
          flexDirection: "row",
          boxShadow: "0px 0px 4px #888888",
          margin: 10,
        }}
      >
        <List list={list} onRemove={handleRemove} />
        <FaIcons.FaRegPlusSquare
            className="iconss"
            color="blue"
            onClick={() => SetShow(!show)}
          />
<<<<<<< HEAD
      </div>
=======
      </div>


      <div
        style={{
          margin: 10,
          textAlign:'center'
        }}
      >
        <h2>
          Thursday{" "}
         
        </h2>
  
      </div>
      <div>
        {show ? (
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          backgroundColor: "#f5f5f5",
          height: "100%",
          borderRadius: "10px",
          flexDirection: "row",
          boxShadow: "0px 0px 4px #888888",
          margin: 10,
        }}
      >
        <List list={list} onRemove={handleRemove} />
        <FaIcons.FaRegPlusSquare
            className="iconss"
            color="blue"
            onClick={() => SetShow(!show)}
          />
      </div>
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5

      <div
        style={{
          margin: 10,
          textAlign:'center'
        }}
      >
        <h2>
          Friday{" "}
         
        </h2>
  
      </div>
      <div>
        {show ? (
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          backgroundColor: "#f5f5f5",
          height: "100%",
          borderRadius: "10px",
          flexDirection: "row",
          boxShadow: "0px 0px 4px #888888",
          margin: 10,
        }}
      >
        <List list={list} onRemove={handleRemove} />
        <FaIcons.FaRegPlusSquare
            className="iconss"
            color="blue"
            onClick={() => SetShow(!show)}
          />
      </div>

      <div
        style={{
          margin: 10,
          textAlign:'center'
        }}
      >
        <h2>
          Saturday{" "}
         
        </h2>
  
      </div>
      <div>
        {show ? (
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          backgroundColor: "#f5f5f5",
          height: "100%",
          borderRadius: "10px",
          flexDirection: "row",
          boxShadow: "0px 0px 4px #888888",
          margin: 10,
        }}
      >
        <List list={list} onRemove={handleRemove} />
        <FaIcons.FaRegPlusSquare
            className="iconss"
            color="blue"
            onClick={() => SetShow(!show)}
          />
      </div>

      <div
        style={{
          margin: 10,
          textAlign:'center'
        }}
      >
        <h2>
          Sunday{" "}
         
        </h2>
  
      </div>
      <div>
        {show ? (
          <AddItem name={name} onChange={handleChange} onAdd={handleAdd} />
        ) : null}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          backgroundColor: "#f5f5f5",
          height: "100%",
          borderRadius: "10px",
          flexDirection: "row",
          boxShadow: "0px 0px 4px #888888",
          margin: 10,
        }}
      >
        <List list={list} onRemove={handleRemove} />
        <FaIcons.FaRegPlusSquare
            className="iconss"
            color="blue"
            onClick={() => SetShow(!show)}
          />
      </div>
<<<<<<< HEAD

    </div>

    </>
=======
        <button className="btn btn-outline-primary" onClick={()=>{
          alert("Slots Has been pushed to Database !")
        }}>Update Slots in Database</button>
    </div>

    
>>>>>>> 5a90b58d1b2d6d89228668615f642dfc96a658a5
  );
};




const AddItem = ({ name, onChange, onAdd }) => (
  <div
    style={{
      padding: "10px",
    }}
  >
    {/* <input
      type="text"
      value={name}
      onChange={onChange}
      placeholder="2:00 - 3:00 PM"
    /> */}
    <Input
      placeholder="2:00 - 3:00 PM"
      type="text"
      value={name}
      onChange={onChange}
      inputProps={{ "aria-label": "description" }}
    />
    <FaIcons.FaCheck className="iconss" color="green" onClick={onAdd} />
  </div>
);

const List = ({ list, onRemove }) => (
  <ul

    className="availList"
  >
    {list.map((item) => (
      <li
        style={{
          display: "inline-flex",
          margin: "5px",
          backgroundColor: "#eeeeee",
          minWidth: "150px",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: "5px",
          marginTop: "10px",
          borderRadius: "10px",
          boxShadow: "0px 2px 5px #888888",
        }}
        key={item.id}
      >
        {item.name}
        <FaIcons.FaRegWindowClose
          style={{ color: "red" }}
          onClick={() => onRemove(item.id)}
        />
      </li>
    ))}
  </ul>
);

// ** with useReducer ** //

// const listReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return state.concat({ name: action.name, id: action.id });
//     default:
//       throw new Error();
//   }
// };

// const App = () => {
//   const [list, dispatchList] = React.useReducer(
//     listReducer,
//     initialList
//   );
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     dispatchList({ type: 'ADD_ITEM', name, id: uuidv4() });

//     setName('');
//   }

//   return (
//     <div>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       <List list={list} />
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

// ** with useState and complex object ** //

// const App = () => {
//   const [listData, setListData] = React.useState({
//     list: initialList,
//     isShowList: true,
//   });
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     const newList = listData.list.concat({
//       name,
//       id: uuidv4(),
//     });

//     setListData({ ...listData, list: newList });

//     setName('');
//   }

//   return (
//     <div>
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       {listData.isShowList && <List list={listData.list} />}
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

// ** with useReducer and complex object ** //

// const listReducer = (state, action) => {
//   switch (action.type) {
//     case 'ADD_ITEM':
//       return {
//         ...state,
//         list: state.list.concat({ name: action.name, id: action.id }),
//       };
//     default:
//       throw new Error();
//   }
// };

// const Availible = () => {
//   const [listData, dispatchListData] = React.useReducer(listReducer, {
//     list: initialList,
//     isShowList: true,
//   });
//   const [name, setName] = React.useState('');

//   function handleChange(event) {
//     setName(event.target.value);
//   }

//   function handleAdd() {
//     dispatchListData({ type: 'ADD_ITEM', name, id: uuidv4() });

//     setName('');
//   }

//   return (
//     <div className="docpages">
//       <AddItem
//         name={name}
//         onChange={handleChange}
//         onAdd={handleAdd}
//       />

//       <List list={listData.list} />
//     </div>
//   );
// };

// const AddItem = ({ name, onChange, onAdd }) => (
//   <div>
//     <input type="text" value={name} onChange={onChange} />
//     <button type="button" onClick={onAdd}>
//       Add
//     </button>
//   </div>
// );

// const List = ({ list }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>{item.name}</li>
//     ))}
//   </ul>
// );

export default Availible;
