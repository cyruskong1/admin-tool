import React, { Component } from "react";

class CoursesPage extends Component {
  state = {
    course: {
      title: ""
    }
  };

  handleChange = event => {
    const course = Object.assign({}, this.state.course.title, {
      title: event.target.value
    });
    this.setState({ course });
  };

  handleSubmit = event => {
    event.preventDefault();
    alert(this.state.course.title);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Courses</h2>
        <h3>Add Course</h3>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.course.title}
        />
        <button type="submit" value="Save">
          Save
        </button>
      </form>
    );
  }
}

export default CoursesPage;
