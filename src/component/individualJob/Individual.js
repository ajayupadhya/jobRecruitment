import React, { useEffect } from "react";
import { ImCross } from "react-icons/im";
import { connect } from "react-redux";
import { postedOneJobData } from "../../redux/action/authAction";
import IndividualCards from "../individualCards/IndividualCards";
import "./Individual.css";
const Individual = ({ id, postedOneData, postedOneJobData, close }) => {
  useEffect(async () => {
    await postedOneJobData(`/${id}/candidates`);
  }, []);

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
      <div className="individual__container__cards">
        {postedOneData?.map((item) => (
          <IndividualCards item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postedOneData: state.authReducer.postedOneData,
});

export default connect(mapStateToProps, { postedOneJobData })(Individual);
