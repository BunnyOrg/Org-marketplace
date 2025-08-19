# before_script

**before_script** is a GitHub Action that prepares your environment by setting default input values, exporting key environment variables, and capturing essential context such as the current directory and job name.  

This action is ideal for **structured CI/CD pipelines**, ensuring consistent setup logic across all jobs before running main build, test, or deployment steps.  

---

## 📖 Description
This action standardizes the environment setup process for GitHub Actions workflows.  
It helps ensure that essential variables and context are available early in the pipeline, reducing redundancy and improving maintainability of your CI/CD setup.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `default_input` | ❌ | A default input value that will be exported as an environment variable. |
| `extra_env` | ❌ | Optional key-value pairs of additional environment variables to export. |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `working_directory` | The current working directory of the job. |
| `job_name` | The name of the GitHub Actions job in which this action is executed. |

---

## 🚀 Example Usage

```yaml
name: CI Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  setup-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run before_script
        uses: your-org/before_script@v1
        with:
          default_input: "default-value"
          extra_env: |
            KEY1=VALUE1
            KEY2=VALUE2

      - name: Print Context
        run: |
          echo "Working directory: ${{ steps.before_script.outputs.working_directory }}"
          echo "Job name: ${{ steps.before_script.outputs.job_name }}"
```
## How it works
1. Sets default input values and makes them available as environment variables.
2. Exports custom environment variables passed through extra_env.
3. Captures and outputs contextual information, including:
   - Current working directory
   - GitHub Actions job name
4. Makes these values available for downstream jobs or steps in the workflow.

## Notes
 - 🛠️ Use this action at the start of your workflow jobs to ensure consistent setup across your pipeline.
 - 📦 This is especially useful in multi-job CI/CD pipelines, where repeated environment preparation logic can be centralized.
 - ✅ Compatible with both GitHub-hosted and self-hosted runners.
