# Model_Compile_Checker

**Model_Compile_Checker** is a GitHub Action that compiles a **MATLAB/Simulink model** with its associated **ROM file** to verify model build integrity.  
It provides a **success or failure result** along with detailed reasons for compilation status.  

This action ensures early detection of integration and configuration issues in model-based workflows.  

---

## 📖 Description
- Loads the specified MATLAB/Simulink model and ROM file.  
- Performs a **compilation check** without executing simulations.  
- Reports whether compilation succeeds or fails.  
- Outputs detailed logs and error reasons for debugging.  

---

## ⚙️ Inputs
| Name        | Required | Description |
|-------------|----------|-------------|
| `model_file` | ✅ | Path to the MATLAB/Simulink model file (`.slx` or `.mdl`). |
| `rom_file`   | ✅ | Path to the ROM configuration file required for compilation. |

---

## 📤 Outputs
| Name            | Description |
|-----------------|-------------|
| `compile_status` | Returns `success` or `failure` depending on compilation result. |
| `compile_log`    | Path to the compilation log file containing details of errors or warnings. |

---

## 🚀 Example Usage

```yaml
name: Model Compile Checker

on:
  push:
    branches: [ "main" ]

jobs:
  compile-check:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run Model Compile Checker
        id: compile
        uses: your-org/Model_Compile_Checker@v1
        with:
          model_file: ./models/control_system.slx
          rom_file: ./config/system.rom

      - name: Display Compile Status
        run: |
          echo "Compile Status: ${{ steps.compile.outputs.compile_status }}"
          echo "Log File: ${{ steps.compile.outputs.compile_log }}"

      - name: Upload Compilation Log
        uses: actions/upload-artifact@v4
        with:
          name: compile-log
          path: ${{ steps.compile.outputs.compile_log }}
```

## How it works
1. MATLAB loads the model file and ROM configuration.
2. Executes a compile-only build process (without simulation).
3. Checks for:
   - Missing dependencies
   - Incompatible configuration parameters
   - Syntax or block connectivity errors
4. Returns success or failure status along with detailed logs.

## Notes
 - ⚠️ Requires MATLAB/Simulink to be installed and licensed on the runner.
 - 🛠️ Best suited for self-hosted runners with MATLAB configured in the environment.
 - 📄 Compilation logs are valuable for debugging ROM-model mismatches and setup issues.
 - ✅ Helps ensure models are always build-ready before proceeding to simulation, testing, or deployment stages.
