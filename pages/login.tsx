import cx from "classnames";
import "@fontsource/roboto/400.css";
import Button from "@mui/material/Button";
import styles from "../styles/Signin.module.css";
import { Paper } from "@mui/material";
import React, { SyntheticEvent, useState } from "react";
import Layout from "../layouts/Layout";
import { useRouter } from "next/router";
const Login = ({omnia}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const omnia='hello world';

    await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body:JSON.stringify({
        email,
        password,
      }),
    }).then((res) => res.json()).then((data) =>{
      if(data.status === "success"){
        localStorage.setItem('token', data.authorization.token);
                router.push('/');
      }
    });
  };

  return (
    <Layout>
      <Paper sx={{ background: "#8A24C4", width: "500px", margin: "auto" }}>
        <main className={cx(styles["form-signin"], "text-center", "mt-5")}>
          <form onSubmit={submit}>
            <h1 className="h3 mb-3 fw-bold text-white">Please sign in</h1>
            <div className="form-floating">
              <input
                type="email"
                className="form-control"
                id="email-input"
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="email-input">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password-input"
                placeholder="Password"
                style={{ marginTop: "10px" }}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password-input">Password</label>
            </div>

            <Button
              variant="contained"
              type="submit"
              color="info"
              sx={{
                background: "#EB439B",
              }}
            >
              {" "}
              Sign in
            </Button>
          </form>
        </main>
        <div>
         omnia={omnia}
      </div>
      </Paper>
    </Layout>
  );
};

export default Login;
