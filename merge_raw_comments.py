from glob import glob
import numpy as np
import pandas as pd

all_texts = []

for fname in glob("./data/comments/*.xlsx"):
    data0 = pd.read_excel(fname, index_col=0)
    comments0 = data0["content"].drop_duplicates().dropna()
    all_texts.append(comments0.values.tolist())

with open("./data/all_comments.txt", "w", encoding="utf-8") as f:
    f.write("\n\n".join("\n".join(comments) for comments in all_texts))
