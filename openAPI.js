```javascript
// This is a simple example of an OpenAPI specification.
// You will need to replace this with your actual OpenAPI specification.

const openAPI = {
    openapi: '3.0.0',
    info: {
        title: 'My API',
        version: '1.0.0',
    },
    paths: {
        '/action1': {
            get: {
                operationId: 'getAction1',
                x-openai-isConsequential: false,
            },
            post: {
                operationId: 'postAction1',
                x-openai-isConsequential: true,
            },
        },
        '/action2': {
            get: {
                operationId: 'getAction2',
                x-openai-isConsequential: false,
            },
            post: {
                operationId: 'postAction2',
                x-openai-isConsequential: true,
            },
        },
        '/plugin1': {
            get: {
                operationId: 'getPlugin1',
                x-openai-isConsequential: false,
            },
            post: {
                operationId: 'postPlugin1',
                x-openai-isConsequential: true,
            },
        },
        '/plugin2': {
            get: {
                operationId: 'getPlugin2',
                x-openai-isConsequential: false,
            },
            post: {
                operationId: 'postPlugin2',
                x-openai-isConsequential: true,
            },
        },
    },
};

module.exports = openAPI;
```
