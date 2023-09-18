
import * as yup from "yup";

const schema = yup.object().shape({
  userName: yup.string().max(20).required(),
  userEmail: yup.string().email().required(),
  userPassword: yup.string().required(),
  userCPassword: yup.string().required(),
  uniId: yup.number().required()
});

export default schema