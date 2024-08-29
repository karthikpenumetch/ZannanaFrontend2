import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import Footer from './Footer';

const Home = () => {
  return (
    <ScrollView>
      <View style={{ paddingLeft: 100, margin: 10 }}>
        <View style={styles.box}>
          <Text style={{ fontSize: 57.5, color: "white", fontWeight: "bold" }}>
            Change the game for your gatherings
          </Text>
          <Text style={{ fontSize: 25, color: "white", paddingTop: 20 }}>
            ZANNANA IS HERE TO MAKE HOSTING AND JOINING GAME NIGHTS A LOT
            EASIER.
          </Text>
        </View>
        <Text style={styles.vision}>Vision</Text>
        <Text style={styles.content}>
          At Zannana, we envision a world where tabletop gaming transcends
          boundaries, bringing people together and igniting imaginations.
        </Text>
        <Text style={styles.content2}>
          Through our dedication to fostering a thriving gaming community and
          providing excpetional products and experiences, we strive to make
          every visit to Zannana an unforgettable jounrey into the world of
          tabletop gaming.
        </Text>
        <View style={styles.box2}>
          <View style={styles.missionbox}>
            <Text style={styles.ourmission}>Our mission</Text>
            <Text style={styles.missionContent}>
              Zannana was created specifically for tabletop game lovers, by
              tabletop game lovers. Our purpose is to make it easier to host and
              join tabletop game events near you, in addition to trading,
              buying, and selling your tabletop games.
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.tenets}>The Five Tenets of Zannana</Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: "bold" }}>
              Inclusivity and Diversity:
            </Text>{" "}
            Ensure events are welcoming to diverse backgrounds, genders, ages,
            and abilities, fostering an inclusive environment where everyone
            feels valued and respected, regardless of their gaming expertise.
          </Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: "bold" }}>
              Quality Gaming Experience:
            </Text>{" "}
            Prioritize well-organized events with clear rules, offering a
            variety of games for different interests and skill levels. Maintain
            high standards for gaming materials and facilities.
          </Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: "bold" }}>Community Building:</Text>{" "}
            Focus on building a strong gaming community through social
            interaction, tournaments, and events. Foster friendships and
            connections among players.
          </Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: "bold" }}>Continuous Improvement:</Text>{" "}
            Solicit feedback and adapt to preferences, staying updated on gaming
            trends. Proactively incorporate new games and formats.
          </Text>
          <Text style={styles.tenetContent}>
            <Text style={{ fontWeight: "bold" }}>
              Accessibility and Affordability:
            </Text>{" "}
            Strive for affordability and flexibility in participation. Consider
            venue location, transportation, and scheduling for accessibility.
            Provide resources for newcomers to learn and enjoy gaming without
            intimidation.
          </Text>
        </View>
        <Footer /> {/* Render the Footer component */}
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  box: {
    height: 450,
    width: 1050,
    backgroundColor: "#D32F2F",
    paddingTop: 100,
    paddingLeft: 85,
    paddingRight: 350,
    borderRadius: 10,
  },
  vision: {
    paddingTop: 50,
    fontSize: 35,
    color: "#D32F2F",
    paddingBottom: 20,
    paddingLeft: 225,
  },
  missionContent: {
    fontSize: 20,
    paddingLeft: 10,
    paddingBottom: 25,
    alignContent: "center",
  },
  missionbox: {
    height: 250,
    width: 475,
    backgroundColor: "white",
    paddingRight: 10,
    paddingLeft: 10,
    margin: 60,
    borderRadius: 10,
  },
  box2: {
    height: 450,
    width: 1050,
    backgroundColor: "#D32F2F",
    paddingTop: 100,
    paddingLeft: 40,
    paddingRight: 350,
    borderRadius: 10,
  },
  content: {
    fontSize: 20,
    paddingHorizontal: 225,
    paddingBottom: 25,
    alignContent: "center",
  },
  ourmission: {
    paddingTop: 15,
    fontSize: 35,
    color: "#D32F2F",
    paddingBottom: 20,
    paddingLeft: 10,
  },
  content2: {
    fontSize: 20,
    paddingHorizontal: 225,
    paddingBottom: 50,
    alignContent: "center",
  },
  tenets: {
    fontSize: 35,
    paddingTop: 60,
    paddingLeft: 50,
    paddingBottom: 45,
  },
  tenetContent: {
    fontSize: 20,
    paddingTop: 50,
    paddingHorizontal: 235,
  },
});
