# MIL_Test_Coverage

**MIL_Test_Coverage** is a GitHub Action that executes **test vectors on a MATLAB model** and generates a detailed test coverage report using the **Reactis** tool.  

This action is designed for **Model-in-the-Loop (MIL) testing**, enabling automated model validation and coverage analysis in CI/CD pipelines.  

---

## 📖 Description
- Loads a MATLAB/Simulink model and supporting configuration files.  
- Executes defined test vectors in **Model-in-the-Loop (MIL)** mode.  
- Uses **Reactis** to generate a test coverage report for validation and quality assurance.  

---

## ⚙️ Inputs
| Name       | Required | Description |
|------------|----------|-------------|
| `model_file` | ✅ | Path to the MATLAB/Simulink model file (`.slx` or `.mdl`). |
| `rom_file`   | ✅ | Path to the ROM configuration file used in testing. |
| `rsi_file`   | ✅ | Path to the RSI test vector file for Reactis. |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `coverage_report` | Path to the generated test coverage report (e.g., HTML, PDF, or CSV). |

---

## 🚀 Example Usage

```yaml
name: MIL Test Coverage

on:
  pull_request:
    branches: [ "main" ]

jobs:
  mil-test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Run MIL Test Coverage
        uses: your-org/MIL_Test_Coverage@v1
        with:
          model_file: ./models/control_system.slx
          rom_file: ./config/system.rom
          rsi_file: ./tests/test_vectors.rsi

      - name: Upload Test Coverage Report
        uses: actions/upload-artifact@v4
        with:
          name: mil-test-coverage
          path: ${{ steps.mil-test.outputs.coverage_report }}
```

## How it works
1. Loads the MATLAB/Simulink model along with its ROM configuration.
2. Executes RSI-based test vectors on the model.
3. Reactis analyzes the execution and produces a detailed coverage report.
4. The report is stored as an output and can be uploaded as an artifact.

## Notes
 - ⚠️ Requires MATLAB/Simulink and Reactis to be installed and licensed on the runner.
 - 🛠️ Recommended to run this action on a self-hosted runner with MATLAB and Reactis pre-configured.
 - 📦 Generated coverage reports can be archived, published, or integrated into dashboards.
 - ✅ Useful for enforcing model testing standards and ensuring quality in safety-critical syste
