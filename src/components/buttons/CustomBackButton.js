import { HeaderBackButton } from "@react-navigation/elements";

const CustomBackButton = ({ navigation, route }) => {
  return (
    <HeaderBackButton tintColor="#000000" onPress={() => navigation.goBack()} />
  );
};

export default CustomBackButton;
