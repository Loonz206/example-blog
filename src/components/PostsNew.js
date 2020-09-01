import React from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPost } from "../actions/index";

const PostNew = (props) => {
  const { handleSubmit, history } = props;

  const onSubmit = (values) => {
    // this is where the action creator should be fired
    createPost(values, () => {
      history.push("/");
    });
  };

  const errorMessage = (field) => {
    const {
      meta: { error },
    } = field;
    if (error) {
      return <div className="ui pointing red basic label">{error}</div>;
    }
  };

  const renderField = (field) => {
    // not a fan of destructoring this too deep
    const {
      label,
      meta: { touched, error },
    } = field;
    const className = `field ${touched && error ? `error` : ""}`;
    return (
      <div className={className}>
        <label htmlFor="">{label}</label>
        <input type="text" {...field.input} />
        {touched ? errorMessage(field) : ""}
      </div>
    );
  };
  return (
    <div>
      <h1>Create Post</h1>
      <form className="ui form" onSubmit={handleSubmit(onSubmit)}>
        <Field name="title" label="Title" component={renderField} />
        <Field name="categories" label="Categories" component={renderField} />
        <Field name="content" label="Content" component={renderField} />
        <Link
          to="/"
          className="ui button danger"
          style={{ marginRight: "1em" }}
        >
          Cancel
        </Link>
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
})(connect(null, { createPost })(PostNew));
