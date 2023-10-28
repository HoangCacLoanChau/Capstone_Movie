import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_SEAT, DELETE_SEAT } from "../constant/constant";

export class SeatList extends Component {
  renderSeatList = () => {
    return this.props.seatList.map((x, i) => {
      let { hang } = x;
      console.log("🚀 ~ SeatList ~ returnthis.props.seatList.map ~ x:", x);
      return (
        <tr key={i}>
          <th className="firstChar">{hang}</th>
          {x.danhSachGhe.map((item, index) => {
            let { gia, soGhe, daDat } = item;
            return (
              <td className={gia === 0 ? "firstChar" : ""} key={index}>
                {gia === 0 ? (
                  soGhe
                ) : (
                  <div>
                    <input
                      type="checkbox"
                      id={soGhe}
                      value={soGhe}
                      disabled={daDat === true && "true"}
                      style={{ background: "red" }}
                      onClick={() => {
                        this.props.selectedList.includes(item) === false
                          ? this.props.handleSelectSeat(item)
                          : this.props.handleUnselectSeat(item);
                      }}
                    />
                    <label for={soGhe}>{soGhe}</label>
                  </div>
                )}
              </td>
            );
          })}
        </tr>
      );
    });
  };
  render() {
    return <div className="table table-borderless ">{this.renderSeatList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    seatList: state.movie.seatList,
    selectedList: state.movie.selectedList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelectSeat: (seat) => {
      let action = {
        type: ADD_SEAT,
        payload: seat,
      };
      dispatch(action);
    },
    handleUnselectSeat: (seat) => {
      let action = {
        type: DELETE_SEAT,
        payload: seat,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SeatList);
