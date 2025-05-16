import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        <h2>Name: {name}</h2>
      </div>
    );
  }
}

export default UserClass;
