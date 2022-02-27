import React, { useEffect, useState } from "react";
import Header from "../../component/header/header";
import { AiFillHome } from "react-icons/ai";
import "./Dashboard.css";
import { postedJobData } from "../../redux/action/authAction";
import { connect } from "react-redux";
import DashboardCards from "../../component/dashboardCards/DashboardCards";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import Individual from "../../component/individualJob/Individual";
import Empty from "../../assets/writing.svg";

const Dashboard = ({ postedData, postedJobData }) => {
  useEffect(async () => {
    await postedJobData("");
  }, []);

  const [page, setpage] = useState([1, 2, 3]);
  const [selectedPage, setselectedPage] = useState();
  const [modal, setModal] = useState(false);
  const [id, setId] = useState();

  const leftShift = async () => {
    if (page[0] > 1) {
      let arr = page;
      arr.unshift(page[0] - 1);
      arr.pop();
      setselectedPage(-1);
      setpage([...arr]);
      await postedJobData(`?page=${arr[0]}`);
    }
  };

  const righShift = async () => {
    const arr = page;
    arr.shift(arr[0]);
    arr.push(arr[1] + 1);
    setselectedPage(-2);
    setpage([...arr]);

    await postedJobData(`?page=${arr[2]}`);
  };

  const middleShift = async (index) => {
    let arr = page;
    setselectedPage(arr[index]);
    await postedJobData(`?page=${arr[index]}`);
  };

  const openModal = (id) => {
    setId(id);
    setModal(!modal);
  };

  console.log(postedData);

  return (
    <div className="dashboard__container">
      <Header />
      <div className="dashboard__upper">
        <div className="dashboard__upper__home">
          <AiFillHome color="white" size={20} />
          <p>Home</p>
        </div>
        <h2>Jobs Posted by you</h2>
      </div>

      {"data" in postedData ? (
        <div className="dashboard__lower">
          <div className="dashboard__lower__cards">
            {postedData?.data?.data?.map((item) => {
              return (
                <DashboardCards
                  item={item}
                  key={item.id}
                  singleId={(id) => openModal(id)}
                />
              );
            })}
          </div>

          <div className="pagination">
            <div
              onClick={() => leftShift()}
              style={
                selectedPage === -1
                  ? {
                      backgroundColor: "#CBE8FF",
                      border: "none",
                      borderRadius: 5,
                    }
                  : null
              }
            >
              <MdOutlineArrowLeft size={20} />
            </div>
            {page.map((item, index) => {
              return (
                <div
                  key={index}
                  onClick={() => middleShift(index)}
                  style={
                    selectedPage === index + 1
                      ? {
                          backgroundColor: "#CBE8FF",
                          border: "none",
                          borderRadius: 5,
                        }
                      : null
                  }
                >
                  {item}
                </div>
              );
            })}

            <div
              onClick={() => righShift()}
              style={
                selectedPage === -2
                  ? {
                      backgroundColor: "#CBE8FF",
                      border: "none",
                      borderRadius: 5,
                    }
                  : null
              }
            >
              <MdOutlineArrowRight size={20} />
            </div>
          </div>
        </div>
      ) : (
        <div className="empty__container">
          <img src={Empty} />
          <p>Your posted jobs will show here!</p>
        </div>
      )}

      {modal && <Individual id={id} close={() => setModal(false)} />}
    </div>
  );
};

const mapStateToProps = (state) => ({
  postedData: state.authReducer.postedData,
});

export default connect(mapStateToProps, { postedJobData })(Dashboard);
