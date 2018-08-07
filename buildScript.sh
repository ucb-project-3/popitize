# build script for aws deployment

npm install;
npm run build;
rm -rf node_modules;
npm install --only=production;
npm run start;