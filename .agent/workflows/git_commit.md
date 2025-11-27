---
description: Git Commit Workflow
---

After completing a logical unit of work, perform a git commit following these rules:

1.  **Frequency**: Commit after every completed logical task.
2.  **Message Format**: `Type: Summary in Korean`
    *   `Type` examples: `Feat`, `Fix`, `Refactor`, `Style`, `Docs`, `Chore`.
    *   `Summary`: Imperative mood, Korean.
    *   Example: `Fix: 서버 연결 오류 수정`

**Procedure**:
1.  Check `git status` to see changed files.
2.  Stage relevant files using `git add <files>`.
3.  Commit using `git commit -m "Type: Summary"`.
