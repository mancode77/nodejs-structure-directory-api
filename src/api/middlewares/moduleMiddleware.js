import jwt from 'jsonwebtoken'
import { config } from '../../configs'

/**
 * @description Menangani Token dari header HTTP
 * @param {Object} req Object request header HTTP
 * @returns {*} Jika true akan mengembalikan string token, jika false mengembalikan null  
 */
const getTokenFromHeader = req => {
  if (
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token') ||
    (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }

  return null
}

export const middlewareAuth = jwt({
  secret: config.jwtSecret,
  algorithms: [config.jwtAlgorithm],
  userProperty: 'token',
  getToken: getTokenFromHeader,
})