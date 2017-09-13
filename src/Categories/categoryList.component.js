import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from './actions'
import { push } from 'react-router-redux'

class CategoryList extends Component {
  componentDidMount = () => { this.props.getCategories() }
  render() {
    const categories = this.props.categories
    if (categories.length === 0) {
      return <p>There are no categories available :(</p>
    }

    return (
      <div className="category-list">
        <a href="" onClick={() => this.props.push('/')}>All</a>
        {categories.map((category) => (
          <a href="" onClick={() => this.props.push(`/category/${category.name}`)} key={category.name}>
            {category.name}
          </a>
        ))}
      </div>
    )
  }
}


const mapStateToProps = (state) => (state.categories)

const mapDispatchToProps = (dispatch) => ({
  getCategories: (data) => dispatch(fetchCategories(data)),
  push: (url) => dispatch(push(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)