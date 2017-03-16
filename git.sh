
git st
time=`date +'%F %T'`
txt=${time},msg:$1
echo $txt
git add .;git commit -m"'${txt}'";
#git push origin --all
git pum
