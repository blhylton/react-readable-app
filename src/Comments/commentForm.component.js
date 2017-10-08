import React from 'react'
import { Field, reduxForm } from 'redux-form'

let CommentForm = props => (
  <form onSubmit={props.handleSubmit}>
    <label htmlFor="author">Author</label>
    <Field
      type="text"
      name="author"
      component="input"
    />
    <label htmlFor="body">Content</label>
    <Field
      name="body"
      component="textarea"
    />
    <Field
      type="hidden"
      name="parent"
      component="input"
    />
    <Field
      type="hidden"
      name="timestamp"
      component="input"
    />
    <Field
      type="hidden"
      name="id"
      component="input"
    />
    <button type="submit">Save</button>
  </form>
)

CommentForm = reduxForm({
  form: 'post',
  enableReinitialize: true
})(CommentForm)

export default CommentForm