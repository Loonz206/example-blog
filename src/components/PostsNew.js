import React from "react";
import { Field, reduxForm } from "redux-form";

const PostNew = (props) => {
  const { handleSubmit } = props;

  const onSubmit = (values) => console.log(values);

  const errorMessage = (field) => {
    if (field.meta.error) {
      return (
        <div className="ui pointing red basic label">{field.meta.error}</div>
      );
    }
  };

  const renderField = (field) => {
    return (
      <div className="field">
        <label htmlFor="">{field.label}</label>
        <input type="text" {...field.input} />
        {field.meta.touched ? errorMessage(field) : ""}
      </div>
    );
  };
  return (
    <div className="ui container" style={{ margin: "20px auto" }}>
      <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
        <Field name="title" label="Title" component={renderField} />
        <Field name="categories" label="Categories" component={renderField} />
        <Field name="content" label="Content" component={renderField} />
        <button type="submit" className="ui button primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const validate = (values) => {
  const errors = {};
  // validate the inputs
  if (!values.title) {
    errors.title = `Enter a title!`;
  }
  if (!values.categories) {
    errors.categories = `Enter some categories!`;
  }
  if (!values.content) {
    errors.content = `Enter some content!`;
  }
  // if errors is empty its ok to submit
  // errors have any properties redux assumes invalid
  return errors;
};

export default reduxForm({
  validate,
  form: "PostsNewForm",
})(PostNew);
