import type { Meta, StoryObj } from '@storybook/react';

import { AttachedFile } from './attachedFile';

const meta: Meta<typeof AttachedFile> = {
  title: 'Data display/AttachedFile',
  component: AttachedFile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof AttachedFile>;

export const Default = {
  args: {
    fileName: 'document.pdf',
    size: 2.5,
    onRemove: () => {},
    onDownload: () => {},
  },
} satisfies Story;

export const WithoutRemove = {
  args: {
    fileName: 'report.pdf',
    size: 1.2,
    onDownload: () => {},
    onRemove: undefined,
  },
} satisfies Story;

export const FullWidth = {
  render: () => (
    <div style={{ width: '250px' }}>
      <AttachedFile
        fileName="very-long-file-name-that-should-be-truncated.pdf"
        size={1.5}
        onRemove={() => {}}
        onDownload={() => {}}
      />
    </div>
  ),
} satisfies Story;

export const Uploading = {
  args: {
    fileName: 'uploading-file.pdf',
    size: 3.2,
    isUploading: true,
    uploadingProgress: 65,
    onRemove: () => {},
    onDownload: () => {},
  },
} satisfies Story;

export const UploadFailedCustomMessage = {
  args: {
    fileName: 'custom-error.pdf',
    size: 2.3,
    isUploadFailed: true,
    uploadFailedMessage: 'File too large',
    onRemove: () => {},
    onDownload: () => {},
  },
} satisfies Story;

export const WithPreview = {
  args: {
    fileName: 'Picture.png',
    size: 1.2,
    textPosition: 'bottom',
    withPreview: true,
  },
} satisfies Story;

export const DifferentFileTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <AttachedFile
        fileName="spreadsheet.xlsx"
        size={1.5}
        onRemove={() => {}}
        onDownload={() => {}}
      />
      <AttachedFile fileName="data.csv" size={0.8} onRemove={() => {}} onDownload={() => {}} />
      <AttachedFile fileName="image.jpg" size={2.1} onRemove={() => {}} onDownload={() => {}} />
      <AttachedFile fileName="library.jar" size={15.2} onRemove={() => {}} onDownload={() => {}} />
      <AttachedFile fileName="unknown.xyz" size={0.5} onRemove={() => {}} onDownload={() => {}} />
      <AttachedFile
        fileName="123_some_Long_picture_file_name.jpg"
        size={2.1}
        textPosition="bottom"
        withPreview
      />
      <AttachedFile fileName="Data.csv" size={2.1} textPosition="bottom" />
    </div>
  ),
};
