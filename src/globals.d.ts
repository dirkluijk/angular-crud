
/// <reference path="../typings/angular-ui-router/angular-ui-router.d.ts" />

declare module 'crud-app' {
    export type IPerson = app.crud.IPerson;
    export type ICrudParams = app.crud.ICrudParams;
}

declare namespace app.crud {
    interface IPerson {
        id: number;
        name: string;
    }

    interface ICrudParams extends angular.ui.IStateParamsService {
        id: number;
    }
}

declare var require: {
    (path: string): string;
};