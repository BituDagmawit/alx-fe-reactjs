import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const schema = Yup.object({
  username: Yup.string().required("Username required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required")
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values) => console.log(values)}
    >
      <Form>

        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" />

        <Field name="email" placeholder="Email" />
        <ErrorMessage name="email" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" />

        <button type="submit">Register</button>

      </Form>
    </Formik>
  );
}
