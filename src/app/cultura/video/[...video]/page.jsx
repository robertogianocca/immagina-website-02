import VideoGallery from "@/components/Portfolio/VideoGallery/VideoGallery";
import { videoDatabaseCultura } from "../video-database-cultura";

export default function videoGalleries({ params, setIsVisible }) {
  const categoriesFromPath = params.categories;

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
