'use strict';

import { Model } from './Model';

class UserModel extends Model {
    protected ddbTable = 'xeleia.users';

    public uuid: string;
    public email: string;
    public handler: string;
    public bookmarkedTables: string[];
}
