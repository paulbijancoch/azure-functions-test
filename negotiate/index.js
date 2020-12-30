module.exports = function (context, _req, connectionInfo) {
    context.res = { body: connectionInfo }
    context.done()
  }