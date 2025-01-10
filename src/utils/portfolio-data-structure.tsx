interface CloudinaryResource {
  public_id: string;
  width: number;
  height: number;
  folder: string;
  url: string;
  context?: {
    custom?: {
      alt?: string;
      caption?: string;
    };
  };
}

interface Picture {
  fileName: string;
  url: string;
  public_id: string;
  longDescription: string | null;
  shortDescription: string | null;
  width: number;
  height: number;
}

interface FolderStructure {
  [key: string]: FolderStructure | { pictures?: Picture[] };
}

export const getDataStructure = (cloudinaryResponse: {
  resources: CloudinaryResource[];
}): FolderStructure => {
  const portfolioData: FolderStructure = {};

  cloudinaryResponse.resources.forEach((item) => {
    const { public_id, width, height, folder, url, context } = item;

    const fileName = public_id.split("/").pop() || "";

    let longDescription: string | null = null;
    let shortDescription: string | null = null;

    if (context?.custom) {
      longDescription = context.custom.alt || null;
      shortDescription = context.custom.caption || null;
    }

    const folders = folder.split("/");

    let currentLevel = portfolioData;

    folders.forEach((folderName, index) => {
      // Check if a folderName exist inside currentLevel. If it exists do nothing and keep it as it is. If it doesn't, initialize it as an empty object.
      currentLevel[folderName] = currentLevel[folderName] || {};

      // This checks whether the current folder in the iteration is the last folder in the hierarchy for the current resource.
      if (index === folders.length - 1) {
        const folderNode = currentLevel[folderName] as { pictures?: Picture[] };
        folderNode.pictures = folderNode.pictures || [];
        folderNode.pictures.push({
          fileName,
          url,
          public_id,
          longDescription,
          shortDescription,
          width,
          height,
        });
      }
      currentLevel = currentLevel[folderName] as FolderStructure;
    });
  });

  return portfolioData;
};
