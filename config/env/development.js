//a set of environment configuration files that holds properties
module.exports = {
  db: 'mongodb://localhost/mean-book',
  sessionSecret: 'developmentSessionSecret',
  facebook: {
    clientID: '1061065367261191',
    clientSecret: '27831c304b199565a67a38659dae4958',
    callbackURL: 'http://localhost:3000/oauth/facebook/callback'
  }
};