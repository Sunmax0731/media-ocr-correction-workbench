export const productProfile = {
  "repository": "media-ocr-correction-workbench",
  "title": "音声・動画・OCR修正ワークベンチ",
  "domain": "WebApp",
  "hostApp": null,
  "rank": 71,
  "tier": "P2",
  "ideaNo": 5,
  "overview": "波形メモ、動画テロップOCR、字幕修正を再生確認しながら行う。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。",
  "problem": "OCRや音声メモの修正結果が素材と分かれやすい。",
  "differentiation": "タイムライン、元メディア、修正文を横並びにする。",
  "publish": "GitHub Pages / GitHub Release",
  "surface": "Static WebApp + CLI validation core",
  "entity": "OCR correction task",
  "requiredFields": [
    "id",
    "title",
    "mediaPath",
    "ocrText",
    "correctedText",
    "owner"
  ],
  "warningField": "confidenceNote",
  "qcdsManualTestCap": "S-",
  "qcdsTarget": "A-",
  "benchmarkRepos": [
    "Sunmax0731/project-portfolio-generator",
    "Sunmax0731/release-output-check-flow",
    "Sunmax0731/movie-telop-transcriber",
    "Sunmax0731/codex-remote-android"
  ]
};
