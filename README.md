# SuperLegal2018Display
2018中超赛事舆情展示系统，主要使用harvesttext做文本分析得到。

`./data/` 存储了所使用到的数据，爬取自“直播吧”APP评论数据，可仅用于学习目的使用，请勿用于商用。

`merge_raw_comments.py`用于提取其中的评论纯文本，用于分析。

数据示例：
```
郜林应该是对手进攻的发起者。//<a href="https://home.zhibo8.cc/user.html?platform=mobile&uid=1860469">@阿根廷小将10号梅西</a>：作用不一样没办法比较，郜林是进攻发起者，武磊是射门的那个
也是起码能踢到球队，看看郜林可怜的触球次数，他上场是当观众的么，还中带薪水的那种//<a href="https://home.zhibo8.cc/user.html?platform=mobile&uid=2385322">@柔性天堂∨狼</a>：吴磊打飞机次数还是比郜林多的
```

数据的特点

- 包含了许多原始的网络格式。如HTML，还有@和转发等格式。在处理时保留这些东西可能会导致不鲁棒的程序崩溃，或者挖掘出一些无关实体的副作用，所以需要合理的文本清洗。
- 网络语言的不正规特点，导致对于同一个对象会有不同的称谓，如示例中的“吴磊”实际上指的是球员“武磊”。如果要针对实体进行分析，必须要进行规整。

[HarvestText](https://github.com/blmoistawinde/HarvestText)包括了易于使用的数据清洗和实体规整的API，很适合用来对这样的数据集进行挖掘。（实际上，它的诞生最早就是为了本项目）。不过实体规整需要一些预先定义的别名，早前作者根据自己的知识预先定义了一些。不过现在[HarvestText](https://github.com/blmoistawinde/HarvestText) V0.7中添加的entity_discovery的API现在可以一定程度上自动化地发现一些这样的别名，详见相关示例。
