# docker-run

**docker-run** is a composite GitHub Action that runs a specified **Docker image**, executes custom commands inside the container, and saves the generated artifacts for use in your CI/CD pipeline.  

This action is useful for scenarios where you need a **consistent, containerized build or test environment** and want to persist the results outside the container.  

---

## 📖 Description
The action pulls and runs a given Docker image, executes the provided commands inside the container, and then collects any generated files or directories as **artifacts**.  

This ensures reproducibility across different environments while leveraging Docker for isolation.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `image` | ✅ | Name of the Docker image to run (e.g., `python:3.10`, `ubuntu:20.04`). |
| `commands` | ✅ | One or more shell commands to execute inside the container. |
| `artifact_path` | ❌ | Path inside the container where generated artifacts are stored (default: `/workspace/output`). |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `artifact_location` | The path to the collected artifacts on the GitHub runner. |

---

## 🚀 Example Usage

```yaml
name: Docker Run Example

on:
  push:
    branches: [ "main" ]

jobs:
  docker-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Commands in Docker
        uses: your-org/docker-run@v1
        with:
          image: python:3.10
          commands: |
            mkdir -p /workspace/output
            echo "Hello from inside Docker!" > /workspace/output/message.txt
          artifact_path: /workspace/output

      - name: Upload Artifacts
        uses: actions/upload-artifact@v4
        with:
          name: docker-artifacts
          path: ${{ steps.docker-run.outputs.artifact_location }}
```

## How it works
1. Pulls the specified Docker image (if not already available).
2. Starts a container and executes the given commands.
3. Collects any files from the specified artifact_path.
4. Makes the collected files available on the GitHub runner.
5. Uploads the artifacts for use in downstream jobs or for downloading.

## Notes
 - 🐳 Requires Docker to be available on the runner (pre-installed on GitHub-hosted Ubuntu runners).
 - 📦 Ensure that artifacts are written to the artifact_path inside the container so they can be copied out.
 - 🔒 You can use private Docker images by setting up authentication with GitHub Secrets
