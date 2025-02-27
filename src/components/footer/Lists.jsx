import { Link, List, Stack, Typography } from "@mui/material";
import { useResponsive } from "../sizes/screen";
import useStore from "../../Store/store";

const Lists = ({ heading, array }) => {
  const { smScreen, mdScreen } = useResponsive()
  const fontSizeHeading = smScreen ? "14px" : mdScreen ? "16px" : "18px";
  const fontSizeItems = smScreen ? "12px" : mdScreen ? "14px" : "16px";
  const textAlign = smScreen ? "center" : "left";
  const light = useStore(state => state.light);
  const textColor = light ? '#F97316' : '#1F2937' ;

  return (
    <Stack
      height="100%"
      width="100%"
      alignItems={textAlign === "center" ? "center" : "start"}
      textAlign={textAlign}
      color={textColor}
    >
      <Typography fontFamily="Poppins" fontWeight="600" fontSize={fontSizeHeading}>
        {heading}
      </Typography>

      {!array || array.length === 0 ? (
        <Typography fontFamily="Poppins" fontSize="14px" fontWeight="300" color={textColor} mt="0.5rem">
          
        </Typography>
      ) : (
        <List sx={{ padding: 0 }}>
          {array.map((item, idx) => (
            <Link
              key={idx}
              href={item.link ? item.link : "#"}
              sx={{
                textDecoration: "none",
                display: "block",
                textAlign: textAlign,
                ":hover": { textDecoration: "underline" },
                ":focus": { outline: "2px solid #FFFFFF" },
              }}
            >
              <Typography
                fontFamily="Poppins"
                fontSize={fontSizeItems}
                fontWeight="400"
                color={textColor}
                my="0.2rem"
              >
                {item.name}
              </Typography>
            </Link>
          ))}
        </List>
      )}
    </Stack>
  );
};

export default Lists;
