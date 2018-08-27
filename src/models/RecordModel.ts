'use strict';

import {Model} from './Model';

class RecordModel extends Model {
    protected ddbTable = 'xeleia.records';

    public table: string;
    public pk: string;
    public data: {[key: string]: string};
}
