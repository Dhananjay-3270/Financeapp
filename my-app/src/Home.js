import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Vector from "./assets/Vector.png";
import Igstudio from "./assets/Igstudio.png";
import mail from "./assets/Message 35.png";
import styles from "./Home.module.css";
import pic from "./assets/pic.png";
function Home() {
  return (
    <>
      <Box>
        <Box height={990} width="100%">
          <Box display="flex" flexDirection="row" justifyContent="space-evenly">
            <Box
              width={143}
              height={30.3}
              position="relative"
              alignItems="center"
              top={10}
            >
              <img alt="logo" src={Vector} />
              <img alt="logo" src={Igstudio} />
            </Box>

            <Box
              display="flex"
              flexDirection="row"
              justifyContent="space-evenly"
              width={431}
              height={26}
              color="#FFFFFF"
            >
              <h4>Home</h4>
              <h4>Attorneys</h4>
              <h4>Practice Areas</h4>
              <h4>About Us</h4>
            </Box>

            <Box width={172} height={47} color="#FFFFFF">
              <h3>Contact Now</h3>
            </Box>
          </Box>
          <Box
            width={580}
            height={400}
            display="flex"
            flexDirection="column"
            position="relative"
            top={250}
            left={156}
          >
            <h2 className={styles.bigtext1}>
              You don’t have to Fight them Alone.
            </h2>
            <p className={styles.bigtext2}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </p>
            <Box display='flex' flexDirection='row'>
            <Box
              sx={{
                width: "438px",
                height: "74px",
                background: "#FFFFFF",
                borderRadius: "43px",
                opacity: "10%",
              }}
              display="flex"
              justifyContent="space-around"
              flexDirection="row"
            >
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Enter your eamil address"
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  width: "137px",
                  height: "74px",
                  borderRadius: "43px",
                  bgcolor: " #E3B748",
                }}
                display="flex"
                alignContent="center"
                justifyContent="center"
              >
                <h4> Lets Talk</h4>
              </Box>
            </Box>
            <Box sx={{ width: "467.71px", height: "544.71px", position:'relative', left:"250px" , top:"-380px"}}>
              <img alt="pic" src={pic} />
            </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Home;
