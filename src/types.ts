import { DataType, NumberDataType, DateDataType } from './datatypes';
import { Schema } from './schema';

export type GoogleSheetsAuth = {
    clientEmail: string;
    privateKey: string;
};

export type SheetConfig = {
    spreadsheetId: string;
    auth: GoogleSheetsAuth;
};

export interface BaseColumnDefinition {
    unique?: boolean;
    default?: any;
}

export interface NumberColumnDefinition extends BaseColumnDefinition {
    type: NumberDataType;
    autoIncrement?: boolean;
}

export interface DateColumnDefinition extends BaseColumnDefinition {
    type: DateDataType;
    autoIncrement?: never;
}

export interface OtherColumnDefinition extends BaseColumnDefinition {
    type: DataType;
    autoIncrement?: never;
}

export type ColumnDefinition = NumberColumnDefinition | DateColumnDefinition | OtherColumnDefinition;

export type SchemaType = ColumnDefinition | DataType | NumberDataType | DateDataType;

export interface SchemaDefinition {
    [key: string]: SchemaType;
}

export interface RelationConfig {
    type: 'hasOne' | 'hasMany' | 'belongsTo';
    targetModel: any;
    foreignKey: string;
    localKey: string;
}

export interface ModelConfig {
    sheetName: string;
    schema: Schema;
    relations?: Record<string, RelationConfig>;
}
