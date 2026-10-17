<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep public identity, services, WhatsApp URL construction and contact validation in src/lib/brand.ts so all contact destinations remain consistent.
- Use shared SiteNav and SiteFooter on home and legal pages so navigation and identity do not drift.
- Contact submission prepares an external WhatsApp draft client-side without persisting inquiries; preserve entered data and a fallback draft link.
- Keep legal pages aligned to the actual contact flow and review their drafts before publishing.
- Share interactive glow styling through the Button base class and global link rules, using semantic CSS tokens, so home and legal controls stay consistent without changing destinations.
