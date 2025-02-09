import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabaseCultura } from "../video-database-cultura";

export default async function videoGalleries({ params, setIsVisible }) {
  const par = await params;
  const categoriesFromPath = await par.categories;

  let currentElement = "";

  videoDatabaseCultura.forEach((element) => {
    if (element.link.split("/").slice(1)[0] == params.video) {
      currentElement = element;
    }
  });

  console.log("current " + currentElement);

  //   console.log(currentElement);
  //   console.log(params.video);
  //   console.log(videoDatabaseCultura[2].link);
  //   console.log(videoDatabaseCultura[2].link == params.video);

  return (
    <VideoGallery
      key={currentElement.title}
      videoLink={currentElement.videoLink}
      categoriesFromPath={categoriesFromPath}
      title={currentElement.title}
      path={categoriesFromPath}
      shortDescription={currentElement.shortDescription}
      longDescription={currentElement.description}
    />
  );
}
