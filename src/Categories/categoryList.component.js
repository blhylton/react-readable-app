import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCategories } from './actions'

class CategoryList extends Component {
  componentDidMount = () => { this.props.getCategories() }
  render() {
    const categories = this.props.categories
    if (categories.length === 0) {
      return <p>There are no categories available :(</p>
    }

    return (
      <ul className="category-list">
        {categories.map((category) => (
          <li key={category.name}>
            {category.name}
          </li>
        ))}
      </ul>
    )
  }
}


const mapStateToProps = (state) => (state.categories)

const mapDispatchToProps = (dispatch) => ({
  getCategories: (data) => dispatch(fetchCategories(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList)