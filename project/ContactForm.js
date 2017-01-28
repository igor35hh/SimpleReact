var ContactForm = React.createClass({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.object.isRequired,
    onSubmit: React.PropTypes.object.isRequired,
  },

  onNameChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {name: e.target.value}));
  },

  onEmailChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {email: e.target.value}));
  },

  onDescriptionChange: function(e) {
    this.props.onChange(Object.assign({}, this.props.value, {description: e.target.value}));
  },

  onSubmit: function(e) {
    e.preventDefault();
    this.props.onSubmit();
  },

  componentDidUpdate: function(prevProps) {
    var value = this.props.value;
    var prevValue = prevProps.value;

    if (this.isMounted && value.errors && value.errors != prevValue.errors) {
      if (value.errors.name) {
        this.refs.name.focus();
      }
      else if (value.errors.email) {
        this.refs.email.focus();
      }
    }
  },

  render:function() {
    var oldContact = this.props.value;
    var onChange = this.props.onChange;
    var errors = this.props.value.errors || {};

    return (
      React.createElement('form', {onSubmit: this.onSubmit, className: 'ContactForm', noValidate: true},
        React.createElement('input', 
          {type: 'text', className: errors.name && 'ContactForm-error', 
          placeholder: 'Name (required)', value: this.props.value.name,
            onChange: this.onNameChange, ref: 'name', autoFocus: true,
        }),
        React.createElement('input', 
          {type: 'email', className: errors.email && 'ContactForm-error',
          placeholder: 'Email', value: this.props.value.email,
            onChange: this.onEmailChange, ref: 'email',
        }),
        React.createElement('textarea', 
          {placeholder: 'Description', value: this.props.value.description,
           onChange: this.onDescriptionChange, 
        }),
        React.createElement('button', {type: 'submit'}, "Add Contact")
      )
    )
  },
});