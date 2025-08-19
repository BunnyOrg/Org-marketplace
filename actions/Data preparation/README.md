# Data_Preparation

**Data_Preparation** is a GitHub Action that processes raw datasets (images, sensor data, etc.) and generates Python Pickle (`.pkl`) files for both **training** and **validation** datasets.  

This action standardizes the data preparation stage of your ML pipeline, ensuring consistent input for downstream stages.  

---

## 📖 Description
- Reads dataset from the provided folder.  
- Preprocesses images and sensor data.  
- Generates serialized **PKL files** for training and validation.  

---

## ⚙️ Inputs
| Name | Required | Description |
|------|----------|-------------|
| `dataset_path` | ✅ | Path to the dataset folder containing images and/or sensor data. |

---

## 📤 Outputs
| Name | Description |
|------|-------------|
| `train_pkl` | Path to the generated training dataset `.pkl` file. |
| `val_pkl` | Path to the generated validation dataset `.pkl` file. |

---

## 🚀 Example Usage

```yaml
- name: Run Data Preparation
  uses: your-org/Data_Preparation@v1
  with:
    dataset_path: ./datasets/raw_data
```

## How it works
1. Loads raw dataset files.
2. Applies preprocessing steps (cleaning, normalization, transformations).
3. Generates serialized .pkl files for training and validation.

## Notes
 - Ensure your dataset folder follows the expected structure.
 - Large datasets may require Git LFS or external storage.
