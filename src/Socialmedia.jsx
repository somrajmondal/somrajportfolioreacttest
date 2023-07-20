import * as React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const buttonStyle = {
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
};

function Social() {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Stack justifyContent="center" alignItems="center" padding={5} spacing={5} direction="row">
          <Button variant="outlined" component="a" rel="noopener" target="_blank" href="https://www.facebook.com/somraj.91/" sx={buttonStyle}>
            <FacebookIcon />
            Facebook
          </Button>
          <Button variant="outlined" component="a" target="_blank" href="https://www.linkedin.com/in/somraj-mondal-7154b81b9/" sx={buttonStyle}>
            <LinkedInIcon />
            Linkedin
          </Button>
          <Button variant="outlined" component="a" target="_blank" href="https://www.instagram.com/myselfsomraj" sx={buttonStyle}>
            <InstagramIcon />
            Instagram
          </Button>
          <Button variant="outlined" component="a" target="_blank" href="https://github.com/somrajmondal" sx={buttonStyle}>
            <GitHubIcon />
            Github
          </Button>
          <Button variant="outlined" component="a" target="_blank" href="https://twitter.com/myselfsomraj" sx={buttonStyle}>
            <TwitterIcon />
            Twitter
          </Button>
        </Stack>
      </div>
    </>
  );
}

export default Social;
