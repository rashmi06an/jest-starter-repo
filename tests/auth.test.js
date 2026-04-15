const { registerUser, loginUser } = require("../src/services/authService.js"); 
// path apne folder structure ke according adjust kar lena

describe("Register User Tests", () => {

  test("should fail if user data is missing", () => {
    expect(registerUser(null)).toEqual({
      success: false,
      message: "User data is required",
    });
  });

  test("should fail if name is empty", () => {
    expect(registerUser({
      name: "",
      email: "test@test.com",
      password: "Password123"
    })).toEqual({
      success: false,
      message: "Name is required",
    });
  });

  test("should fail for invalid email", () => {
    expect(registerUser({
      name: "Rashmi",
      email: "invalid-email",
      password: "Password123"
    })).toEqual({
      success: false,
      message: "Invalid email",
    });
  });

  test("should fail for weak password", () => {
    expect(registerUser({
      name: "Rashmi",
      email: "test@test.com",
      password: "123"
    })).toEqual({
      success: false,
      message: "Password is not strong enough",
    });
  });

  test("should register successfully with valid data", () => {
    expect(registerUser({
      name: "Rashmi",
      email: "test@test.com",
      password: "Password123"
    })).toEqual({
      success: true,
      message: "User registered successfully",
    });
  });

});



describe("Login User Tests", () => {

  test("should fail for invalid email format", () => {
    expect(loginUser("wrong-email", "Password123")).toEqual({
      success: false,
      message: "Invalid email format",
    });
  });

  test("should fail if password is empty", () => {
    expect(loginUser("student@demo.com", "")).toEqual({
      success: false,
      message: "Password is required",
    });
  });

  test("should fail for wrong credentials", () => {
    expect(loginUser("student@demo.com", "WrongPass")).toEqual({
      success: false,
      message: "Invalid credentials",
    });
  });

  test("should login successfully with correct credentials", () => {
    expect(loginUser("student@demo.com", "Password123")).toEqual({
      success: true,
      message: "Login successful",
    });
  });

});