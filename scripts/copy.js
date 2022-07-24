#! /usr/bin/env node

const env = require("dotenv");
const { exec } = require("child_process");

env.config();

const source = `./dist/index.css`;
const vault = `./example-vault`;
const target = `${vault}/.obsidian/themes/plain-theme.css`;

const command = `cp ${source} ${target}`;

exec(command);
console.log(`✅ Copied theme to ${vault}`);
