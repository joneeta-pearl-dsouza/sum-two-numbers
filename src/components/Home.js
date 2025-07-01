import React from "react";

const Home = ({ name }) => {
  return (
    <div style={styles.centered}>
      <div style={styles.card}>
        <h1 style={styles.welcomeText}>Welcome {name}</h1>
      </div>
    </div>
  );
};

const styles = {
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9fafb",
  },
  card: {
    padding: "2rem",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  },
  welcomeText: {
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default Home;
