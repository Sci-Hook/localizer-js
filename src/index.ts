#! /usr/bin/env node

import { Command } from 'commander';
const program = new Command();

// commands
import {compile} from './cli/compile';
// commands

program.command('compile')
    .description('Converts the files in the input folder into a single file output.')
    .requiredOption('-c,--config <char>', 'config file.')
    .action(compile);

program.parse();
