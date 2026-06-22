import FirstPageIcon from "@mui/icons-material/FirstPage";
import { ButtonProps, IconButton } from "@mui/material";
import Link from "next/link";

const BackHomeLink = ({ size, ...props }: ButtonProps) => {
  return (
    <Link href="/">
      <IconButton {...props} size="small">
        <FirstPageIcon fontSize={size} color={props.color} />
      </IconButton>
    </Link>
  );
};

export default BackHomeLink;
