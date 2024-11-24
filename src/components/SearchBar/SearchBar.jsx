import { Field, Form, Formik } from "formik";
const SearchBar = ({ onChangeQuery }) => {
  const initialValues = {
    query: "",
  };
  const handleSubmit = (values) => {
    console.log(values);

    onChangeQuery(values.query);
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" placeholder="Search images and photos" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
