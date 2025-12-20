import { Page } from '@playwright/test'
import { Logger } from 'winston';

let page:Page;
let logger:Logger;

export const pageFixture = {
    page: undefined as Page,
    logger: undefined as Logger
}