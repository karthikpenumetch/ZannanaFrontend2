import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

// Import the Zannana image
import ZannanaLogo from './Zannana.png'; // Ensure this path is correct

const Footer = () => {
  return (
    <View style={styles.footer}>
      {/* Container for logo, title, and text */}
      <View style={styles.logoTextContainer}>
        <Image source={ZannanaLogo} style={styles.imagePlaceholder} />

        <View style={styles.followUsContainer}>
          <Text style={styles.followUsTitle}>Follow us</Text>
        </View>

        <View style={styles.productContainer}>
          <Text style={styles.headerTitle}>Product</Text>
          <Text style={styles.subText}>Landing Page</Text>
          <Text style={styles.subText}>Popup Builder</Text>
          <Text style={styles.subText}>Web-design</Text>
          <Text style={styles.subText}>Content</Text>
          <Text style={styles.subText}>Integrations</Text>
        </View>

        <View style={styles.resourcesContainer}>
          <Text style={styles.headerTitle}>Resources</Text>
          <Text style={styles.subText}>Academy</Text>
          <Text style={styles.subText}>Blog</Text>
          <Text style={styles.subText}>Themes</Text>
          <Text style={styles.subText}>Hosting</Text>
          <Text style={styles.subText}>Developers</Text>
          <Text style={styles.subText}>Support</Text>
        </View>

        <View style={styles.companyContainer}>
          <Text style={styles.headerTitle}>Company</Text>
          <Text style={styles.subText}>About Us</Text>
          <Text style={styles.subText}>Careers</Text>
          <Text style={styles.subText}>FAQs</Text>
          <Text style={styles.subText}>Teams</Text>
          <Text style={styles.subText}>Contact Us</Text>
        </View>

        <Text style={styles.footerDescription}>
          Play fun tabletop games with your friends and meet new people. Obtain new games and share yours with others!
        </Text>
      </View>

      <View style={styles.footerContent}>
        {/* Left side content */}
        <View style={styles.leftContent}>
          <Text style={styles.footerText}>© 2024 All Rights Reserved.</Text>
        </View>

        {/* Right side content */}
        <View style={styles.rightContent}>
          <Text style={styles.footerLink}>Privacy Policy</Text>
          <Text style={styles.footerLink}>Terms of Service</Text>
          <Text style={styles.footerLink}>Contact Us</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#000",
    paddingVertical: 0,
    justifyContent: "flex-end",
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 350, // Adjusted height
  },
  logoTextContainer: {
    position: "absolute",
    top: 20,
    left: 20, // Align with the left side of the image
  },
  imagePlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  followUsContainer: {
    position: "absolute",
    top: 20, // Align with the top of the image
    left: 440, // Positioned to the right of the logo
    width: 150,
  },
  followUsTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  productContainer: {
    position: "absolute",
    top: 20,
    left: 750, // Shifted 20 pixels to the right
    width: 200, // Ensure enough width to keep subtexts on one line
  },
  resourcesContainer: {
    position: "absolute",
    top: 20,
    left: 1000, // Shifted 30 pixels to the right
    width: 200, // Ensure enough width to keep subtexts on one line
  },
  companyContainer: {
    position: "absolute",
    top: 20,
    left: 1250, // Shifted 40 pixels to the right
    width: 200, // Ensure enough width to keep subtexts on one line
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 20, // Increased space between the title and subtext
  },
  subText: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 12, // Space between each subtext
  },
  footerDescription: {
    color: "#fff",
    marginTop: 10,
    maxWidth: 200,
    textAlign: "left",
  },
  footerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#fff",
    paddingVertical: 10,
    position: "absolute",
    bottom: 10,
  },
  leftContent: {
    flex: 1,
    alignItems: "flex-start",
  },
  rightContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingRight: 40,
  },
  footerText: {
    color: "#fff",
    fontSize: 14,
  },
  footerLink: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 30,
  },
});

export default Footer;

