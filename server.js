const path = require('path');
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// 👉 Cho phép phục vụ file tĩnh trong thư mục "images"
server.use('/images', jsonServer.static(path.join(__dirname, 'images')));

// Middleware mặc định (logger, CORS, v.v.)
server.use(middlewares);

// API routes
server.use(router);

// Lắng nghe cổng
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
