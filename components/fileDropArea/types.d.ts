export declare const MIME_TYPES: {
    readonly png: "image/png";
    readonly jpeg: "image/jpeg";
    readonly gif: "image/gif";
    readonly svg: "image/svg+xml";
    readonly webp: "image/webp";
    readonly pdf: "application/pdf";
    readonly doc: "application/msword";
    readonly docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
    readonly xls: "application/vnd.ms-excel";
    readonly xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    readonly csv: "text/csv";
    readonly txt: "text/plain";
    readonly zip: "application/zip";
    readonly mp4: "video/mp4";
    readonly mov: "video/quicktime";
    readonly avi: "video/x-msvideo";
    readonly xml: "application/xml";
    readonly html: "text/html";
    readonly javascript: "application/javascript";
    readonly json: "application/json";
    readonly css: "text/css";
    readonly php: "application/x-httpd-php";
    readonly har: "application/json";
    readonly rar: "application/vnd.rar";
    readonly tgz: "application/gzip";
    readonly taz: "application/x-compress";
    readonly tar: "application/x-tar";
    readonly gzip: "application/gzip";
    readonly plain: "text/plain";
    readonly image: "image/*";
    readonly jar: "application/java-archive";
    readonly gtar: "application/x-gtar";
    readonly kml: "application/vnd.google-earth.kml+xml";
};
export type MimeType = (typeof MIME_TYPES)[keyof typeof MIME_TYPES];
export declare enum FileValidationError {
    INCORRECT_FILE_SIZE = "INCORRECT_FILE_SIZE",
    INCORRECT_FILE_FORMAT = "INCORRECT_FILE_FORMAT"
}
export interface FileValidationMessages {
    incorrectFileSize: string;
    incorrectFileFormat: string;
}
export interface FileValidationOptions {
    acceptFileMimeTypes: MimeType[];
    maxFileSize: number;
}
export interface FileWithValidation {
    file: File;
    validationErrors: FileValidationError[];
    customErrorMessage?: string;
}
export interface FileDropAreaBaseConfig extends FileValidationOptions {
    messages: FileValidationMessages;
    isMultipleFiles?: boolean;
    isDisabled?: boolean;
}
