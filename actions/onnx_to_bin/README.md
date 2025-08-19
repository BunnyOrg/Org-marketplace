
---

## Onnx_to_bin

**Onnx_to_bin** is a GitHub Action that converts an ONNX model into a binary file for deployment on target hardware.  

## 📖 Description
- Loads an `.onnx` model file.  
- Converts it into a hardware-compatible binary format.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `model_onnx` | ✅ | Path to the ONNX model file (`.onnx`). |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `model_bin` | Path to the generated binary model file (`.bin`). |

---

## 🚀 Example Usage

```yaml
- name: Convert ONNX to BIN
  uses: your-org/Onnx_to_bin@v1
  with:
    model_onnx: ./models/model.onnx
```

## How it works
1. Converts the ONNX model to a binary file suitable for target hardware.
2. Uses hardware-specific conversion utilities/toolchains.

## Notes
 - Ensure the hardware’s required toolchain is available on the runner.
 - Conversion may vary depending on the hardware vendor.
