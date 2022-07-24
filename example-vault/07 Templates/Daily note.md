---
tags:
<%* tR += " -" %> datetime/<%tp.date.now("YYYY/MM/DD/HH/mm")%>
aliases: <% tp.date.now("DD.MM.YYYY") %>
---

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>|<% tp.date.now("DD.MM.YYYY", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>|<% tp.date.now("DD.MM.YYYY", 1) %>]] >>
- `Context:` <%* tR += "#" %>
---

## Current references
%% 1-3 notes on topics I'm currently collecting thoughts on %%
- [[Questions for call with Person A]]
- [[Improvement ideas for Area X]]

## Notes
<%* if (tp.date.now("ddd") == "Fri") { %>
- [ ] Create weekly review
<%* } %>

## List of derailments
What has derailed me today?

What can I do in order to avoid or mitigate that in future?