import "./ToggleSection.css";

const ToggleSection = ({ toggleHeader, toggleTrigger=false, children}) => (
  <div className="toggle-section">
    <div
      className="toggle-section__header"
      style={{ marginBottom: toggleTrigger ? "1rem" : 0 }}
    >{toggleHeader}</div>
    <div
      className="toggle-section__children"
      style={{
        pointerEvents: toggleTrigger ? "all" : "none",
        opacity: toggleTrigger ? 1 : 0.25,
        display: toggleTrigger ? "block" : "none"
      }}
    >{children}</div>
  </div>
);

export default ToggleSection;
