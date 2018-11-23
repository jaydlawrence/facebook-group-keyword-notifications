const { Facebook, FacebookApiException } = require('fb')
const config = require('./config')

const { facebook_options } = config

const fb = new Facebook(facebook_options)


fb.api('oauth/access_token', {
  client_id: config.facebook_options.appId,
  client_secret: config.facebook_options.appSecret,
  grant_type: 'client_credentials',
})
.then(
  res => {
    console.log('res', res)
    if(!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    return Promise.resolve(fb.setAccessToken(res.access_token))
  }
)
.then (
  //TODO loop through groups in config
 () => fb.api('/231231231231231223/feed')
)
.then(
  response => console.log('response', response)
)
.catch(
  error => console.log('error', error)
)


