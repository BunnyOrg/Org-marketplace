# compile

**compile** is a composite GitHub Action that compiles a given **C source file** and stores the compiled binary as an artifact.  

This action simplifies the process of **building C programs in CI/CD pipelines** by automatically compiling source code and making the output available for download and further use.  

---

## 📖 Description
This action compiles a specified C file into an executable using `gcc` (GNU Compiler Collection).  
It then uploads the compiled binary as a **GitHub artifact**, enabling downstream jobs or users to access the generated output.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `c_file` | ✅ | The path to the C source file (`.c`) that needs to be compiled. |
| `output_name` | ❌ | The desired name of the compiled output binary (default: `program`). |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `compiled_binary` | The path to the compiled executable file. |

---

## 🚀 Example Usage

```yaml
name: C Program Build

on:
  push:
    branches: [ "main" ]

jobs:
  build-c-program:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Compile C Program
        uses: your-org/compile@v1
        with:
          c_file: src/main.c
          output_name: myprogram

      - name: Upload Compiled Binary
        uses: actions/upload-artifact@v4
        with:
          name: compiled-binary
          path: ${{ steps.compile.outputs.compiled_binary }}
```

## How it works
1. Takes the path of the C file to compile.
2. Uses gcc to compile the file into a binary executable.
3. Stores the executable in the working directory with the specified name (default: program).
4. Uploads the binary as an artifact so it can be reused in later jobs or downloaded.

## Notes
 - ⚠️ Requires gcc to be available on the runner (already pre-installed on most Ubuntu runners).
 - 🛠️ Supports single-file C programs by default — for multi-file projects, you may extend the action to include additional source files or Makefile support.
 - 📦 Large binaries may require artifact storage best practices (e.g., compression before upload).
 - ✅ Works on Linux runners; Windows and macOS compatibility depends on compiler availability.
