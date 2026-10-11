const http = require('http');
const MARKER = 'E';
const body = () => JSON.stringify({
  ok: true, marker: MARKER,
  railway_git_commit_sha: process.env.RAILWAY_GIT_COMMIT_SHA || null,
  railway_git_branch: process.env.RAILWAY_GIT_BRANCH || null,
  railway_deployment_id: process.env.RAILWAY_DEPLOYMENT_ID || null,
  railway_environment: process.env.RAILWAY_ENVIRONMENT_NAME || null,
  studio_os_commit_sha: process.env.STUDIO_OS_COMMIT_SHA || null,
  has_database_url: Boolean(process.env.DATABASE_URL),
  database_url_host: (process.env.DATABASE_URL || '').replace(/^[a-z]+:\/\/[^@]*@/, '').split('/')[0] || null,
});
http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'application/json'});
  res.end(body());
}).listen(process.env.PORT || 3000);
