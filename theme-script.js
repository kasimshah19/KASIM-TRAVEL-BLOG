const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach(file => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.tsx')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const replacements = [
  // First, safely replace the inverted bg blocks (usually bg-[#1C1917] text-white)
  { regex: /bg-\[#1C1917\] text-white/g, replace: "bg-[#1C1917] dark:bg-[#FAF7F2] text-white dark:text-[#1C1917]" },
  
  // Replace the stats section main wrapper text 
  { regex: /bg-\[#1C1917\] text-white/g, replace: "bg-[#1C1917] dark:bg-[#FAF7F2] text-white dark:text-[#1C1917]" }, // already caught
  
  { regex: /bg-\[#FAF7F2\](?! dark)/g, replace: "bg-[#FAF7F2] dark:bg-[#1C1917]" },
  { regex: /bg-\[#EFECE7\]/g, replace: "bg-[#EFECE7] dark:bg-[#292524]" },
  { regex: /text-\[#1C1917\](?! dark)/g, replace: "text-[#1C1917] dark:text-[#FAF7F2]" },
  
  { regex: /border-black\/10/g, replace: "border-black/10 dark:border-white/10" },
  { regex: /border-black\/5/g, replace: "border-black/5 dark:border-white/5" },
  { regex: /bg-black\/20/g, replace: "bg-black/20 dark:bg-white/20" },
  { regex: /bg-black\/10/g, replace: "bg-black/10 dark:bg-white/10" },
  
  { regex: /text-\[#1C1917\]\/60/g, replace: "text-[#1C1917]/60 dark:text-[#FAF7F2]/60" },
  { regex: /text-\[#1C1917\]\/70/g, replace: "text-[#1C1917]/70 dark:text-[#FAF7F2]/70" },
  { regex: /text-\[#1C1917\]\/50/g, replace: "text-[#1C1917]/50 dark:text-[#FAF7F2]/50" },
  { regex: /text-\[#1C1917\]\/40/g, replace: "text-[#1C1917]/40 dark:text-[#FAF7F2]/40" },
  { regex: /text-\[#1C1917\]\/20/g, replace: "text-[#1C1917]/20 dark:text-[#FAF7F2]/20" },
  { regex: /text-\[#1C1917\]\/90/g, replace: "text-[#1C1917]/90 dark:text-[#FAF7F2]/90" },
  { regex: /text-\[#1C1917\]\/80/g, replace: "text-[#1C1917]/80 dark:text-[#FAF7F2]/80" },
  { regex: /text-black\/40/g, replace: "text-black/40 dark:text-white/40" },
  
  // Specific bg classes that are black in light mode but should be white in dark mode
  { regex: /bg-\[#1C1917\](?! dark)/g, replace: "bg-[#1C1917] dark:bg-[#FAF7F2]" },
  { regex: /bg-white(?! dark)/g, replace: "bg-white dark:bg-[#1C1917]" },
  
  { regex: /text-white(?! dark)(?!.*dark:text-\[#1C1917\])/g, replace: "text-white dark:text-[#1C1917]" },
  { regex: /text-white\/50/g, replace: "text-white/50 dark:text-[#1C1917]/50" },
  { regex: /divide-white\/10/g, replace: "divide-white/10 dark:divide-black/10" }
];

const filesToProcess = [
  './app/page.tsx',
  './app/destinations/page.tsx',
  './app/blog/page.tsx',
  './app/blog/[id]/page.tsx',
  './app/about/page.tsx',
  './app/contact/page.tsx',
  './components/Footer.tsx'
];

filesToProcess.forEach(file => {
  const filePath = path.resolve(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replace);
    });
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Processed ${file}`);
  } else {
    console.log(`File not found: ${file}`);
  }
});
