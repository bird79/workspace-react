### git init@
```
git init
git add .
git commit -m "first commit"
git remote add origin https://github.com/<GitHub아이디>/<저장소이름>.git
get remote add origin git@github.com:bird79/test.git
git push -u origin master
```

### git commit
```
git add .
git commit -m "message"
git push -u origin master
```

### [git ssh](https://hojunpark.wordpress.com/2015/01/06/%EA%B9%83%ED%97%99github%EC%97%90-ssh-%ED%82%A4-%EB%A7%8C%EB%93%A4%EA%B3%A0-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B8%B0/)
```
ssh-keygen -t rsa -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
<GitHub 설정 후>
ssh -T git@github.com
```
GitHub > setting > ssh key



### create-react-app
```
create-react-app <project>
cd <project>
vi .env
```
```
#########
PORT=8080
#########
```
```
npm start
```