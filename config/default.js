module.exports = {
  webpack: {
    host: 'localhost', // usually either localhost or ip address of the machine you are running it from
    port: '3003', // port on which you are running it
    publicHost: 'react-sergeialimovcom.herokuapp.com', // public domain name on which you are accessing app from browser without http prefix
  },
  api: {
    /* e.g. 'http://10.20.1.111:30161'
     */
    url: 'http://hostname[:port]',
  },
};
