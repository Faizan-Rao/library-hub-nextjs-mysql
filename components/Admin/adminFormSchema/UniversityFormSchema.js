
import * as yup from "yup";

const schema = yup.object().shape({
  universityName: yup.string().max(100).required()
});

export default schema