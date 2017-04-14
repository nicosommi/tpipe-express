import { Logger } from './utils/log.js'
import Promise from './promise.js'

const logger = new Logger('nicosommi.tPipeExpress')

export function requestInputMapping (input, req) {
  logger.log('tpipe-express input mapping begin')
  input.parameters = {
    path: req.params,
    query: req.query,
    headers: req.headers,
    session: req.session,
    user: req.user,
    cookies: req.cookies,
    req: req // FIXME: remove this when tpipe is mature
  }

  input[this.options.payloadKey] = req.body
  return Promise.resolve(input)
}

export function sendResponseFinallyMapping (output, input, req, res, next) {
  logger.log('tpipe-express finally mapping begin', {input, output})
  res.status(output[this.options.metaKey].status || 200).send(output[this.options.payloadKey])
  return Promise.resolve(output)
}

export function statusErrorMapping (errorOutput) {
  logger.log('tpipe-express error mapping begin')
  if (!errorOutput[this.options.metaKey].status) {
    errorOutput[this.options.metaKey].status = 500
  }
  return Promise.resolve(errorOutput)
}

export function getHandler () {
  return this.open.bind(this)
}

const defaultSet = {
  inputMappings: [requestInputMapping],
  errorMappings: [statusErrorMapping],
  finallyMappings: [sendResponseFinallyMapping],
  extraProperties: {
    getHandler
  }
}

export default defaultSet
