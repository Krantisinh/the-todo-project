'use strict';
const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    await server.register(Inert);

    server.route({
        method: 'GET',
        path:'/',
        handler: (request, h) => {

            return h.file('./dist/index.html');
        }
    });

    server.route({
        method: 'GET',
        path:'/{param*}',
        handler: {
            directory: {
                path: './dist',
                listing: false
            }
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();