module.exports = async function (context, documents) {
    const messages = documents.map(document => {
        return {
            target: 'update',
            arguments: [document]
        }
    });
    context.bindings.signalRMessages = messages
}