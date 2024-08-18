"use client"
import {
  Box, Button, TextField, Typography,
  Grid, FormControlLabel, Checkbox,
  FormGroup, FormControl, Card, FormHelperText
} from "@mui/material";
import { Formik } from "formik";
import * as Yup from "yup";
import { useUsersState } from "@context/createContexts";


const CreateUser = () => {
  // console.log("create");
  const {
    createUser,
    logget,
    rolesInit,
    handleChex,
    userCreated
  } = useUsersState()
  const handleFormSubmit = (values) => createUser(values)

  const useCreObj = userCreated.addUserRole
  const funcrol = function getAdjacentKeys() {
    const ent = Object.entries(useCreObj)
      .filter(x => x[1] !== false).map(r => r[0])
    return ent
  }
  const { admin, moderator, editor, user } = useCreObj;
  const error = [admin, moderator, editor, user].filter((v) => v).length !== 1;
  return (
    <Card
      sx={{
        maxWidth: {
          xs: "80vw",
          md: "40vw"
        },
        padding: {
          xs: "1vw",
          margin: "1vw"
        },
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        display: logget ? "flex" : "none",
        flexDirection: "row !important"
      }}
    >
      <Formik
        onSubmit={handleFormSubmit}
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
          <form onSubmit={handleSubmit}>
            <Typography variant="h5" fontWeight="200"
              sx={{ gridColumn: "span 2 ", padding: "10px", justifySelf: "center", alignSelf: "center" }}
            >
              Select Roles
            </Typography>
            <FormControl sx={{ gridColumn: "span 2" }}>

              <FormGroup value={values.roles = funcrol()}   >
                <FormControlLabel
                  control={
                    <Checkbox color="secondary" checked={admin} onChange={handleChex} name="admin" />
                  }
                  label="Admin" sx={{ gridColumn: "span 5" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox color="secondary" checked={moderator} onChange={handleChex} name="moderator" />
                  }
                  label="Moderator" sx={{ gridColumn: "span 5" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox color="secondary" checked={editor} onChange={handleChex} name="editor" />
                  }
                  label="Editor" sx={{ gridColumn: "span 5" }}
                />
                <FormControlLabel
                  control={
                    <Checkbox color="secondary" checked={user} onChange={handleChex} name="user" />
                  }
                  label="User" sx={{ gridColumn: "span 5" }}
                />
              </FormGroup>
              {/* <FormHelperText>Unless one rol, no more than two</FormHelperText> */}
              {/* 
                */}
              {error &&
                <FormHelperText sx={{
                  color: "red",
                  fontSize: "2rem"
                }} >Unless one rol, no more than two
                </FormHelperText>
              }
            </FormControl>

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
              sx={{ gridColumn: "span 2 ", padding: "10px" }}
            />

            <TextField
              type="text"
              name="email"
              placeholder="email"
              value={values.email}
              //defaultValue={"logia@gmail.com"}
              variant="filled"
              label="Email"
              onBlur={handleBlur}
              onChange={handleChange}
              error={!!touched.email && !!errors.email}
              helperText={touched.email && errors.email}
              sx={{ gridColumn: "span 2 ", padding: "10px" }}
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
              label="password"
              error={!!touched.password && !!errors.password}
              helperText={touched.password && errors.password}
              sx={{ gridColumn: "span 2 ", padding: "10px" }}
            />
            <TextField
              fullWidth
              variant="filled"
              label="Confirm Password"
              onBlur={handleBlur}
              onChange={handleChange}
              type="password"
              name="confirmPassword"
              placeholder="confirmPassword"
              defaultValue={"111111"}

              error={!!touched.confirmPassword && !!errors.confirmPassword}
              helperText={touched.confirmPassword && errors.confirmPassword}
              sx={{ gridColumn: "span 2 ", padding: "10px" }}
            />
            <Box display={"flex"} justifyContent="space-evenly">
              <Button disabled={error && true} type="submit" color="secondary" variant="contained">
                Create New User
              </Button>

            </Box>
          </form>
        )}
      </Formik>
    </Card>
  );
};

const checkoutSchema = Yup.object().shape({
  username: Yup.string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),

  email: Yup.string().email("invalid email").required("required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});
const aleatory = Math.floor(Math.random() * 140) + 10
const initialValues = {
  username: `user${aleatory}`,
  //username: "",
  email: `email${aleatory}@gmail.com`,
  password: "111111",
  confirmPassword: "111111",
};


export default CreateUser