const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore()

exports.returnOgp2 = functions.https.onRequest(async(req, res) => {
  const [, , uid] = req.path.split("/");
  await db.collection('articles').doc(uid).get().then(doc => {
    if(!doc.exists) {
      res.status(404).send('404 Not Exist')
    }
    const title = doc.data().title
    const subTitle = doc.data().subTitle
    const thumbnailImagePath = doc.data().thumbnailImagePath
    res.set("Cache-Control", "public, max-age=600, s-maxage=600");
    const html = createHtml(title, subTitle, thumbnailImagePath, uid);
    res.status(200).end(html);
  })
});

const createHtml = (title, subTitle, thumbnailImagePath, uid) => {
  const SITEURL = 'https://katsuomi.com'

  return `<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>katsuomi.com</title>
        <meta property="og:title" content="${title}">
        <meta property="og:image" content="${thumbnailImagePath}">
        <meta property="og:description" content="${subTitle}">
        <meta property="og:url" content="${SITEURL}">
        <meta property="og:type" content="article">
        <meta property="og:site_name" content="katsuomi.com">
        <meta name="twitter:site" content="${SITEURL}">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:title" content="${title}">
        <meta name="twitter:image" content="${thumbnailImagePath}">
        <meta name="twitter:description" content="${subTitle}">
        <meta http-equiv="refresh" content="0.1;URL=/_articles/${uid}">
      </head>
      <body>
        <script type="text/javascript">
          window.location.href = "/_articles/${uid}";
        </script>
      </body>
    </html>
  `
}
