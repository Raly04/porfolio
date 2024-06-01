import PropTypes from "prop-types";
import clsx from "clsx";

export default function MyButton({
  // eslint-disable-next-line react/prop-types
  img,
  borderColor,
  textColor,
  bg,
  text,
  action,
}) {
  return (
    <button
      type="submit"
      className={clsx(
        `border-1`,
        `cursor-pointer`,
        `bg`,
        `flex`,
        `flex-row`,
        `items-center`,
        `justify-center`,

        {
          [`border-${borderColor}`]: borderColor,
          [`bg-${bg}`]: bg,
          [`text-${textColor}`]: textColor,
        },
        "py-2 px-4 font-semibold"
      )}
      onClick={action}
    >
      <p>{text}</p>
      {img && <img src={img} alt="" className="w-4 ml-2" />}
    </button>
  );
}

MyButton.propTypes = {
  textColor: PropTypes.string.isRequired,
  borderColor: PropTypes.string.isRequired,
  bg: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

MyButton.defaultProps = {
  borderColor: "red-500",
  bg: "blue-500",
  textColor: "white",
};
