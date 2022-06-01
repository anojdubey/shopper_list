import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,Card,Modal, ModalBody } from "reactstrap";
import AddShop from "./component/AddShop";
import { useSelector } from "react-redux";

export default function Home() {
  const [modal, setModal] = React.useState(false);
  const toggle = () => setModal(!modal);

  const shops=useSelector((state)=>state);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();
  var date = Date.parse(yyyy + "-" + mm + "-" + dd);

  var open = () => {
    return <p style={{ fontWeight: "bold" }}>Open</p>;
  };

  var close = () => {
    return <p style={{ fontWeight: "bold" }}>Close</p>;
  };
  const searchLocation = () => {
    let filter = document.getElementById('myArea').value.toUpperCase();
    let myTable = document.getElementById('my_table');
    console.log(myTable);
    let tr= myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[2];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

const searchCategory = () => {
    let filter = document.getElementById('myCategory').value.toUpperCase();
    let myTable = document.getElementById('my_table');
    let tr = myTable.getElementsByTagName('tr');

    for (var i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[3];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            if (textvalue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }

}

  return (
    <div
      style={{
        flexDirection: "column",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      {/* <Filter/> */}
      <div style={{ marginBottom: 30 }}>
        <div>
        <label style={{ marginLeft: "4px", marginBottom: "8px" }}><b>Location</b></label>
        <select placeholder="Search..." id='myArea' onChange={searchLocation}>
        <option value=""  >All</option>
                <option value="pune">Pune</option>
                <option value="mumbai">Mumbai</option>
                <option value="nagpur">Nagpur</option>
                <option value="delhi">Delhi</option>
                <option value="ahmednagar">Ahmednagar</option>
        </select>
        </div>
        <div>
        <label style={{ marginLeft: "4px", marginBottom: "8px" }}><b>Category</b></label>
        <select placeholder="Search..." id='myCategory' onChange={searchCategory}>
        <option value="">All</option>
                <option value="Toys">Toys</option>
                <option value="grocery">Grocery</option>
                <option value="butcher">Butcher</option>
                <option value="baker">Baker</option>
                <option value="chemist">Chemist</option>
        </select>
      </div>
      </div>
      {/* <ShopList/> */}
      <div>
        <Card>
        <table className="table" id="my_table">
          <thead className="table-header bg-success text-danger">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Shop Name</th>
              <th scope="col">Location</th>
              <th scope="col">Category</th>
              <th scope="col">Opening</th>
              <th scope="col">Closing</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {shops.length > 0 ? (
              shops.map((shop, id) => (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{shop.name}</td>
                  <td>{shop.location}</td>
                  <td>{shop.category}</td>
                  <td>{shop.opening}</td>
                  <td>{shop.closing}</td>
                  <td>
                    {date >= Date.parse(shop.opening) &&
                    date < Date.parse(shop.closing)
                      ? open()
                      : close()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <th>No Shop found</th>
              </tr>
            )}
          </tbody>
        </table>
        </Card>
      </div>
      <Button color="danger" onClick={toggle}>
        Add Shop
      </Button>
      <Modal isOpen={modal} toggle={toggle} modalTransition={{ timeout: 200 }}>
        <ModalBody>
          <AddShop />
        </ModalBody>
      </Modal>
    </div>
  );

            }