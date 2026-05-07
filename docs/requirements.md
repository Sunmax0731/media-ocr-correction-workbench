# 要件定義

| 項目 | 内容 |
| --- | --- |
| Rank | 71 |
| Domain | WebApp |
| Idea No. | 5 |
| Repository | media-ocr-correction-workbench |
| 主な公開先 | GitHub Pages / GitHub Release |

## 背景

OCRや音声メモの修正結果が素材と分かれやすい。

## 目的

波形メモ、動画テロップOCR、字幕修正を再生確認しながら行う。 入力、確認、履歴保存、次アクションを同じ作業単位で扱えるようにする。

## 必須要件

- OCR correction task を複数件まとめて検証できる。
- required fields: `id`, `title`, `mediaPath`, `ocrText`, `correctedText`, `owner`。
- warning field: `confidenceNote`。
- 代表シナリオ、QCDS metrics、docs ZIP、release evidence を再生成できる。
