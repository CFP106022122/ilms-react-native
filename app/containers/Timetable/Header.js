import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';

const weekday = ['MON', 'TUE', 'WED', 'THR', 'FRI', 'SAT'];

class Header extends Component {
  scrollViewRef = (ref) => {
    if (ref) {
      this.scrollTo = ref.scrollTo;
    }
  };
  renderRow = () => (
    weekday.map(day =>
      <View key={day} style={styles.header}>
        <Text style={styles.headerText}>{day}</Text>
      </View>
    )
  );
  render() {
    return (
      <View style={styles.headerRow}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          ref={this.scrollViewRef}
        >
          {this.renderRow()}
        </ScrollView>
      </View>
    );
  }
}

export default Header;

