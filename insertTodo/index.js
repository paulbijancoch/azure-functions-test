module.exports = async function (context, req) {

    const title = req.body.title; 
    const completed = req.body.completed; 

    if (title && completed != null) {

        context.bindings.outputDocument = req.body;
        context.res = {
            body: {'result': 'success'}
        };
    }else{
        context.res = {
            status: 400,
            body: {'result': 'error'}
        };
    }
};