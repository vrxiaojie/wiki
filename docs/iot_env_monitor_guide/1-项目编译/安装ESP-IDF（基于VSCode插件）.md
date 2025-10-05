---
order: 4
---

# 安装ESP-IDF（基于VSCode插件）
本部分参考了[官方文档](https://docs.espressif.com/projects/vscode-esp-idf-extension/zh_CN/latest/installation.html)
## 安装VSCode
请前去[VSCode官网下载](https://code.visualstudio.com/)并安装它，安装过程非常简单，无需额外配置。

## 安装VSCode插件
打开VSCode，前往菜单栏 view > extensions，或者使用快捷键 Ctrl+Shift+X打开扩展栏。

安装下图中 `WSL`、`Remote Development` 和 `ESP-IDF` 扩展。

![picture 0](images/20251005142651.png)  

![picture 1](images/20251005142714.png)  

![picture 2](images/20251005142826.png)  

## 连接wsl
点击左下角的连接按钮，在弹出的窗口中选择连接到wsl
![picture 3](images/20251005143210.png)  

VSCode会自动创建一个新的页面，连接成功后左下角会显示 `WSL:Ubuntu-22.04`

## 安装并配置ESP-IDF插件
打开扩展窗口，将esp-idf插件安装在wsl中

![picture 4](images/20251005143401.png)  

点击左侧栏的`ESP-IDF图标`，选择`Advanced`下的 `Configure ESP-IDF Extension`

![picture 5](images/20251005143632.png)  

在接下来的页面点击`EXPRESS`快速安装

![picture 6](images/20251005144818.png)  

勾选`Show all ESP-IDF tags`，这样能看到所有的tag，我们选择`v5.5`，然后点击install

![picture 8](images/20251005145711.png)  

然后插件就会自动下载安装v5.5版本的ESP-IDF，如下图

![picture 9](images/20251005151345.png)  
