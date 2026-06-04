import { CommonProps } from '@mui/material/OverridableComponent';
import Typography from '@mui/material/Typography';
import { PropsWithChildren } from 'react';

export interface HeadingProp extends PropsWithChildren {
  variant?: 'h1' | 'h2' | 'h3';
  className?: CommonProps['className'];
}

const Heading = ({ variant = 'h2', children, className }: HeadingProp) => {
  let fontSize: number;

  switch (variant) {
    case 'h1':
      fontSize = 26;
      break;
    case 'h2':
      fontSize = 22;
      break;
    case 'h3':
      fontSize = 18;
      break;
  }

  return (
    <Typography className={className} variant={variant} component="span" sx={{ fontSize }}>
      {children}
    </Typography>
  );
};

export default Heading;
