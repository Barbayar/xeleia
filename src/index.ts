'use strict';

import express from "express";
import { TableController } from "./controller/TableController";

const app: express.Application = express();

app.get('/', TableController.createTable);
