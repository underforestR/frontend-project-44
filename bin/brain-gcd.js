#!/usr/bin/env node
import getUserName from '../src/cli.js';
import getGcd from '../src/brain-gcd-cod.js';

const name = getUserName();
getGcd(name);
