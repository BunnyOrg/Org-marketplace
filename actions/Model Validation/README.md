
---

## Model Validation

**Model_Validation** is a GitHub Action that validates a trained model on the validation dataset and generates an evaluation report.  


## 📖 Description
- Loads the validation `.pkl` dataset and trained `.pth` model.  
- Runs model inference on validation data.  
- Outputs evaluation metrics report.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `val_pkl` | ✅ | Path to the validation dataset `.pkl` file. |
| `model_pth` | ✅ | Path to the trained model `.pth` file. |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `report` | Path to the evaluation report file (e.g., JSON, TXT, or CSV). |

---

## 🚀 Example Usage

```yaml
- name: Run Model Validation
  uses: your-org/Model_Validation@v1
  with:
    val_pkl: ./datasets/val.pkl
    model_pth: ./models/model.pth
```

## How it works
1. Loads validation dataset and trained model.
2. Computes accuracy, precision, recall, F1-score, or other metrics.
3. Generates a structured evaluation report.

## Notes
 - The report format can be customized (CSV, JSON, Markdown).
 - Useful for automated quality gates in CI pipelines.
