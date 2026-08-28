# 王仁重律师官网

## 文件说明

- `index.html`：网站首页
- `style.css`：页面样式
- `script.js`：移动端导航交互
- `assets/`：网站图片素材
- `local-server.js`：本地预览服务

## 本地预览

安装 Node.js 后，在本目录运行：

```powershell
node local-server.js
```

然后在浏览器访问：

```text
http://127.0.0.1:4173/
```

## 部署

这是纯静态网站。将 `index.html`、`style.css`、`script.js` 和 `assets/` 上传到任意静态网站托管服务的根目录即可，例如 Vercel、Netlify、腾讯云 COS 静态网站或阿里云 OSS 静态网站托管。

`local-server.js` 仅用于本地预览，无需上传到静态托管平台。
