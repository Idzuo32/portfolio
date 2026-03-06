Deploy the portfolio site to GitHub Pages via GitHub Actions.

Steps:
1. Run `npm run build` locally and verify no errors
2. Check astro.config.mjs has correct site URL
3. Commit all changes: git add . && git commit -m "deploy: [brief description]"
4. Push to main: git push origin main
5. GitHub Actions will automatically build and deploy
6. Confirm deployment at https://YOUR_USERNAME.github.io/portfolio

If build fails, read the error and fix before pushing.

