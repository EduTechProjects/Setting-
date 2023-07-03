module.exports = {
  apps: [
    {
      script: 'Backend/server.js',
      watch: '.'
    },
    {
      script: 'FrontEnd/build/service-worker.js', // 수정된 부분
      watch: ['FrontEnd/build/service-worker.js'] // 수정된 부분
    }
  ],
  deploy: {
    production: {
      user: 'SSH_USERNAME',
      host: 'SSH_HOSTMACHINE',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};

