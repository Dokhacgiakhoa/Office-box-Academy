const fs = require('fs');
const https = require('https');
const path = require('path');

const tools = [
  { id: "chatgpt", domain: "chatgpt.com" },
  { id: "claude", domain: "claude.ai" },
  { id: "gemini", domain: "gemini.google.com" },
  { id: "grok", domain: "x.ai" },
  { id: "deepseek", domain: "deepseek.com" },
  { id: "bananaa", domain: "banana.video" }, 
  { id: "canva-ai", domain: "canva.com" },
  { id: "veo3", domain: "deepmind.google" },
  { id: "capcut", domain: "capcut.com" },
  { id: "figma", domain: "figma.com" },
  { id: "cursor", domain: "cursor.com" },
  { id: "googlestudio", domain: "aistudio.google.com" },
  { id: "stitch", domain: "stitch.com" }
];

const dir = path.join(__dirname, 'public', 'logos');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

tools.forEach(tool => {
  // Using Clearbit Logo API which is often better for high-res logos, fallback to gstatic
  // Actually, clearbit requires authentication now or sometimes blocks. We'll use Google favicon.
  const url = `https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://${tool.domain}&size=128`;
  const dest = path.join(dir, `${tool.id}.png`);
  
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close());
    }
  }).on('error', (err) => console.log(`Error downloading ${tool.id}:`, err.message));
});

console.log("Logos downloading...");
