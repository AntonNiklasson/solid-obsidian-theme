---
tags:
 - Private 
 - datetime/2021/05/29/13/28
aliases: 
---

# Readme
- `Date:` [[2021-05-29|29.05.2021]]
- `Context:` #Private 
- `Topics:` [[Obsidian]]
---

## Introduction to example vault
- This example vault has been inspired by the materials and thoughts published by different people at various sources, including smaller tidbits from the Obsidian and MPU forums, various YouTube channels and so one
	- Among others:
		- [David Sparks](https://www.macsparky.com) who talked about his personal system on various podcats, especially on [Mac Power Users](https://www.relay.fm/mpu/) and [Focused](https://www.relay.fm/focused/), which made me reconsider Obsidian for note taking and personal knowledge management
		- [Bryan Jenks](https://www.bryanjenks.dev) who has kindly published his templates (the link can be found on his [YouTube channel](https://www.youtube.com/channel/UCfhSB16X9MXhzSFe_H7XbHg)) from which I have drawn some inspiration
		- And obviously I'm currently evaluation [Tiago Forte](https://fortelabs.co)'s PARA structure, though I currently mostly only use the Projects and Areas folders from his suggested system and deviate in other ways
- Both the structure as well as the templates are still **work-in-progress** and have only been real-life tested by me for a few weeks 
	- There are still some inconsistencies to be tackled
- Please note that I've tried to recreate and describe my personal vault including a few example files as best I can, but since I had to do some cleaning up and needed to translate anything I include, there might be few mistakes here and there
- Any constructive feedback and ideas/suggestions are very much appreciated 
		
## General workflow
- I'm not using Obsidian as a Zettelkasten, but rather for **taking all kinds of different (often rather long-form than atomic) notes**:
	- Ideas (including reminders/notes to future self) in various forms, which are not (yet) todo items or full-fledged project notes, are stored and developed here
	- Meeting notes, call notes etc. are stored (and whenever possible already taken in) Obsidian
	- Small to medium notes on how to do stuff, for example a regex I used to reformat date strings, how to setup Git with Obsidian, how to install fish, how to use Pandoc to convert notes from other formats to markdown, ...
	- Project notes (may be derived from what was an idea note previously), daily notes, weekly review based on those daily notes, ...
- My overarching aim is to have **one single source of truth** which shall contain all my various types of notes, so that I do not have to go looking for that one crucial piece of knowledge in Bear, or maybe it's still in Drafts, or maybe in OneNote, or maybe on a shared MS Teams Notebook, or did I put it in my paper notebook? Oh, no, I emailed it to myself
	- I will go the extra mile to transfer notes taken e.g. in my paper notebook after a physical meeting to Obsidian, or copy a call note I took in Outlook (because that's already open when somebody called me...) to Obsidian
	- But to minimize the effort and the overhead of having to regularly clean several inboxes, I try to avoid using other note taking apps and capture as much as possible directly in Obsidian
- **Not all of my notes go into Obsidian** because some topics require collaboration of some sorts
	- How-tos, process documentation etc. for work might go into a local, self-hosted wiki
		- Note there are wiki solutions available which are entirely based on markdown files and using Git for version control and synchronization (e.g. [Gollum](https://github.com/gollum/gollum)), which would make it possible for you to edit your project group or company Wiki directly from Obsidian
		- But I did not find a solution that is accessible to a broad enough user spectrum, supports a sensible level of rights management/access control and offers features like built-in draw.io integration
	- Sharing notes with co-workers is also something I do not try to solve via/integrate with Obsidian so far
		- I would usually only like to share single notes, e.g. a brainstorming note for a specific project, or a group of notes which is distributed across several folders in my vault, with very specific people
			- Still working on finding a suitable solution for that without introducing chaos into my system
		- Furthermore, for collaboratively annotating e.g. a PDF (such as a letter for which we'll draft an answer together), Obsidian is not my tool of choice for obvious reasons
- At the same time, while my text notes go into Obsidian, **I do not use Obsidian as my "library of everything"**
	- I'm using DevonThink to store my reference materials, e.g. web archives, ebooks, bills, scanned documents and other PDF files, "self-contained" spreadsheets (e.g. certain calculations for yearly tax declaration which I may want to reference, but most likely not edit in future) and so on
		- I'll link from my Obsidian note to specific DevonThink files or groups, when appropriate, for example when I take call notes where we discussed certain documents
	- For managing tasks, I'm using a task manager and I try to avoid spraying todos all over my meeting notes

## Tagging and YAML frontmatter
- I'm not using tags very actively so far
- What seemed like a "no regret" decision was to differentiate between `#private`, `#company_a`, `company_b` as well as to make use of nested tags (see `#datetime`-tags) as some sort of filterable "file creation date", which can be easily adjusted by me and will not be lost if I do some file refactoring
- I'm not yet sure how this system may change in the future, for that reason tags can currently be found both in my YAML frontmatter as well as in the note itself

## Some notes on the templates
- I'm using the community plugin "Templater" instead of the respective core plugin
- Within my templates, I have consciously scrambled my tags using a Templater command such as `#` so that template files don't show up in the tag pane (because Obsidian will only recognize the tag after a note has been created from the template)
- I'm not sure if I'll actually keep on using nicely formatted aliases for Daily notes (DD.MM.YYYY instead of YYYY-MM-DD, which is required for proper file sorting) - it looks nice but creates additional friction

## Active plugins relevant to the specific templates/work flows
````
I'll not mention all my active plugins (file explorer, search, word count, ...) here, but only those that are especially relevant to my workflow so far and don't seem very obvious to me.
````
- Daily notes
- Calender (community plugin)
- Templater (community plugin)

## Minor tweaks in my Obsidian setup
- I'm not a huge user of Graph yet, but I do have some [[Graph view settings]] active
- Some custom CSS is applied in order to increase the size of note previews, which can be found [here](https://forum.obsidian.md/t/meta-post-common-css-hacks/1978/173)
- I currently use the "Dracula for Obsidian" theme 

## Migrating old notes
- I have decided to only migrate a subset of notes from my old system(s), which I think will be either very relevant in the short terms (i.e. for ongoing projects) or will/may be relevant in the long term because I find myself looking for those notes often/know that I will need to the same thing again in a few years time
- You might want to use a tool like [[Document conversion with Pandoc|Pandoc]] to convert existing non-markdown files such as Word documents and emails