import * as React from 'react';
import { style } from 'typestyle';
import classnames from 'classnames';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { tabItem, tabHeader, headTabArrow, headTabBorder } from './styles';
import { TabHeadItemProps, TabHeadsProps } from './types';

export const TabHeads = (props: TabHeadsProps) => {
  const heads = props.heads.map((v, i) => {
    return (
      <TabHeadItem selectTabKey={props.selectTabKey} tab={v} key={i} tabKey={i} selectedTabKey={props.selectedTabKey} colorOnFocus={props.colorOnFocus} />
    );
  });

  return (
    <AnimateSharedLayout>
      <ul className={classnames('up-nav-tab', style({ ...tabHeader }))} style={{ transform: 'translateZ(0)' }}>
        {heads}
      </ul>
    </AnimateSharedLayout>
  );
};

const TabHeadItem = (props: TabHeadItemProps) => {
  const selectedTabClass = props.selectedTabKey == props.tabKey ? 'up-nav-tab-item__selected' : '';

  return (
    <motion.li
      animate
      className={classnames('up-nav-tab-item', selectedTabClass, style({ ...tabItem(props) }))}
      onClick={() => {
        props.selectTabKey(props.tabKey);
      }}
    >
      {props.selectedTabKey == props.tabKey && (
        <>
          <motion.div animate layoutId={headTabBorder(props.colorOnFocus)} className={headTabBorder(props.colorOnFocus)} />
          <motion.div animate layoutId={headTabArrow(props.colorOnFocus)} className={headTabArrow(props.colorOnFocus)} />
        </>
      )}
      {props.tab.head}
    </motion.li>
  );
};
