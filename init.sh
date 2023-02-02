#!/usr/bin/env bash
#/bin/bash

function initBasicProject() {
    echo "start copy the files."
    # copy template folder
    cd $TEMPLATE_PATH
    createFolder $PROJECT_PATH
    copyFiles
    echo "project initialization is done"
}

function copyFiles(){
    cp -rf `find ./ -maxdepth 1 | grep -vE 'node_modules|example|init.sh|.git$|package\..+json|./$' | xargs` $PROJECT_PATH/$1
}

function createFolder() {
    if [ ! -d $1 ];
        then
            echo "create folder $1"
            mkdir -p $1 
        else
            echo "Folder $1 exists"
    fi
}

i=0
function collectFiles() {
    for file in $(ls $1)
    do 
        if [[ $file != *example* ]] && [[ $file != *node_modules* ]]; then
            if [[ -d $1"/"${file} ]];then
                collectFiles $1"/"${file}
            else 
                f_list[i]=$1"/"${file}
                let i++
            fi
        fi
    done
}

function injectProjectVariables() {
    echo "start injecting variables..."
    collectFiles $1
    injectVariableIntoFile
    echo "variables injection is done"
}

function injectVariableIntoFile() {
    for f in ${f_list[*]}
    do 
        sed -i 's+$(DOMAIN)+'$domain'+g' $f
        sed -i 's+$(PROJECT_NAME)+'$project'+g' $f
        sed -i 's+$(NAMESPACE)+'$namespace'+g' $f
    done
}

### init project
read -p "Please input your project name: " project
read -p "Please input your project domain: " domain
read -p "Please input openshift namespace(eg: cross-channel): " namespace

TEMPLATE_PATH=`pwd`
PROJECT_PATH=$(dirname `pwd`)/$project

if [[ -z $namespace ]]; then
    namespace='cross-channel'
fi

### confirm info
echo
echo "Please check following information: "
echo
echo "Project Name: $project"
echo "Domain: $domain"
echo "Namespace Name: $namespace"
echo "Template Path: $TEMPLATE_PATH"
echo "Project Path: $PROJECT_PATH"
echo

read -p "is it ok to use these info to create a new project?(Y/N)" readyToBuild

if [[ $readyToBuild =~ ^[Yy]?$ ]]; then
    echo "Start building..."
    initBasicProject
    injectProjectVariables $PROJECT_PATH
    echo "Congratulation, your project is already created!!!"
else
    echo "Ok, bye"
fi

read -p "press enter to exist. " end