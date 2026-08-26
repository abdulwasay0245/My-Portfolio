const fs = require('fs');
const path = require('path');
const dir = 'd:/githubprojects/My-Portfolio/src/app/component';

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.tsx')) {
    const p = path.join(dir, file);
    let content = fs.readFileSync(p, 'utf8');
    
    // Using string replace with global flag
    content = content.replace(/type: "spring"/g, 'type: "spring" as any');
    
    fs.writeFileSync(p, content);
  }
});
console.log('Done!');
