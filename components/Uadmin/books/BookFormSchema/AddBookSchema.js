import * as yup from "yup";

const schema = yup.object().shape({
  bookTitle: yup.string().max(100).required(),
  bookDescription: yup.string().max(400).required(),
  bookPublisher: yup.string().max(100).required(),
  bookVersion: yup.string().max(20).required(),
  
  catId: yup.number().required()
});

export default schema