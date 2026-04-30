interface ISocialIconProps {
  width?: number;
  height?: number;
}

export const InstagramIcon = ({
  width = 28,
  height = 28,
}: ISocialIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 4H12C7.6 4 4 7.6 4 12V36C4 40.4 7.6 44 12 44H36C40.4 44 44 40.4 44 36V12C44 7.6 40.4 4 36 4ZM24 34C18.5 34 14 29.5 14 24C14 18.5 18.5 14 24 14C29.5 14 34 18.5 34 24C34 29.5 29.5 34 24 34ZM35 15C33.9 15 33 14.1 33 13C33 11.9 33.9 11 35 11C36.1 11 37 11.9 37 13C37 14.1 36.1 15 35 15Z"
        fill="white"
      />
    </svg>
  );
};
