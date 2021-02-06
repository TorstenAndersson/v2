import os

for fileName in os.listdir():
    #print(fileName)
    #print(file[:-5])
    if fileName[-5:] == ".html":
        #print(open(file, "r").read())
        pass
    if fileName.find(".") == -1:
        for dirFileName in os.listdir("./" + fileName):
            if dirFileName[-5:] == ".html":
                print(dirFileName)

os.system("git add -- . ':!update.py', ':!./.vscode/*'")
os.system("git commit -m 'added something new!'")
os.system("git push")