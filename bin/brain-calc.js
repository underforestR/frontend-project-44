#!/usr/bin/env node
import getUserName from '../src/cli.js';
import getCalc from '../src/brain-calc-cod.js';

const name = getUserName();
getCalc(name);
