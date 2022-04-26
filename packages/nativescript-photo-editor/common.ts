import { ImageSource } from '@nativescript/core';
export const enum PhotoEditorControl {
    Crop = 0,
    // Sticker = 1,
    Draw = 2,
    Text = 3,
    // Save = 4,
    // Share = 5,
    Clear = 6,
}

export interface EditPhotoOptions {
    imageSource: ImageSource;
    hiddenControls?: PhotoEditorControl[];
}

export class PhotoEditorBase {
    public editPhoto(options: EditPhotoOptions): Promise<ImageSource> {
        return null;
    }
}
