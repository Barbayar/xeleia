'use strict';

import { Model } from './Model';

export enum TableUserRole {
    OWNER = 'OWNER',
    EDITOR = 'EDITOR',
}

export class TableColumn {
    public name: string;
    public regex: string;
    public isPrimeKey: boolean;
    public isMultiLine: boolean;
}

export class TableModel extends Model {
    protected ddbTable = 'xeleia.tables';

    public uuid: string;
    public name: string;
    public owner: string;
    public columns: TableColumn[];
    public users: {[key: string]: TableUserRole};
    public pendingUsers: string[];
}
