module.exports = {
  // Secret key for JWT signing and encryption
  secret: 'super secret passphrase',
  // Database connection information
  database: 'mongodb://feedbackuser:feedbackpassword@ds013405.mlab.com:13405/myfeedbackdb',
  // Setting port for server
  port: 5000,
  // Configuring Mailgun API for sending transactional email
  mailgun_priv_key: 'mailgun private key here',
  // Configuring Mailgun domain for sending transactional email
  mailgun_domain: 'mailgun domain here',
  test_port: 3001,
  test_db: 'mern-starter-test',
  test_env: 'test'
};
