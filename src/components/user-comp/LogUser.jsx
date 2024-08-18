"use client"
import {
  Box, Button, Card, Grid, TextField, Typography,
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useUsersState } from "@context/createContexts";

//import Header from "@components/Header";

function LogUser() {
  // console.log("LogUser");
  const router = useRouter();
  const {
    logget,
    logger,
    logOut,
    //state,
    // tken
  } = useUsersState()
  //console.log("logget", logget)
  //console.log("state", state, "state")
  // console.log("tken", !tken & !logget, "tken")
  return (
    <>

      <Box
        sx={{ display: (!logget) ? "flex" : "none" }}
        flexDirection={"column"} justifyContent="space-between" alignItems="center">
        <Card
          sx={{
            maxWidth: {
              xs: "80vw",
              //md: "40vw"
            },
            padding: {
              xs: "2vw",
              //  md: "10vh"
            }
          }}
        >
          <Formik
            onSubmit={logger}
            initialValues={initialValues}
            validationSchema={checkoutSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
            }) => (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "grid",
                  rowGap: "10px"

                }}
              >

                <Typography variant="h5" fontWeight="600">
                  Login
                </Typography>
                <TextField
                  name="username"
                  placeholder="username"
                  value={values.username}
                  onBlur={handleBlur}
                  fullWidth
                  variant="filled"
                  type="text"
                  label="User Name"
                  onChange={handleChange}
                  error={!!touched.username && !!errors.username}
                  helperText={touched.username && errors.username}

                />
                <TextField
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  fullWidth
                  variant="filled"
                  label="Password"
                  error={!!touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <Button type="submit" color="secondary" variant="contained" >
                  {/* <Link href="/home"> */}
                  ACCEDER
                  {/* </Link> */}
                </Button>
              </form>
            )}
          </Formik>
        </Card>

      </Box>


    </>
  );
};

const checkoutSchema = Yup.object().shape({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),

  password: Yup.string()
    .min(5, "Password must be at least 5 charaters")
    .required("Password is required"),
});
const initialValues = {
  username: "",
  password: "",
};

export default LogUser




//onClick={() => router.push(`/edit/${task.id}`)}