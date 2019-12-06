const styles = theme => ({
  taskboad: {
    display: "flex",
    alignItems: "center"
  },
  shape: {
    background: theme.color.primary,
    color: theme.color.text,
    padding: 10,
    margin : 20,
    borderColor: theme.color.secondary,
    borderRadius: 5
  }
})

export default styles