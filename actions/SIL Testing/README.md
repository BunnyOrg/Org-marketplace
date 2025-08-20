---
# SIL_Test

**SIL_Test** is a GitHub Action designed to perform **Software-in-the-Loop (SIL) testing** on embedded control models.  
It leverages the **WinAMS** toolchain to execute **ELF-based test vectors** in a SIL environment and generates **XLO outputs** along with subsystem-level reports.  

This ensures that the model behaves correctly in a simulated embedded environment before deployment to hardware.  

---

## 📖 Description
- Accepts a configured **SIL environment** and a **compiled ELF file** of the model.  
- Executes the ELF using **WinAMS** against provided test vectors.  
- Generates **XLO format** results for detailed validation.  
- Produces a structured **subsystem-wise report** for evaluation.  
- Requires additional dependencies: **JQ**, **WinAMS**, **Tasking**, and **Python**.  

---

## ⚙️ Requirements
This action requires the following tools installed in the runner environment:
- **JQ** → for JSON processing.  
- **WinAMS** → to run SIL simulations.  
- **Tasking toolchain** → for model compilation and ELF handling.  
- **Python** → for automation, data parsing, and report generation.  

---

## ⚙️ Inputs
| Name           | Required | Description |
|----------------|----------|-------------|
| `sil_env`      | ✅ | Path or configuration file for the SIL environment. |
| `elf_file`     | ✅ | Path to the compiled ELF executable used for SIL testing. |
| `test_vectors` | ✅ | Path to the test vectors applied during the SIL test. |

---

## 📤 Outputs
| Name            | Description |
|-----------------|-------------|
| `xlo_output`    | Path to the generated XLO file containing SIL execution results. |
| `report_path`   | Path to the subsystem-level report summarizing SIL results. |
| `status`        | `success` or `failure` depending on SIL execution outcome. |

---

## 🚀 Example Usage

```yaml
name: SIL Testing

on:
  workflow_dispatch:

jobs:
  sil-test:
    runs-on: windows-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Install Requirements
        run: |
          choco install jq python -y
          # Ensure WinAMS and Tasking are installed on self-hosted or runner environment
          echo "Ensure WinAMS and Tasking toolchain are pre-installed."

      - name: Run SIL Test
        id: sil
        uses: your-org/SIL_Test@v1
        with:
          sil_env: ./configs/sil_env.json
          elf_file: ./build/model.elf
          test_vectors: ./test_vectors/input.vec

      - name: Display Results
        run: |
          echo "SIL Test Status: ${{ steps.sil.outputs.status }}"
          echo "XLO Output File: ${{ steps.sil.outputs.xlo_output }}"
          echo "Subsystem Report: ${{ steps.sil.outputs.report_path }}"

      - name: Upload Reports
        uses: actions/upload-artifact@v4
        with:
          name: sil-test-report
          path: |
            ${{ steps.sil.outputs.xlo_output }}
            ${{ steps.sil.outputs.report_path }}
```
---

## How it works
1. Initializes the SIL environment with the provided configuration.
2. Executes the ELF file using WinAMS against given test vectors.
3. Captures execution results and converts them into XLO format.
4. Processes results using Python and JQ for structured reporting.
5. Generates subsystem-level reports for model verification.

## Notes
 - This job requires WinAMS and Tasking to be installed on the runner. These are not available on standard GitHub-hosted runners; a self-hosted runner is recommended.
 - Ensure Python and JQ are available for report generation.
 - Use artifacts upload to persist results (XLO + reports) for later review.
