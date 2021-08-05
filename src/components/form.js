import React from "react";
import { Field, reduxForm } from "redux-form";

function Form(props) {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div class="ui center aligned basic segment">
        <div class="ui fluid action input">
          <Field
            name="SearchSong"
            component="input"
            type="text"
            placeholder="Search a song...."
          />
          <button
            class="ui primary button"
            type="submit"
            disabled={pristine || submitting}
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default reduxForm({
  form: "Form"
})(Form);
