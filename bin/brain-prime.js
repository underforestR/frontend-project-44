#!/usr/bin/env node
import getUserName from '../src/cli.js';
import getEazyNumber from '../src/brain-prime-cod.js';

const name = getUserName();
getEazyNumber(name);
