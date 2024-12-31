import React, { useRef, useState, useEffect } from "react";
import { Form, Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faCheck,
  faInfoCircle,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const TempRegister = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    console.log(validPwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, validPwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>

          <h1>Register</h1>
          <Form>
            <Form.Group>
              {/* <Form.Group controlId="username"> */}
              <Form.Label controlId="username">
                {" "}
                Username:
                <span className={validName ? "valid" : "d-none"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validName || !user ? "d-none" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </Form.Label>
              <Form.Control
                type="text"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <div
                id="uidnote"
                className={`position-absolute ${
                  userFocus && user && !validName ? "instructions" : ""
                }`}
                style={{
                  left: userFocus && user && !validName ? "auto" : "-9999px",
                }}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                4 to 24 characters.
                <br />
                Must begin with a letter.
                <br />
                Letters, numbers, underscores, hyphens allowed.
              </div>
              {/* </Form.Group> */}

              {/* <Form.Group controlId="password"> */}
              <Form.Label controlId="password">
                {" "}
                Password:
                <span className={validPwd ? "valid" : "d-none"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span className={validPwd || !pwd ? "d-none" : "invalid"}>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPwd(e.target.value)}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
              <div
                id="pwdnote"
                className={`position-absolute ${
                  pwdFocus && !validPwd ? "instructions" : ""
                }`}
                style={{
                  left: pwdFocus && !validPwd ? "auto" : "-9999px",
                }}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                8 to 24 characters.
                <br />
                Must include uppercase and lowercase letters, a number and a
                special character.
                <br />
                Allowed special characters:
                <span aria-label="exclamation mark">!</span>
                <span aria-label="at symbol">@</span>
                <span aria-label="hashtag">#</span>
                <span aria-label="dollar sign">$</span>
                <span aria-label="percent">%</span>
              </div>
              {/* </Form.Group> */}

              {/* <Form.Group controlId="confirm_pwd"> */}
              <Form.Label controlId="confirm_pwd">
                {" "}
                Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "d-none"}>
                  <FontAwesomeIcon icon={faCheck} />
                </span>
                <span
                  className={validMatch || !matchPwd ? "d-none" : "invalid"}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setMatchPwd(e.target.value)}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <div
                id="confirmnote"
                className={`position-absolute ${
                  matchFocus && !validMatch ? "instructions" : ""
                }`}
                style={{
                  left: matchFocus && !validMatch ? "auto" : "-9999px",
                }}
              >
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </div>

              <Button
                type="submit"
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sign Up
              </Button>
            </Form.Group>
          </Form>

          <div>
            Already registered? <br />
            <Link to="/login">Sign In</Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TempRegister;
