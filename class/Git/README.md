# 安装
1. 下载地址 https://git-scm.com/downloads

### 远端
1. hithub https://github.com/  开源(分享代码)
2. gitlab (需要自己搭建环境)  私有

### 创建git仓库
1. Public 开源
2. Private 私有

### 使用git 
1. 直接在本地初始化项目 开始开发项目
2. 直接lone远程仓库开始开发项目

### 1s 01
1. init
- 用于初始化本地项目
```
git init
```
2. add
- 用于添加现有项目的文件添加至本地仓库
```
git add .
```
3. commit
- 添加暂存版本(复制一个备份)
```
git commit -m "first commit"
```
4. git branch <分支名称> 创建分支
- git branch 查看分支
- git branch -a 查看所有分支(包含远程分支)
- git branch -r 查看所有远程分支(不包含本地分支)
- git branch -d <分支名称> 删除本地分支
```
git branch <分支名称>
```
5. git checkout 切换分支
```
git checkout <分支名称>
```
6. git merge 合并分支
- git merge <合并分支名称>
```
git merge dev
```
7. remote add
- remote add 用于添加远程仓库地址到本地
```
git remote add <别名> <远程仓库地址>
```
8. push
- 用于把本地仓库的代码同步到远程仓库
```
git push <别名> <分支>

git push github master

// 也可以使用 -u 绑定到push命令上
git push -u github master
```
9. clone
- 克隆远端项目到本地
```
git clone https://github.com/lz960514/lemmon-04-07.git
```
10. 忽略文件上传
- 可以在项目根目录或文件夹创建 .gitignore 文件 把需要忽略的文件或文件夹添加进去
11. pull
- 拉去远程文件更新
```
git pull
```
- git pull (仓库别名) (分支名称)  拉取其它分支(拉取时必须切换到当前分支下),通过clone 的仓库别名为 origin
12. git fetch
```
git fetch <仓库别名> <要下载的分支>:<要下载到那个分支>

git fetch origin dev:dev
```
13. gitlab生成SHH密钥
- 邮箱要和git config user.email 一致
```
ssh-keygen -t rsa -C "2411509324@qq.com"
```
**交互步骤**
1. 输入 ssh key文件名称
2. 输入密码 (密码用于提交代码时使用)
3. 重复密码