import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from './actions'
import { push } from 'react-router-redux'

class CategoryList extends Component {
  componentDidMount = () => { this.props.getCategories() }
  render() {
    const categories = this.props.categories
    return (
      <div className="category-list">
        <a href="" onClick={() => this.props.push('/')}>All</a>
        {categories.map((category) => (
          <span key={category.name}> | <a href="" onClick={() => this.props.push(`/category/${category.name}`)}>
            {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
          </a></span>
        ))}
      </div>
    )
  }
}


const mapStateToProps = (state) => (state.categories)

const mapDispatchToProps = (dispatch) => ({
  getCategories: () => dispatch(fetchCategories()),
  push: (url) => dispatch(push(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)