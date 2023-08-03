const clientError = (req, res, next) => {
  res.status(404).json({
    error: true,
    message: 'Page Not Found',
  });

  next();
};

module.exports = clientError;
