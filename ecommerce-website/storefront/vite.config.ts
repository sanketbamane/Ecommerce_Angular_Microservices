server: {
  port: 5173,
  proxy: {
    "/api": {
      target: "http://gateway:8080",
      changeOrigin: true,
      secure: false
    }
  }
}
