#!/usr/bin/env node
import { getUserName } from "../src/cli.js";
import { getAnswer } from "../src/brain-even-cod.js";

const name = getUserName();
getAnswer(name);
