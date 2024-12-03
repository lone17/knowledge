---
aliases:
  - "@{{citekey}}"
tags:
  - integration/zotero
modified: 2024-12-04 02:03 AM +07:00
created: 2024-07-23 16:20 PM +07:00
---
> [!Cite]
> {{bibliography}}

> [!info] Metadata
> {% if title %}**Title**: {{title}}{% endif %}
> {% if authors %}**Authors**: {{authors}}{% endif %}
> **Cite key**: {{citekey}}

>[!info] Links
>
{%- if url %}
> - [Online Link]({{url}})
{%- endif %}
> - [Zotero PDF Link]({{desktopURI}})

> [!info] Abstract
> {{abstractNote}}

# Notes
## From Zotero
{% if notes and notes.length > 0 -%}
**Imported: {{importDate | format("YYYY-MM-DD")}}**

{%- macro viewInZotero(note) -%}  
[View in local Zotero]({{note.desktopURI.replace("select", "open-pdf")}})
{%- endmacro -%}

{% for note in notes.reverse() %}
{{note.note}}
{{viewInZotero(note)}}

{% endfor -%}
{%- endif %}
## From Obsidian
![[literature notes/papers/{{title.replace(":", " -")}}]]
# Annotations
![[Highlight Colour Codings#Highlighting colour codes]]
## From Zotero
{%- if annotations and annotations.length > 0 -%}
{%- set annotations = annotations | filterby("date", "dateafter", lastExportDate) -%}

{%- if annotations.length > 0 %}
**Imported: {{importDate | format("YYYY-MM-DD")}}**

{%- macro viewInZotero(annot) -%}  
[View in local Zotero: page {{annot.pageLabel}}]({{annot.attachment.desktopURI.replace("select", "open-pdf")}}?page={{annot.pageLabel}}&annotation={{annot.id}})
{%- endmacro -%}

{%- macro highlightType(annot) -%}
{%- if annot.colorCategory == "Red" -%}
<mark class="hltr-{{annot.colorCategory.toLowerCase()}}">Question/Critic</mark>
{%- elif annot.colorCategory == "Orange" -%}
<mark class="hltr-{{annot.colorCategory.toLowerCase()}}">External Insight</mark>
{%- elif annot.colorCategory == "Yellow" -%}
<mark class="hltr-{{annot.colorCategory.toLowerCase()}}">Note</mark>
{%- elif annot.colorCategory == "Blue" -%}
<mark class="hltr-{{annot.colorCategory.toLowerCase()}}">Claim</mark>
{%- elif annot.colorCategory == "Green" -%}
<mark class="hltr-{{annot.colorCategory.toLowerCase()}}">Finding</mark>
{%- elif annot.colorCategory == "Purple" -%}
<mark class="hltr-{{annot.colorCategory.toLowerCase()}}">Important</mark>
{%- endif -%}
{%- endmacro -%} ^e0c377

{% for annot in annotations -%}

>[!quote] {% if annot.color -%}
{{highlightType(annot)}} | {{viewInZotero(annot)}} 
{%- else -%}
{{annot.type | capitalize}} | {{viewInZotero(annot)}}
{%- endif %} ^{{annot.id}}
{% if annot.annotatedText -%}
>“{{annot.annotatedText}}”
{%- elif annot.imageRelativePath -%}
>![[{{annot.imageRelativePath}}]]
{%- endif %}
{% if annot.comment %}>>{{annot.comment}}{% endif %}

{% endfor -%}
{%- endif -%}
{%- endif -%}
