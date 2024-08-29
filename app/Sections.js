import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";

import placeholderImage from './Pokemon.png';
import placeholderImage2 from './Monopoly.png';
import placeholderImage3 from './Checkers.png';
import placeholderImage4 from './Uno.png';
import placeholderImage5 from './Board.png';
import placeholderImage6 from './Man.png';
import placeholderImage7 from './Scrabble.png';
import placeholderImage8 from './Chess.png';





const Sections = () => {
  return (
    <>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EXPLORE </Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.horizontalScroll}
        >
          <View style={styles.card}>
            <Image source={placeholderImage} style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>Pokemon Raid Battle Night</Text>
            <Text style={styles.cardSubTitle}>Today from 7:30pm - 10pm</Text>
            <Text style={styles.cardDescription}>
              BYOB, snacks will be provided!
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={placeholderImage2} style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>Monopoly Game Night</Text>
            <Text style={styles.cardSubTitle}>Today from 6:00pm - 8:00pm</Text>
            <Text style={styles.cardDescription}>
              Pizza and drinks BYOB optional!
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={placeholderImage3} style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>Checkers with Clowns</Text>
            <Text style={styles.cardSubTitle}>Today from 7:30pm - 9:30pm</Text>
            <Text style={styles.cardDescription}>
              BYOB will provide clown costumes!
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={placeholderImage4} style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>UNO with Custom Rules</Text>
            <Text style={styles.cardSubTitle}>Today from 7:00pm - 9:00pm</Text>
            <Text style={styles.cardDescription}>
              Join us for UNO with custom rules!
            </Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>              CURRENT EVENTS</Text>
        <ScrollView
          horizontal
          contentContainerStyle={styles.horizontalScroll}
        >
          <View style={styles.card}>
            <Image source={placeholderImage5} style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>Monopoly Party!</Text>
            <Text style={styles.cardSubTitle}>Today from 7:30pm - 10pm</Text>
            <Text style={styles.cardDescription}>
              BYOB, snacks will be provided for all!
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={placeholderImage6} style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>Mega Monopoly Night</Text>
            <Text style={styles.cardSubTitle}>Today from 7:30pm - 10pm</Text>
            <Text style={styles.cardDescription}>
              Will provide mocktails, cocktails, and snacks!
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={placeholderImage7} style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>Play Scrabble with Friends!</Text>
            <Text style={styles.cardSubTitle}>Today from 7:30pm - 10pm</Text>
            <Text style={styles.cardDescription}>
              We've got pizza, soda, and homemade sweets!
            </Text>
          </View>
          <View style={styles.card}>
            <Image source={placeholderImage8} style={styles.imagePlaceholder} />
            <Text style={styles.cardTitle}>Chess Tournament</Text>
            <Text style={styles.cardSubTitle}>
              Today from 7:00pm - 9:00pm
            </Text>
            <Text style={styles.cardDescription}>
              Join us for an intense night of chess!
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  section: {
    width: "100%",
    marginBottom: 20,
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#C70039",
    paddingRight: 922,
  },
  horizontalScroll: {
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    width: 250,
    padding: 15,
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginRight: 10,
    elevation: 3,
    alignItems: "center",
  },
  imagePlaceholder: {
    width: "100%",
    height: 150,
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "#e0e0e0",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  cardSubTitle: {
    fontSize: 14,
    color: "#757575",
    marginBottom: 5,
    textAlign: "center",
  },
  cardDescription: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default Sections;
