import fs from 'fs';

export const deleteFile = async (filename: string) => {
  // stat = verify if file exists
  try {
    await fs.promises.stat(filename)
  } catch {
    return
  }
  // unlink = remove file
  await fs.promises.unlink(filename);
}
