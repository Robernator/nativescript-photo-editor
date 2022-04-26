import { ImageSource } from '@nativescript/core';
import { EditPhotoOptions, PhotoEditorBase } from './common';

@ObjC("PhotoEditorViewController")
export class MyPhotoEditorViewController {
    private _bundle: NSBundle;
    public editorController: PhotoEditorViewController;
    constructor() {
        this._bundle = NSBundle.bundleForClass(PhotoEditorViewController.class());
        this.editorController = PhotoEditorViewController.alloc().initWithNibNameBundle("PhotoEditorViewController", this._bundle);
    }
}

export class PhotoEditor implements PhotoEditorBase {

    constructor() {

    }

    public editPhoto(options: EditPhotoOptions): Promise<ImageSource> {
        const viewController = new MyPhotoEditorViewController().editorController;
        
        throw new Error('Method not implemented.');
    }
    
}
