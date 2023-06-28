// This file is created by egg-ts-helper@1.34.3
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportEpic = require('../../../app/controller/epic');
import ExportKanban = require('../../../app/controller/kanban');
import ExportLogin = require('../../../app/controller/login');
import ExportOrganization = require('../../../app/controller/organization');
import ExportProjects = require('../../../app/controller/projects');
import ExportTask = require('../../../app/controller/task');
import ExportUser = require('../../../app/controller/user');

declare module 'egg' {
  interface IController {
    epic: ExportEpic;
    kanban: ExportKanban;
    login: ExportLogin;
    organization: ExportOrganization;
    projects: ExportProjects;
    task: ExportTask;
    user: ExportUser;
  }
}
