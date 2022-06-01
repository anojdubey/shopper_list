import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

export default function AddShop() {
const [name, setName] = React.useState("");
const [category, setCategory] = React.useState("");
const [location, setLocation] = React.useState("");
const [opening, setOpening] = React.useState("");
const [closing, setClosing] = React.useState("");

const dispatch = useDispatch();
const navigate = useNavigate();

const shops = useSelector((state) => state);

const handelSubmit = (e) => {
  e.preventDefault();
  var letters = /^[A-Za-z]+$/;


        const checkName = shops.find(shop => shop.name === name && name);

        if (!name || !location || !category || !opening || !closing) {
            return alert("Please fill in all fields!");
        }

        if (!name.match(letters)) {
            return alert("Shop name should contain only alphabets!");
        }

        if (Date.parse(closing) <= Date.parse(opening)) {
            return alert("Closing date should be after Opening date")
        }
        if (checkName) {
            return alert("Shop name already exist!")
        }
        const data = {
          id: shops[shops.length - 1].id + 1,
          name,
          location,
          category,
          opening,
          closing,
      }

      dispatch({ type: "ADD_SHOP", payload: data });
      alert("Shop added successfully!!");
      navigate("/");
}

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label for="location">location</label>
          <select class="form-control" id="location" value={location} onChange={e=> setLocation(e.target.value)} >
          <option value=""  >All</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="nagpur">Nagpur</option>
                <option value="delhi">Delhi</option>
                <option value="ahmednagar">Ahmednagar</option>
          </select>
        </div>
        <div class="form-group">
          <label for="category">Category</label>
          <select class="form-control" id="category" value={category} onChange={e=> setCategory(e.target.value)} >
          <option value="">All</option>
                <option value="Toys">Toys</option>
                <option value="grocery">Grocery</option>
                <option value="butcher">Butcher</option>
                <option value="baker">Baker</option>
                <option value="chemist">Chemist</option>
          </select>
        </div>
        <div className="form-group mb-3">
          <div className="form-row d-flex justify-content-between">
            <div className="form-group col-md-5">
              <label for="inputOpeningDate">Opening Date</label>
              <input type="date" id="openingDate" name="openingDate" value={opening} onChange={e => setOpening(e.target.value)} ></input>
            </div>
            <div className="form-group col-md-5">
              <label for="inputClosingDate">Closing Date</label>
              <input type="date" id="closingDate" name="closingDate" value={closing} onChange={e => setClosing(e.target.value)} ></input>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            className="btn btn-block btn-success"
            type="submit"
            value="Add Shop"
          />
        </div>
      </form>
    </div>
  );
}
