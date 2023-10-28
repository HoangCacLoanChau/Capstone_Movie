import React, { Component } from "react";
import { connect } from "react-redux";
import { BOOKING } from "../constant/constant";
export class SelectedList extends Component {
  renderSelectedList = () => {
    return this.props.selectedList.map((x, i) => {
      return (
        <tr key={i}>
          <td className="text-light text-center">{x.soGhe}</td>
          <td className="text-light text-center">{x.gia}</td>
        </tr>
      );
    });
  };
  renderTotalBill = () => {
    return (
      this.props.selectedList.length !== 0 && (
        <tr className="w-100">
          <th>{this.props.selectedList.length} Chỗ</th>
          <th>
            {this.props.selectedList
              .map((x) => {
                return x.gia;
              })
              .reduce((x, y) => x + y, 0)}{" "}
            VND
          </th>
        </tr>
      )
    );
  };

  render() {
    return (
      <div className="row mt-5">
        <div className="col-6 col-md-auto">
          <div className="table table-bordered text-center text-white  mx-5">
            <tr>
              <th>CHỖ NGỒI</th>
              <th>GIÁ TIỂN</th>
            </tr>
            {this.renderSelectedList()}
            {this.renderTotalBill()}
          </div>
        </div>

        <div className="col-6 col-md-auto">
          <button
            className="btn btn-warning font-weight-bold"
            onClick={() => {
              this.props.handleBooking();
            }}
          >
            Đặt Vé
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedList: state.movie.selectedList,
});

const mapDispatchToProps = (dispatch) => {
  return {
    handleBooking: () => {
      let action = {
        type: BOOKING,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedList);
