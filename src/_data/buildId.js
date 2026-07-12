// Cache-busting id for the CSS. Changes every build so a fresh deploy always
// serves fresh CSS (used as /styles.css?v={{ buildId }}).
module.exports = () => Date.now();
