import LoginProvider from "./LoginProvider";

const AppProvider = ({ children }) => {
  return <LoginProvider>{children}</LoginProvider>;
};

export default AppProvider;
