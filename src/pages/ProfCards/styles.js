import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 0.7,
    height: 100,
    borderRadius: 8,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    position: "relative"
  },

  cardDefaultImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 120,
  },

  infoFoto: {
    justifyContent: 'flex-end',
  },

  cardImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 100,
    resizeMode: "cover",
    alignSelf: "center",
  },

  infoContainer: {
    marginBottom: 130,
    alignItems: "center",
  },

  profEmail: {
    marginTop: 20,
    fontFamily: "montserrat-regular",
    fontSize: 18,
    color: "grey",
  },

  profName: {
    marginTop: 80,
    fontFamily: "montserrat-regular",
    fontSize: 18,
  },

  profInfo: {
    marginTop: 50,
    textDecorationLine: "underline",
    color: "#6A82FB",
    fontFamily: "montserrat-regular",
  },
  heartContainer: {
    top: 25,
    right: 25,
    position: "absolute",
  },
  heart: {
    marginTop: 0,
  },
});

export default styles;
