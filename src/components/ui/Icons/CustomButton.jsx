import { cn } from "../../../utils/ClassMerge";
import PropTypes from "prop-types";

const CustomButton = ({ className, children }) => {
  return (
    <button
      className={cn(
        "rounded-lg bg-primary py-1 text-background lg:w-fit lg:px-4 lg:py-2",
        className,
      )}
    >
      {children}
    </button>
  );
};
CustomButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default CustomButton;
