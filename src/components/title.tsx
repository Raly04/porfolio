import clsx from "clsx";
import PropTypes from "prop-types";

export default function Title({ text = "default", lineWidth = "2/6" }) {
  return (
    <div className="title flex items-center">
      <span className="text-primary">/</span>
      <p className="mr-2">{text}</p>
      <div className={clsx(`line`, { [`w-${lineWidth}`]: lineWidth })}></div>
    </div>
  );
}
Title.propTypes = {
  text: PropTypes.string,
  lineWidth: PropTypes.string,
};


