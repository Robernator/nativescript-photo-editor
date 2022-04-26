import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedNativescriptPhotoEditor } from '@demo/shared';
import { } from '@robernator/nativescript-photo-editor';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedNativescriptPhotoEditor {
	
}
