import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Formik, ErrorMessage, Field, Form } from "formik";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validation = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  password: Yup.string()
    .required("Required")
    .min(5, "Password is too short")
    .max(12, "No more than 12 chracter"),
});

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Typography
          component="h1"
          variant="h2"
          style={{ fontFamily: "Lucida" }}
        >
          Sign up
          <hr />
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={validation}
          onSubmit={(values) => {
            console.log("values are", values);
          }}
        >
          <Form>
            <Grid>
              <Grid item xs={12}>
                <Typography htmlFor="firstName" variant="h5" align="left">
                  First Name
                </Typography>
                <Field name="firstName" type="text" maxWidth />
                <br />
                <ErrorMessage name="firstName" />
              </Grid>
              <Grid item xs={12}>
                <Typography htmlFor="lastName" variant="h5" align="left">
                  Last Name
                </Typography>
                <Field name="lastName" type="text" />
                <br />
                <ErrorMessage name="lastName" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography htmlFor="email" variant="h5" align="left">
                  Email
                </Typography>
                <Field name="email" type="email" />
                <ErrorMessage name="email" />
              </Grid>
              <Grid item xs={12} sm={6} style={{ paddingBottom: "20px" }}>
                <Typography htmlFor="password" variant="h5" align="left">
                  Password
                </Typography>
                <Field name="password" type="password" />
                <ErrorMessage name="password" />
              </Grid>
              <Button
                type="submit"
                variant="outlined"
                color="secondary"
                fullWidth
              >
                Submit
              </Button>
            </Grid>
          </Form>
        </Formik>
      </div>
    </Container>
  );
}
