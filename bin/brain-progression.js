#!/usr/bin/env node
import getUserName from '../src/cli.js';
import getProgression from '../src/brain-progression-cod.js';

const name = getUserName();
getProgression(name);
