import { Box, Link, List, ListItem } from "@mui/material";
import { social_medias } from "../../Database/db";
import { useResponsive } from "../sizes/screen";

const SocialNetworks = () => {
  const {mdScreen, lgScreen} = useResponsive();
  const paddingItem = mdScreen ? "0px" : lgScreen ? "4px" : "8px";

  return (
    <Box width="auto" display={!mdScreen ? "flex" : "none"}>
      <List
        sx={{
          width: "100%",
          height: "24px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {social_medias?.map((media, idx) => (
          <ListItem key={idx} sx={{ paddingX: paddingItem, cursor: "pointer" }}>
            <Link
              href={media?.url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                height: "22px",
                width: "24px",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <Box
                component="img"
                src={media?.imgUrl}
                alt={media?.name}
                height="100%"
                width="100%"
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SocialNetworks;
