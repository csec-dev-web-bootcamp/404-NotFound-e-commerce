export function exceptionHandler(err, req, res, next) {
  let message;
  let details;
let statusCode = 500
  try {
    details = JSON.parse(err.message);
    message = details?.message;
    statusCode = err.statusCode
  } catch (error) {
    message = err.message;
  }

  res.status(statusCode).json({
    error: true,
    statusCode: statusCode,
    message: message || 'Something went wrong!',
    details: details || undefined,
    timestamp: new Date().toISOString(),
    path: req.url,
  });
}
