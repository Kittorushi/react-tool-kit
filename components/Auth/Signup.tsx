import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail, MdCake } from "react-icons/md";
import { RiLockPasswordFill, RiLockPasswordLine } from "react-icons/ri";
import Router from "next/router";
import { useUser } from "lib/mongo/hooks";
import Link from "next/link";
import {
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { styled } from "@material-ui/core/styles";

const CardForm = styled("div")({
  display: "flex",
  justifyContent: "center",
});

export default function Signup() {
  // const [user, { mutate }] = useUser();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // redirect to home if user is authenticated
  //   if (user) Router.replace("/");
  // }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formValues.password !== formValues.confirmPassword) {
      setErrorMsg("Passwords do not match");
    } else {
      setLoading(true);

      // Get the whole form data
      const body = {
        email: formValues.email,
        name: formValues.name,
        password: formValues.password,
      };

      // Rest of your form submission logic
      try {
        const res = await fetch("http://localhost:3000/api/users", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        console.log(res);

        if (res.status === 201) {
          console.log(res);
          const userObj = await res.json();
          // writing our user object to the state
          // mutate(userObj);
        } else {
          console.log(res);
          setLoading(false);
          // setErrorMsg(await res.text());
        }
      } catch (error) {
        console.log(`jjjjj--  ${error}`);
        setLoading(false);
        // setErrorMsg("An error occurred during form submission.");
      }

      // Rest of your form submission logic
      // if (passwordInput.value !== cpasswordInput.value) {
      //   setErrorMsg("Passwords do not match");
      // } else {
      //   isLoading(true);
      //   isLoading(true);
      //   const body = {
      //     email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement)
      //       ?.value,
      //     name: (e.currentTarget.elements.namedItem("name") as HTMLInputElement)
      //       ?.value,
      //     password: passwordInput.value,
      //   };

      //   const res = await fetch("/api/users", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(body),
      //   });
      //   if (res.status === 201) {
      //     const userObj = await res.json();
      //     // writing our user object to the state
      //     mutate(userObj);
      //   } else {
      //     isLoading(false);
      //     setErrorMsg(await res.text());
      //   }
      // }
    }
  };

  return (
    <Container maxWidth="sm">
      <CardForm>
        <form onSubmit={handleSubmit}>
          {errorMsg && (
            <Typography variant="body2" align="center" style={{ color: "red" }}>
              {errorMsg}
            </Typography>
          )}
          <div className="mb-3">
            <Typography variant="h5" align="center" gutterBottom>
              Sign Up
            </Typography>
          </div>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            required
            InputProps={{
              startAdornment: <FaUserCircle />,
            }}
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <TextField
            label="Email address"
            fullWidth
            margin="normal"
            required
            type="email"
            InputProps={{
              startAdornment: <MdEmail />,
            }}
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            required
            type="password"
            InputProps={{
              startAdornment: <RiLockPasswordFill />,
            }}
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          <TextField
            label="Confirm Password"
            fullWidth
            margin="normal"
            required
            type="password"
            InputProps={{
              startAdornment: <RiLockPasswordFill />,
            }}
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleChange}
          />
          <Typography variant="body2" align="center" gutterBottom>
            Already registered? <Link href="/login">Login</Link>
          </Typography>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={loading}
            style={{ marginBottom: "1rem" }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign up"
            )}
          </Button>
        </form>
        {/* <Button onClick={someFunction}>Click me</Button> */}
      </CardForm>
    </Container>
  );
}
