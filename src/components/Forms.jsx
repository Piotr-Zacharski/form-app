import React from "react";
import { Formik, Form } from "formik";
import { Checkbox, TextField, Button } from "@mui/material";
import { Col, Container, FormGroup, FormLabel, Row } from "react-bootstrap";
import * as Yup from "yup";

const Forms = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(8, "Too Short!")
      .required("Password is required"),
    confirmPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    acceptTerms: Yup.boolean()
      .required()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
        initialValues;
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <Container style={{ width: '18rem', marginTop: '50px' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '30px'}}>Sign Up</h2>
            <FormGroup as={Col}>
              <Row className="mb-3">
                <TextField placeholder="First name" name="firstName" type="text" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}
              </Row>
              <Row className="mb-3">
                <TextField placeholder="Last name" name="lastName" type="text" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}
              </Row>
              <Row className="mb-3">
                <TextField placeholder="Email address" name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}
              </Row>
              <Row className="mb-3">
                <TextField placeholder="Password" name="password" type="password" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
              </Row>
              <Row className="mb-3">
                <TextField placeholder="Confirm password" name="confirmPassword" type="password" />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div>{errors.confirmPassword}</div>
                ) : null}
              </Row>
              <Row className="mb-3">
                <FormLabel style={{textAlign: "center"}}>
                  <label htmlFor="acceptTerms">Accept Terms</label>
                </FormLabel>
                <Checkbox name="acceptTerms" type="checkbox" />
                {errors.acceptTerms && touched.acceptTerms ? (
                  <div>{errors.acceptTerms}</div>
                ) : null}
              </Row>
            </FormGroup>
            <Row className="mb-3">
              <Button variant="contained" type="submit">
                Submit
              </Button>
            </Row>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
