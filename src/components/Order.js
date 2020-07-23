import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";
import productActions from "../store/actions/productActions";
import cartActions from "../store/actions/cartActions";
import { connect, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Pagination from "react-js-pagination";

const Order = ({ originalList, loading }) => {
  let [foodItem, setFoodItem] = useState(originalList);
  // let [originalList, setOriginalList] = useState([]);
  let [keyword, setKeyword] = useState(null);
  let [checkedStates, setCheckedStates] = useState(Array(10).fill(false));
  let [checkedCategoryList, setCheckedCategoryList] = useState([]);
  const [show, setShow] = useState(false);
  var elmnt = document.getElementById("hahaha");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  let arr = [
    "Coffee",
    "Smoothies",
    "Slushies",
    "Food",
    "Ice Cream",
    "Yogurt",
    "Drinks",
    "Tea",
    "Juices",
    "Alcohol",
  ];
  let arrLowercase = [
    "coffee",
    "smoothies",
    "slushies",
    "food",
    "ice cream",
    "yogurt",
    "drinks",
    "tea",
    "juices",
    "alcohol",
  ];
  let [showList, setShowList] = useState(arrLowercase);
  const [currentPage, setCurrentPage] = useState(1);
  //   const categoryToggle = (cat) => {
  //     if (checkedCategoryList.length === 0) {
  //       setCheckedCategoryList([cat]);
  //     }
  //     for (let i = 0; i < checkedCategoryList.length; i++) {
  //       if (cat === checkedCategoryList[i]) {
  //         checkedCategoryList.splice(i, 1);
  //         setCheckedCategoryList(...checkedCategoryList);
  //         break;
  //       } else if (i === checkedCategoryList.length - 1) {
  //         checkedCategoryList.push(cat);
  //         setCheckedCategoryList(...checkedCategoryList);
  //       }
  //     }
  //     setShowList(checkedCategoryList);
  //     if (checkedCategoryList.length === 0) {
  //       setShowList(Array(10).fill(true));
  //       console.log("something");
  //     }
  //     console.log(checkedCategoryList);
  //   };

  const stringArray = () => {
    let temp;
    for (let i = 0; i < arr.length; i++) {
      if (checkedStates[i] === true) {
        temp = arr[i].toLowerCase();
        setShowList(...checkedStates, temp);
      }
    }
    if (checkedStates.every((item) => item === false)) {
      setShowList(arr);
    }
  };
  const toggle = (i) => {
    let index = parseInt(i);
    let tempArray = checkedStates;

    tempArray[index] = !tempArray[index];
    setCheckedStates([...tempArray]);

    let categories = [];
    for (let j = 0; j < tempArray.length; j++) {
      if (tempArray[j]) {
        categories.push(arrLowercase[j]);
      }
    }
    if (categories.length === 0 || categories.length === tempArray.length) {
      setFoodItem(originalList);
    } else {
      let filteredList = originalList.filter((item) =>
        categories.includes(item.category)
      );
      setFoodItem(filteredList);
    }

    console.log("SDSD", checkedStates);
  };
  
  const searchByKeyword = (e) => {
    e.preventDefault();
    let filteredList = originalList;
    if (keyword) {
      filteredList = originalList.filter((e) =>
        e.name.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    setFoodItem(filteredList);
  };
  const resetFilter = () => {
    setFoodItem(originalList);
  };

  useEffect(() => {
    if (originalList.length === 0) {
      dispatch(productActions.getProducts());
    } else {
      setFoodItem(originalList);
    }
  }, [originalList]);

  const renderFood = (arr) => {
    return arr.map((e) => {
      if (showList.includes(e.category)) {
        return (
          <div className="menuItemFormat">
            <div className="menuItem">
              <img src={e.image} className="pixFormat" />
              <span className="leftSide">
                <h6>{e.name}</h6>
                <p>{e.name_vn}</p>
              </span>
            </div>
            <button
              className="btn btn-warning my-2 my-sm-0"
              onClick={() => addToCart(e)}
            >
              <NumberFormat
                value={e.price}
                thousandSeparator={true}
                suffix="VND"
                displayType="text"
              />
              <img src="img/add-to-cart.png" width="30px" />
            </button>
          </div>
        );
      }
    });
  };

  const renderCategories = () => {
    return arr.map((e, index) => (
      <span>
        <span className="labelFormat">
          <input
            type="checkbox"
            checked={checkedStates[index]}
            onChange={() => toggle(index)}
          ></input>
          <label className="spacing">{e}</label>
        </span>
      </span>
    ));
  };

  const addToCart = (product) => {
    dispatch(cartActions.addToCart(product));
    setShow(true);
  };

  if (loading) {
    return <div>Loading</div>;
  }

  return (
    <div className="darkBg">
      <Modal show={show} onHide={handleClose} animation={false}>
        <span className="modalCenter">
          <p className="textBlack">Item successfully added to cart!</p>
          <img src="https://i.ibb.co/X4bNFP6/checkmark.gif" width="300px" />
          <Button variant="success textWhite">
            <Link to={`/cart`} className="nav-link textWhite">
              View Cart
            </Link>
          </Button>
        </span>
      </Modal>
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <img src="img/bao-bistro-white.png" width="200px" />
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExample05"
              aria-controls="navbarsExample05"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarsExample05">
              <ul className="navbar-nav ml-auto pl-lg-5 pl-0">
                <li className="nav-item">
                  <Link to={`/`} className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/order`} className="nav-link active">
                    Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/contact`} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={`/cart`} className="nav-link">
                    Cart
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="slider-wrap">
        <div
          className="slider-item"
          style={{ backgroundImage: 'url("img/bistro-store.jpg")' }}
        >
          <div className="container">
            <div className="row slider-text align-items-center justify-content-center">
              <div className="col-md-8 text-center col-sm-12 ">
                <h1 data-aos="fade-up">Order Food and Drinks</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="orderPage">
        <span className="leftSide">
          <span
            className="labelFormat resetFormat"
            onClick={(e) => resetFilter(e)}
          >
            <i className="fas fa-times-circle orderFormat circle"></i>
            <p className="orderFormat">Reset filters</p>
          </span>
          <form
            className="form-inline my-2 my-lg-0 searchBar"
            onSubmit={(e) => searchByKeyword(e)}
          >
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setKeyword(e.target.value)}
            ></input>
            <button
              className="btn btn-outline-warning my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <span className="cateFormat">
            <h3>Filter by Category</h3>
            <span className="orderFormat">{renderCategories(foodItem)}</span>
          </span>
        </span>
        <span className="orderFormat" id="hahaha">
          {renderFood(foodItem.slice((currentPage - 1) * 10, currentPage * 10))}
          <div className="paginationCenter">
            <Pagination
            activePage={currentPage}
            itemsCountPerPage={10}
            totalItemsCount={foodItem.length}
            pageRangeDisplayed={3}
            onChange={(e) => {
              elmnt.scrollIntoView();
              setCurrentPage(e);
            }}
            itemClass="page-item"
            linkClass="page-link paginationFormat"
            activeLinkClass="activePage"
          />
          </div>
          
        </span>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      {checkedCategoryList}

      <footer className="site-footer lighterBg" role="contentinfo">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 mb-5">
              <h3>About Us</h3>
              <p className="mb-5">
              Bao Bistro is a passion project by a couple of Vietnamese-Americans. We hope you'll love our food and drinks as much as we do!
              </p>
              <ul className="list-unstyled footer-link d-flex footer-social">
                <li>
                  <a href="#" className="p-2">
                    <span className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    <span className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    <span className="fa fa-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#" className="p-2">
                    <span className="fa fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 mb-5">
              <div className="mb-5">
                <h3>Opening Hours</h3>
                <p>
                  <strong className="d-block font-weight-normal text-orange">
                    Monday-Sunday
                  </strong>{" "}
                  <p>6:30AM - 2:00PM</p>
                  <p>5:00PM - 8:00PM</p>
                </p>
              </div>
              <div>
                <h3>Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block">
                    <span className="d-block text-orange">Address:</span>
                    <span>
                      Số 2 Đường 3 Tháng 2, Quận Hải Châu, TP Đà Nẵng, Việt Nam
                    </span>
                  </li>
                  <li className="d-block">
                    <span className="d-block text-orange">Phone:</span>
                    <span>+84 969 303 388</span>
                  </li>
                  <li className="d-block">
                    <span className="d-block text-orange">Email:</span>
                    <span>baobistro@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 mb-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1916.8291281300517!2d108.22129705606231!3d16.083214188872333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142183c50e271e9%3A0x12ecde32a0b3abb8!2zMiDEkMaw4budbmcgMyBUaMOhbmcgMiwgVGh14bqtbiBQaMaw4bubYywgSOG6o2kgQ2jDonUsIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1594630217004!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                width={400}
                height={300}
                frameBorder={0}
              />
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="row">
            <div className="col-12 text-md-center text-left">
              <p></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  originalList: state.product.products,
  loading: state.product.loading,
});

export default connect(mapStateToProps)(Order);
