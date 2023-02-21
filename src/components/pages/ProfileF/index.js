import {
  Box,
  Button,
  InputLabel,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddAPhotoOutlinedIcon from "@mui/icons-material/AddAPhotoOutlined";
import axiosInstance from "../../../services/axiosInstance";
import moment from "moment";
import { HorizontalRule, LocationOn } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VerifiedIcon from "@mui/icons-material/Verified";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SchoolIcon from "@mui/icons-material/School";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import { authState } from "../../../atom";

export default function ProfileDetails() {
  const [userData, setUserData] = useState(null);
  const [auth_state, setAuth_state] = useRecoilState(authState);
  console.log("auth_state:", auth_state);

  useEffect(() => {
    // const id = localStorage.getItem("user_id");

    async function fetchData() {
      const { id } = auth_state;
      const {
        data: { data },
      } = await axiosInstance.get(`/users/${id}`);
      console.log(data);
      setUserData(data);
    }
    if (auth_state) fetchData();
  }, []);

  return (
    <Box
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        paddingTop: "10vh",
        justifyContent: "space-evenly",
      }}
    >
      {userData ? (
        <Box
          style={{
            width: "80%",
            height: "100%",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <Paper
            elevation={7}
            style={{
              width: "30vw",
              height: "70vh",
              borderRadius: "4vh",
              overflow: "hidden",
            }}
          >
            <img
              style={{ marginTop: "7%", height: "40%", borderRadius: "100%" }}
              src={userData.profile_img}
            />
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h4"
                style={{
                  textAlign: "left",
                  marginLeft: "1vw",
                  marginTop: "3vh",
                }}
              >
                {userData.first_name + " " + userData.last_name}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "#888888",
                  textAlign: "left",
                  marginLeft: "1vw",
                  marginTop: "3vh",
                  marginRight: "2vw",
                  lineHeight: "4vh",
                }}
              >
                {"Spent " +
                  moment().diff(userData.date_of_joining, "days") +
                  " days"}
              </Typography>
            </Box>

            <Box
              style={{
                display: "flex",
                height: "4vh",
                marginTop: "3vh",
                width: "100%",
                padding: "1vw",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  lineHeight: "4vh",
                  color: "#444444",
                  textAlign: "left",

                  marginRight: "3vw",
                  lineHeight: "4vh",
                }}
              >
                Verified User
              </Typography>
              <VerifiedIcon
                style={{ fontSize: "30px", lineHeight: "4vh", color: "blue" }}
              />
            </Box>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  textAlign: "left",
                  marginLeft: "1vw",
                  marginTop: "3vh",
                  fontWeight: "bold",
                }}
              >
                {userData.spouse_name}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "#888888",
                  textAlign: "left",
                  marginLeft: "1vw",
                  marginTop: "3vh",
                  marginRight: "2vw",
                  lineHeight: "4vh",
                }}
              >
                Family Member
              </Typography>
            </Box>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  textAlign: "left",
                  marginLeft: "1vw",
                  marginTop: "3vh",
                  fontWeight: "bold",
                }}
              >
                {userData.employee_id}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "#888888",
                  textAlign: "left",
                  marginLeft: "1vw",
                  marginTop: "3vh",
                  marginRight: "2vw",
                  lineHeight: "4vh",
                }}
              >
                Employee Id
              </Typography>
            </Box>
            <Box
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  textAlign: "left",
                  marginLeft: "1vw",
                  marginTop: "3vh",
                  fontWeight: "bold",
                }}
              >
                {userData.roll_number}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "#888888",
                  textAlign: "left",
                  marginLeft: "1vw",
                  marginTop: "3vh",
                  marginRight: "2vw",
                  lineHeight: "4vh",
                }}
              >
                Roll Number
              </Typography>
            </Box>
          </Paper>
          <Box
            style={{
              display: "flex",
              width: "30vw",
              height: "70vh",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Paper
              elevation={7}
              style={{
                width: "30vw",
                paddingLeft: "2vw",
                height: "33vh",
                borderRadius: "4vh",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  height: "4vh",
                  marginTop: "5vh",
                  padding: "1vw",

                  width: "100%",
                  alignItems: "center",
                }}
              >
                <LocalPhoneIcon
                  style={{
                    fontSize: "30px",
                    color: "#77a4ed",
                    marginRight: "3vw",
                  }}
                />
                <Typography variant="h5" style={{ color: "#555555" }}>
                  +91 9988221234
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  height: "4vh",
                  marginTop: "5vh",
                  padding: "1vw",

                  width: "100%",
                  alignItems: "center",
                }}
              >
                <EmailIcon
                  style={{
                    fontSize: "30px",
                    color: "#77a4ed",
                    marginRight: "3vw",
                  }}
                />
                <Typography variant="h5" style={{ color: "#555555" }}>
                  {userData.email}
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  height: "4vh",
                  marginTop: "5vh",
                  padding: "1vw",

                  width: "100%",
                  alignItems: "center",
                }}
              >
                <LocationOnIcon
                  style={{
                    fontSize: "30px",
                    color: "#77a4ed",
                    marginRight: "3vw",
                  }}
                />
                <Typography
                  variant="h5"
                  style={{ textAlign: "left", color: "#555555" }}
                >
                  {userData.location}
                </Typography>
              </Box>
            </Paper>
            <Paper
              elevation={7}
              style={{
                width: "30vw",
                height: "33vh",
                borderRadius: "4vh",
                paddingLeft: "2vw",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  height: "4vh",
                  marginTop: "5vh",
                  padding: "1vw",

                  width: "100%",
                  alignItems: "center",
                }}
              >
                <BatchPredictionIcon
                  style={{
                    fontSize: "30px",
                    color: "#77a4ed",
                    marginRight: "3vw",
                  }}
                />
                <Typography variant="h5" style={{ color: "#555555" }}>
                  {userData.experience}years of Experience
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  height: "4vh",
                  marginTop: "5vh",
                  padding: "1vw",

                  width: "100%",
                  alignItems: "center",
                }}
              >
                <AccountBalanceIcon
                  style={{
                    fontSize: "30px",
                    color: "#77a4ed",
                    marginRight: "3vw",
                  }}
                />
                <Typography variant="h5" style={{ color: "#555555" }}>
                  NIST School Of Engineering
                </Typography>
              </Box>
              <Box
                style={{
                  display: "flex",
                  height: "4vh",
                  marginTop: "5vh",
                  padding: "1vw",

                  width: "100%",
                  alignItems: "center",
                }}
              >
                <SchoolIcon
                  style={{
                    fontSize: "30px",
                    color: "#77a4ed",
                    marginRight: "3vw",
                  }}
                />
                <Typography variant="h5" style={{ color: "#555555" }}>
                  {userData.department.slice(0, 20)}
                </Typography>
              </Box>
            </Paper>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}
