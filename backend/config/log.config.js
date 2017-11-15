/**
 * @Date:   2017-11-15T13:24:57+08:00
 * @Last modified time: 2017-11-15T14:07:04+08:00
 */
import path from 'path'
const errorLogPath = path.join(__dirname, '..', 'logs/error.log')
const httpLogPath = path.join(__dirname, '..', 'logs/http.log')
const appLogPath = path.join(__dirname, '..', 'logs/app.log')
const config = {
  appenders: {
    access: {
      type: 'dateFile',
      filename: httpLogPath,
      pattern: '-yyyy-MM-dd',
      category: 'http'
    },
    app: {
      type: 'file',
      filename: appLogPath,
      maxLogSize: 10485760,
      numBackups: 3
    },
    errorFile: {
      type: 'file',
      filename: errorLogPath
    },
    errors: {
      type: 'logLevelFilter',
      level: 'error',
      appender: 'errorFile'
    }
  },
  categories: {
    default: {
      appenders: [
        'app', 'errors'
      ],
      level: 'info'
    },
    http: {
      appenders: ['access'],
      level: 'info'
    }
  }
}
export default config
