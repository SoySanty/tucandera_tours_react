import React from "react";
import { connect } from "react-redux";

const CardContent = (props) => {
  const { siteList } = props;
  console.log(siteList);
  return (
    <div className="card-container">
      <p>Sites section</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    siteList: state.siteList,
  };
};

// export default CardContent;
export default connect(mapStateToProps, null)(CardContent);
