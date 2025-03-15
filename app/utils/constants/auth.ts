export type SignInPageTypeography = {
  header: string;
  query: string;
  email: string;
  password: string;
  rememberMe: string;
  forgotPassword: string;
  login: string;
  signUp: string;
  thirdPartyTitle: string;
  google: string;
  microsoft: string;
};

export type SignUpPageTypeography = {
  header: string;
  query: string;
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  rememberMe: string;
  forgotPassword: string;
  login: string;
  signUp: string;
  createAccount: string;
  thirdPartyTitle: string;
  google: string;
  microsoft: string;
};

export const signInPageTypeography: SignInPageTypeography = {
  header: "Welcome back",
  query: "Don't have an account?",
  email: "Email address",
  password: "Password",
  rememberMe: "Remember me",
  forgotPassword: "Forgot your password?",
  login: "Sign in",
  signUp: "Sign up",
  thirdPartyTitle: "Or continue with",
  google: "Google",
  microsoft: "Microsoft",
};

export const signUpPageTypeography: SignUpPageTypeography = {
  header: "Create your account",
  query: "Already have an account?",
  fullName: "Full name",
  email: "Email address",
  password: "Password",
  rememberMe: "Remember me",
  forgotPassword: "Forgot your password?",
  confirmPassword: "Confirm password",
  login: "Sign in",
  signUp: "Sign up",
  createAccount: "Create Account",
  thirdPartyTitle: "Or continue with",
  google: "Google",
  microsoft: "Microsoft",
};
