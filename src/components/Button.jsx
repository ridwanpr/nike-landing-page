const Button = ({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 border px-7 py-4 font-montserrat text-lg leading-none ${
        backgroundColor
          ? `${borderColor} ${textColor} ${backgroundColor}`
          : "border-coral-red bg-coral-red text-white"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
