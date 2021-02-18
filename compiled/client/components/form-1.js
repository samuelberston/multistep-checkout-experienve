class Form_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('submit');
    event.preventDefault();
    this.props.postUser();
    this.setState({
      name: '',
      email: '',
      password: ''
    });
  }

  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "form-1"
    }, /*#__PURE__*/React.createElement("h1", null, "Sign Up"), /*#__PURE__*/React.createElement("form", {
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/React.createElement("p", null, "Enter your account information"), /*#__PURE__*/React.createElement("div", {
      className: "name"
    }, /*#__PURE__*/React.createElement("label", null, "Name", /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Full name",
      value: this.state.name,
      onChange: this.handleChange,
      required: true
    }))), /*#__PURE__*/React.createElement("div", {
      className: "email"
    }, /*#__PURE__*/React.createElement("label", null, "Email", /*#__PURE__*/React.createElement("input", {
      type: "email",
      name: "email",
      placeholder: "Email address",
      value: this.state.email,
      onChange: this.handleChange,
      required: true
    }))), /*#__PURE__*/React.createElement("div", {
      className: "password"
    }, /*#__PURE__*/React.createElement("label", null, "Password", /*#__PURE__*/React.createElement("input", {
      type: "password",
      name: "password",
      placeholder: "password",
      value: this.state.password,
      onChange: this.handleChange,
      required: true
    }))), /*#__PURE__*/React.createElement("button", {
      className: "nav"
    }, "Submit")));
  }

}

export default Form_1;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NsaWVudC9jb21wb25lbnRzL2Zvcm0tMS5qc3giXSwibmFtZXMiOlsiRm9ybV8xIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJuYW1lIiwiZW1haWwiLCJwYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJwb3N0VXNlciIsInJlbmRlciJdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsTUFBTixTQUFxQkMsS0FBSyxDQUFDQyxTQUEzQixDQUFxQztBQUNuQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsRUFESztBQUVYQyxNQUFBQSxLQUFLLEVBQUUsRUFGSTtBQUdYQyxNQUFBQSxRQUFRLEVBQUU7QUFIQyxLQUFiO0FBS0EsU0FBS0MsWUFBTCxHQUFvQixLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFwQjtBQUNBLFNBQUtDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkQsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBcEI7QUFDRDs7QUFFREQsRUFBQUEsWUFBWSxDQUFDRyxLQUFELEVBQVE7QUFDbEIsU0FBS0MsUUFBTCxDQUFjO0FBQ1osT0FBQ0QsS0FBSyxDQUFDRSxNQUFOLENBQWFSLElBQWQsR0FBcUJNLEtBQUssQ0FBQ0UsTUFBTixDQUFhQztBQUR0QixLQUFkO0FBR0Q7O0FBRURKLEVBQUFBLFlBQVksQ0FBQ0MsS0FBRCxFQUFRO0FBQ2xCSSxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FMLElBQUFBLEtBQUssQ0FBQ00sY0FBTjtBQUNBLFNBQUtkLEtBQUwsQ0FBV2UsUUFBWDtBQUNBLFNBQUtOLFFBQUwsQ0FBYztBQUNaUCxNQUFBQSxJQUFJLEVBQUUsRUFETTtBQUVaQyxNQUFBQSxLQUFLLEVBQUUsRUFGSztBQUdaQyxNQUFBQSxRQUFRLEVBQUU7QUFIRSxLQUFkO0FBS0Q7O0FBRURZLEVBQUFBLE1BQU0sR0FBRztBQUNQLHdCQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSwwQ0FERixlQUVFO0FBQU0sTUFBQSxRQUFRLEVBQUUsS0FBS1Q7QUFBckIsb0JBQ0EsZ0VBREEsZUFFRTtBQUFLLE1BQUEsU0FBUyxFQUFDO0FBQWYsb0JBQ0Usd0RBRUU7QUFBTyxNQUFBLElBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUEsSUFBSSxFQUFDLE1BQXhCO0FBQThCLE1BQUEsRUFBRSxFQUFDLE1BQWpDO0FBQXdDLE1BQUEsV0FBVyxFQUFDLFdBQXBEO0FBQWdFLE1BQUEsS0FBSyxFQUFFLEtBQUtOLEtBQUwsQ0FBV0MsSUFBbEY7QUFBdUYsTUFBQSxRQUFRLEVBQUUsS0FBS0csWUFBdEc7QUFBb0gsTUFBQSxRQUFRO0FBQTVILE1BRkYsQ0FERixDQUZGLGVBUUU7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLG9CQUNFLHlEQUVFO0FBQU8sTUFBQSxJQUFJLEVBQUMsT0FBWjtBQUFvQixNQUFBLElBQUksRUFBQyxPQUF6QjtBQUFpQyxNQUFBLFdBQVcsRUFBQyxlQUE3QztBQUE2RCxNQUFBLEtBQUssRUFBRSxLQUFLSixLQUFMLENBQVdFLEtBQS9FO0FBQXNGLE1BQUEsUUFBUSxFQUFFLEtBQUtFLFlBQXJHO0FBQW1ILE1BQUEsUUFBUTtBQUEzSCxNQUZGLENBREYsQ0FSRixlQWNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixvQkFDRSw0REFFRTtBQUFPLE1BQUEsSUFBSSxFQUFDLFVBQVo7QUFBdUIsTUFBQSxJQUFJLEVBQUMsVUFBNUI7QUFBdUMsTUFBQSxXQUFXLEVBQUMsVUFBbkQ7QUFBOEQsTUFBQSxLQUFLLEVBQUUsS0FBS0osS0FBTCxDQUFXRyxRQUFoRjtBQUEwRixNQUFBLFFBQVEsRUFBRSxLQUFLQyxZQUF6RztBQUF1SCxNQUFBLFFBQVE7QUFBL0gsTUFGRixDQURGLENBZEYsZUFvQkE7QUFBUSxNQUFBLFNBQVMsRUFBQztBQUFsQixnQkFwQkEsQ0FGRixDQURGO0FBMkJEOztBQXpEa0M7O0FBNERyQyxlQUFlVCxNQUFmIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgRm9ybV8xIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWVcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMucHJvcHMucG9zdFVzZXIoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgZW1haWw6ICcnLFxuICAgICAgcGFzc3dvcmQ6ICcnXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLTFcIj5cbiAgICAgICAgPGgxPlNpZ24gVXA8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICA8cD5FbnRlciB5b3VyIGFjY291bnQgaW5mb3JtYXRpb248L3A+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lXCI+XG4gICAgICAgICAgICA8bGFiZWwgPlxuICAgICAgICAgICAgICBOYW1lXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJuYW1lXCJpZD1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9b25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsXCI+XG4gICAgICAgICAgICA8bGFiZWwgPlxuICAgICAgICAgICAgICBFbWFpbFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBhZGRyZXNzXCIgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYXNzd29yZFwiPlxuICAgICAgICAgICAgPGxhYmVsID5cbiAgICAgICAgICAgICAgUGFzc3dvcmRcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm1fMTsiXX0=