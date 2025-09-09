import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { AddCsvIcon, AddImageIcon } from '@components/icons';
import { FieldText } from '@components/fieldText';

import { FileDropArea } from './fileDropArea';
import { FileWithValidation, MIME_TYPES } from './types';
import { AttachmentFile } from './attachedFilesList';

const meta: Meta<typeof FileDropArea> = {
  title: 'File Upload/FileDropArea',
  component: FileDropArea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onFilesAdded: (files) => {
      console.log('Files added:', files);
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'overlay'],
    },
    maxFileSize: {
      control: { type: 'number', min: 1024, step: 1024 },
    },
    isMultipleFiles: {
      control: 'boolean',
    },
    isDisabled: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileDropArea>;

const wrapperStyle = {
  width: 400,
  height: 150,
};

const FILE_SIZE_5_MB_BYTES = 5 * 1024 * 1024;
const FILE_SIZE_10_MB_BYTES = 10 * 1024 * 1024;

export const Default: Story = {
  args: {
    messages: {
      incorrectFileSize: 'File size exceeds the limit',
      incorrectFileFormat: 'File format is not supported',
    },
    children: (
      <div style={wrapperStyle}>
        <FileDropArea.DropZone
          icon={<AddCsvIcon />}
          description={
            <>
              Drop your files here or{' '}
              <FileDropArea.BrowseButton>click to browse</FileDropArea.BrowseButton>
            </>
          }
          fileSizeMessage="Supports all file types"
        />
        <FileDropArea.Error />
      </div>
    ),
  },
};

export const Images: Story = {
  args: {
    messages: {
      incorrectFileSize: 'File size exceeds the limit',
      incorrectFileFormat: 'File format is not supported',
    },
    acceptFileMimeTypes: [MIME_TYPES.png, MIME_TYPES.jpeg],
    maxFileSize: FILE_SIZE_5_MB_BYTES,
    children: (
      <div style={wrapperStyle}>
        <FileDropArea.DropZone
          icon={<AddImageIcon />}
          description={
            <>
              Drop .JPEG, .JPG or .PNG file here or
              <FileDropArea.BrowseButton>Browse</FileDropArea.BrowseButton> to attach
            </>
          }
          fileSizeMessage="File size should be up to 128 MB"
        />
        <FileDropArea.Error />
      </div>
    ),
  },
};

export const WithFileList = () => {
  const [attachedFiles, setAttachedFiles] = useState<AttachmentFile[]>([]);

  const handleFilesAdded = (filesWithValidation: FileWithValidation[]) => {
    console.log('Files added:', filesWithValidation);

    const newFiles: AttachmentFile[] = filesWithValidation.map((fileWithValidation) => ({
      id: Date.now() + Math.random().toString(),
      fileName: fileWithValidation.file.name,
      file: fileWithValidation.file,
      size: Math.round((fileWithValidation.file.size / (1024 * 1024)) * 100) / 100,
      isUploading: false,
      validationErrors: fileWithValidation.validationErrors,
    }));
    setAttachedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (fileId: string) => {
    setAttachedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  return (
    <div style={{ width: '600px', height: '150px', marginBottom: 20 }}>
      <FileDropArea
        maxFileSize={FILE_SIZE_5_MB_BYTES}
        acceptFileMimeTypes={[MIME_TYPES.png, MIME_TYPES.jpeg]}
        messages={{
          incorrectFileSize: 'File must be smaller than 5MB',
          incorrectFileFormat: 'Only PNG, JPG, and JPEG files are allowed',
        }}
        onFilesAdded={handleFilesAdded}
      >
        <FileDropArea.DropZone
          icon={<AddCsvIcon />}
          description={
            <>
              Drop files here or <FileDropArea.BrowseButton>browse files</FileDropArea.BrowseButton>
            </>
          }
          fileSizeMessage="Images only, max 5MB"
        />
        <FileDropArea.AttachedFilesList files={attachedFiles} onRemoveFile={handleRemoveFile} />
      </FileDropArea>
    </div>
  );
};

export const OverlayVariant = () => {
  const [attachedFiles, setAttachedFiles] = useState<AttachmentFile[]>([]);

  const handleFilesAdded = (files: FileWithValidation[]) => {
    console.log('Files added:', files);

    const newFiles: AttachmentFile[] = files.map((fileWithValidation) => ({
      id: Date.now() + Math.random().toString(),
      fileName: fileWithValidation.file.name,
      file: fileWithValidation.file,
      size: Math.round((fileWithValidation.file.size / (1024 * 1024)) * 100) / 100,
      isUploading: false,
      validationErrors: fileWithValidation.validationErrors,
    }));

    setAttachedFiles((prev) => [...prev, ...newFiles]);
  };

  const handleRemoveFile = (fileId: string) => {
    setAttachedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  return (
    <div style={{ width: '500px', height: '300px' }}>
      <h3>Drag over files to see the overlay variant</h3>
      <FileDropArea
        acceptFileMimeTypes={[MIME_TYPES.jpeg, MIME_TYPES.png]}
        maxFileSize={FILE_SIZE_10_MB_BYTES}
        variant="overlay"
        onFilesAdded={handleFilesAdded}
        messages={{
          incorrectFileSize: 'File is too big',
          incorrectFileFormat: 'Wrong file format',
        }}
      >
        <div
          style={{
            padding: '20px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            height: '100%',
          }}
        >
          <FieldText label="Field" placeholder="Enter field text..." />
          <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <FileDropArea.BrowseButton>+ Add files</FileDropArea.BrowseButton>
          </div>
          <FileDropArea.AttachedFilesList files={attachedFiles} onRemoveFile={handleRemoveFile} />
        </div>
        <FileDropArea.DropZone
          icon={<AddImageIcon />}
          description="Drop .JPEG, .JPG or .PNG file here to attach"
          fileSizeMessage="File size should be up to 10 MB"
        />
      </FileDropArea>
    </div>
  );
};
