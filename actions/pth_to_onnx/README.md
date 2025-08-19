
---

## Pth_to_Onnx

**Pth_to_Onnx** is a GitHub Action that converts a PyTorch `.pth` model into an **ONNX** format for cross-framework compatibility.  


## 📖 Description
- Loads a trained `.pth` model.  
- Converts it into `.onnx` format.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `model_pth` | ✅ | Path to the trained PyTorch `.pth` model file. |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `model_onnx` | Path to the generated ONNX model file (`.onnx`). |

---

## 🚀 Example Usage

```yaml
- name: Convert PTH to ONNX
  uses: your-org/Pth_to_Onnx@v1
  with:
    model_pth: ./models/model.pth
```

## How it works
1. Uses PyTorch’s torch.onnx.export to convert the model.
2. Outputs .onnx file compatible with multiple frameworks/tools.

## Notes
 - Ensure all model layers are supported by ONNX export.
 - Useful for deploying models across frameworks like TensorRT, ONNX Runtime, etc.
