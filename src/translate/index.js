import es from './es'
import en from './en-US'
import IntlMessageFormat from 'intl-messageformat'

if (!window.Intl) {
  window.Intl = require('intl')
  require('intl/locale-data/jsonp/en-US.js')
  require('intl/locale-data/jsonp/es.js')
}

var IntlRelativeFormat = window.IntlRelativeFormat = require('intl-relativeformat')
require('intl-relativeformat/dist/locale-data/en.js')
require('intl-relativeformat/dist/locale-data/es.js')

var MESSAGES = {},
locale = 'es'

MESSAGES.es = es
MESSAGES['en-US'] = en


module.exports = {
  message: function (text, opts) {
    opts = opts || {}
    let msg = new IntlMessageFormat(MESSAGES[locale][text], locale, null)
    return msg.format(opts)
  },
  date: new IntlRelativeFormat(locale)
}
