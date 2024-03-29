// == Import npm
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// == Import intern
import Tab from './tab';
import './style.css'
// == Composant
class Tabs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const
      {
        onClickTabItem,
        props: {
          children,
        },
        state: {
          activeTab,
        },
      } = this;

    return (
      <div className="tabs">
        <ol className="tab-list">
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}
Tabs.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
};
export default Tabs;
