# AutoCodeGeneration

**AutoCodeGeneration** is a composite GitHub Action designed to automate the generation of **Autocode** for model-based applications.  
It also supports uploading the generated Autocode package, making it easy to integrate Autocode generation into your CI/CD workflows.  

---

## 📖 Description
This GitHub Action helps developers quickly set up **Autocode generation** for MATLAB/Simulink models and associated `.rom` files.  
By using this action in a workflow, teams can save time, reduce manual effort, and ensure consistency in Autocode generation across projects.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `matlab_model` | ✅ | Path to the MATLAB/Simulink model file (`.slx` or `.mdl`) used for Autocode generation. |
| `rom_file` | ✅ | Path to the ROM configuration file required during generation. |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `generated_code_path` | The directory path where the generated Autocode is stored. |

---

## Example Usage

```yaml
name: Autocode Pipeline

on:
  push:
    branches: [ "main" ]

jobs:
  autocode-job:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run AutoCodeGeneration
        uses: your-org/AutoCodeGeneration@v1
        with:
          matlab_model: path/to/model.slx
          rom_file: path/to/config.rom

      - name: Upload Generated Code
        uses: actions/upload-artifact@v4
        with:
          name: autocode-package
          path: ${{ steps.autocode-job.outputs.generated_code_path }}

```

## How it works
1. The action takes in a MATLAB model and ROM file as inputs.
2. It invokes an Autocode generation toolchain (e.g., MATLAB Coder, Embedded Coder, or your internal script).
3. The Autocode package (C/C++ source files, headers, and supporting files) is generated.
4. The generated package is made available as an output directory.
5. Optionally, the workflow can upload the package as an artifact for later use (deployment, testing, or distribution).

## Notes
 - Ensure that the MATLAB environment / Autocode toolchain is properly installed and licensed on the runner before running this action.
 - This is a composite action — you can customize the underlying steps (e.g., scripting, container usage) to fit your environment.
 - Large generated packages may require Git LFS or artifact storage.
