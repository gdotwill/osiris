import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.img,
    };
  }

  onMouseEnterTabItem = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onMouseEnterTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    return (
      <div className="tabs">
         <div className="tab-content">
          {children.map((child) => {
            if (child.props.img !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
        <ul className="tab-list">
          {children.map((child) => {
            const { img } = child.props;
            return (
              <Tab
                activeTab={activeTab}
                key={img}
                img={img}
                onMouseEnter={onMouseEnterTabItem}
              />
            );
          })}
        </ul>       
      </div>
    );
  }
}

export default Tabs;
