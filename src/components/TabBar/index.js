import React, { useState } from 'react';
import TabBarComponent from './TabBar.component';

const TabBar = props => {
  let [activeTab, setActiveTab] = useState({ activeTab: 0 });

  const createItems = list => {
    let tmp = [];
    list.forEach((item, i) => {
      tmp.push({ text: item, id: i, active: activeTab === i });
    });
    return tmp;
  };

  const onTabClick = id => {
    setActiveTab(id);
  };

  return (
    <React.Fragment>
      <TabBarComponent items={createItems(props.list)} onClick={onTabClick} />
    </React.Fragment>
  );
};

export default TabBar;
