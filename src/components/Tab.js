import React, { Component } from "react";
import PropTypes from "prop-types";

class Tab extends Component {
  static propTypes = {
    activeTab: PropTypes.string.isRequired,
    onMouseEnter: PropTypes.func.isRequired,
  };

  onMouseEnter = () => {
    const { img, onMouseEnter } = this.props;
    onMouseEnter(img);
  };

  render() {
    const {
      onMouseEnter,
      props: { activeTab, img },
    } = this;

    let className = "tab-list-icon";

    if (activeTab === img) {
      className += " tab-icon-active";
    }

    return (
      <li className={className} onMouseEnter={onMouseEnter}>
        {img}
      </li>
    );
  }
}

export default Tab;
