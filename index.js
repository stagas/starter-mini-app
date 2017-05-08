const starter = require('@blended/starter')

let controllers

let init = () => {
  return starter({
    swagger: '2.0',
    info: {
      title: 'Mini App'
    },
    host: 'localhost:3030',
    paths: {
      '/ping': {
        get: {
          action: 'main.ping',
          responses: {
            200: {
              description: 'Pong',
              schema: {
                parameters: {
                  body: 'string'
                }
              }
            }
          }
        }
      }
    }
  }, {
    controllers: controllers = {
      main: {
        ping(ctx) {
          ctx.body = 'pong'
        }
      }
    },
    async bootstrap(app) {
      app.controllers = controllers
    }
  }, {
    name: 'mini-app',
    static: 'public'
  })
}

module.exports = init

init().run({ port: 3030 })
