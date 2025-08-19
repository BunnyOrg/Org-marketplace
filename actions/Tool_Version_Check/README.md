# Tool_Version_Check

**Tool_Version_Check** is a composite GitHub Action that checks and prints versions of commonly used tools in the workflow environment.  

It helps developers **verify tool installations, confirm versions, and validate CI/CD environment configurations**, making it a useful step for debugging and ensuring consistency across different runners.  

---

## 📖 Description
This action provides a quick way to **inspect the versions** of tools available in the current runner environment.  
It is especially useful in CI pipelines where specific tool versions (e.g., Git, Python, Node.js, Java, Docker) are required for builds, tests, or deployments.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `extra_tools` | ❌ | A list of additional tool commands to check (e.g., `mvn --version`, `go version`). |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `checked_tools` | A summary log of all tool versions that were checked. |

---

## 🚀 Example Usage

```yaml
name: Environment Check

on:
  workflow_dispatch:

jobs:
  version-check:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Tool_Version_Check
        uses: your-org/Tool_Version_Check@v1
        with:
          extra_tools: |
            mvn --version
            go version
```

## How it works
1. Runs predefined commands to check versions of commonly used tools such as:
   - git --version
   - python --version
   - node --version
   - java -version
   - docker --version
2. Optionally executes custom tool checks provided through extra_tools.
3. Prints all results in the workflow logs for easy inspection.
4. Exports a summary of tool versions as the checked_tools output.

## Notes
 - ⚡ Great for debugging workflow issues caused by unexpected tool versions.
 - 🔄 Can be used as a pre-check step before running builds or tests.
 - 🛠️ Extendable — simply add more tools via the extra_tools input.
 - ✅ Works with both GitHub-hosted and self-hosted runners.
