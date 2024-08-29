import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import Sections from "./Sections";
import Footer from './Footer';

import placeholderImage from './Background.png'; 
import placeholderImage2 from './Zlogo.png';// Replace with the large placeholder image
import House from './house.png';
import Die from './die.png';
import Chat from './chat.png';
import Host from './Host.png';
import Star from './star.png';
import Settings from './settings.png';

const App = () => {
  const router = useRouter();

  return (
    <View style={styles.fullPageContainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.sidebar}>
            <Image source={placeholderImage2} style={styles.imagePlaceholder} />
            <View style={styles.sidebarContent}>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={() => router.push("/")}
              >
                <Image source={House} style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={() => router.push("/gamehub")}
              >
                <Image source={Die} style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>Gamehub</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={() => router.push("/chat")}
              >
                <Image source={Chat} style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={() => router.push("/host")}
              >
                <Image source={Host} style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>Host</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={() => router.push("/About")}
              >
                <Image source={Star} style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>About</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.sidebarButton}
                onPress={() => router.push("/settings")}
              >
                <Image source={Settings} style={styles.sidebarIcon} />
                <Text style={styles.sidebarButtonText}>Settings</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.mainContent}>
            {/* Background placeholder with text on top */}
            <View style={styles.placeholderContainer}>
              <Image source={placeholderImage} style={styles.largePlaceholder} />
              <View style={styles.textContainer}>
                <Text style={styles.headerText}></Text>
                <Text style={styles.headerSubText}>
                  
                </Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.push("/Login")}
                >
                  <Text style={styles.buttonText}>LOGIN</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Render the Sections component */}
            <Sections />
          </View>
        </View>
        
        {/* Render the Footer component */}
        <Footer />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  fullPageContainer: {
    flex: 1,
    backgroundColor: "#fff", // Ensure the entire page background is white
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "space-between", // Ensures footer is pushed to the bottom when scrolling
    backgroundColor: "#fff", // Make the ScrollView background white
    paddingBottom: 430, // Add padding to create space above the footer
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  sidebar: {
    width: 250,
    backgroundColor: "#ffffff",
    padding: 20,
    paddingTop: 20,
    alignItems: "flex-start",
  },
  imagePlaceholder: {
    width: 180,
    height: 100,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    marginBottom: 30,
  },
  sidebarContent: {
    marginTop: 40,
  },
  sidebarButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 50,
  },
  sidebarIcon: {
    width: 30,
    height: 30,
    marginLeft: 25,
    backgroundColor: "#e0e0e0",
  },
  sidebarButtonText: {
    color: "#C70039",
    fontSize: 18,
    paddingLeft: 15,
  },
  mainContent: {
    flexGrow: 1,
    padding: 10,
  },
  placeholderContainer: {
    width: "82%",
    height: 450, // Height of the background placeholder
    marginBottom: 20,
    alignSelf: "center", // Center the placeholder horizontally
    position: "relative",
  },
  largePlaceholder: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
    backgroundColor: "#e0e0e0", // Placeholder background color
  },
  textContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#C70039",
    marginBottom: 10,
    textAlign: "center",
  },
  headerSubText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#D32F2F",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 220,
    marginLeft: 407,
    height: 50,
    width: 275,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25, // Increased font size
    paddingLeft: 72, // Indent the text a bit to the right
     // Move the text down a little bit
    marginBottom: 10,
  },
});

export default App;

