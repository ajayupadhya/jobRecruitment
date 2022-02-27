import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { postedOneJobData } from "../../redux/action/authAction";
import IndividualCards from "../individualCards/IndividualCards";
import "./Individual.css";
import Empty from "../../assets/writing.svg";
const Individual = ({ id, postedOneData, postedOneJobData, close }) => {
  useEffect(async () => {
    await postedOneJobData(`/${id}/candidates`);
  }, []);

  console.log(postedOneData);
  return (
    <div className="individual__container">
      <div className="individual__head">
        <h2>Applicants for this job</h2>
        <ImCross
          color="#303f60"
          onClick={() => close()}
          style={{ cursor: "pointer" }}
        />
      </div>
      <h4>Total {postedOneData?.length} applicants</h4>

      {"data" in postedOneData ? (
        <div className="individual__container__cards">
          {postedOneData?.data?.map((item, index) => (
            <IndividualCards item={item} key={index} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <img src={Empty} />
          <p>No applications available!</p>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  postedOneData: state.authReducer.postedOneData,
});

export default connect(mapStateToProps, { postedOneJobData })(Individual);
