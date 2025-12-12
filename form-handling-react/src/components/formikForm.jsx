import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={values => console.log(values)}
    >
      <Form>
        <Field name="username" />
        <ErrorMessage name="username" />

        <Field name="email" />
        <ErrorMessage name="email" />

        <Field name="password" type="password" />
        <ErrorMessage name="password" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}
