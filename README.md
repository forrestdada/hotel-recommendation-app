# Hotel Recommendation App

## 项目简介
该项目是一个简单的酒店推荐应用程序，用户可以输入关键词以获取推荐的酒店列表。应用程序使用JavaScript构建，后端使用Node.js和Express框架，数据存储在MySQL数据库中。

## 技术栈
- **前端**: HTML, CSS, JavaScript
- **后端**: Node.js, Express
- **数据库**: MySQL

## 文件结构
```
hotel-recommendation-app
├── src
│   ├── server.js
│   ├── db
│   │   └── mysql.js
│   ├── routes
│   │   └── hotels.js
│   ├── controllers
│   │   └── hotelsController.js
│   └── public
│       ├── index.html
│       ├── styles.css
│       └── main.js
├── package.json
├── README.md
```

## 安装与运行
1. 克隆该项目到本地:
   ```
   git clone <repository-url>
   ```
2. 进入项目目录:
   ```
   cd hotel-recommendation-app
   ```
3. 安装依赖:
   ```
   npm install
   ```
4. 配置数据库连接:
   - 在 `src/db/mysql.js` 中设置数据库连接信息。
5. 启动服务器:
   ```
   node src/server.js
   ```
6. 打开浏览器并访问 `http://localhost:3000`。

## 使用说明
- 在输入框中输入关键词，然后点击“搜索”按钮。
- 系统将返回与关键词相关的推荐酒店列表。

## 贡献
欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证
该项目采用MIT许可证。