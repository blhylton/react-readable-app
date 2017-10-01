import React from 'react'
import { Field, reduxForm } from 'redux-form'



let PostForm = props => (
  <form onSubmit={props.handleSubmit}>
    <label htmlFor="title">Title</label>
    <Field
      type="text"
      name="title"
      component="input"
    />
    <label htmlFor="author">Author</label>
    <Field
      type="text"
      name="author"
      component="input"
    />
    <label htmlFor="body">Body</label>
    <Field
      name="body"
      component="textarea"
    />
    <label htmlFor="category">Category</label>
    <Field name="category" component="select">
      <option></option>
      <option value="react">React</option>
      <option value="redux">Redux</option>
      <option value="udacity">Udacity</option>
    </Field>
    <Field
      type="hidden"
      name="id"
      component="input"
    />
    <Field
      type="hidden"
      name="timestamp"
      component="input"
    />
    <button type="submit">Save</button>
  </form>
)

PostForm = reduxForm({
  form: 'post',
  enableReinitialize: true
})(PostForm)

export default PostForm