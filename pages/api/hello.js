export default (req, res) => {
  console.log('Testing')
  res.status(200).json({text: 'Hello'})
}