
---

## Model Training


**Model_Training** is a GitHub Action that trains a predefined machine learning model using the prepared dataset in **PKL format**.  


## 📖 Description
- Loads the training `.pkl` dataset.  
- Trains a predefined ML/DL model.  
- Saves the trained model as a `.pth` file (PyTorch format).  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `train_pkl` | ✅ | Path to the training dataset `.pkl` file. |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `model_pth` | Path to the generated trained model file (`.pth`). |

---

## 🚀 Example Usage

```yaml
- name: Run Model Training
  uses: your-org/Model_Training@v1
  with:
    train_pkl: ./datasets/train.pkl
```
## How it works
1. Loads data from the training .pkl.
2. Trains a predefined ML/DL architecture.
3. Saves the resulting model as model.pth.

## Notes
 - Training may require GPU runners for efficiency.
 - Hyperparameters are predefined but can be extended as inputs.
