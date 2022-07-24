---
tags:
 - Private
 - datetime/2021/05/29/13/10
aliases: 
---

# Document conversion with Pandoc
- `Datum:` [[2021-05-29|29.05.2021]]
- `Kontext:` #Private
- `Themen:` [[Obsidian]], [[IT]]
---

## Resources
- [Pandoc](https://pandoc.org/index.html)

## Utility
- Pandoc enables you to convert a variety of document formats, including Word documents and exported emails from Outlook, to different formats

## Installation (on macOS with homebrew)
- `brew install pandoc`

## Example - .docx to .md
- Single document:`pandoc input-document.docx -f docx -t markdown -s -o output-document.md`
- Batch processing - entire folder: `for f in \*.docx; do pandoc "$f" -f docx -t markdown -s -o "${f%.docx}.md"; done`
