Generate a tailored motivational letter for job application.

Usage: /new-letter [company name and role]

Steps:
1. Load the cv-writer agent
2. Load .claude/skills/brand-voice/SKILL.md  
3. Ask me: "What specific things do you know about $ARGUMENTS? Any personal connection?"
4. Research the company's games/products if it's a game studio
5. Write a cover letter following cv-writer rules
6. Save to letters/[company-name]-[date].md
