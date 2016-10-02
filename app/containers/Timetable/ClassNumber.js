import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import styles from './styles';

const classNumber = ['1', '2', '3', '4', 'n', '5', '6', '7', '8', '9', 'a', 'b', 'c'];

class ClassNumber extends Component {
  scrollViewRef = (ref) => {
    if (ref) {
      this.scrollTo = ref.scrollTo;
    }
  };
  renderColumn = () => (
    classNumber.map(day =>
      <View key={day} style={styles.classNumber}>
        <Text style={styles.classNumberText}>{day}</Text>
      </View>
    )
  );
  render() {
    return (
      <View style={styles.classNumberColumn}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
          ref={this.scrollViewRef}
        >
          {this.renderColumn()}
        </ScrollView>
      </View>
    );
  }
}

export default ClassNumber;

