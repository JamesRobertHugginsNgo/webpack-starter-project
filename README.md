# Webpack Starter Project

By James Robert Huggins Ngo

Contains the essentials for starting a webpack based web application project.

## Usage

### 1. Git Clone

Clone this repo creating a local copy.

```
git clone https://github.com/JamesRobertHugginsNgo/webpack-starter-project.git NEW-PROJECT-NAME
```

By assigning a new directory name, NEW-PROJECT-NAME, we are reusing all the files in this repo for our new project.

### 2. Delete Git

Remove git repo metadata from the project folder.

```
cd NEW-PROJECT-NAME

rm -rf .git
```

Folder files are no longer tracked by the original git repository. This is now a regular folder.

### 3. Git Init (Optional)

Its a good idea to create a local git repository for your new project. Skip to step 5 if you feel otherwise.

```
git init

git add .

git commit -m "First Commit"
```

### 4. Git Add Remote Origin (Optional)

Its a good idea to create a remote git repository for your new project. Skip to step 5 if you feel otherwise.

```
git remote add origin https://github.com/JamesRobertHugginsNgo/NEW-PROJECT-NAME.git

git push -u origin master
```

### 5. NPM Re Init

The package.json file is no longer accurate. Open package.json and remove the following entries.

```
  "name": "webpack-starter-project",
```
```
  "repository": {
    "type": "git",
    "url": "git+https://github.com/JamesRobertHugginsNgo/webpack-starter-project.git"
},
```

```
  "bugs": {
    "url": "https://github.com/JamesRobertHugginsNgo/webpack-starter-project/issues"
  },
```
```
  "homepage": "https://github.com/JamesRobertHugginsNgo/webpack-starter-project#readme",
```

Next initialize NPM.

```
npm init -y
```

An additional step is to reorganize the package.json file to have the entries in the same order as the original package.json.

### 6. Install Dependencies

```
npm install
```

### 7. Build Project

You can build your project using the NPM run scripts.

```
npm run build
```

```
npm run serve
```

### 8. Develop

Do your thing.

### 9. Enjoy

Be happy.
