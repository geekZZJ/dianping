import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    const { filter, setFilter } = this.props;
    return (
      <div>
        <button disabled={filter === "all"} onClick={() => setFilter("all")}>
          全部
        </button>
        <button
          disabled={filter === "active"}
          onClick={() => setFilter("active")}
        >
          未完成
        </button>
        <button
          disabled={filter === "completed"}
          onClick={() => setFilter("completed")}
        >
          已完成
        </button>
      </div>
    );
  }
}
