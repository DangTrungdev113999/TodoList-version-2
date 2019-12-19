const validate = value => {
  const errors = {};
  const { title } = value;
  if (!title) {
    errors.title = 'Yêu cầu nhập tiêu đề';
  } else if (title.length < 3) {
    errors.title = 'Tiêu đề phải nhiều hơn 3 kí tự';
  }

  return errors;
};

export default validate;
