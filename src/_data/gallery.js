// Auto-lists the gallery images so new photos appear just by dropping them into
// the folders under src/assets/photos/. Returns { photos2026, photos2022 }.
const fs = require("fs");
const path = require("path");

function listDir(sub, filter) {
  const dir = path.join(__dirname, "..", "assets", "photos", sub);
  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch (e) {
    return [];
  }
  return files.filter(filter).sort();
}

module.exports = () => {
  // 2026: any image in the folder (currently placeholder SVGs).
  const photos2026 = listDir("2026", (f) =>
    /\.(jpe?g|png|svg|webp|avif)$/i.test(f)
  ).map((f) => "/assets/photos/2026/" + f);

  // 2022: only the canonical masters2022-NNN.jpg files. The WordPress size
  // variants (…-NNNxNNN.jpg) are excluded.
  const photos2022 = listDir("2022", (f) =>
    /^masters2022-\d{3}\.jpe?g$/i.test(f)
  ).map((f) => "/assets/photos/2022/" + f);

  return { photos2026, photos2022 };
};
