import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {
  Home,
  HomeOff,
  Notification,
  NotificationOff,
  Setting,
  SettingOff,
} from '../../assets';

const Icon = ({isFocused, label}) => {
  if (label === 'Home') {
    return isFocused ? <Home /> : <HomeOff />;
  }
  if (label === 'Notification') {
    return isFocused ? <Notification /> : <NotificationOff />;
  }
  if (label === 'Setting') {
    return isFocused ? <Setting /> : <SettingOff />;
  }

  return <Home />;
};

const TabItem = ({onLongPress, onPress, isFocused, label, icon}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabItem}>
      {icon && <Icon label={label} isFocused={isFocused} />}
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  tabItem: {
    alignItems: 'center',
  },
});
