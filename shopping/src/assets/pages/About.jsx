
const About = () => {
  const handleReload = () => {
    window.location.reload(); // Reload the page when the button is clicked
  };

  return (
    <div>
      <button onClick={handleReload}>RELOAD PAGE</button>
    </div>
  );
};

export default About;
