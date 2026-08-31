import "./Button.css";

export default function Button({ className = "", type = "button", ...props }) {
  return <button className={`button ${className}`.trim()} type={type} {...props} />;
}
