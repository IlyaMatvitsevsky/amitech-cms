module.exports = () => {
  return {
    graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 20,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
  };
};
