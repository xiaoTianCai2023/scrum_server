// This file is created by egg-ts-helper@1.34.3
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
type AnyClass = new (...args: any[]) => any;
type AnyFunc<T = any> = (...args: any[]) => T;
type CanExportFunc = AnyFunc<Promise<any>> | AnyFunc<IterableIterator<any>>;
type AutoInstanceType<T, U = T extends CanExportFunc ? T : T extends AnyFunc ? ReturnType<T> : T> = U extends AnyClass ? InstanceType<U> : U;
import ExportEpic = require('../../../app/service/epic');
import ExportKanban = require('../../../app/service/kanban');
import ExportOrganization = require('../../../app/service/organization');
import ExportProject = require('../../../app/service/project');
import ExportTask = require('../../../app/service/task');
import ExportUser = require('../../../app/service/user');

declare module 'egg' {
  interface IService {
    epic: AutoInstanceType<typeof ExportEpic>;
    kanban: AutoInstanceType<typeof ExportKanban>;
    organization: AutoInstanceType<typeof ExportOrganization>;
    project: AutoInstanceType<typeof ExportProject>;
    task: AutoInstanceType<typeof ExportTask>;
    user: AutoInstanceType<typeof ExportUser>;
  }
}
