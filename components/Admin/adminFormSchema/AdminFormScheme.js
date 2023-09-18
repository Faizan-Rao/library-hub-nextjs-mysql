
import * as yup from "yup";

const schema = yup.object().shape({
  adminName: yup.string().max(30).required(),
  adminEmail: yup.string().max(30).required(),
  adminId: yup.number().required()
});

export default schema