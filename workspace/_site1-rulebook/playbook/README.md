# Lead-Site Playbook

| Path | What it is |
|---|---|
| `Lead_Site_Playbook_v1.md` | The playbook, joined from `parts/`. **Built artifact: edit the parts, not this file.** |
| `Lead_Site_Playbook_v1.docx`, `.pdf` | Built from the `.md` with pandoc. Never hand-edit |
| `parts/` | One file per Part, sorted by filename: `01` to `09c`. Appendix B (`09b`) holds the prompt library |
| `PLAN.md` | Outline, status and conventions |
| `_research/R1` to `R7` | Source briefs. `REVIEW-1-factcheck.md`, `REVIEW-2-consistency.md` are the two independent playbook reviews, both applied in v1.0. `REVIEW-3-template-security.md` and `REVIEW-4-template-rereview.md` review the reference template (`../site-template/`) and its fixes |
| `counsel_brief.md` | Questions for a lawyer, with the working assumption for each. Not legal advice |
| `build.py` | Joins the parts and checks them |
| `pdf-header.tex` | LaTeX header for the PDF build |

## Rebuild

```bash
python3 build.py            # join parts, check references and glyphs, write the .md
python3 build.py --check    # check only
pandoc Lead_Site_Playbook_v1.md -o Lead_Site_Playbook_v1.docx --toc --toc-depth=2 \
  --metadata title="The Claude Code Lead-Site Playbook v1.1"
pandoc Lead_Site_Playbook_v1.md -o Lead_Site_Playbook_v1.pdf --pdf-engine=pdflatex --toc --toc-depth=2 \
  -H pdf-header.tex -V geometry:margin=1.8cm -V fontsize=10pt -V colorlinks=true \
  --metadata title="The Claude Code Lead-Site Playbook v1.1"
```

`build.py` fails on a section reference that has no heading and on the section-mark and pilcrow glyphs. It reports (does not fail on) TODO-style markers; the ones it lists are guard descriptions that name those tokens on purpose. The `xelatex` format is not set up on this machine; use `pdflatex` as above.

## Conventions

Evidence tags, "target (ours)", practitioner and vendor claims, and the rule that no number is invented are in Section 1.2 and `PLAN.md`. Identifier prefixes: D (adopted), AR (resolved by research), PR (proposals), OQ (open questions) in Appendix A; P1 to P19 are prompts in Appendix B.
