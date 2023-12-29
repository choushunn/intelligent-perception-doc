---
title: Python
order: 1
---
::: info
Python 很重要。
:::

## 常用链接
- [Python 官网](https://www.python.org/)
- [Miniconda](https://docs.conda.io/en/latest/miniconda.html) - Python 环境管理工具
- [pip 换源](https://mirror.nju.edu.cn/mirrorz-help/pypi/?mirror=NJU) - 换源后可加速下载
- [conda 换源](https://mirror.nju.edu.cn/mirrorz-help/anaconda/?mirror=NJU) - 换源后可加速下载
- [Scientific Python Lectures](https://lectures.scientific-python.org/) - Python 科学计算教程

## 常用库

### torchinfo

https://github.com/TylerYep/torchinfo

```
from torchinfo import summary

model = ConvNet()
batch_size = 16
summary(model, input_size=(batch_size, 1, 28, 28))
```

### tqdm

https://github.com/tqdm/tqdm

```
from tqdm import tqdm
pbar = tqdm(tqdm(range(10000)))
for i in pbar:
	pbar.set_description("Processing %s" % char)	
```

### tensorboardX

https://github.com/lanpa/tensorboardX

```

```

### pytorch-lightning

https://lightning.ai/pytorch-lightning

```
```

## einops

https://github.com/arogozhnikov/einops

```
```