
import * as yup from "yup";

const schema = yup.object().shape({
  userEmail: yup.string().email().required(),
  userPassword: yup.string().required(),
});

export default schema