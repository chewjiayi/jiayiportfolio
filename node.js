const fs = require("fs");
const fetch = require("node-fetch");

fetch("https://api.remove.bg/v1.0/removebg", {
  method: "POST",
  headers: {
    "X-Api-Key": "YOUR_API_KEY",
  },
  body: JSON.stringify({
    image_url: "https://your-image-url.com/character.png",
    size: "auto"
  })
})
.then(res => res.buffer())
.then(buffer => fs.writeFileSync("character.png", buffer))
.catch(err => console.error(err));