#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var program = new commander_1.Command();
// commands
var compile_1 = require("./cli/compile");
// commands
program.command('compile')
    .description('Converts the files in the input folder into a single file output.')
    .requiredOption('-c,--config <char>', 'config file.')
    .option('-w, --watch', 'Automatically saves changes.')
    .action(compile_1.compile);
program.parse();
