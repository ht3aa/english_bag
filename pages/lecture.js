import lectureStyles from "../styles/Lecture.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
export default function Lecture() {
  const router = useRouter();
  const imgs = router.query.imgs.split(",");
  const { audio, file } = router.query;

  const [showAudioControl, setShowAudioControl] = useState(false);
  return (
    <div className={lectureStyles.container}>
      <button onClick={() => router.push("/")} className="backButton">
        <svg style={{ width: "34px", height: "34px" }} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"
          />
        </svg>
      </button>
      <button
        onClick={() => {
          setShowAudioControl(!showAudioControl);
        }}
        className="audioButton"
      >
        <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
          <path fill="currentColor" d="M8,5.14V19.14L19,12.14L8,5.14Z" />
        </svg>
      </button>
      {showAudioControl && (
        <audio controls>
          <source src={`/files/${audio}`} type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      )}

      <section className={lectureStyles.fileSection}>
        {imgs.map((img, index) => {
          return (
            <Image
              src={`/files/${imgs[index]}`}
              key={img}
              width="816"
              height="1056"
              alt="page"
            />
          );
        })}
      </section>
      <a href={`/files/${file}`} download>
        <button className="downloadBtn">
          <svg style={{ width: "24px", height: "24px" }} viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z"
            />
          </svg>
        </button>
      </a>
    </div>
  );
}
