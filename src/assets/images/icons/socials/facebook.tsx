interface ISocialIconProps {
  width?: number;
  height?: number;
}

export const FacebookIcon = ({ width = 28, height = 28 }: ISocialIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 48 48'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M24 4.08008C13 4.08008 4 13.0601 4 24.1201C4 34.1201 11.32 42.4201 20.88 43.9201V29.9201H15.8V24.1201H20.88V19.7001C20.88 14.6801 23.86 11.9201 28.44 11.9201C30.62 11.9201 32.9 12.3001 32.9 12.3001V17.2401H30.38C27.9 17.2401 27.12 18.7801 27.12 20.3601V24.1201H32.68L31.78 29.9201H27.12V43.9201C31.8328 43.1757 36.1244 40.7711 39.2198 37.1401C42.3152 33.5093 44.0108 28.8913 44 24.1201C44 13.0601 35 4.08008 24 4.08008Z'
        fill='white'
      />
    </svg>
  );
};
