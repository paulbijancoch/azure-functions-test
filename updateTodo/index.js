module.exports = async function (context, req, todo) {

    const title = req.body.title;
    const completed = req.body.completed;

    context.bindings.outputDocument = todo[0];
    context.bindings.outputDocument.title = title
    context.bindings.outputDocument.completed = completed

    context.res = {
        body: {'result': 'success'}
    };
};