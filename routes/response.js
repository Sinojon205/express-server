module.exports = (servers, server,) => {
    return {
        timeStamp: Date.now(),
        statusCode: 200,
        status: 'OK',
        message: 'Server retrieved',
        developerMessage: '',
        data: { servers, server }
    }
}
