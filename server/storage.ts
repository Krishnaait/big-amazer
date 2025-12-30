// Storage functions removed - not implemented for standalone deployment
// For file storage, use AWS S3 directly or another cloud storage provider

export async function storagePut(
  relKey: string,
  data: Buffer | Uint8Array | string,
  contentType = "application/octet-stream"
): Promise<{ key: string; url: string }> {
  throw new Error("Storage functions not implemented. Please configure AWS S3 or another storage provider.");
}

export async function storageGet(relKey: string): Promise<{ key: string; url: string }> {
  throw new Error("Storage functions not implemented. Please configure AWS S3 or another storage provider.");
}
