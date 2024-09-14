# project Setup

## project initialization

```bash
npm init -y
```

## Install dependencies

```bash
npm i @sap/cds
```

## install dev dependencies

```bash
npm i -D @sap/cds-dk
```

## Add scripts to package.json

```json
"scripts": {
    "start": "cds run",
    "build": "cds build"
}
```

## create mta.yaml file


```bash
touch mta.yaml
```

# cds 

## add postgres

```bash
cds add postgres 
```

## add postgres to package.json

```json
"cds":{
    "requires":{
      "db":"postgres"
    }
  }
```

## create db folder and add atleast one entity

```bash
mkdir db
```

## create db/schema.cds

```bash
touch db/user.cds
```

# test  

## create test folder and add atleast one test

```bash
npx cds watch
```

# build and deploy commands

## build

```bash
npx cds build
```

## deploy

```bash
npx cds deploy 
```


