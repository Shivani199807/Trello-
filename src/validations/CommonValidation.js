const validations = {
  NAME: {
    required: "Please enter name",
    pattern: {
      value: /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:[._][a-zA-Z\d])*)+$/,
      message: "Please enter a valid username",
    },
  },
  EMAIL: {
    required: {
      value: true,
      message: "Please enter email",
    },
    maxLength: {
      value: 60,
      message: "Email address cannot be greater than 60",
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Please check email and try again.",
    },
    validate: (value) => {
      if (value.includes("  ")) return "Please check email and try again.";
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i.test(value))
        return " Please check email and try again.";
      if (
        /careers@|employment@|helpdesk@|enquiries@|mailbox@|mail@|noreplies@|no-reply@|noreply@|unsubscribe@/gi.test(
          value
        )
      ) {
        return "We've noticed that you've entered a generic email address .We need a valid email ";
      }
    },
  },

  PASSWORD: {
    required: "Please enter password",
    minLength: { value: 8, message: "password is more than 8 chars" },
  },
};
export default validations;
