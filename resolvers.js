export default {
    Query: {
        allModels: async (parent, args, { MyCustomModel }) => {
            // { _id: 123123, name: "whatever"}
            const myCustomModels = await MyCustomModel.find();

            return myCustomModels.map((x) => {
                x._id = x._id.toString();

                return x;
            });
        },
    },
    Mutation: {
        createCustomModel: async (parent, args, { MyCustomModel }) => {
            // { _id: 123123, name: "whatever"}
            const myCustomModel = await new MyCustomModel(args).save();

            myCustomModel._id = myCustomModel._id.toString();

            return myCustomModel;
        },
    },
};
