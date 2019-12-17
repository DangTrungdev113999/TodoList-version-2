const styles = theme => ({
  modal: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3),
  },
  header: {
    backgroundColor: theme.color.primary,
    color: theme.color.text,
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
  },
  icon: {
    cursor: 'pointer',
    fontSize: 20,
  },
  title: {
    color: theme.color.text,
    fontWeight: 700,
    textTransform: 'capitalize',
  },
  content: {
    padding: theme.spacing(2),
  },
});

export default styles;
