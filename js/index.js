'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultText = '# Header 1\n\n## Header 2\n\n And so on!\n\nYou can use *italics* (_italics_) or **bold** (__bold__), or __*both*__ at the same time!\n\nOr even [links](https://guides.github.com/features/mastering-markdown/) and\n\n* Unordered\n - lists\n\nand\n\n1. Ordered lists!';

document.getElementById('display').innerHTML = marked(defaultText);

var InputBox = function (_React$Component) {
  _inherits(InputBox, _React$Component);

  // some code from https://facebook.github.io/react/docs/forms.html

  function InputBox(props) {
    _classCallCheck(this, InputBox);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      value: defaultText };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  InputBox.prototype.handleChange = function handleChange(event) {
    this.setState({ value: event.target.value });
    document.getElementById('display').innerHTML = marked(event.target.value);
  };

  InputBox.prototype.render = function render() {
    return React.createElement(
      'form',
      { onSubmit: this.handleSubmit },
      React.createElement('textarea', { name: 'Text1', value: this.state.value, onChange: this.handleChange })
    );
  };

  return InputBox;
}(React.Component);

ReactDOM.render(React.createElement(InputBox, null), document.getElementById("input"));

// rendering display:
// return <div dangerouslySetInnerHTML={{__html:
//    marked(this.state.value)}}></div>;