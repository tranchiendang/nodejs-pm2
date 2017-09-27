module.exports = {
  apps : [{
    name   : "socket",
    script : "./socket/token_new.js",
    node_args: ["--max-old-space-size=5120"],
    autorestart: true,
    timestamp: "YYYY-MM-DD HH:mm Z",
    exec_mode: "fork",
    env: {
        "ENV": "pro"
    }
  }]
}
